// node hackerRank.js
const puppeteer=require("puppeteer");

let browerOpenPromise=puppeteer.launch({
    //if browser is headless(by default-> true),then GUI is hidden
    headless :false,
    args : ["--start-maximized"],
    defaultViewport:null,
    //chrome://version/
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
});

// let x=browerOpenPromise.then(function(browser){
//    console.log("open");
//    let allTabsPromise=browser.pages();
//    console.log(allTabsPromise);
//    return allTabsPromise;
// });

// x.then(function(allTabsArr){
//     let ctab=allTabsArr[0];
//     console.log("new tab");
//     let visitingLoginPagePromise=ctab.goto("https://www.hackerrank.com/auth/login");
//     return visitingLoginPagePromise;
// })
let email="485golu@gmail.com";
let password="123456xy";
let ctab;
browerOpenPromise.then(function(browser){
   console.log("open brower");
   let allTabsPromise=browser.pages();
   return allTabsPromise;
}).then(function(allTabsArr){
     let ctab=allTabsArr[0];
     console.log("new tab");
    let visitingLoginPagePromise=ctab.goto("https://www.hackerrank.com/auth/login");
    return visitingLoginPagePromise;
}).then(function(){
    console.log("hackerrank login page open");
    let emailWillBeTypedPromise=ctab.type("#input-11",email);
    return emailWillBeTypedPromise;
}).then(function () {
    console.log("email is typed");
    let passwordWillBeTypedPromise = ctab.type("#input-12",password );
    return passwordWillBeTypedPromise;
  })
  .then(function () {
    console.log("password has been typed");
    let willBeLoggedInPromise = ctab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    return willBeLoggedInPromise;
  })
  .then(function () {
    console.log("logged into hackerrank successfully");
  })