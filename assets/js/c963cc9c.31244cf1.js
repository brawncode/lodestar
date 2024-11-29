"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[3208],{352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(4848),i=t(8453);const a={},s="External Signer",l={id:"run/validator-management/external-signer",title:"External Signer",description:"Lodestar supports connecting an external signing server like Web3Signer, Diva,",source:"@site/pages/run/validator-management/external-signer.md",sourceDirName:"run/validator-management",slug:"/run/validator-management/external-signer",permalink:"/lodestar/run/validator-management/external-signer",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/run/validator-management/external-signer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/lodestar/run/validator-management/validator-cli"},next:{title:"Proposer Configuration",permalink:"/lodestar/run/validator-management/proposer-config"}},o={},c=[{value:"Configuration",id:"configuration",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"external-signer",children:"External Signer"}),"\n",(0,r.jsxs)(n.p,{children:["Lodestar supports connecting an external signing server like ",(0,r.jsx)(n.a,{href:"https://docs.web3signer.consensys.io/",children:"Web3Signer"}),", ",(0,r.jsx)(n.a,{href:"https://docs.shamirlabs.org/",children:"Diva"}),",\nor any other service implementing the ",(0,r.jsx)(n.a,{href:"https://github.com/ethereum/remote-signing-api",children:"remote signing specification"}),". This allows the validator client\nto operate without storing any validator private keys locally by delegating the signing of messages (e.g. attestations, beacon blocks) to the external signer\nwhich is accessed through a ",(0,r.jsx)(n.a,{href:"https://ethereum.github.io/remote-signing-api/",children:"REST API"})," via HTTP(S). This API should not be exposed directly to the public\nInternet and appropriate firewall rules should be in place to restrict access only from the validator client."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Lodestar provides ",(0,r.jsx)(n.a,{href:"/lodestar/run/validator-management/validator-cli#--externalsignerurl",children:"CLI options"})," to connect an external signer."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'./lodestar validator --externalSigner.url "http://localhost:9000" --externalSigner.fetch\n'})}),"\n",(0,r.jsx)(n.p,{children:"The validator client will fetch the list of public keys from the external signer and automatically keep them in sync with signers in local validator store\nby adding newly discovered public keys and removing no longer present public keys on external signer."}),"\n",(0,r.jsxs)(n.p,{children:["By default, the list of public keys will be fetched from the external signer once per epoch (6.4 minutes). This interval can be configured by setting ",(0,r.jsx)(n.a,{href:"/lodestar/run/validator-management/validator-cli#--externalsignerfetchinterval",children:(0,r.jsx)(n.code,{children:"--externalSigner.fetchInterval"})})," flag which takes a number in milliseconds."]}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, if it is not desired to use all public keys imported on the external signer, it is also possible to explicitly specify a list of public keys to use\nby setting the ",(0,r.jsx)(n.a,{href:"/lodestar/run/validator-management/validator-cli#--externalsignerpubkeys",children:(0,r.jsx)(n.code,{children:"--externalSigner.pubkeys"})})," flag instead of ",(0,r.jsx)(n.a,{href:"/lodestar/run/validator-management/validator-cli#--externalsignerfetch",children:(0,r.jsx)(n.code,{children:"--externalSigner.fetch"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);