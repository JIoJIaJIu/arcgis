//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/constraints/templates/MD_SecurityConstraints.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\n    data-dojo-props\x3d"target:\'gmd:MD_SecurityConstraints\',minOccurs:0"\x3e\n      \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'gmd:useLimitation\',minOccurs:0,maxOccurs:\'unbounded\',\n        label:\'${i18nIso.MD_Constraints.useLimitation}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n        data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\n      data-dojo-props\x3d"target:\'gmd:classification\',\n        label:\'${i18nIso.MD_SecurityConstraints.classification}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/MD_ClassificationCode"\x3e\x3c/div\x3e\n    \x3c/div\x3e  \n     \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'gmd:userNote\',minOccurs:0,\n        label:\'${i18nIso.MD_SecurityConstraints.userNote}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n        data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'gmd:classificationSystem\',minOccurs:0,\n        label:\'${i18nIso.MD_SecurityConstraints.classificationSystem}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n        data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'gmd:handlingDescription\',minOccurs:0,\n        label:\'${i18nIso.MD_SecurityConstraints.handlingDescription}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n        data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n\n  \x3c/div\x3e\n  \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/constraints/MD_SecurityConstraints","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ./MD_ClassificationCode dojo/text!./templates/MD_SecurityConstraints.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.constraints.MD_SecurityConstraints",
a,f),a});