(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{142:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),c=n(164),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c.e,null,i.a.createElement("article",null,i.a.createElement(c.j,{name:"Section component"},i.a.createElement(c.h,null,"The section component is the top level of the hierarchy in the document. I've taken this from LaTeX document formatting, as I find a hierarchy quite easy to think in. Use a ",i.a.createElement("span",{className:"mono"},"Section")," like this:"),i.a.createElement(c.b,{language:"javascript",code:"\n<Section name='name of the section'>\n  --CONTENT GOES HERE--\n</Section>\n            "}),i.a.createElement(c.h,null,"All the sections have automatic anchors added to them so that you can link to them. The name of the anchor is the name of the section, spaces and other punctuation removed, and converted to lowercase. You can refer to ",i.a.createElement("a",{href:"#codecomponent"},"other sections")," using this method.")),i.a.createElement(c.j,{name:"Subsection component"},i.a.createElement(c.h,null,"Exactly the same as a ",i.a.createElement("span",{className:"mono"},"Section")," component, just with a different level of heading."),i.a.createElement(c.b,{language:"javascript",code:"\n<Subsection name='name of the subsection'>\n  --CONTENT GOES HERE--\n</Subsection>\n            "}),i.a.createElement(c.k,{name:"Example subsection"},i.a.createElement(c.h,null,"Here is how a subsection looks."))),i.a.createElement(c.j,{name:"Subsubsection component"},i.a.createElement(c.h,null,"Exactly the same as a ",i.a.createElement("span",{className:"mono"},"Section")," component, just with a different level of heading."),i.a.createElement(c.b,{language:"javascript",code:"\n<Subsubsection name='name of the subsubection'>\n  --CONTENT GOES HERE--\n</Subsubsection>\n            "}),i.a.createElement(c.l,{name:"Example subsubsection"},i.a.createElement(c.h,null,"Here is how a ",i.a.createElement("span",{className:"mono"},"subsubsection")," looks. You shouldn't need anything below a subsubsection, that would suggest you're getting too granular."))),i.a.createElement(c.j,{name:"Paragraph component"},i.a.createElement(c.h,null,"A paragraph is the lowest level of the document structure. Here is how you use one."),i.a.createElement(c.b,{language:"javascript",code:"\n<Paragraph note='a note that I want to put next to my paragraph'>\n  Here is the place where I put my text.\n</Paragraph>\n            "}),i.a.createElement(c.h,{note:"Having the sidenotes next to the text makes life easier for the reader, you have to do less eye movement."},"A useful feature is that you can put notes beside your paragraphs if you like. Notes are useful for information that isn't necessary, but might be interesting. Also it can be useful to have references in the notes.")),i.a.createElement(c.j,{name:"Figure component"},i.a.createElement(c.h,null,"Figures are used mainly to hold images, or other plots. They take two parameters, fullwidth and a caption. If ",i.a.createElement("span",{className:"mono"},"fullwidth")," is set to anything other than",i.a.createElement("span",{className:"mono"},!0)," (the curly brackets are important), then the figure will be flush with the text. If it is set to true then the figure will take up the whole width of the page. Put your ",i.a.createElement("span",{className:"mono"},"img")," tags in the figure to have the content show up."),i.a.createElement(c.b,{language:"javascript",code:'\n<Figure \n  fullwidth={true}\n  caption="Caption for the figure">\n  --Content of the figure, for example an image--\n</Figure>\n            '}),i.a.createElement(c.d,{caption:"Some dinosaurs having fun",fullwidth:!1},i.a.createElement("img",{src:"https://lh3.googleusercontent.com/cwK3uuCsmzM3SXyyQ8Id7VhYaz7rvi5zkX8rPHrJzxGgEamFkeBxpgQUIlA6JduZDWgT5JxO3i8dsUNbODcEsnkIuNp_47cjw0p6CI7BuUTSom9S8I0LGNnFlaTGkol8Q5M1T14gZuVzcIKpP73Jkeix2ASiiVngAjvjiTghdJQ5hGJfoYn4RX6wVX0FYCswf08K_k5pDTfP5l0PZ1Ra68zM1QIKzpADKA-LUI3ULfVPwdThrAM4Map3fTjHBHRNdqIIS5Bws-KzRX1xhnIVri_Ewc9vsFEHEfJjf59xfmEKYKg64ugm4YefKCTN6nYEsfGwKdZZzMNaDH4JBptINzI8SLEkIiy2vqyiJ0X-UQ3NPUjrqLSokQSdzsgkDfVcOkuqvDwHz6rWKYzwF80ZDBo23nwK513OvKK4pUw_HrKw-jJwfug5Tr-9n13Z_AdYDUGUC75uxe9VMRRVTyd-mmdMo5c5hpX7trMOI622cJHjc8L3A-Yfr1zNZDLYw4eEyKRYFxmo0Vk7JZfjr3i4Pscd8iqzasAHhB9sBiv2ymZDTrCl98fIc6ZDlRrwh4cRcw7WfyMKmeB5udkV_CHCWZZoAzK2HFGFWnM0x593cAkzLU9UUFmCdB_LHl8gbzKwDoEe-DYz2_xKB0zR2UJgTfEMQqYV9Om4n3Y=w2068-h1550-no"})),i.a.createElement(c.h,null,"The figures are numbered. Currently there is no way to link to a particular figure.")),i.a.createElement(c.j,{name:"Code component"},i.a.createElement(c.h,null,"For inserting code snippets into the document. The highlighting comes from ",i.a.createElement("a",{href:"https://github.com/conorhastings/react-syntax-highlighter"},"React syntax highlighter")," and uses any of the languages coming from ",i.a.createElement("a",{href:"http://prismjs.com/"},"Prism"),". Note that the code is passed in as a parameter and uses backticks within a pair of curly braces."),i.a.createElement(c.b,{language:"javascript",code:"\n<Code \n  language='python'\n  code={`\n  def showtime(x):\n    print(x)\n  `}\n  />\n            "}),i.a.createElement(c.h,null,"That code would make something like this:"),i.a.createElement(c.b,{language:"python",code:"\ndef showtime(x):\n    print(x)\n            "})),i.a.createElement(c.j,{name:"BlockQuote component"},i.a.createElement(c.b,{language:"javascript",code:"\n<BlockQuote \n  source='https://en.wikiquote.org/wiki/Cat%27s_Cradle'\n  person=\"Kurt Vonegut, Cat's Cradle\"\n  >\n  Dr. Hoenikker used to say that any scientist who couldn't\n  explain to an eight-year-old what he was doing was a charlatan.\n</BlockQuote>\n            "}),i.a.createElement(c.h,null,"Produces:"),i.a.createElement(c.a,{source:"https://en.wikiquote.org/wiki/Cat%27s_Cradle",person:"Kurt Vonegut, Cat's Cradle"},"Dr. Hoenikker used to say that any scientist who couldn't explain to an eight-year-old what he was doing was a charlatan."))))},t}(o.Component);t.default=s},158:function(e,t,n){"use strict";t.a={grey:"#50514F",darkgrey:"#3c3d3b",lightgrey:"#646563",vlightgrey:"#cccdcb",red:"#F25F5C",darkred:"#de4b48",lightred:"#ff7370",yellow:"#FFE066",darkyellow:"#ebcc52",lightyellow:"#fff47a",blue:"#247BA0",darkblue:"#10678c",lightblue:"#388fb4",vlightblue:"#b1d7e7",green:"#70C1B3",darkgreen:"#5cad9f",lightgreen:"#84d5c7"}},160:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return d}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(159),s=n.n(c);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(161),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var h=n(29);n.d(t,"parsePath",function(){return h.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},161:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},163:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(46),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),c=n(158),s=n(160),l=n(69),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"containerrow"},i.a.createElement("div",{className:"content"},i.a.createElement("blockquote",null,this.props.children)),i.a.createElement("div",{className:"note"},i.a.createElement("a",{href:this.props.source},i.a.createElement("h6",null,this.props.person))))},t}(o.Component),h=n(167),m=n.n(h),p=n(168),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.language;return i.a.createElement("div",{className:"containerrow"},i.a.createElement("pre",{className:"content"},i.a.createElement(m.a,{language:e,style:p.coy},this.props.code)))},t}(o.Component),f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getcaption=function(){return!0!==this.props.fullwidth?i.a.createElement("figcaption",{className:"note"},i.a.createElement("h6",{className:"figurelabel"}),this.props.caption):i.a.createElement("figcaption",{className:"fullwidth"},i.a.createElement("h6",{className:"figurelabel"}),this.props.caption)},n.getdiv=function(){return!0!==this.props.fullwidth?i.a.createElement("div",{className:"content"},this.props.children):i.a.createElement("div",{className:"fullwidth"},this.props.children)},n.render=function(){var e=this.getcaption(),t=this.getdiv();return this.props.fullwidth?i.a.createElement("figure",{className:"containerrow"},t,e):i.a.createElement("figure",{className:"containerrow"},e,t)},t}(o.Component),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.note;return i.a.createElement("div",{className:"containerrow"},void 0!==e&&i.a.createElement("aside",{className:"note"},e),i.a.createElement("p",{className:"content"},this.props.children))},t}(o.Component),E=(n(162),n(21),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},n.render=function(){var e=this.getName();return i.a.createElement("section",null,i.a.createElement("div",{className:"containerrow"},i.a.createElement("h2",{className:"content",id:e},this.props.name)),this.props.children)},t}(o.Component)),w=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},n.render=function(){var e=this.getName();return i.a.createElement("section",null,i.a.createElement("div",{className:"containerrow"},i.a.createElement("h3",{className:"content",id:e},this.props.name)),this.props.children)},t}(o.Component),y=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},n.render=function(){var e=this.getName();return i.a.createElement("section",null,i.a.createElement("div",{className:"containerrow"},i.a.createElement("h4",{className:"content",id:e},this.props.name)),this.props.children)},t}(o.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("nav",{css:{paddingBottom:Object(l.rhythm)(2)}},this.props.children)},t}(o.Component),v=(n(70),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.to.split("/").slice(-1)[0];return i.a.createElement("div",{className:"containerrow"},i.a.createElement("div",{className:"content",css:{border:"1px solid "+c.a.blue}},i.a.createElement(s.Link,{css:{display:"block",color:c.a.darkblue,backgroundColor:c.a.vlightblue},to:this.props.to},e),i.a.createElement("div",{css:{paddingLeft:Object(l.rhythm)(1)}},this.props.desc)))},t}(o.Component)),k=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"containerrow"},i.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.children}}))},t}(o.Component),N=(n(4),n(169)),C=n.n(N),x=(n(165),n(170),function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(C.a,{title:"Things I wish I could remember",meta:[{name:"description",content:"dataewan things to remember"},{name:"keywords",content:"notebook, explaination"}]}),i.a.createElement("div",{className:"containerrow"},i.a.createElement("header",{className:"content"},i.a.createElement("a",{href:"https://twitter.com/dataewan",className:"twitterlink"},i.a.createElement("img",{src:"./twitter.png",alt:"twitter link",width:"25"})),i.a.createElement(s.Link,{to:"/"},i.a.createElement("h1",null,"dataewan")))),t)}),j=n(166),T=n.n(j),S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("figure",{className:"containerrow"},i.a.createElement(T.a,null,this.props.equation),i.a.createElement("h6",{className:"equationlabel"}))},t}(o.Component);n.d(t,"a",function(){return u}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return f}),n.d(t,"h",function(){return g}),n.d(t,"j",function(){return E}),n.d(t,"k",function(){return w}),n.d(t,"l",function(){return y}),n.d(t,"g",function(){return b}),n.d(t,"f",function(){return v}),n.d(t,"i",function(){return k}),n.d(t,"e",function(){return x}),n.d(t,"c",function(){return S})},165:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-techniques-explaining-things-components-index-js-b775e0d42442321b92ce.js.map