var urlutil = require("./urlutil");

exports["test url that does not contain a 'share' query parameter"] = function(assert) {
    assert.ok(!urlutil.containsShare("?hello=world&foo=bar"), "containsShare works");
};

exports["test url that contains a 'share' query parameter"] = function(assert) {
    assert.ok(urlutil.containsShare("?hello=world&share=1"), "containsShare works");
};

exports["test adding the share parameter when url path contains no query params"] = function(assert) {
    assert.ok(urlutil.addShare("/hello/world") == "/hello/world?share=1", "addShare works");
};

exports["test adding the share parameter when url path contains query params"] = function(assert) {
    assert.ok(urlutil.addShare("/hello/world?foo=bar") == "/hello/world?foo=bar&share=1", "addShare works");
};

require("sdk/test").run(exports);
