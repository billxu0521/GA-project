     console.log("@billxu page test");//初始化確認有載入腳本

     var customUserId = "billxu";  //輸入ID

     /********
     埋入GA追蹤資訊
     ********/
     (function(i,s,o,g,r,a,m){
          i['GoogleAnalyticsObject']=r;  
          i[r]=i[r]||function(){  
               (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();  
               a=s.createElement(o),  m=s.getElementsByTagName(o)[0];
               a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  
     })

     (window,document,'script','https://www.google-analytics.com/analytics.js','ga');
     console.log("Active google-analytics");

     //這邊填入GA專案追蹤碼  
     ga('create', 'UA-89833109-1', {'userId': customUserId});  
     ga('send', 'pageview');
     ga('require', 'displayfeatures');
     ga('set', 'userId', customUserId); // 使用已登入的 user_id 設定 User-ID。
     ga('set', 'dimension1', customUserId);

    
     /*******
     計時器功能
     ********/

     //計時器宣告
     var timecount = 0;
     var timecountStart;
     var timecountflag = 0
     
     //開始計時
     function timedCount(){
          timecount=timecount + 1;
          timecountStart=setTimeout(timedCount,1000);
     }
     //結束計時
     function stopCount(){
          var _timecount = timecount;
          timecount=0;
          clearTimeout(timecountStart);
          return _timecount;
     }
     /********
     腳本本體
     ********/
     $(function () {  
     //將ID資訊記錄到視窗屬性中
		if(window.name == null){
			window.name = customUserId;
		}else{
			customUserId = window.name;
		}
     
          //紀錄滑鼠滑過標選單按鈕    
          $('.menu-title').mouseover(function () {    
               console.log("mouse hover");        // 加上事件的程式碼
               ga("send", "event", "mouseover_menu", this.title);   
          });        

          //紀錄滑鼠點擊標選單按鈕    
          $('.menu-title').click(function () {    
               console.log("mouse click");        // 加上事件的程式碼
               ga("send", "event", "click_menu", this.title);    
          });            
          
          /*    偵測物件出現在畫面上    */    
          //找出要被偵測的元件位置    
          var $obj = $('.frame'),_height = $obj.height(), _scrollHeight =  $obj.offset();
          var objheight = _height;
          var scrollHeight = _scrollHeight;
          var document_height = $( document ).height();
          //console.log("總高度:"+document_height);    
          //console.log("物件位置:"+scrollHeight.top);    
          //console.log("物件高度:"+objheight);

          var getObjStatus = 0; //被偵測物件的狀態 #0:沒偵測到 #1:已經被偵測到   

          // 捲動時偵測
          $(window).scroll(function(){
               var scrollHeight = _scrollHeight;
               var winHeight = $(window).height();
               var scrollVal = $(this).scrollTop();
               //console.log("目前捲動高度:"+scrollVal);
               //console.log("目前畫面高度:"+winHeight);
               //console.log("目前物件狀態:"+getObjStatus);

               //偵測目標有無在畫面中
               if ((scrollVal + winHeight) - scrollHeight.top > 0 && scrollVal < (scrollHeight.top + objheight)  ){
                    if (getObjStatus === 0){
                         getObjStatus = 1;
                         timedCount();
                         console.log(">>>目標進入，開始計時<<<");
                         ga("send", "event", "Get_obj", this.title);
                         return 0;
                    }
               //console.log(">>>目標在畫面中<<<");
               }else if(getObjStatus == 1){
                    var _durtime = stopCount();
                    console.log(">>>目標離開，使用時間:"+_durtime+"秒<<<");
                    console.log();

                    ga("send", "event", "Get_obj", this.title+":"+timecount+"s");
                    getObjStatus = 0;
               }});

     });
