# GA-project
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
* 注意：要將 page_inject_js 中的*.js對應到網站中的網址，例如「page_inject_js/index.js」對應到「https://www.travel.taipei/」。每個網頁都會套用不同的事件偵測，所以匯入匯出必須要能批次處理多個網頁
1. step1
2. step2

# 匯出教學
1. step1
2. step2

# 設定userID教學
1. step1
2. step2

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
