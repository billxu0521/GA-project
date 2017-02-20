/**
 * 適用網頁：https://www.travel.taipei/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1whsqwgC8Y_9gm5i8ISbUTb7vtDNYXmxH7JcQy15yToM/edit?usp=sharing
 * @author Pudding 20170203
 */

// 載入 ga_inject.js

//var url = "https://billxu0521.github.io/GA-project/ga_inject_lib.js";
//$.getScript(url, function () {

$(function() {

	//初始化名字
	check_user_id();

	//紀錄滑鼠滑過標選單按鈕範例   
    //mouseover_event(".menu-title","mouse_hover");
    //紀錄滑鼠點擊標選單按鈕   
    //mouse_click_event(".menu-title","click_menu");

    //偵測捲動頁面有無出現目標
    //mouse_scroll_event('a[title="台北畫刊"]',"scroll");

    //mouse_scroll_event('a[title="大型活動"]',"scroll");

    //GL1-3 click
    mouse_click_event('a[title="臺北旅遊網"]',"GL1-3");


    /*GL1-4 導覽列 click*/
    mouse_click_event("#btn-open-menu","GL1-4");

    //GL1-5 麵包屑/首頁 click
    mouse_scroll_event(".breadcrumb","GL1-5");
    //GL1-6 click
	mouse_click_event(".unit:eq(0)","GL1-6");
    //G1-7 click
	mouse_click_event(".unit:eq(1)","GL1-7");
	mouse_click_event(".unit:eq(2)","GL1-7");
	mouse_click_event(".unit:eq(3)","GL1-7");

    //GL1-8 搜尋列 click
    mouse_click_event('.btn-search-submit',"GL1-8");
    mouse_click_event('.gsc-search-button',"GL1-8");

});
