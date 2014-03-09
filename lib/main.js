var events = require("sdk/system/events");
const {Cc,Ci} = require("chrome");

function listener(event) {
  var channel = event.subject.QueryInterface(Ci.nsIHttpChannel);
  var url = event.subject.URI;
  if (url.host == "www.quora.com" && url.path.indexOf('?share=1', url.path.length - 8) < 0) {
      var cloneUrl = url.clone();
      cloneUrl.path += "?share=1";
      channel.redirectTo(cloneUrl);
  }
}

events.on("http-on-modify-request", listener);
