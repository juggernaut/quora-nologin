var events = require("sdk/system/events");
const {Cc,Ci} = require("chrome");

var re = /[&\?]share=1/

function listener(event) {
  var channel = event.subject.QueryInterface(Ci.nsIHttpChannel);
  var url = event.subject.URI;
  if (url.host == "www.quora.com" && !containsShare(url.path)) {
      var cloneUrl = url.clone();
      cloneUrl.path = addShare(cloneUrl.path);
      channel.redirectTo(cloneUrl);
  }
}

function containsShare(url) {
    return url.search(re) != -1;
}

function addShare(url) {
    if (url.indexOf('?') < 0) {
        url += "?share=1";
    } else {
        url += "&share=1";
    }
    return url;
}

events.on("http-on-modify-request", listener);
