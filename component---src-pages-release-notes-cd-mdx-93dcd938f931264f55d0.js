(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"M/nG":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return s}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var n=t("7ljp"),i=t("013z");t("qKvR");function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l,o={},b=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:o},p=i.a;function s(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(p,r({},c,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Release notes for CD releases.")),Object(n.b)("h2",null,"1.5.3"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.7"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Fix an issue preventing DataPower pods from scheduling on Kubernetes when running under the ",Object(n.b)("inlineCode",{parentName:"li"},"restricted")," PodSecurityPolicy."),Object(n.b)("li",{parentName:"ul"},"Fix an issue in the conversion webhook management which caused errors when more than one namespace-scope operator was installed on a cluster.")),Object(n.b)("h2",null,"1.5.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.4.0sr1"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-cd")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.6sr1"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Fix an issue relating to conversion webhook discovery causing unnecessary queries to the Kubernetes API server."),Object(n.b)("li",{parentName:"ul"},"Fix an issue which caused status updates of the ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," custom resource to overwrite existing status erroneously.")),Object(n.b)("h2",null,"1.5.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.6"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Fix an issue which prevented the use of the ",Object(n.b)("a",r({parentName:"li"},{href:"/features/webhooks#image-override"}),"conversion webhook image override"),".")),Object(n.b)("h2",null,"1.5.0"),Object(n.b)("h3",null,"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.4.0"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-cd")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Add Certificate Manager integration for ",Object(n.b)("inlineCode",{parentName:"li"},"operator")," and ",Object(n.b)("inlineCode",{parentName:"li"},"webhook")," pods. Note: requires ",Object(n.b)("inlineCode",{parentName:"li"},"v1.0")," cert-manager. For more info, see ",Object(n.b)("a",r({parentName:"li"},{href:"/install/prereqs#optional:-certificate-manager"}),"Certificate Manager"),"."),Object(n.b)("li",{parentName:"ul"},"Various improvements to the DataPower Monitor management of gateway-peering configurations to improve upgrade resiliency and overall stability."),Object(n.b)("li",{parentName:"ul"},"Add default NetworkPolicies for DataPowerService operand pods.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"In vanilla Kubernetes, an ",Object(n.b)("inlineCode",{parentName:"li"},"allow-all")," Ingress and Egress rule is created."),Object(n.b)("li",{parentName:"ul"},"In OpenShift (OCP), an ",Object(n.b)("inlineCode",{parentName:"li"},"allow-all")," Ingress is created."))),Object(n.b)("li",{parentName:"ul"},"Improve validating and mutating (default) webhook behavior by running these webhooks during reconciliation of DataPowerService custom resources."),Object(n.b)("li",{parentName:"ul"},"Add container probes to the conversion webhook pod."),Object(n.b)("li",{parentName:"ul"},"Various improvements to debug logging for troubleshooting.")),Object(n.b)("h3",null,"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix an issue where updating an ",Object(n.b)("inlineCode",{parentName:"li"},"extraExe")," ConfigMap does not trigger a rolling update of the DataPower StatefulSet."),Object(n.b)("li",{parentName:"ul"},"Fix an issue where the DataPowerService controller would attempt to modify an immutable field on the managed StatefulSet."),Object(n.b)("li",{parentName:"ul"},"Fix an issue where the DataPowerMonitor controller could leak an updater instance and continue trying to reconcile a CR which no longer exists."),Object(n.b)("li",{parentName:"ul"},"Fix an issue relating to the ",Object(n.b)("inlineCode",{parentName:"li"},"icp4i-od-store-cred")," Secret (used by ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#odtracing"}),"odTracing"),") which caused unnecessary rolling updates to the StatefulSet."),Object(n.b)("li",{parentName:"ul"},"Fix an issue relating to the defaulting of ",Object(n.b)("inlineCode",{parentName:"li"},"imagePullPolicy")," which caused unnecessary rolling updates to the StatefulSet.")),Object(n.b)("h2",null,"1.4.3"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.5"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),".")),Object(n.b)("h2",null,"1.4.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.3.0sr"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-cd")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Fix an issue which caused the StatefulSet to perform a rolling update immediately after becoming ",Object(n.b)("inlineCode",{parentName:"li"},"Ready"),"."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"developers-limited")," DataPower image is now hosted on IBM Container Registry at ",Object(n.b)("inlineCode",{parentName:"li"},"icr.io/integration/datapower/datapower-limited"),"."),Object(n.b)("li",{parentName:"ul"},"New ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-datapower-operator")," CASE, see ",Object(n.b)("a",r({parentName:"li"},{href:"/install/case"}),"Installation via CASE")," for details.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"mirror-images")," ",Object(n.b)("a",r({parentName:"li"},{href:"/install/case#4.-mirror-images"}),"action")," now requires a ",Object(n.b)("inlineCode",{parentName:"li"},"--groups")," argument to specify which DataPower images to mirror.")))),Object(n.b)("h2",null,"1.4.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.4"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Fix issue related to GID / UID of DataPower pods when running on vanilla Kubernetes.")),Object(n.b)("h2",null,"1.4.0"),Object(n.b)("p",null,"Starting with this release, all operator images are published to IBM Container Registry (",Object(n.b)("inlineCode",{parentName:"p"},"icr.io/cpopen"),") instead of Dockerhub (",Object(n.b)("inlineCode",{parentName:"p"},"docker.io/ibmcom"),")."),Object(n.b)("h3",null,"DataPowerService v1beta3 API"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for IBM DataPower Gateway firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.3.0"),"."),Object(n.b)("li",{parentName:"ul"},"New property ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#runAsRoot"}),Object(n.b)("inlineCode",{parentName:"a"},"runAsRoot"))," that allows for DataPower containers to be run as ",Object(n.b)("inlineCode",{parentName:"li"},"root")," user."),Object(n.b)("li",{parentName:"ul"},"New property ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#jaegertracing"}),Object(n.b)("inlineCode",{parentName:"a"},"jaegerTracing"))," for use with external collectors."),Object(n.b)("li",{parentName:"ul"},"New property ",Object(n.b)("a",r({parentName:"li"},{href:"/guides/domain-configuration#passphrasesecret"}),Object(n.b)("inlineCode",{parentName:"a"},"passphraseSecret"))," in the ",Object(n.b)("inlineCode",{parentName:"li"},"domains")," spec allows for ",Object(n.b)("inlineCode",{parentName:"li"},"domain-settings")," passphrase to be set, for ",Object(n.b)("inlineCode",{parentName:"li"},"password-alias")," decryption."),Object(n.b)("li",{parentName:"ul"},"New property ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#imagepullpolicy"}),Object(n.b)("inlineCode",{parentName:"a"},"imagePullPolicy"))," to set the IBM DataPower Gateway container’s image pull policy.")),Object(n.b)("h3",null,"Platform"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Minimum Kubernetes version is now ",Object(n.b)("inlineCode",{parentName:"li"},"1.19"),".")),Object(n.b)("h2",null,"1.3.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.1.3"),", available in the ",Object(n.b)("inlineCode",{parentName:"li"},"10.0-lts")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta3#channels"}),"channel"),"."),Object(n.b)("li",{parentName:"ul"},"Fix split-cluster issue related to gateway-peering in API Connect Gateway deployments.")),Object(n.b)("h2",null,"1.3.0"),Object(n.b)("h3",null,"v1beta3 API"),Object(n.b)("p",null,"This version brings a new ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta3")," version of the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," CRD, adding the following capabilities:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Horizontal and Vertical Pod Autoscaling"),Object(n.b)("li",{parentName:"ul"},"Kubernetes container lifecycle hooks"),Object(n.b)("li",{parentName:"ul"},"License acceptance enforcement during upgrade"),Object(n.b)("li",{parentName:"ul"},"Pause reconciliation for troubleshooting")),Object(n.b)("p",null,"Upon upgrading to ",Object(n.b)("inlineCode",{parentName:"p"},"1.3.0"),", any ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta2")," ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," instances will automatically be ",Object(n.b)("a",r({parentName:"p"},{href:"/features/api-migration#v1beta3-migration"}),"migrated")," to ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta3"),"."),Object(n.b)("p",null,"Note that only the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," CRD has updated to ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta3"),", the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerMonitor")," CRD remains at ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta2"),"."),Object(n.b)("h3",null,"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Conversion webhook management will automatically upgrade the conversion webhook runtime when necessary (such as upgrade from ",Object(n.b)("inlineCode",{parentName:"li"},"1.2.x")," to ",Object(n.b)("inlineCode",{parentName:"li"},"1.3.x"),")."),Object(n.b)("li",{parentName:"ul"},"Stricter validation for minimum CPU and Memory allocations for DataPower containers.")),Object(n.b)("h3",null,"Changes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Minimum CPU count for DataPower containers has been lowered to ",Object(n.b)("inlineCode",{parentName:"li"},"1"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The default CPU request for nonproduction containers is now ",Object(n.b)("inlineCode",{parentName:"li"},"1"),"."),Object(n.b)("li",{parentName:"ul"},"The default CPU request for production containers remains ",Object(n.b)("inlineCode",{parentName:"li"},"4"),"."))),Object(n.b)("li",{parentName:"ul"},"DataPowerService CPU request (",Object(n.b)("inlineCode",{parentName:"li"},"spec.resources.requests.cpu"),") now supports ",Object(n.b)("a",r({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes"}),"Kubernetes resource quantity")," formatting.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"This means that CPU can be requested using milli-CPU string, such as ",Object(n.b)("inlineCode",{parentName:"li"},"4000m")," for 4 cores."),Object(n.b)("li",{parentName:"ul"},"Partial CPU values (such as ",Object(n.b)("inlineCode",{parentName:"li"},"2500m")," are ",Object(n.b)("strong",{parentName:"li"},"not")," supported).")))),Object(n.b)("h3",null,"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fix ordering of application domain config initialization during DataPower container startup.")),Object(n.b)("h2",null,"1.1.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixes an issue relating to metering and licensing of DataPower Virtual Edition for Nonproduction, when deployed in IBM Cloud Pak for Integration."),Object(n.b)("li",{parentName:"ul"},"Fixes an issue relating to the ",Object(n.b)("inlineCode",{parentName:"li"},"storage.size")," property rendering in OCP Console UI, as well as IBM Cloud Pak for Integration Platform Navigator."),Object(n.b)("li",{parentName:"ul"},"Fixes an issue relating to the name generation and reconciliation of the ",Object(n.b)("inlineCode",{parentName:"li"},"username-commands")," ConfigMap created by the operator."),Object(n.b)("li",{parentName:"ul"},"Adds documentation ",Object(n.b)("inlineCode",{parentName:"li"},"links")," to the ",Object(n.b)("inlineCode",{parentName:"li"},"ClusterServiceVersion")," for both CRDs, as well as this documentation website."),Object(n.b)("li",{parentName:"ul"},"Conversion webhook management routine will now adopt orphaned webhook deployments if found during reconciliation.")),Object(n.b)("h2",null,"1.1.0"),Object(n.b)("h3",null,"v1beta2 APIs"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"1.1.0")," introduces a new ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta2")," API version, consisting of an ",Object(n.b)("strong",{parentName:"p"},"updated")," ",Object(n.b)("a",r({parentName:"p"},{href:"/apis/datapowerservice/v1beta2"}),Object(n.b)("inlineCode",{parentName:"a"},"DataPowerService"))," CustomResourceDefition (CRD), and a ",Object(n.b)("strong",{parentName:"p"},"new")," ",Object(n.b)("a",r({parentName:"p"},{href:"/apis/datapowermonitor/v1beta2"}),Object(n.b)("inlineCode",{parentName:"a"},"DataPowerMonitor"))," CRD."),Object(n.b)("p",null,"For more details on the (automatic) API migration process, see ",Object(n.b)("a",r({parentName:"p"},{href:"/features/api-migration"}),"API Migration"),"."),Object(n.b)("p",null,"With the new ",Object(n.b)("inlineCode",{parentName:"p"},"v1beta2")," API, the following changes have been made:"),Object(n.b)("h4",null,Object(n.b)("inlineCode",{parentName:"h4"},"DataPowerService")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removed ",Object(n.b)("inlineCode",{parentName:"li"},"dataPowerMonitor")," (replaced by ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerMonitor")," CRD)."),Object(n.b)("li",{parentName:"ul"},"Added support for custom ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta2#tolerations"}),Object(n.b)("inlineCode",{parentName:"a"},"tolerations")),"."),Object(n.b)("li",{parentName:"ul"},"Added support for custom ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta2#nodeselector"}),Object(n.b)("inlineCode",{parentName:"a"},"nodeSelector")),"."),Object(n.b)("li",{parentName:"ul"},"Added ",Object(n.b)("inlineCode",{parentName:"li"},"mgmtPorts")," to Custom Resource ",Object(n.b)("inlineCode",{parentName:"li"},"Status"),"."),Object(n.b)("li",{parentName:"ul"},"Changed the ",Object(n.b)("inlineCode",{parentName:"li"},"version")," ",Object(n.b)("a",r({parentName:"li"},{href:"/apis/datapowerservice/v1beta2#available-channels"}),"channel structure"),".")),Object(n.b)("h4",null,Object(n.b)("inlineCode",{parentName:"h4"},"DataPowerMonitor")),Object(n.b)("p",null,"See the API spec ",Object(n.b)("a",r({parentName:"p"},{href:"/apis/datapowermonitor/v1beta2"}),"here"),", and more information on the functionality ",Object(n.b)("a",r({parentName:"p"},{href:"/features/monitor"}),"here"),"."),Object(n.b)("h2",null,"1.0.2"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Add support for DataPower firmware version ",Object(n.b)("inlineCode",{parentName:"li"},"10.0.0.1"),"."),Object(n.b)("li",{parentName:"ul"},"Add support for DataPower Monitor version ",Object(n.b)("inlineCode",{parentName:"li"},"1.0.1"),"."),Object(n.b)("li",{parentName:"ul"},"Add DataPower init script to clean ",Object(n.b)("inlineCode",{parentName:"li"},"temporary:///config")," on boot.")),Object(n.b)("h2",null,"1.0.1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Several changes and enhancements to support deployment via IBM Cloud Pak for Integration, including:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A minimal ",Object(n.b)("inlineCode",{parentName:"li"},"ServiceAccount")," is generated for use by the StatefulSet is none is provided in the ",Object(n.b)("inlineCode",{parentName:"li"},"DataPowerService")," Custom Resource spec."),Object(n.b)("li",{parentName:"ul"},"Support for automatically using an ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," Secret to pull images from the IBM Container Registry."),Object(n.b)("li",{parentName:"ul"},"Labels and Annotations for Licensing and Metering of workloads, both standalone and within IBM Cloud Pak for Integration."),Object(n.b)("li",{parentName:"ul"},"Kibana dashboard support.")))),Object(n.b)("h2",null,"1.0.0"),Object(n.b)("p",null,"Initial release."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-cd-mdx-93dcd938f931264f55d0.js.map