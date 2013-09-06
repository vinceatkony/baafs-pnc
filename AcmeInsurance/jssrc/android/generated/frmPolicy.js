//Form JS File
function frmPolicy_frmPolicy_postshow_seq1(status, GetPolicy) {
    if (status == 400) {
        kony.print("************ before mappings...");
        if (GetPolicy != null && GetPolicy != undefined && GetPolicy["policyList"] != null && GetPolicy["policyList"] != undefined) {
            var frmPolicy_segPolicyInfo_temp = [];
            for (var i1 = 0; i1 < GetPolicy["policyList"].length; i1++) {
                frmPolicy_segPolicyInfo_temp.push({
                    "lblDwelling": "Dwelling: ",
                    "lblOtherStructuresValue": GetPolicy["policyList"][i1]["otherStructuresLimit"],
                    "lblPersonalLiabilityValue": GetPolicy["policyList"][i1]["personalLiability"],
                    "lblDwellingValue": GetPolicy["policyList"][i1]["dwellingLimit"],
                    "lblPersonalProperty": "Personal Property: ",
                    "lblPersonalLiability": "Personal Liability: ",
                    "lblPersonalPropertyValue": GetPolicy["policyList"][i1]["personalPropertyLimit"],
                    "lblLossOfUseValue": GetPolicy["policyList"][i1]["lossOfUseLimit"],
                    "lblSectionTwo": "Liability Coverages",
                    "lblOtherStructures": "Other Structures: ",
                    "lblMedPayToOthersValue": GetPolicy["policyList"][i1]["medicalPayToOthers"],
                    "lblSectionOne": "Property Coverage Limits",
                    "lblMedPayToOthers": "Medical Pay To Others: ",
                    "lblLossOfUse": "Loss of Use: "
                })
            }
            frmPolicy.segPolicyInfo.setData(frmPolicy_segPolicyInfo_temp);
        }
        kony.print("************ AFTER mappings...");
    }
};

function frmPolicy_frmPolicy_postshow_seq0(eventobject, neworientation) {
    var GetPolicy_inputparam = {};
    GetPolicy_inputparam["serviceID"] = "GetPolicy";
    GetPolicy_inputparam["httpheaders"] = {};
    GetPolicy_inputparam["httpconfigs"] = {};
    GetPolicy = appmiddlewareinvokerasync(GetPolicy_inputparam, frmPolicy_frmPolicy_postshow_seq1);
};

function addWidgetsfrmPolicy() {
    var vbox2098211745129 = new kony.ui.Box({
        "id": "vbox2098211745129",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 22,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox2098211745129.add();
    var vbox2098211745130 = new kony.ui.Box({
        "id": "vbox2098211745130",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 22,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox2098211745130.add();
    var hbox2098211745116 = new kony.ui.Box({
        "id": "hbox2098211745116",
        "isVisible": true,
        "skin": "hboxred",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745116.add(
    vbox2098211745129, vbox2098211745130);
    var lblDescription = new kony.ui.Label({
        "id": "lblDescription",
        "isVisible": true,
        "text": null,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 3
    }, {});
    var segPolicyInfobox = new kony.ui.Box({
        "id": "segPolicyInfobox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 60
    }, {});
    var segPolicyInfo = new kony.ui.SegmentedUI2({
        "id": "segPolicyInfo",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblDwelling": "lblDwelling",
            "lblOtherStructuresValue": "lblOtherStructuresValue",
            "lblPersonalLiabilityValue": "lblPersonalLiabilityValue",
            "hbox2098211745622": "hbox2098211745622",
            "lblDwellingValue": "lblDwellingValue",
            "lblPersonalLiability": "lblPersonalLiability",
            "lblPersonalProperty": "lblPersonalProperty",
            "lblPersonalPropertyValue": "lblPersonalPropertyValue",
            "lblLossOfUseValue": "lblLossOfUseValue",
            "lblSectionTwo": "lblSectionTwo",
            "hbox2098211745756": "hbox2098211745756",
            "lblOtherStructures": "lblOtherStructures",
            "lblMedPayToOthersValue": "lblMedPayToOthersValue",
            "hbox20982117452372": "hbox20982117452372",
            "hbox20982117452383": "hbox20982117452383",
            "lblMedPayToOthers": "lblMedPayToOthers",
            "lblSectionOne": "lblSectionOne",
            "lblLossOfUse": "lblLossOfUse",
            "hbox20982117452369": "hbox20982117452369",
            "hbox20982117452375": "hbox20982117452375"
        },
        "rowTemplate": segPolicyInfobox,
        "widgetSkin": "segWhite",
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
        "containerWeight": 60
    }, {});
    var lblSectionOne = new kony.ui.Label({
        "id": "lblSectionOne",
        "isVisible": true,
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {});
    var lblDwelling = new kony.ui.Label({
        "id": "lblDwelling",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 49
    }, {});
    var lblDwellingValue = new kony.ui.Label({
        "id": "lblDwellingValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 50
    }, {});
    var hbox20982117452369 = new kony.ui.Box({
        "id": "hbox20982117452369",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452369.add(
    lblDwelling, lblDwellingValue);
    var lblOtherStructures = new kony.ui.Label({
        "id": "lblOtherStructures",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 49
    }, {});
    var lblOtherStructuresValue = new kony.ui.Label({
        "id": "lblOtherStructuresValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 50
    }, {});
    var hbox20982117452372 = new kony.ui.Box({
        "id": "hbox20982117452372",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452372.add(
    lblOtherStructures, lblOtherStructuresValue);
    var lblPersonalProperty = new kony.ui.Label({
        "id": "lblPersonalProperty",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 49
    }, {});
    var lblPersonalPropertyValue = new kony.ui.Label({
        "id": "lblPersonalPropertyValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 50
    }, {});
    var hbox20982117452375 = new kony.ui.Box({
        "id": "hbox20982117452375",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452375.add(
    lblPersonalProperty, lblPersonalPropertyValue);
    var lblLossOfUse = new kony.ui.Label({
        "id": "lblLossOfUse",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 49
    }, {});
    var lblLossOfUseValue = new kony.ui.Label({
        "id": "lblLossOfUseValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 50
    }, {});
    var hbox2098211745756 = new kony.ui.Box({
        "id": "hbox2098211745756",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745756.add(
    lblLossOfUse, lblLossOfUseValue);
    var lblSectionTwo = new kony.ui.Label({
        "id": "lblSectionTwo",
        "isVisible": true,
        "skin": "lblRed"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 5
    }, {});
    var lblPersonalLiability = new kony.ui.Label({
        "id": "lblPersonalLiability",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 40
    }, {});
    var lblPersonalLiabilityValue = new kony.ui.Label({
        "id": "lblPersonalLiabilityValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 59
    }, {});
    var hbox20982117452383 = new kony.ui.Box({
        "id": "hbox20982117452383",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 5,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox20982117452383.add(
    lblPersonalLiability, lblPersonalLiabilityValue);
    var lblMedPayToOthers = new kony.ui.Label({
        "id": "lblMedPayToOthers",
        "isVisible": true,
        "skin": "lblBold"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 40
    }, {});
    var lblMedPayToOthersValue = new kony.ui.Label({
        "id": "lblMedPayToOthersValue",
        "isVisible": true,
        "skin": "lblBlack"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 59
    }, {});
    var hbox2098211745622 = new kony.ui.Box({
        "id": "hbox2098211745622",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 10,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox2098211745622.add(
    lblMedPayToOthers, lblMedPayToOthersValue);
    segPolicyInfobox.add(
    lblSectionOne, hbox20982117452369, hbox20982117452372, hbox20982117452375, hbox2098211745756, lblSectionTwo, hbox20982117452383, hbox2098211745622);
    frmPolicy.add(
    hbox2098211745116, lblDescription, segPolicyInfo);
};

function frmPolicyGlobals() {
    var MenuId = [];
    frmPolicy = new kony.ui.Form2({
        "id": "frmPolicy",
        "title": "PNC Insurance",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frmRed",
        "postShow": frmPolicy_frmPolicy_postshow_seq0,
        "addWidgets": addWidgetsfrmPolicy
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