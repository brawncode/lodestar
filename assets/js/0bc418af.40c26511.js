"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[2190],{5483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(4848),i=t(8453);const s={title:"Starting a Node"},r="Beacon Management",a={id:"run/beacon-management/starting-a-node",title:"Starting a Node",description:"Running a Lodestar node on mainnet or a testnet only requires basic familiarity with the terminal. The following instructions are required to configure and run the Lodestar beacon node. This page assumes you have already setup an Ethereum execution client.",source:"@site/pages/run/beacon-management/starting-a-node.md",sourceDirName:"run/beacon-management",slug:"/run/beacon-management/starting-a-node",permalink:"/lodestar/run/beacon-management/starting-a-node",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/run/beacon-management/starting-a-node.md",tags:[],version:"current",frontMatter:{title:"Starting a Node"},sidebar:"tutorialSidebar",previous:{title:"Quick Start Custom Setup Guide",permalink:"/lodestar/run/getting-started/quick-start-custom-guide"},next:{title:"CLI Reference",permalink:"/lodestar/run/beacon-management/beacon-cli"}},c={},l=[{value:"Connect to Mainnet or a Public Testnet",id:"connect-to-mainnet-or-a-public-testnet",level:2},{value:"Configure the Lodestar JWT Authentication Token",id:"configure-the-lodestar-jwt-authentication-token",level:2},{value:"Generate a Secret Key",id:"generate-a-secret-key",level:3},{value:"Configure Lodestar to Locate the JWT Secret",id:"configure-lodestar-to-locate-the-jwt-secret",level:3},{value:"Configure the Execution Client with the JWT Secret",id:"configure-the-execution-client-with-the-jwt-secret",level:3},{value:"Run the Beacon Node",id:"run-the-beacon-node",level:2},{value:"Checkpoint Sync",id:"checkpoint-sync",level:3},{value:"Still Taking Long to Sync?",id:"still-taking-long-to-sync",level:4},{value:"Sync Log Guide",id:"sync-log-guide",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"beacon-management",children:"Beacon Management"}),"\n",(0,o.jsx)(n.p,{children:"Running a Lodestar node on mainnet or a testnet only requires basic familiarity with the terminal. The following instructions are required to configure and run the Lodestar beacon node. This page assumes you have already setup an Ethereum execution client."}),"\n",(0,o.jsx)(n.h2,{id:"connect-to-mainnet-or-a-public-testnet",children:"Connect to Mainnet or a Public Testnet"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure Lodestar is installed in your local environment, following the chosen ",(0,o.jsx)(n.a,{href:"/lodestar/run/getting-started/installation",children:"Installation"})," method. The following command should return a non-error message."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./lodestar --help\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For a complete list of beacon node CLI commands and options, see the ",(0,o.jsxs)(n.a,{href:"/lodestar/run/beacon-management/beacon-cli",children:[(0,o.jsx)(n.code,{children:"beacon"})," CLI Command"]})," section."]}),"\n",(0,o.jsxs)(n.p,{children:["To select a known testnet or mainnet, use the ",(0,o.jsx)(n.code,{children:"--network"})," flag. The option ",(0,o.jsx)(n.code,{children:"mainnet"})," is selected by default, and a list of available networks is listed with the ",(0,o.jsx)(n.code,{children:"--help"})," flag. Setting the ",(0,o.jsx)(n.code,{children:"--network"})," flag will conveniently configure the beacon node for the selected network. For power users, any configuration option should be able to be overridden."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-lodestar-jwt-authentication-token",children:"Configure the Lodestar JWT Authentication Token"}),"\n",(0,o.jsxs)(n.p,{children:["Ethereum requires a ",(0,o.jsx)(n.a,{href:"https://github.com/ethereum/execution-apis/blob/main/src/engine/authentication.md",children:"secure authentication with the Engine API"})," for connecting to your chosen execution client on port 8551."]}),"\n",(0,o.jsx)(n.h3,{id:"generate-a-secret-key",children:"Generate a Secret Key"}),"\n",(0,o.jsxs)(n.p,{children:["You must generate a secret 32-byte (64 characters) hexadecimal string that will be used to authenticate with an execution node. You can use the following command in most terminals to generate a random secret: ",(0,o.jsx)(n.code,{children:"openssl rand -hex 32"}),". Or you can use an ",(0,o.jsx)(n.a,{href:"https://codebeautify.org/generate-random-hexadecimal-numbers",children:"online generator"}),". Save this secret key into a text file and note where you store this file."]}),"\n",(0,o.jsx)(n.h3,{id:"configure-lodestar-to-locate-the-jwt-secret",children:"Configure Lodestar to Locate the JWT Secret"}),"\n",(0,o.jsxs)(n.p,{children:["When starting up a Lodestar beacon node in any configuration, ensure you add the ",(0,o.jsx)(n.code,{children:"--jwtSecret $JWT_SECRET_PATH"})," flag to point to the saved secret key file."]}),"\n",(0,o.jsx)(n.h3,{id:"configure-the-execution-client-with-the-jwt-secret",children:"Configure the Execution Client with the JWT Secret"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Go Ethereum:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--authrpc.jwtsecret /path/to/jwtsecret.hex"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://geth.ethereum.org/docs/getting-started#start-geth",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Nethermind:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--JsonRpc.JwtSecretFile /path/to/jwtsecret.hex"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://docs.nethermind.io/get-started/consensus-clients/#configuring-json-rpc-interface",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Besu:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--engine-jwt-secret=/path/to/jwtsecret.hex"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://besu.hyperledger.org/public-networks/how-to/use-besu-api/authenticate#2-create-the-jwt",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Erigon:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--authrpc.jwtsecret /path/to/jwtsecret.hex"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://github.com/ledgerwatch/erigon?tab=readme-ov-file#beacon-chain-consensus-layer",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"For Reth:"}),"\nUse the ",(0,o.jsx)(n.code,{children:"--authrpc.jwtsecret /path/to/jwtsecret.hex"})," flag to configure the secret. Use their documentation ",(0,o.jsx)(n.a,{href:"https://reth.rs/run/mainnet.html?highlight=jwt#running-the-reth-node",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"run-the-beacon-node",children:"Run the Beacon Node"}),"\n",(0,o.jsx)(n.p,{children:"To start the Lodestar beacon, run the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./lodestar beacon --network $NETWORK_NAME --jwtSecret $JWT_SECRET_PATH\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will assume an execution client is available at the default location of ",(0,o.jsx)(n.code,{children:"https://localhost:8545"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If the execution clients are available at different locations, use the flag ",(0,o.jsx)(n.code,{children:"--execution.urls"})," to specify these locations in the command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"./lodestar beacon --network $NETWORK_NAME --jwtSecret $JWT_SECRET_PATH --execution.urls $EL_URL1 $EL_URL2\n"})}),"\n",(0,o.jsx)(n.p,{children:"Your initial logs should confirm that the node has started."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Jul-31 13:35:27.967[]                 info: Lodestar network=mainnet, version=v1.21.0/ff35faa, commit=ff35faae4ad1697b86d708a0367a95a71648ab6e\nJul-31 13:35:28.344[]                 info: Connected to LevelDB database path=/data/lodestar/chain-db\nJul-31 13:35:49.828[]                 info: Initializing beacon from a valid db state slot=9633504, epoch=301047, stateRoot=0xfa2845a6877b98555906a1654941c97d9c05bdd41e61cc0870a967dc9030b156, isWithinWeakSubjectivityPeriod=true\nJul-31 13:35:51.955[chain]            info: Historical state worker started\nJul-31 13:35:51.969[eth1]             info: Eth1 provider urls=http://localhost:8551\nJul-31 13:35:51.975[execution]        info: Execution client urls=http://localhost:8551\nJul-31 13:35:51.977[]                 info: External builder url=http://localhost:8661\nJul-31 13:36:21.128[network]          info: running libp2p instance in worker thread\nJul-31 13:36:21.727[network]          info: libp2p worker started peer=15Uiu2HAmACcmCEXcgt3zCtJL2rqJZ2Mvdjh6U6fe26HgD2FoNRwW\nJul-31 13:36:27.677[network]          info: discv5 worker started peerId=16Uiu2HAmACcmCEXcgt3zCtJL2rqJZ2Mvdjh6U6fe26HgD2FoNRwW, initialENR=enr:-IO4QHGTUd1Zg8LAhUAioOz_ySTKoJLIOa6zltSP_AvvhTFVYw6M6YB35IxsiKxQG7nUgCpUB5SIsNxMntCNlTK9sMEBgmlkgnY0iXNlY3AyNTZrMaEC24cdmzuGnWqSwF-8Hw2gbkAZDzMWW3LsHJfp_kDhy-GDdGNwgiMog3VkcIIeWH, bindAddr4=/ip4/0.0.0.0/udp/9000\nJul-31 13:36:28.134[network]          info: PeerId 16Uiu2HAmACcmCEXcgt3zCtJL2rqJZ2Mvdjh6U6fe26HgD2FoNRwW, Multiaddrs /ip4/0.0.0.0/tcp/9000\nJul-31 13:36:28.137[metrics]          info: Started metrics HTTP server address=http://127.0.0.1:8008\nJul-31 13:36:28.256[rest]             info: Started REST API server address=http://0.0.0.0:9596\nJul-31 13:36:28.257[]                 info: Searching peers - peers: 0 - slot: 9634080 - head: (slot -576) 0x9d88\u2026d02a - exec-block: syncing(20426302 0xcec4\u2026) - finalized: 0x7feb\u2026c130:301045\nJul-31 13:36:36.461[execution]        info: Execution client is synced oldState=ONLINE, newState=SYNCED\nJul-31 13:36:53.019[]                 info: Syncing - 3.7 minutes left - 2.32 slots/s - slot: 9634082 - head: (slot -515) 0x792f\u2026f8aa - exec-block: valid(20426365 0x58b1\u2026) - finalized: 0x9d88\u2026d02a:301047 - peers: 11\nJul-31 13:38:53.168[]                 info: Syncing - 11 seconds left - 4.01 slots/s - slot: 9634092 - head: (slot -44) 0x7491\u2026f63e - exec-block: valid(20426841 0xd4b2\u2026) - finalized: 0x1e00\u20266e6b:301062 - peers: 59\nJul-31 13:38:58.051[network]          info: Subscribed gossip core topics\nJul-31 13:38:58.132[sync]             info: Subscribed gossip core topics\nJul-31 13:39:05.001[]                 info: Synced - slot: 9634093 - head: 0x35de\u20261f0e - exec-block: valid(20426886 0x10ff\u2026) - finalized: 0x88f8\u20265375:301063 - peers: 70\nJul-31 13:39:17.000[]                 info: Synced - slot: 9634094 - head: 0x7844\u20263b3e - exec-block: valid(20426887 0x67d1\u2026) - finalized: 0x88f8\u20265375:301063 - peers: 69\nJul-31 13:39:29.000[]                 info: Synced - slot: 9634095 - head: 0x5516\u2026ba12 - exec-block: valid(20426888 0x4ceb\u2026) - finalized: 0x88f8\u20265375:301063 - peers: 74\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If your node is stuck with ",(0,o.jsx)(n.code,{children:"Searching peers"}),", review your network configuration to make sure your ports are open and forwarded to your host machine."]})}),"\n",(0,o.jsxs)(n.p,{children:["By default, Lodestar stores all configuration and chain data at the path ",(0,o.jsx)(n.code,{children:"$XDG_DATA_HOME/lodestar/$NETWORK_NAME"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A young testnet should take a few hours to sync. If you see multiple or consistent errors in the logs, please open a ",(0,o.jsx)(n.a,{href:"https://github.com/ChainSafe/lodestar/issues/new/choose",children:"Github issue"})," or reach out to us in ",(0,o.jsx)(n.a,{href:"https://discord.gg/yjyvFRP",children:"Discord"}),". By reporting anomalies, you are helping to accelerate the progress of Ethereum consensus and we thank you for contributing!"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"It is dangerous to expose your Beacon or Execution APIs publicly as there is no default authentication mechanism provided. Ensure your beacon node host is not exposing ports 8545 or 9596 outside of your internal network."})}),"\n",(0,o.jsx)(n.h3,{id:"checkpoint-sync",children:"Checkpoint Sync"}),"\n",(0,o.jsxs)(n.p,{children:['If you are starting your node from a blank database, or from a last saved database state that is too old (outside of the weak subjectivity period), your node will be susceptible to "long range attacks." Ethereum\'s solution to this attack is via something called weak subjectivity. ',(0,o.jsx)(n.a,{href:"https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/",children:"Read Vitalik's illuminating post explaining weak subjectivity."}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you have a synced beacon node available (e.g., your friend's node or a trusted infrastructure provider) to serve a trusted checkpoint you can rely on, you can start syncing your beacon node from that available checkpoint with the flag ",(0,o.jsx)(n.code,{children:"--checkpointSyncUrl"})," and passing in the URL of the checkpoint provider. This will allow your beacon node to sync within minutes rather than several days."]}),"\n",(0,o.jsxs)(n.p,{children:["The Ethereum community has maintained a set of ",(0,o.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints/",children:"public beacon chain checkpoints"})," that serve these sync endpoints to the larger community. You can correlate the state root and the block root with more than one provider to verify the checkpoints being served follow the same canonical chain."]}),"\n",(0,o.jsxs)(n.p,{children:["Just supply these ",(0,o.jsx)(n.strong,{children:"extra arguments"})," to your beacon node command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"--checkpointSyncUrl <synced node url> [--wssCheckpoint <trusted checkpoint in root:epoch format>]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In case you really trust the ",(0,o.jsx)(n.code,{children:"--checkpointSyncUrl"})," provider, then you may skip providing ",(0,o.jsx)(n.code,{children:"--wssCheckpoint"}),", which will then result into your beacon node syncing and starting off the recently finalized state from the trusted URL."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Please be aware that a malicious checkpoint sync server URL can put you on the wrong chain with a danger of you losing your funds by social engineering.\nIf possible, validate your ",(0,o.jsx)(n.code,{children:"wssCheckpoint"})," state from multiple places (e.g. different client distributions) or from other trusted sources. This will highly reduce the risk of starting off on a malicious chain. This list of ",(0,o.jsx)(n.a,{href:"https://eth-clients.github.io/checkpoint-sync-endpoints/",children:"public endpoints"})," maintained by the Ethereum community may be used for reference."]})}),"\n",(0,o.jsx)(n.h4,{id:"still-taking-long-to-sync",children:"Still Taking Long to Sync?"}),"\n",(0,o.jsxs)(n.p,{children:["After your node has been offline for a while, it might be the case that it takes a long time to sync even though a ",(0,o.jsx)(n.code,{children:"--checkpointSyncUrl"})," is specified.\nThis is due to the fact that the last database state is still within the weak subjectivity period (~15 days on mainnet) which causes the node\nto sync from the database state instead of the checkpoint state."]}),"\n",(0,o.jsxs)(n.p,{children:["It is possible to force syncing from a checkpoint state by supplying the ",(0,o.jsx)(n.code,{children:"--forceCheckpointSync"})," flag. This option is only recommended if it is absolutely\nnecessary for the node to be synced right away to fulfill its duties as there is an inherent risk each time the state is obtained from an external source."]}),"\n",(0,o.jsx)(n.h3,{id:"sync-log-guide",children:"Sync Log Guide"}),"\n",(0,o.jsx)(n.p,{children:"The Lodestar beacon sync log aims to provide information of utmost importance about the state of your node and be succinct at the same time. You may see the sync logs in the following format:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"[Sync status] - [ Slot info ] - [Head info] - [Execution block info] - [Finalized info] - [Peers info]"})}),"\n",(0,o.jsx)(n.p,{children:"See the following example of different kinds of sync log:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:24:08.034[]                 info: Searching peers - peers: 0 - slot: 6265018 - head: 6264018 0xed93\u20267b0a - exec-block: syncing(17088476 0x9649\u2026) - finalized: 0xbf30\u20267e7c:195777\nApr-20 15:24:17.000[]                 info: Searching peers - peers: 0 - slot: 6265019 - head: 6264018 0xed93\u20267b0a - exec-block: syncing(17088476 0x9649\u2026) - finalized: 0xbf30\u20267e7c:195777\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:13:41.298[]                 info: Syncing - 2.5 minutes left - 2.78 slots/s - slot: 6264966 - head: 6262966 0x5cec\u2026f5b8 - exec-block: valid(17088105 0x6f74\u2026) - finalized: 0x5cc0\u20263874:195764 - peers: 1\nApr-20 15:13:41.298[]                 info: Syncing - 2 minutes left - 2.78 slots/s - slot: 6264967 - head: 6263965 0x5cec\u2026f5b8 - exec-block: valid(17088105 0x6f74\u2026) - finalized: 0x5cc0\u20263874:195764 - peers: 1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:13:53.151[]                 info: Syncing - 1.6 minutes left - 3.82 slots/s - slot: 6264967 - head: (slot -360) 0xe0cf\u20269f3c - exec-block: valid(17088167 0x2d6a\u2026) - finalized: 0x8f3f\u20262f81:195766 - peers: 5\nApr-20 15:14:05.425[]                 info: Syncing - 1.1 minutes left - 4.33 slots/s - slot: 6264968 - head: (slot -297) 0x3655\u20261658 - exec-block: valid(17088231 0xdafd\u2026) - finalized: 0x9475\u2026425a:195769 - peers: 2\nApr-20 15:14:53.001[]                 info: Syncing - 9 seconds left - 5.00 slots/s - slot: 6264972 - head: (slot -45) 0x44e4\u202620a4 - exec-block: valid(17088475 0xca61\u2026) - finalized: 0x9cbd\u2026ba83:195776 - peers: 8\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:15:01.443[network]          info: Subscribed gossip core topics\nApr-20 15:15:01.446[sync]             info: Subscribed gossip core topics\nApr-20 15:15:05.000[]                 info: Synced - slot: 6264973 - head: 0x90ea\u2026c655 - exec-block: valid(17088521 0xca9b\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 6\nApr-20 15:15:17.003[]                 info: Synced - slot: 6264974 - head: 0x4f7e\u20260e3a - exec-block: valid(17088522 0x08b1\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 6\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:15:41.001[]                 info: Synced - slot: 6264976 - head: (slot -1) 0x17c6\u202671a7 - exec-block: valid(17088524 0x5bc1\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 8\nApr-20 15:15:53.001[]                 info: Synced - slot: 6264977 - head: (slot -2) 0x17c6\u202671a7 - exec-block: valid(17088524 0x5bc1\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 8\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"Apr-20 15:16:05.000[]                 info: Synced - slot: 6264978 - head: 0xc9fd\u202628c5 - exec-block: valid(17088526 0xb5bf\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 8\nApr-20 15:16:17.017[]                 info: Synced - slot: 6264979 - head: 0xde91\u2026d4cb - exec-block: valid(17088527 0xa488\u2026) - finalized: 0x6981\u2026682f:195778 - peers: 7\n"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Sync status: This status takes three values:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Synced"}),": The node is currently synced"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Syncing"})," The node is currently in the syncing process"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Searching"}),": The node is is still looking for viable peers from where it can download blocks"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Slot (clock) info: The current ongoing slot as per the chain genesis"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Head info: Specifies where the local beacon chain head hash is. In case it's far behind the Slot (clock), then it independently shows the head slot. Else, it will show how far behind the node is from the Slot (if the difference is < 1000)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Execution block info: Provides the information about the execution block head, whether its confirmed ",(0,o.jsx)(n.code,{children:"valid"})," or still ",(0,o.jsx)(n.code,{children:"syncing"})," to it. In parenthesis, it shows the current execution block number and a short hash for easy identification"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Finalized info: Shows the current local ",(0,o.jsx)(n.code,{children:"finalized"})," checkpoint in the format of ",(0,o.jsx)(n.code,{children:"[checkpoint root]:[checkpoint epoch]"}),". For example: ",(0,o.jsx)(n.code,{children:"0xd7ba\u20268386:189636"})," shows a checkpoint root of ",(0,o.jsx)(n.code,{children:"0xd7ba\u20268386"})," in epoch ",(0,o.jsx)(n.code,{children:"189636"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Peer info: Current total number of outbound and inbound peers"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more insight into how a Lodestar beacon node is functioning, you may setup Lodestar metrics with the ",(0,o.jsx)(n.code,{children:"--metrics"})," flag and use the prepared Grafana dashboards that are found in the repository. Check out our section on ",(0,o.jsx)(n.a,{href:"/lodestar/run/logging-and-metrics/prometheus-grafana",children:"Prometheus and Grafana"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);