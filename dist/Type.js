if(typeof exports!=="undefined")Object.defineProperty(exports,"babelPluginFlowReactPropTypes_proptype_PopupDialogType",{value:require("react").PropTypes.shape({dialogTitle:require("prop-types").any.isRequired,children:require("prop-types").any.isRequired})});if(typeof exports!=="undefined")Object.defineProperty(exports,"babelPluginFlowReactPropTypes_proptype_DialogType",{value:require("react").PropTypes.shape({width:require("prop-types").number,height:require("prop-types").number,haveOverlay:require("prop-types").bool.isRequired,overlayPointerEvents:require("prop-types").string,overlayBackgroundColor:require("prop-types").string,overlayOpacity:require("prop-types").number,dialogAnimation:require("prop-types").object,dialogStyle:require("prop-types").oneOfType([require("prop-types").object,require("prop-types").number]),animationDuration:require("prop-types").number,dismissOnTouchOutside:require("prop-types").bool,dismissOnHardwareBackPress:require("prop-types").bool,show:require("prop-types").bool,onShown:require("prop-types").func,onDismissed:require("prop-types").func,actions:require("prop-types").arrayOf(require("prop-types").any),children:require("prop-types").any.isRequired})});if(typeof exports!=="undefined")Object.defineProperty(exports,"babelPluginFlowReactPropTypes_proptype_DialogButtonType",{value:require("react").PropTypes.shape({text:require("prop-types").string.isRequired,onPress:require("prop-types").func.isRequired,align:require("prop-types").string,buttonStyle:require("prop-types").oneOfType([require("prop-types").object,require("prop-types").number]),textStyle:require("prop-types").oneOfType([require("prop-types").object,require("prop-types").number]),textContainerStyle:require("prop-types").oneOfType([require("prop-types").object,require("prop-types").number]),disabled:require("prop-types").bool,activeOpacity:require("prop-types").number})});if(typeof exports!=="undefined")Object.defineProperty(exports,"babelPluginFlowReactPropTypes_proptype_DialogTitleType",{value:require("react").PropTypes.shape({title:require("prop-types").oneOfType([require("prop-types").string,require("prop-types").number]).isRequired,titleStyle:require("prop-types").oneOfType([require("prop-types").object,require("prop-types").number]),titleTextStyle:require("prop-types").oneOfType([require("prop-types").object,require("prop-types").number]),titleAlign:require("prop-types").string,haveTitleBar:require("prop-types").bool})});if(typeof exports!=="undefined")Object.defineProperty(exports,"babelPluginFlowReactPropTypes_proptype_OverlayType",{value:require("react").PropTypes.shape({onPress:require("prop-types").func.isRequired,backgroundColor:require("prop-types").string,opacity:require("prop-types").number,animationDuration:require("prop-types").number,showOverlay:require("prop-types").bool,pointerEvents:require("prop-types").string})});