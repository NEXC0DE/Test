(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{lftM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l,o={},b=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:o},s=i.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Release notes for EUS releases.")),Object(n.b)("h2",null,"1.2.9"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.7"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-eus")," and ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#channels"}),"channels"),"."),Object(n.b)("li",{parentName:"ul"},"Fix an issue preventing DataPower pods from scheduling on Kubernetes when running under the ",Object(n.b)("inlineCode",{parentName:"li"},"restricted")," PodSecurityPolicy."),Object(n.b)("li",{parentName:"ul"},"Fix an issue in the conversion webhook management which caused errors when more than one namespace-scope operator was installed on a cluster.")),Object(n.b)("h2",null,"1.2.8"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.6sr1"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-eus")," and ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#channels"}),"channels"),"."),Object(n.b)("li",{parentName:"ul"},"Fix an issue relating to conversion webhook discovery causing unnecessary queries to the Kubernetes API server."),Object(n.b)("li",{parentName:"ul"},"Fix an issue which caused status updates of the ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," custom resource to overwrite existing status erroneously."),Object(n.b)("li",{parentName:"ul"},"Fix an issue relating to how the operator registers its custom resources for serving metrics.")),Object(n.b)("h2",null,"1.2.7"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.6"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-eus")," and ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#channels"}),"channels"),".")),Object(n.b)("h2",null,"1.2.6"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix an issue relating to ",Object(n.b)("inlineCode",{parentName:"li"},"odTracing")," agent container args.")),Object(n.b)("h2",null,"1.2.5"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.5"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-eus")," and ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#channels"}),"channels"),"."),Object(n.b)("li",{parentName:"ul"},"Fix an issue which caused the StatefulSet to perform a rolling update immediately after becoming ",Object(n.b)("inlineCode",{parentName:"li"},"Ready"),"."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"developers-limited")," DataPower image is now hosted on IBM Container Registry at ",Object(n.b)("inlineCode",{parentName:"li"},"icr.io/integration/datapower/datapower-limited"),"."),Object(n.b)("li",{parentName:"ul"},"New ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-datapower-operator")," CASE, see ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/install/case"}),"Installation via CASE")," for details.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"mirror-images")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/install/case#4.-mirror-images"}),"action")," now requires a ",Object(n.b)("inlineCode",{parentName:"li"},"--groups")," argument to specify which DataPower images to mirror.")))),Object(n.b)("h2",null,"1.2.4"),Object(n.b)("p",null,"Starting with this release, all operator images are published to IBM Container Registry (",Object(n.b)("inlineCode",{parentName:"p"},"icr.io/cpopen"),") instead of Dockerhub (",Object(n.b)("inlineCode",{parentName:"p"},"docker.io/ibmcom"),")."),Object(n.b)("h3",null,"Operator"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Use a non-root user for conversion webhook deployment.")),Object(n.b)("h3",null,"DataPowerService"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.4"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-eus")," and ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#channels"}),"channels"),"."),Object(n.b)("li",{parentName:"ul"},"Add support for ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#lifecycle"}),"lifecycle")," to ",Object(n.b)("inlineCode",{parentName:"li"},"v1beta2")," DataPowerService."),Object(n.b)("li",{parentName:"ul"},"Fix issue related to GID / UID of DataPower pods when running on vanilla Kubernetes."),Object(n.b)("li",{parentName:"ul"},"Fix volumeMount name generation when ",Object(n.b)("inlineCode",{parentName:"li"},"domain")," name contains underscores (",Object(n.b)("inlineCode",{parentName:"li"},"_"),")."),Object(n.b)("li",{parentName:"ul"},"Fix backtrace persistence across DataPower pod restarts.")),Object(n.b)("h3",null,"DataPowerMonitor"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Ignore Gateway Peering configurations which have peering disabled.")),Object(n.b)("h2",null,"1.2.3"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.3"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-eus")," and ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/apis/datapowerservice/v1beta2#channels"}),"channels"),"."),Object(n.b)("li",{parentName:"ul"},"Conversion webhook management will now upgrade conversion webhook Deployment as part of operator upgrade."),Object(n.b)("li",{parentName:"ul"},"Fix split-cluster issue related to gateway-peering in API Connect Gateway deployments."),Object(n.b)("li",{parentName:"ul"},"Fix reconciliation of ",Object(n.b)("inlineCode",{parentName:"li"},"spec.labels")," in ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," custom resource instances."),Object(n.b)("li",{parentName:"ul"},"Fix ",Object(n.b)("inlineCode",{parentName:"li"},"status.mgmtPorts")," update behavior when StatefulSet is not ",Object(n.b)("inlineCode",{parentName:"li"},"Ready"),"."),Object(n.b)("li",{parentName:"ul"},"Fix DataPower config initialization sequence and behavior."),Object(n.b)("li",{parentName:"ul"},"Fix an issue related to capital domain names.")),Object(n.b)("h2",null,"1.2.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.2"),"."),Object(n.b)("li",{parentName:"ul"},"Fix issue relating to ",Object(n.b)("inlineCode",{parentName:"li"},"temporary:///")," file system cleanup during DataPower pod initialization."),Object(n.b)("li",{parentName:"ul"},"Update Go to address CVEs: CVE-2020-28367, CVE-2020-28366, CVE-2020-28362.")),Object(n.b)("h2",null,"1.2.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix Pod Topology Spread Constraints.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Set ",Object(n.b)("inlineCode",{parentName:"li"},"topologyKey")," to well-known “zone” label ",Object(n.b)("inlineCode",{parentName:"li"},"topology.kubernetes.io/zone"),"."),Object(n.b)("li",{parentName:"ul"},"Set ",Object(n.b)("inlineCode",{parentName:"li"},"whenUnsatisfiable")," to ",Object(n.b)("inlineCode",{parentName:"li"},"ScheduleAnyway")," to avoid blocked scheduling.")))),Object(n.b)("h2",null,"1.2.0"),Object(n.b)("h3",null,"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for ",Object(n.b)("inlineCode",{parentName:"li"},"datapower-cp4i")," image, see ",Object(n.b)("a",r({parentName:"li"},{href:"/datapower-operator-doc/features/entitled-registry#image-selection"}),"Image selection")," and ",Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SS9H2Y_10.0/com.ibm.dp.doc/icp4i.html"}),"Cloud Pak for Integration: Gateway runtime"),"."),Object(n.b)("li",{parentName:"ul"},"Add support for DataPower version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.1"),"."),Object(n.b)("li",{parentName:"ul"},"Add support for Cloud Pak for Integration 2020.4.1 EUS release."),Object(n.b)("li",{parentName:"ul"},"Pod scheduling errors are now raised as ",Object(n.b)("inlineCode",{parentName:"li"},"Conditions")," on the ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," instance.")),Object(n.b)("h3",null,"Changes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," CR names are now limited to 52 characters.")),Object(n.b)("h3",null,"Deprecated"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"storage.volumeMode")," is deprecated, and will now always be set to ",Object(n.b)("inlineCode",{parentName:"li"},"Filesystem")," for ",Object(n.b)("inlineCode",{parentName:"li"},"persistent")," storage requests.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If set to ",Object(n.b)("inlineCode",{parentName:"li"},"Block")," previously, the CR will be migrated to use ",Object(n.b)("inlineCode",{parentName:"li"},"Filesystem")," instead, automatically.")))),Object(n.b)("h3",null,"Platform"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Minimum OCP version is now 4.6."),Object(n.b)("li",{parentName:"ul"},"Minimum Kubernetes version is now 1.17.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-eus-mdx-c31e68bb2c88c9c6b1ed.js.map