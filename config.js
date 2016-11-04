
var config = (function() {
    var uriPrefix = "https://SOME-URI-PREFIX.azurewebsites.net/api/";
    var _config = {};
    _config.addUri = uriPrefix + "AddComment?code=SOME-ACCESS-CODE";
    _config.removeUri = uriPrefix + "DeleteComment?code=SOME-ACCESS-CODE";
    _config.getUri = uriPrefix + "GetComments?code=SOME-ACCESS-CODE";
    return _config;
})();
