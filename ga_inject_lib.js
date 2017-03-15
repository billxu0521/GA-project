
//GA_TRACE_CODE = "UA-89833109-1";

/**
 * 畫面讀取完成之後再來初始化
 * 而且避免變數被宣告在全域範圍，跟其他程式碼相互衝突
 * @author Pudding 20170203
 */
/**
 * 加上DEBUG的設定，以方便未來開關
 * @type Boolean
 * @author Pudding 20170203
 */ 
DEBUG = true;
    
//if (DEBUG === true) {    
    //console.log("GaEventScript20170127@billxu");//初始化確認有載入腳本
//}

/**
 * @TODO 要改成從window.name讀取
 * 1. 確認window.name是否有資料
 * 2. 如果沒有資料，則先給與預設值 "anonymity"
 * 3. 使用一種特殊的方法來設定 customUserId
 * @type String|userIdInput
 */
var CUSTOM_USER_ID = "";  //輸入ID

/********
埋入GA追蹤資訊
********/
(function(i,s,o,g,r,a,m){
     i['GoogleAnalyticsObject']=r;  
     i[r]=i[r]||function(){  
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();  
          a=s.createElement(o),  m=s.getElementsByTagName(o)[0];
          a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

if (DEBUG === true) {
    // @TODO 把所有console.log()的事件前面都加上DEBUG判斷
    console.log("Google analytics injected.");
}


//這邊填入GA專案追蹤碼
window.setup_ga = function () {
    CUSTOM_USER_ID = get_user_id();
    ga('create', GA_TRACE_CODE, {'userId': CUSTOM_USER_ID});  
    ga('send', 'pageview');
    ga('require', 'displayfeatures');
    ga('set', 'userId', CUSTOM_USER_ID); // 使用已登入的 user_id 設定 User-ID。
    ga('set', 'dimension1', CUSTOM_USER_ID);
};



// ===================================================================
/**
 * 這邊放置各種偵測任務
 */
/*
function _setup_event(){
//var _setup_event = function () {
    //初始化UserID
    check_user_id();
    //inputUserIDDialog();

    //GL1-3 click
    //mouse_click_event('a[title="臺北旅遊網"]',"GL1-3");


    //GL1-4 導覽列 click
    //mouse_click_event("#btn-open-menu","GL1-4");

    //GL1-5 麵包屑/首頁 click
    mouse_scroll_event('.btn-more',"GL1-5");
    //GL1-6 click
    //mouse_click_event(".unit:eq(0)","GL1-6");
    //G1-7 click
    //mouse_click_event(".unit:eq(1)","GL1-7");
    //mouse_click_event(".unit:eq(2)","GL1-7");
    //mouse_click_event(".unit:eq(3)","GL1-7");

    //GL1-8 搜尋列 click
    //mouse_click_event('.btn-search-submit',"GL1-8");
    //mouse_click_event('.gsc-search-button',"GL1-8");


}  //var _setup_event = function () {
*/

/**
*
*檢查ID
*/
window.get_user_id = function(){
    //var name;
    if (window.name === null 
            || window.name === undefined 
            || window.name.trim() === ""){
        
      //save_user_id("anonymity");
      
      if (DEBUG === true) {
        console.log("Set Default UserID: anonymity");
      }
      //return false;
      return "anonymity";
    } 
    else {
        //window.name = CUSTOM_USER_ID;
        //var _name = window.name;
        //_name = _name.trim();
        //if (DEBUG === true) {
        //    console.log("UserID: " + _name);
        //}
        //return true;
        return window.name;
    }    
};

/**
 * 將ID資訊記錄到視窗屬性中
 * @param {String} customUserId
 * @ TODO _save_user_id寫法不能跟ga結合，請重新思考ga怎麼設定id再來重寫這個功能
 * 
 * @TODO 把function宣告方式全部改成
 * var _save_user_id = function (_customUserId) {
 *      // script
 * };
 */
window.set_user_id = function (_customUserId){
    //var _customUserId = customUserId;
    /*
    var _check_id = check_user_id();
    if (_check_id) {
        save_user_id(_customUserId);       
    }else {
      if (DEBUG === true) {
        console.log("UserID not set!");
      }    
    }
    */
   Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
  };

    var date = new Date();
    if (typeof(_customUserId) === "undefined") {
        _customUserId = get_user_id();
    }
    _customUserId = _customUserId.trim();
    _customUserId = _customUserId + "-" + date.yyyymmdd();
    window.name = _customUserId;
    
    ga('create', GA_TRACE_CODE, {'userId': _customUserId});
    ga('set', 'userId', _customUserId); // 使用已登入的 user_id 設定 User-ID。
    ga('set', 'dimension1', _customUserId); 
};
/*
window.save_user_id = function(_customUserId){
    
    ga('create', GA_TRACE_CODE, {'userId': _customUserId});
    ga('set', 'userId', _customUserId); // 使用已登入的 user_id 設定 User-ID。
    ga('set', 'dimension1', _customUserId); 
    
    CUSTOM_USER_ID = _customUserId;
    window.name = CUSTOM_USER_ID;
    if (DEBUG === true) {
      console.log("Set UserID;"+CUSTOM_USER_ID);
    }
};
*/

/**
 * @TODO 許多函式缺少說明
 */
/*
function inputUserIDDialog(){
     var _userIdInput = prompt("請輸入使用者名稱", "anonymity");
     if (_userIdInput !== null) {   
        CUSTOM_USER_ID = userIdInput;
        if (DEBUG === true) {
            console.log("Hello, " + CUSTOM_USER_ID);
        }
        _save_user_id(CUSTOM_USER_ID);
     }
}
*/

/**
 * 偵測滑鼠移上去的事件
 * /**
 *  * 偵測滑鼠滑到物件上，以滑進為段時間
 *  */
window.mouseover_event = function (_selector, _event_type) {
     $(_selector).mouseover(function () {
        
    var _name = new String;    
    if(this.title){
        _name = this.title ;
    }else{
        _name = _event_type;
    }
    if (DEBUG === true) {
        console.log(_event_type+","+_name+","+"mouse hover");        // 加上事件的程式碼  <這間要加上事件敘述
    } 
        ga("send", "event", _event_type, _name, 'mouseover');   
   });
};

/**
 * 偵測滑鼠點擊的事件
 * /**
 *  * 偵測滑鼠點擊物件
 *  */
window.mouse_click_event = function (_selector, _event_type) {
     $(_selector).click(function () {    
        
        var _name = new String;  
        if(this.title){
          _name = this.title ;
        } else if ($(this).text()) {
          _name = $(this).text(); 
        } else if (this.alt){
          _name = this.alt;
        }else if (this.src){
          _name = this.src; 
        }else if (this.data_src){
          _name = this.data_src;
        }else if (this.className){
          _name = this.className;
        }
        else{
          _name = _event_type;
        }
        if (DEBUG === true){
          console.log(_event_type+","+_name+","+"mouse click");        // 加上事件的程式碼 
        }
          ga("send", "event", _event_type, _name, 'click'); // @TODO ga("send", "event"...) 最後還要加上事件類型，像是"click"或"mouseover"
     });        
};

/**
 * 事件計時器
 * /**
 *  * 計時事件過程的時間
 *  */

//計時器宣告
//var timecount = 0;
//var timecountStart;
//var timecountflag = 0;
var TIME_COUNT_ARRAY = new Array();
var TIME_ARRAY = new Array();

//新版計時器
window.start_timed = function(_event_type,_obj_name){
  if (!TIME_COUNT_ARRAY[_event_type+_obj_name]){
//var dateMsec = date.getTime();
    var _date = new Date;
    TIME_COUNT_ARRAY[_event_type + _obj_name] = _date;
  }
}
window.stopCount = function(_event_type,_obj_name){
  var _date = new Date;
  var _interval = _date - TIME_COUNT_ARRAY[_event_type + _obj_name];
  TIME_COUNT_ARRAY[_event_type + _obj_name] = 0;
  var _durtime = Math.floor(_interval / 1000 );
  return _durtime;
}
/*
//開始計時
window.start_timed = function(_event_type,_obj_name){
    if (!TIME_COUNT_ARRAY[_event_type+_obj_name]){
      TIME_COUNT_ARRAY[_event_type+_obj_name] = 0;
      //console.log("start:"+TIME_COUNT_ARRAY[_event_type]); 
      timed_count(_event_type,_obj_name);
    }
    }
//計時器
window.timed_count = function(_event_type,_obj_name){
    TIME_COUNT_ARRAY[_event_type + _obj_name]  = TIME_COUNT_ARRAY[_event_type + _obj_name] + 1 ;
    TIME_ARRAY[_event_type + _obj_name]=setTimeout(function(){timed_count(_event_type,_obj_name)},1000);
   }
//結束計時
window.stopCount = function(_event_type,_obj_name){
    var _durtime = TIME_COUNT_ARRAY[_event_type + _obj_name] ;
    clearTimeout(TIME_ARRAY[_event_type + _obj_name]);
    TIME_COUNT_ARRAY[_event_type + _obj_name] = 0;
    return _durtime;
    }
*/1
/**
 * 偵測畫面捲動的事件
 * /**
 *  * 可偵測物件是否出現在畫面中，並計算時間
 *  */
window.mouse_scroll_event = function(selector,_event_type){
    //var _id = selector;
    //var _obj = $(_id),_height = _obj.height(),_scrollHeight =  _obj.offset();
    /*    偵測物件出現在畫面上    */    
    //找出要被偵測的元件位置    

    //var _document_height = $( document ).height();
    //console.log("總高度:"+document_height);    
    //console.log("物件位置:"+_scrollHeight.top);    
    //console.log("物件高度:"+_height);

    var _getObjStatus = 0; //被偵測物件的狀態 #0:沒偵測到 #1:已經被偵測到   

    // 捲動時偵測
    $(window).scroll(function(){
        if ($(selector).length === 0) return;
        var _id = selector;
        var _obj = $(_id),_height = _obj.height(),_scrollHeight =  _obj.offset();
        var _winHeight = $(window).height();
        var _scrollVal = $(window).scrollTop();
        //console.log("總高度:"+_document_height);    
        //console.log("物件位置:"+_scrollHeight);  

        //console.log("目前捲動高度:"+_scrollVal);
        //console.log("目前畫面高度:"+_winHeight);
        //console.log("目前物件狀態:"+_getObjStatus);

        var _name = new String;  
        if($(selector).title){
          _name = $(selector).title ;
        } else if ($(selector).text()) {
          _name = $(selector).text(); 
        } else if ($(selector).alt){
          _name = $(selector).alt;
        }else if ($(selector).src){
          _name = $(selector).src; 
        }else if ($(selector).data_src){
          _name = $(selector).data_src;
        }else if ($(selector).className){
          _name = $(selector).className;
        }
        else{
          _name = _event_type;
        }
        
        if (typeof(_name) === "string") {
            _name = _name.trim();
        }
        
        //偵測目標有無在畫面中
        if ((_scrollVal + _winHeight) - _scrollHeight.top > 0 && _scrollVal < (_scrollHeight.top + _height)  ){
            if (_getObjStatus === 0){
              _getObjStatus = 1;
              start_timed(_event_type,selector);
              //timedCount(_event_type,this.title);
              if (DEBUG === true){
                console.log(_event_type+", "+" ["+ _name +"] 進入，開始計時");
              }
              //ga("send", "event", _event_type, _name, "scroll in"); // @TODO 最後還要加上事件類型
              return 0;
            }
        //console.log(">>>目標在畫面中<<<");
        }else if(_getObjStatus === 1){
          var _durtime = stopCount(_event_type,selector);
          //var _durtime = stopCount();
          
          if(_durtime > 3) { 
              if (DEBUG === true){
                console.log(_event_type+", "+"["+ _name +"]離開，使用時間: "+_durtime+"秒 記錄");
              }
              ga("send", "event", _event_type, _name, "scroll in", _durtime);  // @TODO 最後還要加上事件類型
          }
          else {
              if (DEBUG === true){
                console.log(_event_type+", "+"["+ _name +"]離開，時間只有: "+_durtime+"秒 不記錄");
              }
          }
          _getObjStatus = 0;
        }
    });
    $(window).scroll();
};


//多一個函式接判斷物件內容

window.load_css = function (_css_url) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    //link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = _css_url;
    link.media = 'all';
    head.appendChild(link);
};

//_setup_event();
