/**
 * 適用網頁：http://vinson.rd.ssic.nccu.edu.tw/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1MtMtw9lKLDTUzfBd6Ld0fAe_FGe5u-Mlkh5WfZiH5qM/edit
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-153121700-2";

var _local_debug = false;

if (_local_debug === true) {
    CSS_URL = "https://localhost/GA-project/config/dev-lo.ccstw.nccu.edu.tw.css";
    LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
    console.log("[LOCAL TEST MODE]");
}
else {
    CSS_URL = "https://billxu0521.github.io/GA-project/config/dev-lo.ccstw.nccu.edu.tw.css";
    LIB_URL = "https://billxu0521.github.io/GA-project/ga_inject_lib.js";
}


var exec = function () {
    auto_set_user_id();   

    //偵測語法
    //ga_mouse_click_event("選擇要素","準則");
    ga_mouse_click_event(".searchtime","setsearch");
    ga_mouse_click_event("#searchtimelineCont div span","setsearch");
    ga_mouse_click_event("#addperioddate","setsearch");
    ga_mouse_click_event("#delperioddate","setsearch");
    ga_mouse_click_event("#searchbtntext","search",function (_ele) {
        let  _date = [];
        let _keyword = $('#keyword').val();
        $('div#timelinedate').each(function(){
            let _day = $(this).parent().attr('datevalue');
            let _year = $(this).text();
            _date.push(_year + '-' + _day);
        });
        _info = _keyword + ':' + _date;
        return _info;
    });
    ga_mouse_click_event("#leftperiod","settime");
    ga_mouse_click_event("#rightperiod","settime");
    ga_mouse_click_event(".periodlinetouch","settime");

    ga_mouse_click_event("#graph g g g.nodes circle","node",function (_ele) {
        let _id = _ele.attr('node_id');
        let _str = $('.labels text[label_id="'+_id+'"]');
        return _str;
    });
    ga_mouse_drag_event('#nodecardbar','node_move_drag');
    ga_mouse_drag_event('#nodeslider span','node_zoom');
    ga_mouse_click_event('#nodecardmove','node_move_click');
    ga_mouse_click_event('#savesvgnode','node_download');




};


// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});
