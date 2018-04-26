// called from the popup window
function setCookie(){
    // this is just a placeholder to demonstrate the mechanism for setting a cookie.
    var now_in_unix_epoch_seconds = Math.floor((new Date().getTime()/1000));
    var year_in_seconds = 365 * 24 * 60 * 60;
    var cookie_details = {
        'url': 'https://www.google.com',
        'name': 'testcookie',
        'value': 'testvalue',
        'expirationDate': now_in_unix_epoch_seconds + year_in_seconds
    };
    chrome.cookies.set(cookie_details, function(cookie) {
        console.log("set result", cookie);
    });
    console.log("cookie set attempted");
};

document.addEventListener('DOMContentLoaded', function () {
  cookieButton = document.getElementById('setcookie');
  cookieButton.onclick = setCookie;
});
