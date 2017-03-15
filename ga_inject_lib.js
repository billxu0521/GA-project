/**
 * 預設GA_TRACE_CODE
 * @type String
 */
if (typeof(GA_TRACE_CODE) === "undefined") {
    GA_TRACE_CODE = "UA-89833109-1";
}

/**
 * 使用者ID的欄位 "dimension1"
 * @type String
 */
if (typeof(DIMENSION) === "undefined") {
    DIMENSION = "dimension1";
}

/**
 * 使用者ID的欄位 "dimension1"
 * 單位：秒
 * @type String
 */
if (typeof(SCROLL_SAVE_MIN_INTERVAL) === "undefined") {
    SCROLL_SAVE_MIN_INTERVAL = 3;
}

/**
 * 加上DEBUG的設定，以方便未來開關
 * @type Boolean
 * @author Pudding 20170203
 */ 
if (typeof(DEBUG) === "undefined") {
    DEBUG = true;
}

/**
 * 初始化載入
 */
if (DEBUG === true) {
    console.log("Google analytics injected.");
}

// -------------------------------------------------

/**
 * 初始化載入ga
 * @param {function} _callback
 * @returns {undefined}
 */
window.setup_ga = function (_callback) {
    $.getScript("https://www.google-analytics.com/analytics.js", function () {
        load_css(CSS);
        CUSTOM_USER_ID = get_user_id();
        ga('create', GA_TRACE_CODE, {'userId': CUSTOM_USER_ID});  
        ga('send', 'pageview');
        ga('require', 'displayfeatures');
        ga('set', 'userId', CUSTOM_USER_ID); // 使用已登入的 user_id 設定 User-ID。
        ga('set', 'dimension1', CUSTOM_USER_ID);
        
        setTimeout(function () {
            $(window).scroll();
        }, 100);
    
        if (typeof(_callback) === "function") {
            setTimeout(function () {
                _callback();
            }, 1000);
        }
    });
};

/**
 * 取得使用者ID資料
 * 
 * 如果window.name沒有資料，則會回傳anonymous
 * 不然會回傳window.name的資料
 * 
 * @returns {window.name|window.get_user_id|DOMString|String}
 */
var get_user_id = function(){
    if (window.name === null 
            || window.name === undefined 
            || window.name.trim() === ""){
      return "anonymous";
    } 
    else {
        return window.name;
    }    
};

/**
 * 將ID資訊記錄到視窗屬性中
 * @param {String} customUserId
 */
window.set_user_id = function (_customUserId){
    
    var date = new Date();
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    date = [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
    
    if (typeof(_customUserId) === "undefined") {
        _customUserId = get_user_id();
    }
    _customUserId = _customUserId.trim();
    _customUserId = _customUserId + "-" + date;
    
    if (DEBUG === true) {
      console.log("Set user id: " + _customUserId);
    } 
   
    window.name = _customUserId;
    
    ga('create', GA_TRACE_CODE, {'userId': _customUserId});
    ga('set', 'userId', _customUserId); // 使用已登入的 user_id 設定 User-ID。
    ga('set', DIMENSION, _customUserId); 
};

// -------------------------------------------------------------

/**
 * 偵測滑鼠移上去的事件
 * @param {String} _selector
 * @param {String} _event_type
 * @param {String|Function} _name
 */
window.mouse_over_event = function (_selector, _event_type, _name) {
    $(_selector).mouseover(function () {
        
        _name = _get_element_name($(this), _event_type, _name);
        
        if (DEBUG === true) {
            console.log([_event_type, _name, 'mouse_over']);        // 加上事件的程式碼  <這間要加上事件敘述
        } 
        ga("send", "event", _event_type, _name, 'mouse_over');   
    });
};

/**
 * 偵測滑鼠點擊的事件
 * @param {String} _selector
 * @param {String} _event_type
 * @param {String} _name
 */
window.mouse_click_event = function (_selector, _event_type, _name) {
     $(_selector).click(function () {
        _name = _get_element_name(this, _selector, _name);
        
        if (DEBUG === true){
            console.log([_event_type, _name, "mouse_click"]);        // 加上事件的程式碼 
        }
        ga("send", "event", _event_type, _name, 'mouse_click'); // @TODO ga("send", "event"...) 最後還要加上事件類型，像是"click"或"mouseover"
     });        
};

SCROLL_TIME = [];

/**
 * 偵測畫面捲動的事件
 * 可偵測物件是否出現在畫面中，並計算時間
 * @param {String} _selector
 * @param {String} _event_type
 * @param {String} _name
 */
window.mouse_scroll_event = function(_selector, _event_type, _name) {
    
    if ($(_selector).length === 0) {
        return;
    }
    
    var _id = SCROLL_TIME.length;
    SCROLL_TIME.push(false);
    
    // 捲動時偵測
    $(window).scroll(function() {
        var _obj = $(_selector),
            _height = _obj.height(),
            _scrollHeight = _obj.offset().top;
        var _winHeight = $(window).height();
        var _scrollVal = $(window).scrollTop();
        
        _name = _get_element_name(_obj, _selector, _name);
        
        var _scroll_in_view = ((_scrollVal + _winHeight) - _scrollHeight > 0 
                && _scrollVal < (_scrollHeight + _height));
        
        if (_scroll_in_view === false && SCROLL_TIME[_id] === false) {
            // 沒事
        }
        else if (_scroll_in_view === true && SCROLL_TIME[_id] === false) {
            // 進入了，開始記錄事件
            SCROLL_TIME[_id] = (new Date()).getTime();
            if (DEBUG === true){
                console.log([_event_type, _name, "進入 ", SCROLL_TIME[_id]]);
            }
        }
        else if (_scroll_in_view === true && SCROLL_TIME[_id] !== false) {
            // 沒事
        }
        else if (_scroll_in_view === false && SCROLL_TIME[_id] !== false) {
            // 離開了
            var _interval = (new Date()).getTime() - SCROLL_TIME[_id];
            var _durtime = Math.ceil((_interval/1000));
            if (_durtime > SCROLL_SAVE_MIN_INTERVAL) {
                if (DEBUG === true){
                    console.log([_event_type, _name, "離開", _durtime, "記錄"]);
                }
                ga("send", "event", _event_type, _name, "scroll_in", _durtime);
            }
            SCROLL_TIME[_id] = false;
        }
    });
};

// ------------------------------------

/**
 * 讀取CSS
 * @param {String} _css_url
 */
window.load_css = function (_css_url) {
    if (typeof(_css_url) !== "string") {
        return;
    }
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    //link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = _css_url;
    link.media = 'all';
    head.appendChild(link);
};

/**
 * 取得元素的可讀取元素
 * @param {String} _ele
 * @param {String} _event_type
 * @param {String} _name
 * @returns {String|get_element_name._name}
 */
var _get_element_name = function (_ele, _event_type, _name) {
    _ele = $(_ele);
    
    if (typeof(_name) === "string") {
        return _name;
    }
    else if (typeof(_name) === "function") {
        return _name(_ele);
    }
    
    try {
        if(_ele.attr("title")){
          _name = _ele.attr("title");
        } else if (_ele.text()) {
          _name = _ele.text(); 
        } else if (_ele.attr("alt")){
          _name = _ele.attr("alt");
        }else if (_ele.attr("src")){
          _name = _ele.attr("src"); 
        }else if (_ele.attr("data-src")){
          _name = _ele.attr("data-src");
        }else if (_ele.attr("className")){
          _name = _ele.attr("className");
        }
        else{
          _name = _event_type;
        }
    }
    catch (e) {}

    if (typeof(_name) === "string") {
        _name = _name.trim();
    }
    return _name;
};