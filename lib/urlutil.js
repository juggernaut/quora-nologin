var re = /[&\?]share=1/

exports.containsShare = function (url) {
    return url.search(re) != -1;
}

exports.addShare = function (url) {
    if (url.indexOf('?') < 0) {
        url += "?share=1";
    } else {
        url += "&share=1";
    }
    return url;
}
