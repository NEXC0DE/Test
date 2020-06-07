(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{D5MT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},p=c("PageDescription"),s=c("AnchorLinks"),d=c("AnchorLink"),l={_frontmatter:r},b=o.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(p,{mdxType:"PageDescription"},Object(n.b)("p",null,"The DataPower Operator deploys and manages configuration defined by the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource spec.")),Object(n.b)(s,{mdxType:"AnchorLinks"},Object(n.b)(d,{mdxType:"AnchorLink"},"Reconciliation"),Object(n.b)(d,{mdxType:"AnchorLink"},"Domains"),Object(n.b)(d,{mdxType:"AnchorLink"},"Users")),Object(n.b)("h2",null,"Reconciliation"),Object(n.b)("p",null,"The DataPower Operator will reconcile any ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource instance created or updated in the namespace(s) it watches. This means that when you create a new ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," instance, the DataPower Operator will see that new instance and begin to reconcile the requested configuration."),Object(n.b)("p",null,"Each ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," will be translated to a StatefulSet, which is created in the cluster in the same namespace the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," resides in. This StatefulSet will deploy the actual DataPower Pods. When updates are made to the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService"),", those changes are propagated to the StatefulSet automatically. When the StatefulSet is updated, it performs a rolling update to propagate any changes out to the DataPower Pods."),Object(n.b)("p",null,"This reconciliation behavior allows you to create a ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," instance which specifies (for example) a couple of ",Object(n.b)("inlineCode",{parentName:"p"},"users")," and ",Object(n.b)("inlineCode",{parentName:"p"},"domains"),", and then update the backing resources (Secrets, ConfigMaps, etc.) directly in the cluster. When those resources are updated in the cluster, the DataPower Operator will automatically pick those changes up and propogate them to the StatefulSet."),Object(n.b)("h2",null,"Domains"),Object(n.b)("p",null,"Each DataPower domain specified in the ",Object(n.b)("a",i({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowerservice/spec#domains"}),"domains")," property can be managed independently of the others. You can add, remove, or update any domain in the ",Object(n.b)("inlineCode",{parentName:"p"},"domains")," array, by modifying the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," instance in the cluster. For an in-depth look at what goes into configuring the ",Object(n.b)("inlineCode",{parentName:"p"},"domains")," property, see the ",Object(n.b)("a",i({parentName:"p"},{href:"/datapower-operator-doc/guides/domain-configuration"}),"Domain Configuration")," guide."),Object(n.b)("p",null,"While the domain structures can be updated in the ",Object(n.b)("inlineCode",{parentName:"p"},"domains")," property (such as defining new ConfigMaps, or adding entirely new domains), the resources which back the domains can also be updated directly in the cluster."),Object(n.b)("p",null,"For example, if the Secret resource referenced by a domain’s ",Object(n.b)("inlineCode",{parentName:"p"},"certs")," spec is updated to include new crypto material (such as new certs or keys), this will trigger a reconciliation of that domain to serialize the changes to the StatefulSet and DataPower Pods."),Object(n.b)("p",null,"Similarly, any ConfigMap referenced by the domain’s ",Object(n.b)("inlineCode",{parentName:"p"},"dpApp")," spec can be updated in-place, and this will cause the new configuration / files to be deployed to the StatefulSet."),Object(n.b)("h3",null,"Annotations"),Object(n.b)("p",null,"Annotations are added to the StatefulSet PodTemplate (and thus the Pods themselves) which provide metadata regarding when the last update was made to a particular domain:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),'datapower.ibm.com/domains.default.reconciled: "2020-06-04T02:36:55Z"\ndatapower.ibm.com/domains.testdomain.reconciled: "2020-06-04T02:36:55Z"\n')),Object(n.b)("p",null,"In the above example, you can see there are two configured domains, ",Object(n.b)("inlineCode",{parentName:"p"},"default")," and ",Object(n.b)("inlineCode",{parentName:"p"},"testdomain"),", with their respective reconciled timestamps."),Object(n.b)("h2",null,"Users"),Object(n.b)("p",null,"Similarly to domains, each user specified in the ",Object(n.b)("a",i({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowerservice/spec#users"}),"users")," property can be managed independently of the others. You can add, remove, or update any user in the ",Object(n.b)("inlineCode",{parentName:"p"},"users")," array, by modifying the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," instance in the cluster."),Object(n.b)("p",null,"While the user structures can be updated in the ",Object(n.b)("inlineCode",{parentName:"p"},"users")," property (such as changing the ",Object(n.b)("inlineCode",{parentName:"p"},"accessLevel")," or ",Object(n.b)("inlineCode",{parentName:"p"},"group"),"), the Secret specified by the ",Object(n.b)("inlineCode",{parentName:"p"},"passwordSecret")," can also be updated directly in the cluster."),Object(n.b)("p",null,"For example, if the Secret specified by a user’s ",Object(n.b)("inlineCode",{parentName:"p"},"passwordSecret")," is updated in the cluster, the DataPower Operator will reconcile this change to the StatefulSet, deploying the updated user configuration."),Object(n.b)("h3",null,"user-commands ConfigMap"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"accessLevel")," and ",Object(n.b)("inlineCode",{parentName:"p"},"group")," properties for each user are added to a ",Object(n.b)("inlineCode",{parentName:"p"},"user-commands")," ConfigMap, which is mounted to each DataPower Pod in the StatefulSet. The name of this ConfigMap in built by appending ",Object(n.b)("inlineCode",{parentName:"p"},"-user-commands")," to the ",Object(n.b)("inlineCode",{parentName:"p"},"name")," of the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," instance."),Object(n.b)("p",null,"Thus, if the ",Object(n.b)("inlineCode",{parentName:"p"},"accessLevel")," or ",Object(n.b)("inlineCode",{parentName:"p"},"group")," of an existing user is updated, or any users are added or removed from the ",Object(n.b)("inlineCode",{parentName:"p"},"users")," spec, this ConfigMap will also be updated."),Object(n.b)("h3",null,"Annotations"),Object(n.b)("p",null,"Annotations are added to the StatefulSet PodTemplate (and thus the Pods themselves) which provide metadata regarding when user configuration has been changed. There will be a single annotation for each user, by name, and then another annotation for the ",Object(n.b)("inlineCode",{parentName:"p"},"user-commands")," ConfigMap."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),'datapower.ibm.com/user.admin.reconciled: "2020-06-04T02:36:55Z"\ndatapower.ibm.com/username.commands.reconciled: "2020-06-04T02:36:55Z"\n')),Object(n.b)("p",null,"In the above example, you can see the ",Object(n.b)("inlineCode",{parentName:"p"},"admin")," user was reconciled at ",Object(n.b)("inlineCode",{parentName:"p"},"2020-06-04T02:36:55Z")," which aligns with the last update to the ",Object(n.b)("inlineCode",{parentName:"p"},"username-commands")," ConfigMap."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-features-config-mgmt-mdx-da0f548edc4b1d0cb725.js.map