var adal4User = {
  username: ""
};
var savedToken;

// Create config and get AuthenticationContext
window.config = {
  clientId: userProfile.clientId,
  postLogoutRedirectUri: userProfile.postLogoutRedirectUri,
  cacheLocation: "localStorage"
};

function handleWindowCallback() {
  var hash = window.location.hash;
  if (adalContext.isCallback(hash)) {
    var requestInfo = adalContext.getRequestInfo(hash);
    adalContext.saveTokenFromHash(requestInfo);
    if (requestInfo.requestType === adalContext.REQUEST_TYPE.LOGIN) {
      updateDataFromCache(adalContext.config.loginResource);

    } else if (requestInfo.requestType === adalContext.REQUEST_TYPE.RENEW_TOKEN) {
      adalContext.callback = window.parent["callBackMappedToRenewStates"][requestInfo.stateResponse];
    }

    if (requestInfo.stateMatch) {
      if (typeof adalContext.callback === "function") {
        if (requestInfo.requestType === adalContext.REQUEST_TYPE.RENEW_TOKEN) {
          if (requestInfo.parameters["access_token"]) {
            adalContext.callback(adalContext._getItem(adalContext.CONSTANTS.STORAGE.ERROR_DESCRIPTION)
              , requestInfo.parameters["access_token"]);
          } else if (requestInfo.parameters["error"]) {
            adalContext.callback(adalContext._getItem(adalContext.CONSTANTS.STORAGE.ERROR_DESCRIPTION), null);
            adalContext._renewFailed = true;
          }
        }
      }
    }
  }
}


function updateDataFromCache(resource) {
  var token = adalContext.getCachedToken(resource);
  adal4User.authenticated = (token !== null && token.length > 0);
  var user = adalContext.getCachedUser() || { userName: "", profile: undefined };
  if (user) {
    adal4User.username = user.username;
    adal4User.profile = user.profile;
    adal4User.token = token;
    adal4User.error = adalContext.getLoginError();
  } else {
    adal4User.username = "";
    adal4User.profile = {};
    adal4User.token = "";
    adal4User.error = "";
  }
  savedToken = adal4User.token;
}

var adalContext = new AuthenticationContext(config);

handleWindowCallback();

if (!adal4User.token && !savedToken) {
  adalContext.login();
} else {
  if (window.parent) {

    window.addEventListener("DOMContentLoaded", function () {

      window.parent.postMessage("loaded", "*");

      window.addEventListener("message", function (event) {
        if (/http[s]?:\/\/[^?\/.:&]*\.sharepoint\.com$/.test(event.origin)) {
          window.parent.postMessage(savedToken, "*");
        }
      })
    })

  }
}