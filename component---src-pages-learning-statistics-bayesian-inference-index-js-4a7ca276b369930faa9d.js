(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(159),o=n.n(i),l=n(158);t.default=function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{border:"solid 5px "+l.a.lightyellow,padding:10}},r.a.createElement(o.a,{to:"/learning/statistics/bayesian-inference/likelihood"},r.a.createElement("h3",null,"Likelihood — p(data | θ) "),r.a.createElement("p",null,"Given our model, how likely is it that we would observe this data?"))),r.a.createElement("div",{style:{border:"solid 5px "+l.a.lightblue,padding:10}},r.a.createElement(o.a,{to:"/learning/statistics/bayesian-inference/prior"},r.a.createElement("h3",null,"Prior — p(θ) "),r.a.createElement("p",null,"Before doing the inference, describe what you think the parameters are by specifying the priors."))),r.a.createElement("div",{style:{border:"solid 5px "+l.a.lightgreen,padding:10}},r.a.createElement(o.a,{to:"/learning/statistics/bayesian-inference/evidence"},r.a.createElement("h3",null,"Evidence — p(data) "),r.a.createElement("p",null,"The denominator of Bayes rule. I've also seen this called the"," ",r.a.createElement("i",null,"marginal probability"),"."))),r.a.createElement("div",{style:{border:"solid 5px "+l.a.lightred,padding:10}},r.a.createElement(o.a,{to:"/learning/statistics/bayesian-inference/posterior"},r.a.createElement("h3",null,"Posterior — p(θ | data) "),r.a.createElement("p",null,"This is the thing that we're trying to calculate. What are the values of θ that we should use for our model?"))))}},135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(159),o=n.n(i),l=n(164),c=n(130),s=n(433),u=n.n(s);t.default=function(){return r.a.createElement(l.e,null,r.a.createElement(l.j,{name:"Bayesian inference"},r.a.createElement(l.h,null,"Bayesian inference is a way of drawing statistical inferences from data. You make a model with parameters θ. You then use Bayes rule to get the probability distribution for those parameters after we observe data."),r.a.createElement(l.d,{caption:"Bayes rule for the probability of θ given data"},r.a.createElement("img",{src:u.a})),r.a.createElement(l.h,null,"There are four parts to this equation.",r.a.createElement(c.default,null)),r.a.createElement(l.h,null,"Bayes rule gives you a way to get from ",r.a.createElement("i",null,"p(data | θ)")," to"," ",r.a.createElement("i",null,"p(θ | data)"),", flipping round the equation to give you the posterior. An alternative way of thinking about it is that it gives you a way to update your beliefs after you observe new data."),r.a.createElement(l.h,null,"We go to a lot of hard work to calculate the posterior distribution, which is what the data tells you about the parameters of your model. From the posterior you can make summaries of your analysis to state the likely values of the parameters of the model, and you can also make predictions from the posterior."),r.a.createElement(l.k,{name:"Sampling to get the posterior"},r.a.createElement(l.h,null,"The posterior is really hard to calculate exactly, because the evidence term is usually a horrible integral. We take advantage of something we found in"," ",r.a.createElement(o.a,{to:"./learning/statistics/bayesian-inference/evidence/"},"the section about evidence")," ","to rewrite Bayes rule as a similarity relation."),r.a.createElement(l.h,null,r.a.createElement(l.c,{equation:"$p(\\theta | data) = \\frac{p(data | \\theta) p(\\theta)}{p(data)}$"}),r.a.createElement(l.c,{equation:"$p(\\theta | data) \\propto p(data | \\theta) p(\\theta)$"})),r.a.createElement(l.h,null,"This trick lets us use a family of techniques called ",r.a.createElement(o.a,{to:"./learning/statistics/bayesian-inference/mcmc/"},"Markov Chain Monte Carlo sampling"),". These techniques let us get a very good approximation of the posterior distribution, and allows us to solve real world problems."))))}},158:function(e,t,n){"use strict";t.a={grey:"#50514F",darkgrey:"#3c3d3b",lightgrey:"#646563",vlightgrey:"#cccdcb",red:"#F25F5C",darkred:"#de4b48",lightred:"#ff7370",yellow:"#FFE066",darkyellow:"#ebcc52",lightyellow:"#fff47a",blue:"#247BA0",darkblue:"#10678c",lightblue:"#388fb4",vlightblue:"#b1d7e7",green:"#70C1B3",darkgreen:"#5cad9f",lightgreen:"#84d5c7"}},160:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(159),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(161),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(29);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},163:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(158),c=n(160),s=n(69),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content"},o.a.createElement("blockquote",null,this.props.children)),o.a.createElement("div",{className:"note"},o.a.createElement("a",{href:this.props.source},o.a.createElement("h6",null,this.props.person))))},t}(i.Component),p=n(167),d=n.n(p),h=n(168),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.language;return o.a.createElement("div",{className:"containerrow"},o.a.createElement("pre",{className:"content"},o.a.createElement(d.a,{language:e,style:h.coy},this.props.code)))},t}(i.Component),f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getcaption=function(){return!0!==this.props.fullwidth?o.a.createElement("figcaption",{className:"note"},o.a.createElement("h6",{className:"figurelabel"}),this.props.caption):o.a.createElement("figcaption",{className:"fullwidth"},o.a.createElement("h6",{className:"figurelabel"}),this.props.caption)},n.getdiv=function(){return!0!==this.props.fullwidth?o.a.createElement("div",{className:"content"},this.props.children):o.a.createElement("div",{className:"fullwidth"},this.props.children)},n.render=function(){var e=this.getcaption(),t=this.getdiv();return this.props.fullwidth?o.a.createElement("figure",{className:"containerrow"},t,e):o.a.createElement("figure",{className:"containerrow"},e,t)},t}(i.Component),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.note;return o.a.createElement("div",{className:"containerrow"},void 0!==e&&o.a.createElement("aside",{className:"note"},e),o.a.createElement("p",{className:"content"},this.props.children))},t}(i.Component),y=(n(162),n(21),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},n.render=function(){var e=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h2",{className:"content",id:e},this.props.name)),this.props.children)},t}(i.Component)),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},n.render=function(){var e=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h3",{className:"content",id:e},this.props.name)),this.props.children)},t}(i.Component),v=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},n.render=function(){var e=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h4",{className:"content",id:e},this.props.name)),this.props.children)},t}(i.Component),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("nav",{css:{paddingBottom:Object(s.rhythm)(2)}},this.props.children)},t}(i.Component),b=(n(70),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.to.split("/").slice(-1)[0];return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content",css:{border:"1px solid "+l.a.blue}},o.a.createElement(c.Link,{css:{display:"block",color:l.a.darkblue,backgroundColor:l.a.vlightblue},to:this.props.to},e),o.a.createElement("div",{css:{paddingLeft:Object(s.rhythm)(1)}},this.props.desc)))},t}(i.Component)),N=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.children}}))},t}(i.Component),k=(n(4),n(169)),C=n.n(k),q=(n(165),n(170),function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(C.a,{title:"Things I wish I could remember",meta:[{name:"description",content:"dataewan things to remember"},{name:"keywords",content:"notebook, explaination"}]}),o.a.createElement("div",{className:"containerrow"},o.a.createElement("header",{className:"content"},o.a.createElement("a",{href:"https://twitter.com/dataewan",className:"twitterlink"},o.a.createElement("img",{src:"./twitter.png",alt:"twitter link",width:"25"})),o.a.createElement(c.Link,{to:"/"},o.a.createElement("h1",null,"dataewan")))),t)}),x=n(166),T=n.n(x),B=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("figure",{className:"containerrow"},o.a.createElement(T.a,null,this.props.equation),o.a.createElement("h6",{className:"equationlabel"}))},t}(i.Component);n.d(t,"a",function(){return u}),n.d(t,"b",function(){return m}),n.d(t,"d",function(){return f}),n.d(t,"h",function(){return g}),n.d(t,"j",function(){return y}),n.d(t,"k",function(){return E}),n.d(t,"l",function(){return v}),n.d(t,"g",function(){return w}),n.d(t,"f",function(){return b}),n.d(t,"i",function(){return N}),n.d(t,"e",function(){return q}),n.d(t,"c",function(){return B})},165:function(e,t,n){},433:function(e,t,n){e.exports=n.p+"static/bayes_rule-94c052427fc2797095ddd09ac553e974.png"}}]);
//# sourceMappingURL=component---src-pages-learning-statistics-bayesian-inference-index-js-4a7ca276b369930faa9d.js.map