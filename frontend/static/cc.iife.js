(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".mycomponent{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#999;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.mycomponent a{font-weight:500;color:#646cff;text-decoration:inherit}.mycomponent a:hover{color:#535bf2}.mycomponent h1{font-size:3.2em;line-height:1.1}.mycomponent button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}.mycomponent button:hover{border-color:#646cff}.mycomponent>button:focus,.mycomponent>button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){.mycomponent{color:#213547;background-color:#fff}.mycomponent a:hover{color:#747bff}.mycomponent button{background-color:#f9f9f9}}.mycomponent{margin:0 auto;text-align:center}.mycomponent .card{padding:2em}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var wmc=function(t,e,r){"use strict";const w="";function i({passSetters:n,setOutput:m,renderInit:u}){const[d,l]=e.useState(u),[s,c]=e.useState(void 0);return e.useEffect(()=>{n({onInput:a=>{c(a)},onRender:l})},[l,n]),d?e.createElement(e.Fragment,null,e.createElement("h1",null,"Minimal Component"),e.createElement("pre",null,JSON.stringify(s)),e.createElement("button",{style:{fontSize:"12px",marginBottom:"10px"},onClick:()=>{m("hello world")}},"set output")):e.createElement(e.Fragment,null)}function o(n){r.createRoot(document.getElementById(n.id)).render(e.createElement(e.StrictMode,null,e.createElement(i,{passSetters:n.passSetters,setOutput:n.setOutput,renderInit:n.render})))}return window.windmill===void 0&&(window.windmill={}),window.windmill.mycomponent=o,t.customComponent=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),t}({},React,ReactDOM);