//>>built
define("esri/dijit/metadata/form/iso/gemet/gemet","dojo/_base/lang dojo/_base/array dojo/query dojo/has dijit/registry dojo/i18n!../../../nls/i18nIso ../../../../../kernel".split(" "),function(l,p,q,r,t,u,v){var k=null,n=null,a={bul:"bg",cze:"cs",dan:"da",dut:"nl",eng:"en",est:"et",fin:"fi",fre:"fr",ger:"de",gre:"el",hun:"hu",gle:"ga",ita:"it",lav:"lv",lit:"lt",mlt:"mt",pol:"pl",por:"pt",rum:"ro",slo:"sk",slv:"sl",spa:"es",swe:"sv"},h={getSelectedLanguage:function(e){var a=e.selectedIndex;return-1!==
a?e.options[a].value:"en"},getSessionConceptQuery:function(){return k},populateLanguages:function(e,k){var b,c,f=null,g=null,d=null,m=n;if("undefined"!=typeof m&&null!==m)f=m;else if(c=q("[data-gxe-path\x3d'/gmd:MD_Metadata/gmd:language/gmd:LanguageCode/@codeListValue']",e.rootDescriptor.domNode),c&&1===c.length&&(b=t.byNode(c[0]),b&&b.inputWidget))if(g=b.inputWidget.getInputValue(),g in a)f=a[g];else for(d in a)if(a.hasOwnProperty(d)&&a[d]===g){f=g;break}"undefined"!=typeof f&&null!==f||(f="en");
var h,l=k.options;b=[];c=u.gemet.languages;for(d in c)c.hasOwnProperty(d)&&(h=d===f,b.push(new Option(c[d],d,!1,h)));b.sort(function(a,e){return a.label===e.label?0:a.label>e.label?1:-1});p.forEach(b,function(a){l.add(a)})},saveSessionConceptQuery:function(a){k=a},saveSessionLanguage:function(a){n=a}};return r("extend-esri")&&l.setObject("dijit.metadata.form.iso.gemet.gemet",h,v),h});