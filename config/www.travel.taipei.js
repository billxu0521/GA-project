/**
 * 適用網頁：https://www.travel.taipei/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1whsqwgC8Y_9gm5i8ISbUTb7vtDNYXmxH7JcQy15yToM/edit?usp=sharing
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-89833109-1";
CSS_URL = "https://billxu0521.github.io/GA-project/config/www.travel.taipei.css";

var exec = function () {
    //GL1-3 click
    ga_mouse_click_event('a[title="臺北旅遊網"]', "GL1-3");

    //GL1-4 導覽列 click
    ga_mouse_click_event("#btn-open-menu","GL1-4");
    ga_mouse_click_event(".mobile-nav-close-mask","GL1-4");
    ga_mouse_click_event(".btn-back-all","GL1-4");

    //GL1-5 麵包屑/首頁 click
    ga_mouse_scroll_in_out_event('.breadcrumb:eq(0)',"GL1-5");

    //GL1-6 click
    ga_mouse_click_event(".unit:eq(0)","GL1-6");

    //G1-7 click
    ga_mouse_click_event(".breadcrumb .unit:not(':eq(0)')","GL1-7");

    //GL1-8 搜尋列 click
    ga_mouse_click_event('.btn-search-submit',"GL1-8");
    ga_mouse_click_event('.gsc-search-button',"GL1-8");

    //GL1-9 
    ga_mouse_click_event('.first-page',"GL1-9");
    ga_mouse_click_event('.last-page',"GL1-9");
    ga_mouse_click_event('.next-page',"GL1-9");
    ga_mouse_click_event('.prev-page',"GL1-9");
    
    //GL2-2  更多xx
    ga_mouse_click_event('.btn-more',"GL2-2");

    //GL2-5  收藏
    ga_mouse_click_event('#btn-my-collection',"GL2-5");
    ga_mouse_click_event('.btn-add-diamond',"GL2-5");

    //GL2-6  底部
    ga_mouse_scroll_in_out_event('.footer',"GL2-6");

    //GL2-8  電話
    ga_mouse_click_event('.tel-link',"GL2-8");
    ga_mouse_click_event('.info .btn-tel-link',"GL2-8");

    //GL2-10  底部條款
    ga_mouse_scroll_in_out_event('.info .link-blk',"GL2-10");

    //GL2-11  勘誤
    ga_mouse_click_event('.btn-report-issue',"GL2-11");

    //GL2-12  分享
    ga_mouse_click_event('.btn-share-fb',"GL2-12");
    ga_mouse_click_event('.btn-share-gplus',"GL2-12");
    ga_mouse_click_event('.btn-share-twitter',"GL2-12");
    ga_mouse_click_event('.btn-share-weibo',"GL2-12");
    ga_mouse_click_event('.btn-share-line',"GL2-12");

    //GL2-13  分類資訊
    ga_mouse_click_event('.menu-title',"GL2-13");
    ga_mouse_click_event('.event-news-card-list .item .link',"GL2-13");
    ga_mouse_click_event('.btn-theme-link',"GL2-13");

    //GL2-14  日期

    ga_mouse_scroll_in_out_event('.info-blk .duration',"GL2-14");
    ga_mouse_scroll_in_out_event('.info-blk .date',"GL2-14");

    //4-1  
    ga_mouse_click_event('.btn-radio',"GL4-1");
    ga_input_change_event('select[name="start-year"]',"GL4-1");
    ga_input_change_event('select[name="start-month"]',"GL4-1");
    ga_input_change_event('select[name="end-year"]',"GL4-1");
    ga_input_change_event('select[name="end-month"]',"GL4-1");
    ga_submit_event('form[name="start-year"]',"GL4-1");
    
    
    //GL5-2  圖片
    ga_mouse_over_event('.flickity-lazyloaded',"GL5-2")
    ga_mouse_down_event('.pswp__scroll-wrap',"GL5-2")

    //GL5-3  互動
    ga_mouse_click_event('.flickity-prev-next-button',"GL5-3");
    ga_mouse_click_event('.flickity-prev-next-button',"GL5-3");
    ga_mouse_click_event('.flickity-lazyloaded',"GL5-3");

    //ga_mouse_click_event('.media-switch-blk',"GL5-3");
    ga_mouse_click_event('.btn-media-photo',"GL5-3");
    ga_mouse_click_event('.btn-media-video',"GL5-3");
    ga_mouse_click_event('.btn-media-pano',"GL5-3");
    ga_mouse_click_event('.btn-media-voice',"GL5-3");

    //GL5-5  圖示設計
    //ga_mouse_click_event('.thumb',"GL5-5");
    ga_mouse_click_event('.btn-open-menu',"GL5-5");
    ga_mouse_click_event('.menu-title',"GL5-5");
    ga_mouse_click_event('.event-news-card-list .item .link',"GL5-5");
    ga_mouse_click_event(".mobile-nav-close-mask","GL5-5");
    ga_mouse_click_event('.btn-media-photo',"GL5-5");
    ga_mouse_click_event('.btn-media-video',"GL5-5");
    ga_mouse_click_event('.btn-media-pano',"GL5-5");
    ga_mouse_click_event('.btn-media-voice',"GL5-5");

    //GL5-6  按鈕設計
    //ga_mouse_click_event('.thumb',"GL5-6");
    ga_mouse_click_event('.btn-open-menu',"GL5-6");
    ga_mouse_click_event('.menu-title',"GL5-6");
    ga_mouse_click_event('.event-news-card-list .item .link',"GL5-6");
    ga_mouse_click_event(".mobile-nav-close-mask","GL5-6");
    ga_mouse_click_event('.btn-media-photo',"GL5-6");
    ga_mouse_click_event('.btn-media-video',"GL5-6");
    ga_mouse_click_event('.btn-media-pano',"GL5-6");
    ga_mouse_click_event('.btn-media-voice',"GL5-6");

    //GL6-2  跳離網域   
    ga_mouse_click_event('a[target="_blank"]',"GL6-2");
   

};

// --------------------------------------

$(function () {
    $.getScript("https://billxu0521.github.io/GA-project/ga_inject_lib.js", function () {
        ga_setup(function () {
            exec();
        });
    });
});