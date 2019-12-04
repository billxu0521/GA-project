/**
 * 適用網頁：http://vinson.rd.ssic.nccu.edu.tw/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1MtMtw9lKLDTUzfBd6Ld0fAe_FGe5u-Mlkh5WfZiH5qM/edit
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-107585606-1";

var _local_debug = false;

if (_local_debug === true) {
    CSS_URL = "https://localhost/GA-project/config/nccuir.lib.nccu.edu.tw.css";
    LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
    console.log("[LOCAL TEST MODE]");
}
else {
    CSS_URL = "https://billxu0521.github.io/GA-project/config/nccuir.lib.nccu.edu.tw.css";
    LIB_URL = "https://billxu0521.github.io/GA-project/ga_inject_lib.js";
}


var exec = function () {
    auto_set_user_id();   

    //偵測語法
    //ga_mouse_click_event("選擇要素","準則");
    ga_mouse_click_event(".btn","Click");
    ga_mouse_click_event("input.gsc-search-button gsc-search-button-v2","Click"); //GOOGLE站內搜尋
    ga_input_keydown_enter_event(".gsc-search-box input.gsc-input", "Click", function (_input) {
        return $(_input).val();
    });
    ga_mouse_click_event(".btn scholar_href","Click");
    ga_mouse_click_event(".btn mouse_clickClick","Click"); //首頁「統計資訊-更多...>>」、「學術動態-更多...>>」…首頁的眾多滑鼠事件
    ga_mouse_click_event(".btn scholar_href mouse_clickClick","Click");
    ga_mouse_click_event(".btn scholar_href","Click");
    ga_mouse_click_event(".btn btn-info btn-lg mouse_clickClick","Click"); //首頁「研究/學術產出」搜尋按鈕
    ga_mouse_click_event(".btn glyphicon glyphicon-search","Click");
    ga_input_keydown_enter_event(".form-control input-lg", "Click", function (_input) {
        return $(_input).val();
    });
    ga_mouse_click_event("[href]", "Click", function (_ele) {
        return _ele.text();});
    ga_submit_event("form", "Form", function (_ele) {
        return _ele.text();});
    console.log($('#search_scholar'));
    

    //思洋實驗用
    ga_mouse_click_event("#search_scholar","Home_Search_Researcher", function (_input) {
        return $('#scholar_name').val();
    });
    ga_mouse_click_event("#search_item","Home_Search_Publication", function (_input) {
        return $('#item_name').val();
    });
    ga_mouse_click_event('.sec1c ul li a:contains("研究者")','Home_Browse_Researcher');
    ga_mouse_click_event('.sec1c ul li a:contains("學系")','Home_Browse_Researcher');
    ga_mouse_click_event('.sec1c ul li a:contains("學術產出")','Home_Browse_Publication');
    ga_mouse_click_event('#top-menu ul li a:contains("Post-Print")','Home_Browse_Publication');

    ga_mouse_click_event('a.scholar_href','Home_Browse_Dinstinguished Scholar');

    ga_mouse_click_event('.text-center .mouse_clickClick','Researcher List_Click');
    ga_mouse_click_event('#form-search div div #submit-button','Researcher List_Search',function (_input) {
        return $('input[name="scholar_name"]').val() + '/' + $('[name="topCommunity"] option:selected"').text();
    });



    ga_mouse_click_event('div.panel-body.sub-id-panel span a','Researcher_Resume');


console.log();


    };

    




// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});
