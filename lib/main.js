var events = require("sdk/system/events");
const {Cc,Ci} = require("chrome");
var urlutil = require("./urlutil");


function listener(event) {
  var channel = event.subject.QueryInterface(Ci.nsIHttpChannel);
  var url = event.subject.URI;
  if (url.host == "www.quora.com" && !urlutil.containsShare(url.path)) {
      var cloneUrl = url.clone();
      cloneUrl.path = urlutil.addShare(cloneUrl.path);
      channel.redirectTo(cloneUrl);
  }
}

events.on("http-on-modify-request", listener);
