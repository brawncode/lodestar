"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[8492],{2151:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>t});var d=i(4848),c=i(8453);const l={title:"CLI Reference"},r="beacon CLI Command",s={id:"run/beacon-management/beacon-cli",title:"CLI Reference",description:"Run a beacon chain node",source:"@site/pages/run/beacon-management/beacon-cli.md",sourceDirName:"run/beacon-management",slug:"/run/beacon-management/beacon-cli",permalink:"/lodestar/run/beacon-management/beacon-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/run/beacon-management/beacon-cli.md",tags:[],version:"current",frontMatter:{title:"CLI Reference"},sidebar:"tutorialSidebar",previous:{title:"Starting a Node",permalink:"/lodestar/run/beacon-management/starting-a-node"},next:{title:"Data Retention",permalink:"/lodestar/run/beacon-management/data-retention"}},o={},t=[{value:"Examples",id:"examples",level:2},{value:"<code>beacon</code> Options",id:"beacon-options",level:2},{value:"<code>--dataDir</code>",id:"--datadir",level:4},{value:"<code>--network</code>",id:"--network",level:4},{value:"<code>--paramsFile</code>",id:"--paramsfile",level:4},{value:"<code>--rcConfig</code>",id:"--rcconfig",level:4},{value:"<code>--terminal-total-difficulty-override</code>",id:"--terminal-total-difficulty-override",level:4},{value:"<code>--terminal-block-hash-override</code>",id:"--terminal-block-hash-override",level:4},{value:"<code>--terminal-block-hash-epoch-override</code>",id:"--terminal-block-hash-epoch-override",level:4},{value:"<code>--genesisStateFile</code>",id:"--genesisstatefile",level:4},{value:"<code>--checkpointSyncUrl</code>",id:"--checkpointsyncurl",level:4},{value:"<code>--checkpointState</code>",id:"--checkpointstate",level:4},{value:"<code>--wssCheckpoint</code>",id:"--wsscheckpoint",level:4},{value:"<code>--forceCheckpointSync</code>",id:"--forcecheckpointsync",level:4},{value:"<code>--ignoreWeakSubjectivityCheck</code>",id:"--ignoreweaksubjectivitycheck",level:4},{value:"<code>--persistNetworkIdentity</code>",id:"--persistnetworkidentity",level:4},{value:"<code>--private</code>",id:"--private",level:4},{value:"<code>--validatorMonitorLogs</code>",id:"--validatormonitorlogs",level:4},{value:"<code>--disableLightClientServer</code>",id:"--disablelightclientserver",level:4},{value:"<code>--logLevel</code>",id:"--loglevel",level:4},{value:"<code>--logFile</code>",id:"--logfile",level:4},{value:"<code>--logFileLevel</code>",id:"--logfilelevel",level:4},{value:"<code>--logFileDailyRotate</code>",id:"--logfiledailyrotate",level:4},{value:"<code>--rest</code>",id:"--rest",level:4},{value:"<code>--rest.namespace</code>",id:"--restnamespace",level:4},{value:"<code>--rest.cors</code>",id:"--restcors",level:4},{value:"<code>--rest.address</code>",id:"--restaddress",level:4},{value:"<code>--rest.port</code>",id:"--restport",level:4},{value:"<code>--rest.swaggerUI</code>",id:"--restswaggerui",level:4},{value:"<code>--suggestedFeeRecipient</code>",id:"--suggestedfeerecipient",level:4},{value:"<code>--emitPayloadAttributes</code>",id:"--emitpayloadattributes",level:4},{value:"<code>--chain.archiveBlobEpochs</code>",id:"--chainarchiveblobepochs",level:4},{value:"<code>--eth1</code>",id:"--eth1",level:4},{value:"<code>--eth1.providerUrls</code>",id:"--eth1providerurls",level:4},{value:"<code>--execution.urls</code>",id:"--executionurls",level:4},{value:"<code>--execution.timeout</code>",id:"--executiontimeout",level:4},{value:"<code>--execution.retries</code>",id:"--executionretries",level:4},{value:"<code>--execution.retryDelay</code>",id:"--executionretrydelay",level:4},{value:"<code>--execution.engineMock</code>",id:"--executionenginemock",level:4},{value:"<code>--jwtSecret</code>",id:"--jwtsecret",level:4},{value:"<code>--jwtId</code>",id:"--jwtid",level:4},{value:"<code>--builder</code>",id:"--builder",level:4},{value:"<code>--builder.url</code>",id:"--builderurl",level:4},{value:"<code>--builder.timeout</code>",id:"--buildertimeout",level:4},{value:"<code>--builder.faultInspectionWindow</code>",id:"--builderfaultinspectionwindow",level:4},{value:"<code>--builder.allowedFaults</code>",id:"--builderallowedfaults",level:4},{value:"<code>--metrics</code>",id:"--metrics",level:4},{value:"<code>--metrics.port</code>",id:"--metricsport",level:4},{value:"<code>--metrics.address</code>",id:"--metricsaddress",level:4},{value:"<code>--monitoring.endpoint</code>",id:"--monitoringendpoint",level:4},{value:"<code>--monitoring.interval</code>",id:"--monitoringinterval",level:4},{value:"<code>--discv5</code>",id:"--discv5",level:4},{value:"<code>--listenAddress</code>",id:"--listenaddress",level:4},{value:"<code>--port</code>",id:"--port",level:4},{value:"<code>--discoveryPort</code>",id:"--discoveryport",level:4},{value:"<code>--listenAddress6</code>",id:"--listenaddress6",level:4},{value:"<code>--port6</code>",id:"--port6",level:4},{value:"<code>--discoveryPort6</code>",id:"--discoveryport6",level:4},{value:"<code>--bootnodes</code>",id:"--bootnodes",level:4},{value:"<code>--targetPeers</code>",id:"--targetpeers",level:4},{value:"<code>--subscribeAllSubnets</code>",id:"--subscribeallsubnets",level:4},{value:"<code>--disablePeerScoring</code>",id:"--disablepeerscoring",level:4},{value:"<code>--mdns</code>",id:"--mdns",level:4},{value:"<code>--enr.ip</code>",id:"--enrip",level:4},{value:"<code>--enr.tcp</code>",id:"--enrtcp",level:4},{value:"<code>--enr.udp</code>",id:"--enrudp",level:4},{value:"<code>--enr.ip6</code>",id:"--enrip6",level:4},{value:"<code>--enr.tcp6</code>",id:"--enrtcp6",level:4},{value:"<code>--enr.udp6</code>",id:"--enrudp6",level:4},{value:"<code>--nat</code>",id:"--nat",level:4}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"beacon-cli-command",children:[(0,d.jsx)(n.code,{children:"beacon"})," CLI Command"]}),"\n",(0,d.jsx)(n.p,{children:"Run a beacon chain node"}),"\n",(0,d.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(n.p,{children:"Run a beacon chain node and connect to the holesky testnet"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"./lodestar beacon --network holesky\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"beacon-options",children:[(0,d.jsx)(n.code,{children:"beacon"})," Options"]}),"\n",(0,d.jsx)(n.h4,{id:"--datadir",children:(0,d.jsx)(n.code,{children:"--dataDir"})}),"\n",(0,d.jsx)(n.p,{children:"Lodestar root data directory"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--network",children:(0,d.jsx)(n.code,{children:"--network"})}),"\n",(0,d.jsx)(n.p,{children:"Name of the Ethereum Consensus chain network to join"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:'choices: "mainnet", "gnosis", "sepolia", "holesky", "chiado", "ephemery", "mekong", "dev"'}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"mainnet"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--paramsfile",children:(0,d.jsx)(n.code,{children:"--paramsFile"})}),"\n",(0,d.jsx)(n.p,{children:"Network configuration file"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--rcconfig",children:(0,d.jsx)(n.code,{children:"--rcConfig"})}),"\n",(0,d.jsx)(n.p,{children:"RC file to supplement command line args, accepted formats: .yml, .yaml, .json"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--terminal-total-difficulty-override",children:(0,d.jsx)(n.code,{children:"--terminal-total-difficulty-override"})}),"\n",(0,d.jsx)(n.p,{children:"Terminal PoW block TTD override"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--terminal-block-hash-override",children:(0,d.jsx)(n.code,{children:"--terminal-block-hash-override"})}),"\n",(0,d.jsx)(n.p,{children:"Terminal PoW block hash override"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--terminal-block-hash-epoch-override",children:(0,d.jsx)(n.code,{children:"--terminal-block-hash-epoch-override"})}),"\n",(0,d.jsx)(n.p,{children:"Terminal PoW block hash override activation epoch"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--genesisstatefile",children:(0,d.jsx)(n.code,{children:"--genesisStateFile"})}),"\n",(0,d.jsx)(n.p,{children:"Path or URL to download a genesis state file in ssz-encoded format"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--checkpointsyncurl",children:(0,d.jsx)(n.code,{children:"--checkpointSyncUrl"})}),"\n",(0,d.jsx)(n.p,{children:"Server url hosting Beacon Node APIs to fetch weak subjectivity state. Fetch latest finalized by default, else set --wssCheckpoint"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--checkpointstate",children:(0,d.jsx)(n.code,{children:"--checkpointState"})}),"\n",(0,d.jsx)(n.p,{children:"Set a checkpoint state to start syncing from"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--wsscheckpoint",children:(0,d.jsx)(n.code,{children:"--wssCheckpoint"})}),"\n",(0,d.jsx)(n.p,{children:"Start beacon node off a state at the provided weak subjectivity checkpoint, to be supplied in <blockRoot>:<epoch> format. For example, 0x1234:100 will sync and start off from the weak subjectivity state at checkpoint of epoch 100 with block root 0x1234."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--forcecheckpointsync",children:(0,d.jsx)(n.code,{children:"--forceCheckpointSync"})}),"\n",(0,d.jsx)(n.p,{children:"Force syncing from checkpoint state even if db state is within weak subjectivity period. This helps to avoid long sync times after node has been offline for a while."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--ignoreweaksubjectivitycheck",children:(0,d.jsx)(n.code,{children:"--ignoreWeakSubjectivityCheck"})}),"\n",(0,d.jsx)(n.p,{children:"Ignore the checkpoint sync state failing the weak subjectivity check. This is relevant in testnets where the weak subjectivity period is too small for even few epochs of non finalization causing last finalized to be out of range. This flag is not recommended for mainnet use."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--persistnetworkidentity",children:(0,d.jsx)(n.code,{children:"--persistNetworkIdentity"})}),"\n",(0,d.jsx)(n.p,{children:"Whether to reuse the same peer-id across restarts"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--private",children:(0,d.jsx)(n.code,{children:"--private"})}),"\n",(0,d.jsx)(n.p,{children:"Do not send implementation details over p2p identify protocol and in builder, execution engine and eth1 requests"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--validatormonitorlogs",children:(0,d.jsx)(n.code,{children:"--validatorMonitorLogs"})}),"\n",(0,d.jsx)(n.p,{children:"Log validator monitor events as info. This requires metrics to be enabled."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--disablelightclientserver",children:(0,d.jsx)(n.code,{children:"--disableLightClientServer"})}),"\n",(0,d.jsx)(n.p,{children:"Disable light client server."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--loglevel",children:(0,d.jsx)(n.code,{children:"--logLevel"})}),"\n",(0,d.jsx)(n.p,{children:"Logging verbosity level for emitting logs to terminal"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:'choices: "error", "warn", "info", "verbose", "debug", "trace"'}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"info"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--logfile",children:(0,d.jsx)(n.code,{children:"--logFile"})}),"\n",(0,d.jsx)(n.p,{children:"Path to output all logs to a persistent log file, use 'none' to disable"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--logfilelevel",children:(0,d.jsx)(n.code,{children:"--logFileLevel"})}),"\n",(0,d.jsx)(n.p,{children:"Logging verbosity level for emitting logs to file"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.p,{children:'choices: "error", "warn", "info", "verbose", "debug", "trace"'}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"debug"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--logfiledailyrotate",children:(0,d.jsx)(n.code,{children:"--logFileDailyRotate"})}),"\n",(0,d.jsx)(n.p,{children:"Daily rotate log files, set to an integer to limit the file count, set to 0 (zero) to disable rotation"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"5"})]}),"\n",(0,d.jsx)(n.h4,{id:"--rest",children:(0,d.jsx)(n.code,{children:"--rest"})}),"\n",(0,d.jsx)(n.p,{children:"Enable/disable HTTP API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"true"})]}),"\n",(0,d.jsx)(n.h4,{id:"--restnamespace",children:(0,d.jsx)(n.code,{children:"--rest.namespace"})}),"\n",(0,d.jsx)(n.p,{children:"Pick namespaces to expose for HTTP API. Set to '*' to enable all namespaces"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string[]"})]}),"\n",(0,d.jsx)(n.p,{children:'choices: "beacon", "config", "debug", "events", "lightclient", "lodestar", "node", "proof", "validator", "*"'}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'["beacon","config","debug","events","node","validator","lightclient"]'})]}),"\n",(0,d.jsx)(n.h4,{id:"--restcors",children:(0,d.jsx)(n.code,{children:"--rest.cors"})}),"\n",(0,d.jsx)(n.p,{children:"Configures the Access-Control-Allow-Origin CORS header for HTTP API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"*"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--restaddress",children:(0,d.jsx)(n.code,{children:"--rest.address"})}),"\n",(0,d.jsx)(n.p,{children:"Set host for HTTP API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"127.0.0.1"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--restport",children:(0,d.jsx)(n.code,{children:"--rest.port"})}),"\n",(0,d.jsx)(n.p,{children:"Set port for HTTP API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"9596"})]}),"\n",(0,d.jsx)(n.h4,{id:"--restswaggerui",children:(0,d.jsx)(n.code,{children:"--rest.swaggerUI"})}),"\n",(0,d.jsx)(n.p,{children:"Enable Swagger UI for API exploration at http://{address}:{port}/documentation"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--suggestedfeerecipient",children:(0,d.jsx)(n.code,{children:"--suggestedFeeRecipient"})}),"\n",(0,d.jsxs)(n.p,{children:["Specify fee recipient default for collecting the EL block fees and rewards (a hex string representing 20 bytes address: ^0x[a-fA-F0-9]{40}$) in case validator fails to update for a validator index before calling ",(0,d.jsx)(n.code,{children:"produceBlock"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"0x0000000000000000000000000000000000000000"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--emitpayloadattributes",children:(0,d.jsx)(n.code,{children:"--emitPayloadAttributes"})}),"\n",(0,d.jsxs)(n.p,{children:["Flag to SSE emit execution ",(0,d.jsx)(n.code,{children:"payloadAttributes"})," before every slot"]}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"false"})]}),"\n",(0,d.jsx)(n.h4,{id:"--chainarchiveblobepochs",children:(0,d.jsx)(n.code,{children:"--chain.archiveBlobEpochs"})}),"\n",(0,d.jsx)(n.p,{children:"Number of epochs to retain finalized blobs (minimum of MIN_EPOCHS_FOR_BLOB_SIDECARS_REQUESTS)"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.h4,{id:"--eth1",children:(0,d.jsx)(n.code,{children:"--eth1"})}),"\n",(0,d.jsx)(n.p,{children:"Whether to follow the eth1 chain"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"true"})]}),"\n",(0,d.jsx)(n.h4,{id:"--eth1providerurls",children:(0,d.jsx)(n.code,{children:"--eth1.providerUrls"})}),"\n",(0,d.jsx)(n.p,{children:"Urls to Eth1 node with enabled rpc. If not explicitly provided and execution endpoint provided via execution.urls, it will use execution.urls. Otherwise will try connecting on the specified default(s)"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string[]"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'[ "http://localhost:8545" ]'})]}),"\n",(0,d.jsx)(n.h4,{id:"--executionurls",children:(0,d.jsx)(n.code,{children:"--execution.urls"})}),"\n",(0,d.jsx)(n.p,{children:"Urls to execution client engine API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string[]"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'[ "http://localhost:8551" ]'})]}),"\n",(0,d.jsx)(n.h4,{id:"--executiontimeout",children:(0,d.jsx)(n.code,{children:"--execution.timeout"})}),"\n",(0,d.jsx)(n.p,{children:"Timeout in milliseconds for execution engine API HTTP client"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"12000"})]}),"\n",(0,d.jsx)(n.h4,{id:"--executionretries",children:(0,d.jsx)(n.code,{children:"--execution.retries"})}),"\n",(0,d.jsx)(n.p,{children:"Number of retries when calling execution engine API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"2"})]}),"\n",(0,d.jsx)(n.h4,{id:"--executionretrydelay",children:(0,d.jsx)(n.code,{children:"--execution.retryDelay"})}),"\n",(0,d.jsx)(n.p,{children:"Delay time in milliseconds between retries when retrying calls to the execution engine API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"2000"})]}),"\n",(0,d.jsx)(n.h4,{id:"--executionenginemock",children:(0,d.jsx)(n.code,{children:"--execution.engineMock"})}),"\n",(0,d.jsx)(n.p,{children:"Set the execution engine to mock mode (development only)"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--jwtsecret",children:(0,d.jsx)(n.code,{children:"--jwtSecret"})}),"\n",(0,d.jsx)(n.p,{children:"File path to a shared hex-encoded jwt secret which will be used to generate and bundle HS256 encoded jwt tokens for authentication with the EL client's rpc server hosting engine apis. Secret to be exactly same as the one used by the corresponding EL client."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--jwtid",children:(0,d.jsx)(n.code,{children:"--jwtId"})}),"\n",(0,d.jsx)(n.p,{children:"An optional identifier to be set in the id field of the claims included in jwt tokens used for authentication with EL client's rpc server hosting engine apis"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--builder",children:(0,d.jsx)(n.code,{children:"--builder"})}),"\n",(0,d.jsx)(n.p,{children:"Enable builder interface"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--builderurl",children:(0,d.jsx)(n.code,{children:"--builder.url"})}),"\n",(0,d.jsx)(n.p,{children:"Url hosting the builder API"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"http://localhost:8661"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--buildertimeout",children:(0,d.jsx)(n.code,{children:"--builder.timeout"})}),"\n",(0,d.jsx)(n.p,{children:"Timeout in milliseconds for builder API HTTP client"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"12000"})]}),"\n",(0,d.jsx)(n.h4,{id:"--builderfaultinspectionwindow",children:(0,d.jsx)(n.code,{children:"--builder.faultInspectionWindow"})}),"\n",(0,d.jsx)(n.p,{children:"Window to inspect missed slots for enabling/disabling builder circuit breaker"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.h4,{id:"--builderallowedfaults",children:(0,d.jsx)(n.code,{children:"--builder.allowedFaults"})}),"\n",(0,d.jsxs)(n.p,{children:["Number of missed slots allowed in the ",(0,d.jsx)(n.code,{children:"faultInspectionWindow"})," for builder circuit"]}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.h4,{id:"--metrics",children:(0,d.jsx)(n.code,{children:"--metrics"})}),"\n",(0,d.jsx)(n.p,{children:"Enable the Prometheus metrics HTTP server"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsx)(n.h4,{id:"--metricsport",children:(0,d.jsx)(n.code,{children:"--metrics.port"})}),"\n",(0,d.jsx)(n.p,{children:"Listen TCP port for the Prometheus metrics HTTP server"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"8008"})]}),"\n",(0,d.jsx)(n.h4,{id:"--metricsaddress",children:(0,d.jsx)(n.code,{children:"--metrics.address"})}),"\n",(0,d.jsx)(n.p,{children:"Listen address for the Prometheus metrics HTTP server"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"127.0.0.1"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--monitoringendpoint",children:(0,d.jsx)(n.code,{children:"--monitoring.endpoint"})}),"\n",(0,d.jsx)(n.p,{children:"Enables monitoring service for sending clients stats to the specified endpoint of a remote service (e.g. beaconcha.in)"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--monitoringinterval",children:(0,d.jsx)(n.code,{children:"--monitoring.interval"})}),"\n",(0,d.jsx)(n.p,{children:"Interval in milliseconds between sending client stats to the remote service"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"60000"})]}),"\n",(0,d.jsx)(n.h4,{id:"--discv5",children:(0,d.jsx)(n.code,{children:"--discv5"})}),"\n",(0,d.jsx)(n.p,{children:"Enable discv5"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"true"})]}),"\n",(0,d.jsx)(n.h4,{id:"--listenaddress",children:(0,d.jsx)(n.code,{children:"--listenAddress"})}),"\n",(0,d.jsx)(n.p,{children:"The IPv4 address to listen for p2p UDP and TCP connections"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'"0.0.0.0"'})]}),"\n",(0,d.jsx)(n.h4,{id:"--port",children:(0,d.jsx)(n.code,{children:"--port"})}),"\n",(0,d.jsx)(n.p,{children:"The TCP/UDP port to listen on. The UDP port can be modified by the --discoveryPort flag."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"9000"})]}),"\n",(0,d.jsx)(n.h4,{id:"--discoveryport",children:(0,d.jsx)(n.code,{children:"--discoveryPort"})}),"\n",(0,d.jsxs)(n.p,{children:["The UDP port that discovery will listen on. Defaults to ",(0,d.jsx)(n.code,{children:"port"})]}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"port"})]}),"\n",(0,d.jsx)(n.h4,{id:"--listenaddress6",children:(0,d.jsx)(n.code,{children:"--listenAddress6"})}),"\n",(0,d.jsx)(n.p,{children:"The IPv6 address to listen for p2p UDP and TCP connections"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--port6",children:(0,d.jsx)(n.code,{children:"--port6"})}),"\n",(0,d.jsx)(n.p,{children:"The TCP/UDP port to listen on. The UDP port can be modified by the --discoveryPort6 flag."}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"9090"})]}),"\n",(0,d.jsx)(n.h4,{id:"--discoveryport6",children:(0,d.jsx)(n.code,{children:"--discoveryPort6"})}),"\n",(0,d.jsxs)(n.p,{children:["The UDP port that discovery will listen on. Defaults to ",(0,d.jsx)(n.code,{children:"port6"})]}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"port6"})]}),"\n",(0,d.jsx)(n.h4,{id:"--bootnodes",children:(0,d.jsx)(n.code,{children:"--bootnodes"})}),"\n",(0,d.jsx)(n.p,{children:"Bootnodes for discv5 discovery"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string[]"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:'[ "[]" ]'})]}),"\n",(0,d.jsx)(n.h4,{id:"--targetpeers",children:(0,d.jsx)(n.code,{children:"--targetPeers"})}),"\n",(0,d.jsx)(n.p,{children:"The target connected peers. Above this number peers will be disconnected"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"100"})]}),"\n",(0,d.jsx)(n.h4,{id:"--subscribeallsubnets",children:(0,d.jsx)(n.code,{children:"--subscribeAllSubnets"})}),"\n",(0,d.jsx)(n.p,{children:"Subscribe to all subnets regardless of validator count"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"false"})]}),"\n",(0,d.jsx)(n.h4,{id:"--disablepeerscoring",children:(0,d.jsx)(n.code,{children:"--disablePeerScoring"})}),"\n",(0,d.jsx)(n.p,{children:"Disable peer scoring, used for testing on devnets"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"false"})]}),"\n",(0,d.jsx)(n.h4,{id:"--mdns",children:(0,d.jsx)(n.code,{children:"--mdns"})}),"\n",(0,d.jsx)(n.p,{children:"Enable mdns local peer discovery"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["default: ",(0,d.jsx)(n.code,{children:"false"})]}),"\n",(0,d.jsx)(n.h4,{id:"--enrip",children:(0,d.jsx)(n.code,{children:"--enr.ip"})}),"\n",(0,d.jsx)(n.p,{children:"Override ENR IP entry"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--enrtcp",children:(0,d.jsx)(n.code,{children:"--enr.tcp"})}),"\n",(0,d.jsx)(n.p,{children:"Override ENR TCP entry"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.h4,{id:"--enrudp",children:(0,d.jsx)(n.code,{children:"--enr.udp"})}),"\n",(0,d.jsx)(n.p,{children:"Override ENR UDP entry"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.h4,{id:"--enrip6",children:(0,d.jsx)(n.code,{children:"--enr.ip6"})}),"\n",(0,d.jsx)(n.p,{children:"Override ENR IPv6 entry"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsx)(n.h4,{id:"--enrtcp6",children:(0,d.jsx)(n.code,{children:"--enr.tcp6"})}),"\n",(0,d.jsx)(n.p,{children:"Override ENR (IPv6-specific) TCP entry"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.h4,{id:"--enrudp6",children:(0,d.jsx)(n.code,{children:"--enr.udp6"})}),"\n",(0,d.jsx)(n.p,{children:"Override ENR (IPv6-specific) UDP entry"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"number"})]}),"\n",(0,d.jsx)(n.h4,{id:"--nat",children:(0,d.jsx)(n.code,{children:"--nat"})}),"\n",(0,d.jsx)(n.p,{children:"Allow configuration of non-local addresses"}),"\n",(0,d.jsxs)(n.p,{children:["type: ",(0,d.jsx)(n.code,{children:"boolean"})]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var d=i(6540);const c={},l=d.createContext(c);function r(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);