"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[6084],{9894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(4848),a=t(8453);const o={},s="Prometheus and Grafana Setup",i={id:"run/logging-and-metrics/prometheus-grafana",title:"Prometheus and Grafana Setup",description:"Prometheus is an open-source monitoring system with efficient time series database and a modern alerting approach. Together with Grafana it's the recommended way to make sure that your node and validator(s) are performing correctly.",source:"@site/pages/run/logging-and-metrics/prometheus-grafana.md",sourceDirName:"run/logging-and-metrics",slug:"/run/logging-and-metrics/prometheus-grafana",permalink:"/lodestar/run/logging-and-metrics/prometheus-grafana",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/run/logging-and-metrics/prometheus-grafana.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proposer Configuration",permalink:"/lodestar/run/validator-management/proposer-config"},next:{title:"Client Monitoring",permalink:"/lodestar/run/logging-and-metrics/client-monitoring"}},d={},c=[{value:"Localized Docker Metrics Script",id:"localized-docker-metrics-script",level:2},{value:"Prometheus Setup",id:"prometheus-setup",level:2},{value:"Grafana Setup",id:"grafana-setup",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"prometheus-and-grafana-setup",children:"Prometheus and Grafana Setup"}),"\n",(0,r.jsx)(n.p,{children:"Prometheus is an open-source monitoring system with efficient time series database and a modern alerting approach. Together with Grafana it's the recommended way to make sure that your node and validator(s) are performing correctly."}),"\n",(0,r.jsx)(n.h2,{id:"localized-docker-metrics-script",children:"Localized Docker Metrics Script"}),"\n",(0,r.jsxs)(n.p,{children:["The Lodestar team has setup a script which will copy the latest dashboards compiled by our team for development purposes. By utilizing the script located in ",(0,r.jsx)(n.code,{children:"/docker/docker-compose.local_dev.sh"}),", you can instantly setup the latest dockerized metrics alongside your local beacon node."]}),"\n",(0,r.jsx)(n.h2,{id:"prometheus-setup",children:"Prometheus Setup"}),"\n",(0,r.jsxs)(n.p,{children:["To start, download Prometheus from ",(0,r.jsx)(n.a,{href:"https://prometheus.io/download/",children:"https://prometheus.io/download/"}),".\nUnzip the downloaded .zip file and run Prometheus from its installed location with the lodestar ",(0,r.jsx)(n.code,{children:"prometheus.yml"})," passed in as the configuration file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"./prometheus --config.file=$dataDir/prometheus.yml\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["8008 is also the default port specified in the ",(0,r.jsx)(n.code,{children:"prometheus.yml"})," in the lodestar repository"]})}),"\n",(0,r.jsx)(n.p,{children:"Then run the Lodestar beacon node with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"lodestar --metrics=true --metrics.port=8008\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to ",(0,r.jsx)(n.a,{href:"http://localhost:9090/",children:"http://localhost:9090/"})," in your browser to verify that Prometheus is monitoring Lodestar"]}),"\n",(0,r.jsx)(n.h2,{id:"grafana-setup",children:"Grafana Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Download and install Grafana from its official repository ",(0,r.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/installation/debian/",children:"https://grafana.com/docs/grafana/latest/installation/debian/"})]}),"\n",(0,r.jsxs)(n.p,{children:["Add Prometheus as a data source to Grafana ",(0,r.jsx)(n.a,{href:"https://prometheus.io/docs/visualization/grafana/#installing",children:"https://prometheus.io/docs/visualization/grafana/#installing"})]}),"\n",(0,r.jsx)(n.p,{children:"An example of relevant metrics of interest to monitor are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"nodejs_heap_space_size_used_bytes"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"nodejs_eventloop_lag_seconds"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"beaconchain_peers"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"beaconchain_current_slot"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"beaconchain_current_finalized_epoch"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);