/*! For license information please see main.7ed76d68.js.LICENSE.txt */
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}
`,Yk=()=>{const[t,r]=e.useState(!1),[n,a]=e.useState(!0),[o,i]=e.useState(""),[l,s]=e.useState([]);e.useEffect((()=>{fetch("/networks").then((e=>{if(200!==e.status)throw new Error(e.statusText);return e.json()})).then(s).catch((e=>{i(`Failed to fetch available networks. ${e.message||e}`)})).finally((()=>{a(!1)}))}),[]);return(0,qk.jsxs)(ya,{children:[(0,qk.jsx)(Qk,{}),(0,qk.jsx)(Zs,{brand:(0,qk.jsx)("img",{src:q,style:{height:30},alt:"logo"})}),(0,qk.jsxs)($s,{children:[(0,qk.jsx)(Kk,{attemptedConnect:t,hasAvailableNetworks:n||l.length>0,error:o}),(0,qk.jsx)(Hk,{availableNetworks:l,onSubmit:e=>{r(!0),i(""),fetch("/connect",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>{if(200!==e.status)throw new Error(e.statusText)})).catch((e=>{i(`Failed to connect to the network. ${e.message||e}`)}))}})]})]})};t.render((0,qk.jsx)(Yk,{}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.7ed76d68.js.map