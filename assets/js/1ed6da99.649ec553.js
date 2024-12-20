"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[3872],{7610:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(4848),o=s(8453);const r={},a="Frequently Asked Questions",i={id:"faqs",title:"Frequently Asked Questions",description:"This section of the documentation will cover common questions and common encounters by users and developers.",source:"@site/pages/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/lodestar/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/faqs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Specification Tests",permalink:"/lodestar/contribution/testing/spec-tests"}},c={},d=[{value:"Tooling",id:"tooling",level:2},{value:"Troubleshooting Lodestar",id:"troubleshooting-lodestar",level:2},{value:"Running a beacon node",id:"running-a-beacon-node",level:3},{value:"Using Kubernetes",id:"using-kubernetes",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,t.jsx)(n.p,{children:"This section of the documentation will cover common questions and common encounters by users and developers."}),"\n",(0,t.jsx)(n.h2,{id:"tooling",children:"Tooling"}),"\n",(0,t.jsxs)(n.admonition,{title:'"Package manager issues"',type:"note",children:[(0,t.jsxs)(n.p,{children:["Lodestar relies on ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/corepack.html",children:"Corepack"})," and associated ",(0,t.jsx)(n.code,{children:"packageManager"})," value to manage its package manager version."]}),(0,t.jsxs)(n.p,{children:["Make sure ",(0,t.jsx)(n.code,{children:"corepack"})," is correctly enabled if you encounter some package manager related issues:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"corepack enable\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting-lodestar",children:"Troubleshooting Lodestar"}),"\n",(0,t.jsx)(n.h3,{id:"running-a-beacon-node",children:"Running a beacon node"}),"\n",(0,t.jsxs)(n.admonition,{title:'"Heap memory limit"',type:"note",children:[(0,t.jsxs)(n.p,{children:["Lodestar beacon node requires at least 8GB of heap space. While the ",(0,t.jsx)(n.code,{children:"lodestar"})," script and the official docker image correctly sets the appropriate value, it might be necessary to manually set it for some specific scenario."]}),(0,t.jsxs)(n.p,{children:["The simplest way to achieve this is via the ",(0,t.jsx)(n.code,{children:"NODE_OPTIONS"})," environment variable or by passing ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",children:(0,t.jsx)(n.code,{children:"--max-old-space-size"})})," directly to the node binary"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NODE_OPTIONS: --max-old-space-size=8192\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"using-kubernetes",children:"Using Kubernetes"}),"\n",(0,t.jsxs)(n.admonition,{title:'"Unknown arguments error"',type:"note",children:[(0,t.jsxs)(n.p,{children:["Lodestar reads all environment variables prefixed with ",(0,t.jsx)(n.code,{children:"LODESTAR"})," and will try to parse\nthem similar to command line arguments, meaning any unknown argument will cause an error."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"\u2716 Unknown arguments: servicePort, servicePortEthConsensusP2p,\nport9000Tcp, port9000TcpPort, port9000TcpProto, port9000TcpAddr, serviceHost\n"})}),(0,t.jsxs)(n.p,{children:["The extra arguments are present because Kubernetes automatically\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#environment-variables",children:"adds environment variables"}),"\nto the Pod based on the name (",(0,t.jsx)(n.code,{children:"metadata.name"}),") defined in the associated ",(0,t.jsx)(n.code,{children:"Service"}),".\nTo resolve the issue, this name has to be changed to something that does not start with ",(0,t.jsx)(n.code,{children:"lodestar"}),"."]}),(0,t.jsxs)(n.p,{children:["Reference Issue: ",(0,t.jsx)(n.a,{href:"https://github.com/ChainSafe/lodestar/issues/6045",children:"#6045"})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);