# Google Analytics Injection (for Taipei Travel)
GA偵測事件

# TODO (主要請看Issues)
https://github.com/billxu0521/GA-project/issues
- 計時器功能錯誤，請見#TODO ga_inject_lib.js
- _save_user_id寫法不能跟ga結合，請重新思考ga怎麼設定id再來重寫這個功能
- 撰寫匯入(安裝)教學 (README.md)
- 撰寫匯出教學 (README.md)
- 撰寫設定userID教學 (README.md)
- 把所有console.log()的事件前面都加上DEBUG判斷
- 變數名稱規範： 區域變數或函數前面要加底線，字與字中間用底線隔開，例如「_var」；固定的常數要全部大寫，字與字之間用底線隔開，例如「MOUSE_CONFIG」
- 不要直接用function宣告函數，應用 var _func = function () { /*script*/ }; 宣告函數。注意最後的「;」
- 許多函式缺少說明，函式前面的說明全部改成
- ga("send", "event"...) 最後還要加上事件類型，像是"click"或"mouseover"

# 匯入(安裝)教學
* 注意：要將 page_inject_js 中的*.js對應到網站中的網址，例如「page_inject_js/index.js」對應到「 https://www.travel.taipei/ 」。每個網頁都會套用不同的事件偵測，所以匯入匯出必須要能批次處理多個網頁
1.選擇函式庫(Libraries)分頁
![2017-03-15 1 20 06](https://cloud.githubusercontent.com/assets/3469079/23913333/95c05158-091d-11e7-8ab2-86e4cb826bfe.png)

2.輸入第一組函式庫 GA用 然後點擊Add new
GA/https://www.google-analytics.com/analytics.js
![2017-03-15 1 22 15](https://cloud.githubusercontent.com/assets/3469079/23913401/dc852f50-091d-11e7-86c6-acc01c9ec0d4.png)

3.輸入第二組函式庫 本專案的函式腳本 然後點擊Add new
GA project/https://billxu0521.github.io/GA-project/ga_inject_lib.js
![2017-03-15 1 24 11](https://cloud.githubusercontent.com/assets/3469079/23913519/3734f598-091e-11e7-957d-1a7785e2214c.png)

4.輸入第二組函式庫 本專案的函式腳本 然後點擊Add new
GA project index/https://billxu0521.github.io/GA-project/page_inject_js/index.js
![2017-03-15 1 24 55](https://cloud.githubusercontent.com/assets/3469079/23913522/3c1d2152-091e-11e7-880c-84c6156c5655.png)

5.切換至網站(Sites)分頁，選擇Add new site
![2017-03-15 1 26 02](https://cloud.githubusercontent.com/assets/3469079/23913617/858a0a44-091e-11e7-9d8b-3cc42abf9b4d.png)

6.左上角輸入台北旅遊網網址https://www.travel.taipei/*
![2017-03-15 1 26 42](https://cloud.githubusercontent.com/assets/3469079/23913612/820a21ec-091e-11e7-8f1c-3840f44c2668.png)

7.開啟設定，如圖打勾
![2017-03-15 1 27 39](https://cloud.githubusercontent.com/assets/3469079/23913681/a6708940-091e-11e7-90c5-4bead762743f.png)

8.右上角點擊Save 即可使用
![2017-03-15 1 27 47](https://cloud.githubusercontent.com/assets/3469079/23913685/a939dafa-091e-11e7-924f-cfce86290936.png)


# CSS設定教學
1. 
2. 

# 設定userID教學
1. 啟動偵測腳本
![2017-03-15 1 27 39](https://cloud.githubusercontent.com/assets/3469079/23931423/07338932-096d-11e7-92f6-08b9a158bdab.png)

2. 進入台北旅遊網 https://www.travel.taipei
![2017-03-15 10 48 00](https://cloud.githubusercontent.com/assets/3469079/23931418/04a16446-096d-11e7-9c70-03beaa1906e5.png)

3. 右鍵選擇檢查
![Uploading 螢幕快照 2017-03-15 上午10.48.05.png…]()

4. 分頁切換到console
![2017-03-15 10 48 14](https://cloud.githubusercontent.com/assets/3469079/23931403/fbda431e-096c-11e7-976a-e4ee104b8565.png)

5. 確認有無"Google analytics injected."
![2017-03-15 10 48 27](https://cloud.githubusercontent.com/assets/3469079/23931426/0a313864-096d-11e7-99ce-2ce3fdc4a419.png)

6. 在6.字樣下方輸入set_user_id("欲輸入ID")
![2017-03-15 10 49 42](https://cloud.githubusercontent.com/assets/3469079/23931455/265965b6-096d-11e7-90ca-b11a0b104ad8.png)

7. 若出現"Set UserID;輸入ID"表示設定成功
![2017-03-15 10 49 47](https://cloud.githubusercontent.com/assets/3469079/23931458/2b2bc570-096d-11e7-8c46-7aff367e1a3b.png)


# 參考連結
- Google Analytics: https://analytics.google.com/analytics/web/
- 臺北旅遊網: https://analytics.google.com/analytics/web/
- Google Chrome: https://www.google.com.tw/intl/zh-TW/chrome/
- (Chrome Extension) User JavaScript and CSS: https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld?utm_source=chrome-app-launcher-info-dialog
- ga_inject.js: http://billxu0521.github.io/GA-project/ga_inject.js
- event_type_code 事件編號記錄： https://docs.google.com/spreadsheets/d/1whsqwgC8Y_9gm5i8ISbUTb7vtDNYXmxH7JcQy15yToM/edit?usp=sharing

# Code Reference
- 變數名稱規範： 區域變數或函數前面要加底線，字與字中間用底線隔開，例如「_var」；固定的常數要全部大寫，字與字之間用底線隔開，例如「MOUSE_CONFIG」
- 不要直接用function宣告函數，應用 var _func = function () { /*script*/ }; 宣告函數。注意最後的「;」

# Changelog
- 刪除了祕技，太容易跟其他程式相衝突，不實用
