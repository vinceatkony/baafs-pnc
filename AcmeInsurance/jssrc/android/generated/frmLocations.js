//Form JS File
function frmLocations_segLocations_onRowClick_seq1(status, GeoCode) {
    if (status == 400) {
        addResponsesToMap.call(this, GeoCode, frmLocations.segLocations.selectedItems[0].lblName, frmLocations.segLocations.selectedItems[0].lblAddress);
        frmLocations.lblSelectedName.text = frmLocations["segLocations"]["selectedItems"][0]["lblName"];
    }
};

function frmLocations_frmLocations_postshow_seq1(status, GetLocations) {
    if (status == 400) {
        if (GetLocations != null && GetLocations != undefined && GetLocations["Locations"] != null && GetLocations["Locations"] != undefined) {
            var frmLocations_segLocations_temp = [];
            for (var i1 = 0; i1 < GetLocations["Locations"].length; i1++) {
                frmLocations_segLocations_temp.push({
                    "lblAddress": GetLocations["Locations"][i1]["Addr1"] + " " + GetLocations["Locations"][i1]["Addr2"] + " " + GetLocations["Locations"][i1]["City"] + ", " + GetLocations["Locations"][i1]["State"] + " " + GetLocations["Locations"][i1]["Zip"],
                    "lblName": GetLocations["Locations"][i1]["Name"]
                })
            }
            frmLocations.segLocations.setData(frmLocations_segLocations_temp);
        }
    }
};

function frmLocations_frmLocations_postshow_seq0(eventobject, neworientation) {
    var GetLocations_inputparam = {};
    GetLocations_inputparam["serviceID"] = "GetLocations";
    GetLocations_inputparam["httpheaders"] = {};
    GetLocations_inputparam["httpconfigs"] = {};
    GetLocations = appmiddlewareinvokerasync(GetLocations_inputparam, frmLocations_frmLocations_postshow_seq1);
};

function frmLocations_segLocations_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    var GeoCode_inputparam = {};
    GeoCode_inputparam["serviceID"] = "GeoCode";
    GeoCode_inputparam["addressText"] = frmLocations["segLocations"]["selectedItems"][0]["lblAddress"];
    GeoCode_inputparam["httpheaders"] = {};
    GeoCode_inputparam["httpconfigs"] = {};
    GeoCode = appmiddlewareinvokerasync(GeoCode_inputparam, frmLocations_segLocations_onRowClick_seq1);
};

function addWidgetsfrmLocations() {
    var image220982117451552 = new kony.ui.Image2({
        "id": "image220982117451552",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "referenceWidth": null,
        "referenceHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 26
    }, {});
    var segLocationsbox = new kony.ui.Box({
        "id": "segLocationsbox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 55
    }, {});
    var segLocations = new kony.ui.SegmentedUI2({
        "id": "segLocations",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblAddress": "lblAddress",
            "lblName": "lblName",
            "hbox20982117452481": "hbox20982117452481"
        },
        "rowTemplate": segLocationsbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmLocations_segLocations_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 55
    }, {});
    var lblName = new kony.ui.Label({
        "id": "lblName",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 99
    }, {});
    var hbox20982117452481 = new kony.ui.Box({
        "id": "hbox20982117452481",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 21,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452481.add(
    lblName);
    var lblAddress = new kony.ui.Label({
        "id": "lblAddress",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    segLocationsbox.add(
    hbox20982117452481, lblAddress);
    var vbox20982117451550 = new kony.ui.Box({
        "id": "vbox20982117451550",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox20982117451550.add(
    image220982117451552, segLocations);
    var lblSelectedName = new kony.ui.Label({
        "id": "lblSelectedName",
        "isVisible": true,
        "text": null,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {});
    var button20982117451562 = new kony.ui.Button({
        "id": "button20982117451562",
        "isVisible": true,
        "text": "Make Primary Care Provider",
        "skin": "btnNormal",
        "focusSkin": "btnFocus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var mapLocations = new kony.ui.Map({
        "id": "mapLocations",
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": "pin.png",
        "screenLevelWidget": true
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "showZoomControl": true,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 15
    });
    var hbox20982117451558 = new kony.ui.Box({
        "id": "hbox20982117451558",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 74,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117451558.add(
    mapLocations);
    var vbox20982117451551 = new kony.ui.Box({
        "id": "vbox20982117451551",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 59,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox20982117451551.add(
    lblSelectedName, button20982117451562, hbox20982117451558);
    var hbox20982117451549 = new kony.ui.Box({
        "id": "hbox20982117451549",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 99,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117451549.add(
    vbox20982117451550, vbox20982117451551);
    frmLocations.add(
    hbox20982117451549);
};

function frmLocationsGlobals() {
    var MenuId = [];
    frmLocations = new kony.ui.Form2({
        "id": "frmLocations",
        "title": null,
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "postShow": frmLocations_frmLocations_postshow_seq0,
        "addWidgets": addWidgetsfrmLocations
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};