/**
 * 適用網頁：https://www.travel.taipei/
 * 事件查詢表：https://docs.google.com/spreadsheets/d/1MtMtw9lKLDTUzfBd6Ld0fAe_FGe5u-Mlkh5WfZiH5qM/edit
 * 程式碼位置：https://billxu0521.github.io/GA-project/config/www.travel.taipei.js
 * GA https://analytics.google.com/analytics/web/#realtime/rt-overview/a89833109w133278856p137301362/
 * @author Pudding 20170203
 */

GA_TRACE_CODE = "UA-89833109-1";

var _local_debug = false;

if (_local_debug === true) {
    CSS_URL = "https://localhost/GA-project/config/www.travel.taipei.css";
    LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
    console.log("[LOCAL TEST MODE]");
}
else {
    CSS_URL = "https://billxu0521.github.io/GA-project/config/www.travel.taipei.css";
    LIB_URL = "https://billxu0521.github.io/GA-project/ga_inject_lib.js";
}


var exec = function () {
    //auto_set_user_id();
    
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
    //ga_mouse_click_event('.btn-search-submit',"GL1-8");
    ga_submit_event("#keyword", "GL1-8", function (_form) {
        return $("#keyword").val();
    });
    ga_mouse_click_event('input.gsc-search-button',"GL1-8");
    ga_input_keydown_enter_event(".gsc-search-box input.gsc-input", "GL1-8", function (_input) {
        return $(_input).val();
    });

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

    //GL2-9 多語言轉換
    ga_mouse_click_event('.lang-link-list .link',"GL2-9");
    
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
        //這邊偵測表單送出後的值
    ga_submit_event('.expend-wrapper > form',"GL4-1", 
        function(form){
            console.log("submit act"+form);
            return form.find('select[name="start-year"]').val();
        });
    ga_submit_event('.expend-wrapper > form',"GL4-1", 
        function(form){
            console.log("submit act"+form);
            return form.find('select[name="end-year"]').val();
        });
    ga_submit_event('.expend-wrapper > form',"GL4-1", 
        function(form){
            console.log("submit act"+form);
            return form.find('select[name="start-month"]').val();
        });
    ga_submit_event('.expend-wrapper > form',"GL4-1", 
        function(form){
            console.log("submit act"+form);
            return form.find('select[name="end-month"]').val();
        });
    
    
    //GL5-2  圖片
    // https://www.travel.taipei/zh-tw/attraction/details/9
    //ga_mouse_touch_event('.flickity-lazyloaded',"GL5-2");
    setInterval(function () {
        ga_mouse_touch_event('.flickity-lazyloaded:not(.event-binded)',"GL5-2");
        $('.flickity-lazyloaded:not(.event-binded)').addClass("event-binded");
    }, 500);
    // :not()
    // [target="_blank"]
    setInterval(function () {
        ga_mouse_touch_event('.thumb .flickity-lazyloaded:not(.event-binded)',"GL5-2");
        $('.thumb .flickity-lazyloaded:not(.event-binded)').addClass("event-binded");
    }, 500);
    
    ga_mouse_touch_event('.item .is-selected',"GL5-2");
    //ga_mouse_down_event('.spot-photo-slider .pswp__scroll-wrap',"GL5-2");
    //ga_mouse_down_event('.spot-photo-slider .pswp__item',"GL5-2");
    //ga_mouse_touch_event('.spot-photo-slider .item',"GL5-2");

    //ga_mouse_touch_event('.spot-photo-slider .item',"GL5-2");
    //ga_mouse_touch_event('.pswp__item',"GL5-2")
    ga_mouse_touch_event('.pswp__scroll-wrap',"GL5-2");

    //GL5-3  互動
    ga_mouse_click_event('.spot-photo-slider .flickity-prev-next-button',"GL5-3");
    ga_mouse_click_event('.spot-photo-slider .flickity-lazyloaded',"GL5-3");
    ga_mouse_down_event('#krpanoSWFObject',"GL5-3");
    

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
    ga_mouse_click_event('a[target="_blank"]:not(.js-photoswipe-item)',"GL6-2");
   
   setInterval(function () {
        ga_mouse_click_event('.gsc-resultsbox-visible .gs-title > .gs-title:not(.event-binded)',"GL6-2", function (_a) {
            return $(_a).text();
        });
        $('.gsc-resultsbox-visible .gs-title > .gs-title:not(.event-binded)').addClass("event-binded");
    }, 500);

};

// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});