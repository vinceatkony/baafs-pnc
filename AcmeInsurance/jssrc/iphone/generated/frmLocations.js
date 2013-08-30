//Form JS File
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var segment220982117451553box = new kony.ui.Box({
        "id": "segment220982117451553box",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 55
    }, {});
    var segment220982117451553 = new kony.ui.SegmentedUI2({
        "id": "segment220982117451553",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "label20982117451554": "label20982117451554"
        },
        "rowTemplate": segment220982117451553box,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 55
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var label20982117451554 = new kony.ui.Label({
        "id": "label20982117451554",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 23
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segment220982117451553box.add(
    label20982117451554);
    var vbox20982117451550 = new kony.ui.Box({
        "id": "vbox20982117451550",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 40,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox20982117451550.add(
    image220982117451552, segment220982117451553);
    var label20982117451561 = new kony.ui.Label({
        "id": "label20982117451561",
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var map20982117451559 = new kony.ui.Map({
        "id": "map20982117451559",
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": true
    }, {
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_AS_PIN,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 14
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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117451558.add(
    map20982117451559);
    var vbox20982117451551 = new kony.ui.Box({
        "id": "vbox20982117451551",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 59,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox20982117451551.add(
    label20982117451561, button20982117451562, hbox20982117451558);
    var hbox20982117451549 = new kony.ui.Box({
        "id": "hbox20982117451549",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 99,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": true,
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
        "addWidgets": addWidgetsfrmLocations
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};