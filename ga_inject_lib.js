/**
 * 畫面讀取完成之後再來初始化
 * 而且避免變數被宣告在全域範圍，跟其他程式碼相互衝突
 * @author Pudding 20170203
 */
$(function () {

/**
 * 加上DEBUG的設定，以方便未來開關
 * @type Boolean
 * @author Pudding 20170203
 */ 
var DEBUG = true;
    
if (DEBUG === true) {    
    console.log("GaEventScript20170127@billxu");//初始化確認有載入腳本
}

/**
 * @TODO 要改成從window.name讀取
 * 1. 確認window.name是否有資料
 * 2. 如果沒有資料，則先給與預設值 "anonymity"
 * 3. 使用一種特殊的方法來設定 customUserId
 * @type String|userIdInput
 */
var CUSTOM_USER_ID = "anonymity";  //輸入ID

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
ga('create', 'UA-89833109-1', {'userId': CUSTOM_USER_ID});  
ga('send', 'pageview');
ga('require', 'displayfeatures');
ga('set', 'userId', CUSTOM_USER_ID); // 使用已登入的 user_id 設定 User-ID。
ga('set', 'dimension1', CUSTOM_USER_ID);


// ===================================================================
/**
 * 這邊放置各種偵測任務
 */
var _setup_event = function () {
    //inputUserIDDialog();

    //將ID資訊記錄到視窗屬性中
    //saveUserID(customUserId);

    //紀錄滑鼠滑過標選單按鈕範例   
    _mouseover_event(".menu-title","mouse_hover");

    //紀錄滑鼠點擊標選單按鈕   
    _mouse_click_event(".menu-title","click_menu");

    //偵測捲動頁面有無出現目標
    _mouse_scroll_event(".frame","scroll");
};  //var _setup_event = function () {


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
var _save_user_id = function (_customUserId){
    //var _customUserId = customUserId;
    if (window.name === null) {
      window.name = _customUserId;
    }
    else {
      _customUserId = window.name;
    }
};

/**
 * @TODO 許多函式缺少說明
 */
function inputUserIDDialog(){
     var _userIdInput = prompt("請輸入使用者名稱", "anonymity");
     if (_userIdInput !== null) {   
        CUSTOM_USER_ID = userIdInput;
        console.log("Hello," + CUSTOM_USER_ID);
        _save_user_id(CUSTOM_USER_ID);
     }
}

/**
 * 偵測滑鼠移上去的事件
 * @TODO 許多函式缺少說明，函式前面的說明全部改成
 * /**
 *  * 說明的形式
 *  */
var _mouseover_event = function (_selector, _event_type) {
     $(_selector).mouseover(function () {
        if (DEBUG === true) {
          console.log("mouse hover");        // 加上事件的程式碼
        }    
        ga("send", "event", _event_type, this.title, 'mouseover');   
     });
};

/********
偵測滑鼠滑過點擊
********/
var _mouse_click_event = function (_selector, _event_type) {
     $(_selector).click(function () {    
        if (DEBUG === true){
          console.log("mouse click");        // 加上事件的程式碼 
        }
          ga("send", "event", _event_type, this.title, 'click'); // @TODO ga("send", "event"...) 最後還要加上事件類型，像是"click"或"mouseover"
     });        
};

/*******
 * 計時器功能
 * @TODO 這樣設計不行，這樣不能支援多個計時器，請封裝物件化後重新設計
 ********/

//計時器宣告
//var timecount = 0;
//var timecountStart;
//var timecountflag = 0;
//var TIME_COUNT_ARRAY = new Array();
var TIME_ARRAY = new Array();

//開始計時
function _start_timed(_event_type,obj_name){
    if (!TIME_COUNT_ARRAY[_event_type]){
      TIME_COUNT_ARRAY[_event_type] = 0;
      console.log("start:"+TIME_COUNT_ARRAY[_event_type]); 
      _timed_count(_event_type);
    }
    //timecount=timecount + 1;  
    //timecountStart=setTimeout(timedCount,1000);
}
//計時器
function _timed_count(_event_type,obj_name){
    TIME_COUNT_ARRAY[_event_type]  = TIME_COUNT_ARRAY[_event_type] + 1 ;
    TIME_ARRAY[_event_type]=setTimeout(function(){_timed_count(_event_type)},1000);
    //timecount=timecount + 1;
    //timecountStart=setTimeout(timedCount,1000);
}

//結束計時
function _stopCount(_event_type){
    var _durtime = TIME_COUNT_ARRAY[_event_type] ;
    clearTimeout(TIME_ARRAY[_event_type]);
    TIME_COUNT_ARRAY[_event_type] = 0;
    return _durtime;
    //var _timecount = timecount;
    //timecount=0;
    //clearTimeout(timecountStart);  
    //return _timecount;
}

/********
偵測捲動畫面，物件出現畫面中
********/
function _mouse_scroll_event(selector,_event_type){
    var _id = selector;

    /*    偵測物件出現在畫面上    */    
    //找出要被偵測的元件位置    
    var _obj = $(_id),_height = _obj.height(), _scrollHeight =  _obj.offset();
    //var _document_height = $( document ).height();
    //console.log("總高度:"+document_height);    
    //console.log("物件位置:"+_scrollHeight.top);    
    //console.log("物件高度:"+_height);

    var _getObjStatus = 0; //被偵測物件的狀態 #0:沒偵測到 #1:已經被偵測到   

    // 捲動時偵測
    $(window).scroll(function(){
        var _winHeight = $(window).height();
        var _scrollVal = $(this).scrollTop();
        //console.log("目前捲動高度:"+_scrollVal);
        //console.log("目前畫面高度:"+_winHeight);
        //console.log("目前物件狀態:"+_getObjStatus);

        //偵測目標有無在畫面中
        if ((_scrollVal + _winHeight) - _scrollHeight.top > 0 && _scrollVal < (_scrollHeight.top + _height)  ){
            if (_getObjStatus === 0){
              _getObjStatus = 1;
              _start_timed(_event_type);
              //timedCount(_event_type,this.title);
              if (DEBUG === true){
                console.log(">>>目標進入，開始計時<<<");
              }
              ga("send", "event", _event_type, this.title, "in"); // @TODO 最後還要加上事件類型
              return 0;
            }
        //console.log(">>>目標在畫面中<<<");
        }else if(_getObjStatus === 1){
          var _durtime = _stopCount(_event_type);
          //var _durtime = stopCount();
          if (DEBUG === true){
            console.log(">>>目標離開，使用時間:"+_durtime+"秒<<<");
          }
          ga("send", "event", "scroll", this.title, "out", _durtime);  // @TODO 最後還要加上事件類型
          _getObjStatus = 0;
        }
    });
}


_setup_event();

}); //$(function () {

