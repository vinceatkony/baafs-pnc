//application.js file
function displayMWError() {
    kony.ui.Alert("Middleware Error ", null, "error", null, null);
};

function displaySessionError() {
    kony.ui.Alert("Session Expired .. Please re-login", null, "error", null, null);
};

function displayError(code, msg) {
    // Commented for SWA: kony.ui.Alert("Error Code: "..code .." Message: " ..msg,null,"error",null,null);
    kony.ui.Alert(code + "- " + msg, null, "error", null, null);
};
var mergeHeaders = function(httpHeaders, globalHeaders) {
        for (var attrName in globalHeaders) {
            httpHeaders[attrName] = globalHeaders[attrName];
        }
        return httpHeaders;
    }

function appmiddlewareinvoker(inputParam, isBlocking, indicator, datasetID) {
    if (appConfig.serverPort != null) {
        var url = "http://" + appConfig.serverIp + ":" + appConfig.serverPort + "/" + appConfig.middlewareContext + "/MWServlet";
    } else {
        var url = "http://" + appConfig.serverIp + "/" + appConfig.middlewareContext + "/MWServlet";
    }
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    if (indicator) {
        inputParam["indicator"] = indicator;
    };
    if (datasetID) {
        inputParam["datasetID"] = datasetID;
    };
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = globalhttpheaders;
        };
    };
    var resulttable = kony.net.invokeService(url, inputParam, isBlocking);
    if (resulttable) {
        if (resulttable[sessionIdKey]) {
            sessionID = resulttable[sessionIdKey];
        };
    };
    return resulttable;
};

function appmiddlewaresecureinvoker(inputParam, isBlocking, indicator, datasetID) {
    if (appConfig.secureServerPort != null) {
        var url = "https://" + appConfig.serverIp + ":" + appConfig.secureServerPort + "/" + appConfig.middlewareContext + "/MWServlet";
    } else {
        var url = "https://" + appConfig.serverIp + "/" + appConfig.middlewareContext + "/MWServlet";
    }
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    if (indicator) {
        inputParam["indicator"] = indicator;
    };
    if (datasetID) {
        inputParam["datasetID"] = datasetID;
    };
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = globalhttpheaders;
        };
    };
    var resulttable = kony.net.invokeService(url, inputParam, isBlocking);
    if (resulttable) {
        if (resulttable[sessionIdKey]) {
            sessionID = resulttable[sessionIdKey];
        };
    };
    return resulttable;
};

function appmiddlewareinvokerasync(inputParam, callBack) {
    if (appConfig.serverPort != null) {
        var url = "http://" + appConfig.serverIp + ":" + appConfig.serverPort + "/" + appConfig.middlewareContext + "/MWServlet";
    } else {
        var url = "http://" + appConfig.serverIp + "/" + appConfig.middlewareContext + "/MWServlet";
    }
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam.httpheaders = globalhttpheaders;
        };
    };
    var connHandle = kony.net.invokeServiceAsync(url, inputParam, callBack)
    return connHandle;
};

function appmiddlewaresecureinvokerasync(inputParam, callBack) {
    if (appConfig.secureServerPort != null) {
        var url = "https://" + appConfig.serverIp + ":" + appConfig.secureServerPort + "/" + appConfig.middlewareContext + "/MWServlet";
    } else {
        var url = "https://" + appConfig.serverIp + "/" + appConfig.middlewareContext + "/MWServlet";
    }
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "rc";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = globalhttpheaders;
        };
    };
    var connHandle = kony.net.invokeServiceAsync(url, inputParam, callBack)
    return connHandle;
};

function makeCall(eventobject) {
    kony.phone.dial(eventobject.text);
};
appMenu = null;

function callAppMenu() {
    var appMenu = [
        ["appMenuSummary", "Summary", "mailmenuicon.png", appMenuSummary_callback_seq0],
        ["appMenuOrders", "My Orders", "mailmenuicon.png", appMenuOrders_callback_seq0],
        ["appMenuInventory", "My Inventory", "mailmenuicon.png", appMenuInventory_callback_seq0],
        ["appMenuRecipes", "My Recipes", "mailmenuicon.png", appMenuRecipes_callback_seq0]
    ];
    kony.application.createAppMenu("AcmeInsuranceAppMenu", appMenu, null, null);
    kony.application.setCurrentAppMenu("AcmeInsuranceAppMenu");
}