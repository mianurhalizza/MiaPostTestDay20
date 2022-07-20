$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login aplikasi GTPL Bank",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login dengan kredensial valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_sedang_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan user ID \"mngr422725\"",
  "keyword": "When "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_memasukan_user_ID_mngr422725(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan password \"ebUsypa\"",
  "keyword": "And "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_memasukan_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol login dan sistem memprosesnya",
  "keyword": "And "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_menekan_tombol_login_dan_sistem_memprosesnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User harus berada di halaman \"Welcome To Manager\u0027s Page of GTPL Bank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_harus_berada_di_halaman(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-DKCLFGJU\u0027, ip: \u0027192.168.1.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\irsya\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55005}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c7f7346ce704c26d5933b13df6da28f0\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\r\n\tat definisions.LoginDefinitions.user_harus_berada_di_halaman(LoginDefinitions.java:49)\r\n\tat ✽.User harus berada di halaman \"Welcome To Manager\u0027s Page of GTPL Bank\"(file:///C:/Users/irsya/eclipse-workspace/belajarcucumber2/src/test/resources/features/Login.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login dengan kredensial tidak valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User sedang berada di halaman login",
  "keyword": "Given "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_sedang_berada_di_halaman_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan user ID \"mngr422725\"",
  "keyword": "When "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_memasukan_user_ID_mngr422725(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan password \"ebUszdc\"",
  "keyword": "And "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_memasukan_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan tombol login dan sistem memprosesnya",
  "keyword": "And "
});
formatter.match({
  "location": "definisions.LoginDefinitions.user_menekan_tombol_login_dan_sistem_memprosesnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User harus melihat alert berisi \"User is not valid\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/features/Palindrome.feature");
formatter.feature({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \u003ckata\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.step({
  "name": "hasilnya harus \u003coutput\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kata",
        "output"
      ]
    },
    {
      "cells": [
        "\"bebeb\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"kodok\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"mobil\"",
        "\"false\""
      ]
    },
    {
      "cells": [
        "\"motor\"",
        "\"false\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"bebeb\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"kodok\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"mobil\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"motor\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.Saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definisions.PalindromeDefinisions.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});