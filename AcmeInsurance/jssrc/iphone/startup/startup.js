//startup.js file
function appMenuSummary_callback_seq0() {};

function appMenuOrders_callback_seq0() {};

function appMenuInventory_callback_seq0() {
    frmPolicy.show();
};

function appMenuRecipes_callback_seq0() {
    frmUsage.show();
};
var globalhttpheaders = {};
var appConfig = {
    appId: "PNCInsurance",
    appName: "PNCInsurance",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "172.16.100.51",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://172.16.100.51:8080/middleware/MWServlet",
    secureurl: "https://172.16.100.51:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmBabyGlobals();
    frmClaimGlobals();
    frmEntreGlobals();
    frmLocationsGlobals();
    frmPolicyGlobals();
    frmProvidersGlobals();
    frmUsageGlobals();
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmEntre.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;