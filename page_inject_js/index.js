/**
 * 適用網頁：https://www.travel.taipei/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1whsqwgC8Y_9gm5i8ISbUTb7vtDNYXmxH7JcQy15yToM/edit?usp=sharing
 * @author Pudding 20170203
 */

// 載入 ga_inject.js

//var url = "https://billxu0521.github.io/GA-project/ga_inject_lib.js";
//$.getScript(url, function () {

$(function(){

	//初始化名字
	check_user_id();

    //GL1-3 click
    mouse_click_event('a[title="臺北旅遊網"]',"GL1-3");

    //GL1-4 導覽列 click
    mouse_click_event("#btn-open-menu","GL1-4");

    //GL1-5 麵包屑/首頁 click
    mouse_scroll_event('.breadcrumb:eq(0)',"GL1-5");
    //GL1-6 click
	mouse_click_event(".unit:eq(0)","GL1-6");
    //G1-7 click
	mouse_click_event(".unit:eq(1)","GL1-7");
	mouse_click_event(".unit:eq(2)","GL1-7");
	mouse_click_event(".unit:eq(3)","GL1-7");

    //GL1-8 搜尋列 click
    mouse_click_event('.btn-search-submit',"GL1-8");
    mouse_click_event('.gsc-search-button',"GL1-8");

    //GL2-2  更多xx
    mouse_click_event('.btn-more:eq(0)',"GL2-2");
    mouse_click_event('.btn-more:eq(1)',"GL2-2");
    mouse_click_event('.btn-more:eq(2)',"GL2-2");
    
    //GL2-5  收藏
    mouse_click_event('#btn-my-collection',"GL2-5");
    mouse_click_event('.btn-add-diamond adj js-add-diamond',"GL2-5");
    mouse_click_event('.btn-add-diamond adj js-add-diamond remove',"GL2-5");

    //GL2-6 

    //GL2-8  電話
    mouse_click_event('.tel-link',"GL2-8");
    mouse_click_event('.btn-tel-link',"GL2-8");

    //GL2-10  底部條款

    //GL2-11  勘誤


    //GL2-12  分享
    mouse_click_event('.btn-share-line',"GL2-12");

    //GL2-13  分類資訊

    //GL5-2  圖片

    //GL5-3  互動

    //GL5-5  圖示設計

    //GL5-6  按鈕設計

    //GL6-2  分享
    mouse_click_event('.link',"GL6-2");



});



