(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{nnKn:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return d}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var a=t("7ljp"),i=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var r={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",n)}},s=l("PageDescription"),c=l("AnchorLinks"),b=l("AnchorLink"),p=l("InlineNotification"),u={_frontmatter:r},m=i.a;function d(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(m,o({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"Ensure your environment meets the following requirements prior to installing the DataPower Operator and deploying Custom Resources.")),Object(a.b)(c,{small:!0,mdxType:"AnchorLinks"},Object(a.b)(b,{mdxType:"AnchorLink"},"Container environment"),Object(a.b)(b,{mdxType:"AnchorLink"},"Resource requirements"),Object(a.b)(b,{mdxType:"AnchorLink"},"Cluster-scope permissions"),Object(a.b)(b,{mdxType:"AnchorLink"},"Optional: PodSecurityPolicy"),Object(a.b)(b,{mdxType:"AnchorLink"},"Optional: SecurityContextConstraints"),Object(a.b)(b,{mdxType:"AnchorLink"},"Optional: Multiple Failure Zones"),Object(a.b)(b,{mdxType:"AnchorLink"},"Optional: Vertical Pod Autoscaler")),Object(a.b)("h2",null,"Container environment"),Object(a.b)("h3",null,"Supported platforms"),Object(a.b)("p",null,"The DataPower Operator currently supports:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"OpenShift Container Platform (OCP) 4.6+"),Object(a.b)("li",{parentName:"ul"},"Kubernetes 1.17+")),Object(a.b)("h3",null,"Worker node configuration"),Object(a.b)("p",null,"Installation of the DataPower Operator does not support adding Tolerations to the Operator Deployment resource out-of-the-box. To install properly, there must be one worker in the desired availability zone that is not tainted. If Tolerations are nonnegotiable, you can install the DataPower Operator using the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/IBM/datapower-operator-chart"}),"helm chart")," and add the Tolerations to the Deployment template manually."),Object(a.b)("h2",null,"Resource requirements"),Object(a.b)("h3",null,"Operator"),Object(a.b)("p",null,"The DataPower Operator’s ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment")," uses the following resource spec:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-yaml"}),'resources:\n  requests:\n    cpu: "500m"\n    memory: "512Mi"\n  limits:\n    cpu: 2\n    memory: "2Gi"\n')),Object(a.b)("p",null,"For more information on what this spec means, see ",Object(a.b)("a",o({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"}),"Managing Resources for Containers"),"."),Object(a.b)("h3",null,"Operand"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("strong",{parentName:"li"},"minimum")," resource requirements for a single DataPower container are 1 CPU and 4 GB memory."),Object(a.b)("li",{parentName:"ul"},"For API Connect workloads, a minimum of 8 GB of memory is required per container."),Object(a.b)("li",{parentName:"ul"},"For production high-availability, a minimum of 3 replicas (one per node) are recommended.")),Object(a.b)("p",null,"See also: ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/support/pages/node/613133"}),"System requirements for IBM DataPower Gateways")),Object(a.b)("h2",null,"Cluster-scope permissions"),Object(a.b)("p",null,"The DataPower Operator requires the following cluster-scope permissions. These are brought in by a ",Object(a.b)("inlineCode",{parentName:"p"},"ClusterRole")," and bound to the operator’s ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceAccount")," via ",Object(a.b)("inlineCode",{parentName:"p"},"ClusterRoleBinding"),"."),Object(a.b)("p",null,"Permissions to manage CustomResourceDefinition defaulting and validating webhooks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: ",Object(a.b)("inlineCode",{parentName:"li"},"admissionregistration.k8s.io")),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"mutatingwebhookconfigurations"),", ",Object(a.b)("inlineCode",{parentName:"li"},"validatingwebhookconfigurations")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"create"),", ",Object(a.b)("inlineCode",{parentName:"li"},"delete"),", ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"list"),", ",Object(a.b)("inlineCode",{parentName:"li"},"patch"),", ",Object(a.b)("inlineCode",{parentName:"li"},"update"),", ",Object(a.b)("inlineCode",{parentName:"li"},"watch"))),Object(a.b)("p",null,"Permissions needed for reconciliation of admission controllers (webhooks):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: ",Object(a.b)("inlineCode",{parentName:"li"},"rbac.authorization.k8s.io")),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"clusterroles"),", ",Object(a.b)("inlineCode",{parentName:"li"},"clusterrolebindings")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"list"))),Object(a.b)("p",null,"Permissions needed for management of owned CustomResourceDefinitions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: ",Object(a.b)("inlineCode",{parentName:"li"},"apiextensions.k8s.io")),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"customresourcedefinitions")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"update"))),Object(a.b)("p",null,"Permissions needed for management of conversion webhook, which can exist in other namespaces:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: (none)"),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"namespaces")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"list"))),Object(a.b)("p",null,"Permissions needed for management of conversion webhook, which can exist in other namespaces:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: (none)"),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"services"),", ",Object(a.b)("inlineCode",{parentName:"li"},"secrets")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"create"),", ",Object(a.b)("inlineCode",{parentName:"li"},"delete"),", ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"list"),", ",Object(a.b)("inlineCode",{parentName:"li"},"patch"),", ",Object(a.b)("inlineCode",{parentName:"li"},"update"),", ",Object(a.b)("inlineCode",{parentName:"li"},"watch"))),Object(a.b)("p",null,"Permissions needed for management of conversion webhook, which can exist in other namespaces:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: ",Object(a.b)("inlineCode",{parentName:"li"},"apps")),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"deployments")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"create"),", ",Object(a.b)("inlineCode",{parentName:"li"},"delete"),", ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"list"),", ",Object(a.b)("inlineCode",{parentName:"li"},"patch"),", ",Object(a.b)("inlineCode",{parentName:"li"},"update"),", ",Object(a.b)("inlineCode",{parentName:"li"},"watch"))),Object(a.b)("p",null,"Permissions needed for conversion webhook implementation across namespaces:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: ",Object(a.b)("inlineCode",{parentName:"li"},"datapower.ibm.com")),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"*")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"create"),", ",Object(a.b)("inlineCode",{parentName:"li"},"delete"),", ",Object(a.b)("inlineCode",{parentName:"li"},"get"),", ",Object(a.b)("inlineCode",{parentName:"li"},"list"),", ",Object(a.b)("inlineCode",{parentName:"li"},"patch"),", ",Object(a.b)("inlineCode",{parentName:"li"},"update"),", ",Object(a.b)("inlineCode",{parentName:"li"},"watch"))),Object(a.b)("p",null,"Permissions needed for OCP platform related checks:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"API Groups: ",Object(a.b)("inlineCode",{parentName:"li"},"config.openshift.io")),Object(a.b)("li",{parentName:"ul"},"Resources: ",Object(a.b)("inlineCode",{parentName:"li"},"clusterversions")),Object(a.b)("li",{parentName:"ul"},"Verbs: ",Object(a.b)("inlineCode",{parentName:"li"},"get"))),Object(a.b)("h2",null,"Optional: PodSecurityPolicy"),Object(a.b)("p",null,"The DataPower Operator is expected to work as-is with the standard ",Object(a.b)("inlineCode",{parentName:"p"},"restricted")," PodSecurityPolicy; however, if you wish to leverage a more restrictive policy the following can be used."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: ibm-datapower-operator-restricted-psp\nspec:\n  allowPrivilegeEscalation: false\n  forbiddenSysctls:\n    - '*'\n  hostNetwork: false\n  hostPorts: false\n  requiredDropCapabilities:\n    - ALL\n  runAsUser:\n    rule: MustRunAsNonRoot\n  seLinux:\n    rule: RunAsAny\n  volumes:\n    - configMap\n    - emptyDir\n    - projected\n    - secret\n    - downwardAPI\n    - persistentVolumeClaim\n")),Object(a.b)("h2",null,"Optional: SecurityContextConstraints"),Object(a.b)("p",null,"The DataPower Operator is expected to work as-is with the standard ",Object(a.b)("inlineCode",{parentName:"p"},"restricted")," SecurityContextConstraints; however, if you wish to leverage a more restrictive constraints the following can be used."),Object(a.b)(p,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," This is only applicable to OpenShift (OCP) clusters.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"kind: SecurityContextConstraints\napiVersion: v1\nmetadata:\n  name: ibm-datapower-operator-scc\nallowHostDirVolumePlugin: false\nallowHostIPC: false\nallowHostNetwork: false\nallowHostPID: false\nallowHostPorts: false\nallowPrivilegeEscalation: false\nallowPrivilegedContainer: false\nallowedCapabilities: null\napiVersion: security.openshift.io/v1\ndefaultAddCapabilities: null\ngroups:\n  - system:authenticated\npriority: null\nreadOnlyRootFilesystem: false\nrequiredDropCapabilities:\n  - ALL\nrunAsUser:\n  type: MustRunAsNonRoot\nseLinuxContext:\n  type: RunAsAny\nusers: []\nvolumes:\n  - configMap\n  - downwardAPI\n  - emptyDir\n  - persistentVolumeClaim\n  - projected\n  - secret\n")),Object(a.b)("h2",null,"Optional: Multiple Failure Zones"),Object(a.b)("p",null,"The DataPower Operator ",Object(a.b)("inlineCode",{parentName:"p"},"Deployment")," is designed to pods evenly across multiple Kubernetes zones. To take advantage of this functionality, follow the ",Object(a.b)("a",o({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/#prerequisites"}),"prerequisites")," for Pod Topology Spread Constraints."),Object(a.b)("p",null,"With ",Object(a.b)("inlineCode",{parentName:"p"},"EvenPodsSpread")," enabled in the cluster, no more than one DataPower Operator pod will be deployed per zone. If ",Object(a.b)("inlineCode",{parentName:"p"},"replicaCount")," is higher than the number of available zones, the remaining replicas will not be scheduled."),Object(a.b)("h2",null,"Optional: Vertical Pod Autoscaler"),Object(a.b)("p",null,"The DataPower Operator supports ",Object(a.b)("a",o({parentName:"p"},{href:"/datapower-operator-doc/features/pod-auto-scaling"}),"Vertical Pod Autoscaling")," of the DataPowerService operand. If you wish to utilize this functionality, the Vertical Pod Autoscaler must be first installed and configured in your Kubernetes or OpenShift cluster."),Object(a.b)("h3",null,"Installing on Kubernetes"),Object(a.b)("p",null,"For traditional Kubernetes clusters, reference the Kubernetes ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler#installation"}),"documentation")," for installation."),Object(a.b)("h3",null,"Installing on OpenShift"),Object(a.b)("p",null,"For OpenShift clusters, reference the OpenShift ",Object(a.b)("a",o({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.6/nodes/pods/nodes-pods-vertical-autoscaler.html"}),"documentation")," for installation."),Object(a.b)("h3",null,"Configure RBAC"),Object(a.b)("p",null,"To enable the VPA to provide scaling recommendations for the DataPowerService operand, a ",Object(a.b)("inlineCode",{parentName:"p"},"ClusterRole")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," must be created and links to the ",Object(a.b)("inlineCode",{parentName:"p"},"vpa-recommender")," Service Account installed with VPA."),Object(a.b)("p",null,"Depending on whether you are installing on normal Kubernetes or OpenShift (OCP), the ",Object(a.b)("inlineCode",{parentName:"p"},"namespace")," of the ",Object(a.b)("inlineCode",{parentName:"p"},"vpa-recommender")," Service Account may vary. For Kubernetes, it is most likely ",Object(a.b)("inlineCode",{parentName:"p"},"kube-system"),", and for OCP it is most likely ",Object(a.b)("inlineCode",{parentName:"p"},"openshift-vertical-pod-autoscaler"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Determine the namespace of the ",Object(a.b)("inlineCode",{parentName:"p"},"vpa-recommender")," Service Account. If you are not sure, you can find it with the following:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{}),"$ kubectl get sa --all-namespaces | grep vpa-recommender\nopenshift-vertical-pod-autoscaler                  vpa-recommender                            2         177m\n")),Object(a.b)("p",{parentName:"li"},"The first column indicates the namespace, i.e. ",Object(a.b)("inlineCode",{parentName:"p"},"openshift-vertical-pod-autoscaler"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create the ",Object(a.b)("inlineCode",{parentName:"p"},"ClusterRole")," resource, using the following YAML:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"kind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: datapower-operator-vpa-recommender\nrules:\n- apiGroups:\n  - datapower.ibm.com\n  resources:\n  - datapowerservices/scale\n  verbs:\n  - get\n  - watch\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create the ",Object(a.b)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," resource, using the following YAML as a template. The ",Object(a.b)("inlineCode",{parentName:"p"},"namespace")," under ",Object(a.b)("inlineCode",{parentName:"p"},"subjects")," must match the namespace determined in Step 1."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"kind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: datapower-operator-vpa-recommender\nsubjects:\n- kind: ServiceAccount\n  name: vpa-recommender\n  namespace: openshift-vertical-pod-autoscaler\nroleRef:\n  kind: ClusterRole\n  name: datapower-operator-vpa-recommender\n  apiGroup: rbac.authorization.k8s.io\n")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-install-prereqs-mdx-7e1db4e1a0041047c4c7.js.map