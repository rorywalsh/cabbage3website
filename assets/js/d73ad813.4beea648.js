"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[344],{5623:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var i=t(4848),s=t(8453),a=t(1432);const r='<Cabbage>[\n     {"type":"form","caption":"GetSet Opcodes","size":{"height":500,"width":580},"pluginId":"def1"},\n    {"type":"rotarySlider", "channel":"gain", "bounds":{"left":150, "top":10, "width":100, "height":100}, "range":{"min":0, "max":2, "defaultValue":1, "skew":1, "increment":0.1}, "text":"Gain"},\n    {"type":"button", "channel":"button1", "bounds":{"left":0, "top":10, "width":100, "height":30}, "colour":{"on":{"fill":[255, 0, 0]}, "off":{"fill":"#0000ff"}},"text":{"on":"I am on", "off":"I am off"}},\n    {"type": "textEditor", "bounds": {"left": 17.0, "top": 169.0, "width": 341.0, "height": 40.0}, "channel": "infoText", "readOnly": 1.0, "wrap": 1.0, "scrollbars": 1.0, "text":"This instrument shows an example..."},\n    {"type":"comboBox", "channel":"combo1", "bounds":{"left":200, "top":200, "width":100, "height":30}, "items":["One", "Two", "Three"]}\n]</Cabbage>\n<CsoundSynthesizer>\n<CsOptions>\n-dm0 -n -+rtmidi=NULL -M0 --midi-key=4 --midi-velocity=5\n</CsOptions>\n<CsInstruments>\n; sr set by host\nksmps = 64\nnchnls = 2\n0dbfs = 1\n\n/*\nTest various string variants of cabbageSet opcodes. \nThese opcodes provide an interface to widget properties. \n*/\ninstr TestStringSetOpcodes\n    k1 metro 1\n    if p4 == 0 then\n        cabbageSet "button1", "text.off", "p4 is 0"\n    elseif p4 == 1 then\n        cabbageSet "button1", "text.off", "p4 is 1"\n    elseif p4 == 2 then\n        cabbageSet "infoText", "text", "p4 is 2"\n    elseif p4 == 3 then\n        cabbageSet "infoText", sprintf({{"text":"%s"}}, "p4 is 3")\n    elseif p4 == 4 then        \n        cabbageSet k1, "infoText", "text", "p4 is 4"\n    elseif p4 == 5 then\n        cabbageSet k1, "infoText", sprintf({{"text":"%s"}}, "p4 is 5")\n    elseif p4 == 6 then\n        cabbageSet "button1", "colour.off.fill", "#00ff00"\n    endif\nendin\n\n/*\nTest various MYFLT variants of cabbageSet opcodes.\nThese opcodes provide an interface to widget properties. \n*/\ninstr TestMYFLTSetOpcodes\n    k1 metro 10\n    kToggle = (oscili:k(1, 2) > 0 ? 1 : 0)\n    if p4 == 0 then\n        cabbageSet k1, "gain", "bounds.left", abs(randi:k(400, 10))\n    elseif p4 == 1 then\n        cabbageSet k1, "gain", "visible", kToggle\n    elseif p4 == 2 then\n        cabbageSet "gain", "bounds.left", 10\n    elseif p4 == 3 then\n        cabbageSet "gain", sprintf({{"visible":%d}}, 0)\n    elseif p4 == 4 then\n        cabbageSet "gain", sprintf({{"visible":%d}}, 1)\n    endif\nendin\n\n\n</CsInstruments>  \n<CsScore>\ni"TestStringSetOpcodes" 0 1 0\ni"TestStringSetOpcodes" + 1 1\ni"TestStringSetOpcodes" + 1 2\ni"TestStringSetOpcodes" + 1 3\ni"TestStringSetOpcodes" + 1 4\ni"TestStringSetOpcodes" + 1 5\ni"TestStringSetOpcodes" + 1 6\nf0 z\n</CsScore>\n</CsoundSynthesizer>',o={},c="CabbageSet",l={id:"cabbage_opcodes/cabbageSet",title:"CabbageSet",description:"This opcode set a widget property, i.e,colour.fill, visible, opacity, etc. It can run at init-time or k-time. The k-time variant must use a trigger to initiate the update.",source:"@site/docs/cabbage_opcodes/cabbageSet.mdx",sourceDirName:"cabbage_opcodes",slug:"/cabbage_opcodes/cabbageSet",permalink:"/cabbage3website/docs/cabbage_opcodes/cabbageSet",draft:!1,unlisted:!1,editUrl:"https://github.com/rorywalsh/cabbage3website/tree/main/docs/cabbage_opcodes/cabbageSet.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"CabbageGet",permalink:"/cabbage3website/docs/cabbage_opcodes/cabbageGet"}},d={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Performance",id:"performance",level:3},{value:"Example",id:"example",level:2}];function b(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cabbageset",children:"CabbageSet"})}),"\n",(0,i.jsxs)(n.p,{children:["This opcode set a widget property, i.e,",(0,i.jsx)(n.code,{children:"colour.fill"}),", ",(0,i.jsx)(n.code,{children:"visible"}),", ",(0,i.jsx)(n.code,{children:"opacity"}),", etc. It can run at init-time or k-time. The k-time variant must use a trigger to initiate the update."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cabbageSet"})," ",(0,i.jsx)(n.em,{children:"SChannel"}),", ",(0,i.jsx)(n.em,{children:"SProperty"}),", ",(0,i.jsx)(n.em,{children:"iValue"}),"\n",(0,i.jsx)(n.strong,{children:"cabbageSet"})," ",(0,i.jsx)(n.em,{children:"SChannel"}),", ",(0,i.jsx)(n.em,{children:"SProperty"}),", ",(0,i.jsx)(n.em,{children:"SValue"}),"\n",(0,i.jsx)(n.strong,{children:"cabbageSet"})," ",(0,i.jsx)(n.em,{children:"kTrig"}),", ",(0,i.jsx)(n.em,{children:"SChannel"}),", ",(0,i.jsx)(n.em,{children:"SProperty"}),", ",(0,i.jsx)(n.em,{children:"SValue"}),"\n",(0,i.jsx)(n.strong,{children:"cabbageSet"})," ",(0,i.jsx)(n.em,{children:"kTrig"}),", ",(0,i.jsx)(n.em,{children:"SChannel"}),", ",(0,i.jsx)(n.em,{children:"SProperty"}),", ",(0,i.jsx)(n.em,{children:"kValue"})]}),"\n",(0,i.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"SChannel"})," \u2013 the name of the channel to query"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"SProperty"})," - the property you wish to access. If the property is part of a JSON object, such as ",(0,i.jsx)(n.code,{children:'"bounds:{"left":0}'}),' you can use dot notation, i.e., "bounds.left"']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"iValue"})," - the current value of the widget at init-time"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"kValue"})," - the current value of the widget property"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"SValue"})," - the current string value of the widget property"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"kTrig"})," - a trigger signal that will return 1 for a single k-cycle whenever the value has been updated/changed"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(a.A,{language:"csharp",children:r})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}}}]);