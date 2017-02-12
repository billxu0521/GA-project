/**
 * 適用網頁：https://www.travel.taipei/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1whsqwgC8Y_9gm5i8ISbUTb7vtDNYXmxH7JcQy15yToM/edit?usp=sharing
 * @author Pudding 20170203
 */

// 載入 ga_inject.js
$.getScript("//billxu0521.github.io/GA-project/ga_inject_lib.js", function () {
    
   

	//紀錄滑鼠滑過標選單按鈕範例   
    mouseover_event(".menu-title","mouse_hover");

    //紀錄滑鼠點擊標選單按鈕   
    mouse_click_event(".menu-title","click_menu");

    //偵測捲動頁面有無出現目標
    mouse_scroll_event('a[title="台北畫刊"]',"scroll");

    mouse_scroll_event('a[title="大型活動"]',"scroll");

    //GL1-3 click

    //GL1-4 click

    //GL1-5 click

    //GL1-6 click

    //G1-7 click

    //GL1-8 click
    
});
