(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{154:function(t,n,e){"use strict";e.r(n);var d=e(6),a=e.n(d),r=e(0),o=e.n(r),s=(e(4),e(164)),i=e(173),l=e.n(i),c=e(465),h=e.n(c),u=e(466),m=e.n(u),p=function(t){function n(n){return t.call(this,n)||this}return a()(n,t),n.prototype.render=function(){return o.a.createElement(s.e,null,o.a.createElement(s.j,{name:"sort_values"},o.a.createElement(s.h,{note:o.a.createElement("a",{href:"https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.sort_values.html"},"pandas documentation")},"Use this function to order the rows in your dataframe. Useful if you want to quickly see the top results. Going to use the titanic dataset to illustrate. Here's the raw data."),o.a.createElement(s.b,{language:"python",code:"\nimport pandas as pd\nimport seaborn as sns\n\ndf = sns.load_dataset('titanic')\ndf.head(5)\n          "}),o.a.createElement(s.i,null,l.a),o.a.createElement(s.k,{name:"Sorting dataframe values"},o.a.createElement(s.h,null,"Use the ",o.a.createElement("span",{className:"mono"},"sort_values")," to order your dataframe. The ",o.a.createElement("span",{className:"mono"},"ascending")," parameter can be used to reverse the order of results. This chain the 5 oldest people in the dataset."),o.a.createElement(s.b,{language:"python",code:"\n(\n    df\n    .sort_values('age', ascending=False)\n).head(5)\n          "}),o.a.createElement(s.i,null,h.a)),o.a.createElement(s.k,{name:"Custom sort pandas dataframes"},o.a.createElement(s.h,{note:o.a.createElement("a",{href:"https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Categorical.html"},"pandas documentation")},"The default order isn't always what you want to sort your dataframe by, you might want to specify an order. A fairly straightforward way to do this is to use"," ",o.a.createElement("span",{className:"mono"},"pd.Categorical"),". These are a bit like factors in R, and give you a way to represent a categorical variable in your dataset. Here we'll order the embarkation points by a custom order, rather than the default alphabetical. Combining this with the ",o.a.createElement("a",{href:"./assign"},"assign")," verb as well."),o.a.createElement(s.b,{language:"python",code:"\ndf\n.assign(embark_categorical = pd.Categorical(\n    df.embark_town,\n    ['Southampton', 'Cherbourg', 'Queenstown']\n))\n.sort_values('embark_categorical')\n          "}),o.a.createElement(s.i,null,m.a))))},n}(r.Component);n.default=p},158:function(t,n,e){"use strict";n.a={grey:"#50514F",darkgrey:"#3c3d3b",lightgrey:"#646563",vlightgrey:"#cccdcb",red:"#F25F5C",darkred:"#de4b48",lightred:"#ff7370",yellow:"#FFE066",darkyellow:"#ebcc52",lightyellow:"#fff47a",blue:"#247BA0",darkblue:"#10678c",lightblue:"#388fb4",vlightblue:"#b1d7e7",green:"#70C1B3",darkgreen:"#5cad9f",lightgreen:"#84d5c7"}},160:function(t,n,e){"use strict";e.r(n),e.d(n,"graphql",function(){return p}),e.d(n,"StaticQueryContext",function(){return u}),e.d(n,"StaticQuery",function(){return m});var d=e(0),a=e.n(d),r=e(4),o=e.n(r),s=e(159),i=e.n(s);e.d(n,"Link",function(){return i.a}),e.d(n,"withPrefix",function(){return s.withPrefix}),e.d(n,"navigate",function(){return s.navigate}),e.d(n,"push",function(){return s.push}),e.d(n,"replace",function(){return s.replace}),e.d(n,"navigateTo",function(){return s.navigateTo});var l=e(161),c=e.n(l);e.d(n,"PageRenderer",function(){return c.a});var h=e(29);e.d(n,"parsePath",function(){return h.a});var u=a.a.createContext({}),m=function(t){return a.a.createElement(u.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(t,n,e){var d;t.exports=(d=e(163))&&d.default||d},163:function(t,n,e){"use strict";e.r(n);e(30);var d=e(0),a=e.n(d),r=e(4),o=e.n(r),s=e(46),i=e(2),l=function(t){var n=t.location,e=i.default.getResourcesForPathnameSync(n.pathname);return a.a.createElement(s.a,Object.assign({location:n,pageResources:e},e.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},164:function(t,n,e){"use strict";var d=e(6),a=e.n(d),r=e(0),o=e.n(r),s=e(158),i=e(160),l=e(69),c=function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content"},o.a.createElement("blockquote",null,this.props.children)),o.a.createElement("div",{className:"note"},o.a.createElement("a",{href:this.props.source},o.a.createElement("h6",null,this.props.person))))},n}(r.Component),h=e(167),u=e.n(h),m=e(168),p=function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t=this.props.language;return o.a.createElement("div",{className:"containerrow"},o.a.createElement("pre",{className:"content"},o.a.createElement(u.a,{language:t,style:m.coy},this.props.code)))},n}(r.Component),f=function(t){function n(){return t.apply(this,arguments)||this}a()(n,t);var e=n.prototype;return e.getcaption=function(){return!0!==this.props.fullwidth?o.a.createElement("figcaption",{className:"note"},o.a.createElement("h6",{className:"figurelabel"}),this.props.caption):o.a.createElement("figcaption",{className:"fullwidth"},o.a.createElement("h6",{className:"figurelabel"}),this.props.caption)},e.getdiv=function(){return!0!==this.props.fullwidth?o.a.createElement("div",{className:"content"},this.props.children):o.a.createElement("div",{className:"fullwidth"},this.props.children)},e.render=function(){var t=this.getcaption(),n=this.getdiv();return this.props.fullwidth?o.a.createElement("figure",{className:"containerrow"},n,t):o.a.createElement("figure",{className:"containerrow"},t,n)},n}(r.Component),g=function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t=this.props.note;return o.a.createElement("div",{className:"containerrow"},void 0!==t&&o.a.createElement("aside",{className:"note"},t),o.a.createElement("p",{className:"content"},this.props.children))},n}(r.Component),y=(e(162),e(21),function(t){function n(){return t.apply(this,arguments)||this}a()(n,t);var e=n.prototype;return e.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},e.render=function(){var t=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h2",{className:"content",id:t},this.props.name)),this.props.children)},n}(r.Component)),b=function(t){function n(){return t.apply(this,arguments)||this}a()(n,t);var e=n.prototype;return e.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},e.render=function(){var t=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h3",{className:"content",id:t},this.props.name)),this.props.children)},n}(r.Component),w=function(t){function n(){return t.apply(this,arguments)||this}a()(n,t);var e=n.prototype;return e.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},e.render=function(){var t=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h4",{className:"content",id:t},this.props.name)),this.props.children)},n}(r.Component),E=function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){return o.a.createElement("nav",{css:{paddingBottom:Object(l.rhythm)(2)}},this.props.children)},n}(r.Component),v=(e(70),function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){var t=this.props.to.split("/").slice(-1)[0];return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content",css:{border:"1px solid "+s.a.blue}},o.a.createElement(i.Link,{css:{display:"block",color:s.a.darkblue,backgroundColor:s.a.vlightblue},to:this.props.to},t),o.a.createElement("div",{css:{paddingLeft:Object(l.rhythm)(1)}},this.props.desc)))},n}(r.Component)),N=function(t){function n(n){return t.call(this,n)||this}return a()(n,t),n.prototype.render=function(){return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.children}}))},n}(r.Component),k=(e(4),e(169)),C=e.n(k),T=(e(165),e(170),function(t){var n=t.children;return o.a.createElement("div",null,o.a.createElement(C.a,{title:"Things I wish I could remember",meta:[{name:"description",content:"dataewan things to remember"},{name:"keywords",content:"notebook, explaination"}]}),o.a.createElement("div",{className:"containerrow"},o.a.createElement("header",{className:"content"},o.a.createElement("a",{href:"https://twitter.com/dataewan",className:"twitterlink"},o.a.createElement("img",{src:"./twitter.png",alt:"twitter link",width:"25"})),o.a.createElement(i.Link,{to:"/"},o.a.createElement("h1",null,"dataewan")))),n)}),F=e(166),S=e.n(F),_=function(t){function n(){return t.apply(this,arguments)||this}return a()(n,t),n.prototype.render=function(){return o.a.createElement("figure",{className:"containerrow"},o.a.createElement(S.a,null,this.props.equation),o.a.createElement("h6",{className:"equationlabel"}))},n}(r.Component);e.d(n,"a",function(){return c}),e.d(n,"b",function(){return p}),e.d(n,"d",function(){return f}),e.d(n,"h",function(){return g}),e.d(n,"j",function(){return y}),e.d(n,"k",function(){return b}),e.d(n,"l",function(){return w}),e.d(n,"g",function(){return E}),e.d(n,"f",function(){return v}),e.d(n,"i",function(){return N}),e.d(n,"e",function(){return T}),e.d(n,"c",function(){return _})},165:function(t,n,e){},173:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>survived</th>\n      <th>pclass</th>\n      <th>sex</th>\n      <th>age</th>\n      <th>sibsp</th>\n      <th>parch</th>\n      <th>fare</th>\n      <th>embarked</th>\n      <th>class</th>\n      <th>who</th>\n      <th>adult_male</th>\n      <th>deck</th>\n      <th>embark_town</th>\n      <th>alive</th>\n      <th>alone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>22.0</td>\n      <td>1</td>\n      <td>0</td>\n      <td>7.2500</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>38.0</td>\n      <td>1</td>\n      <td>0</td>\n      <td>71.2833</td>\n      <td>C</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>C</td>\n      <td>Cherbourg</td>\n      <td>yes</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>1</td>\n      <td>3</td>\n      <td>female</td>\n      <td>26.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>7.9250</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>yes</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>35.0</td>\n      <td>1</td>\n      <td>0</td>\n      <td>53.1000</td>\n      <td>S</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>C</td>\n      <td>Southampton</td>\n      <td>yes</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>35.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>8.0500</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>True</td>\n    </tr>\n  </tbody>\n</table>'},465:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>survived</th>\n      <th>pclass</th>\n      <th>sex</th>\n      <th>age</th>\n      <th>sibsp</th>\n      <th>parch</th>\n      <th>fare</th>\n      <th>embarked</th>\n      <th>class</th>\n      <th>who</th>\n      <th>adult_male</th>\n      <th>deck</th>\n      <th>embark_town</th>\n      <th>alive</th>\n      <th>alone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>630</th>\n      <td>1</td>\n      <td>1</td>\n      <td>male</td>\n      <td>80.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>30.0000</td>\n      <td>S</td>\n      <td>First</td>\n      <td>man</td>\n      <td>True</td>\n      <td>A</td>\n      <td>Southampton</td>\n      <td>yes</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>851</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>74.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>7.7750</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>493</th>\n      <td>0</td>\n      <td>1</td>\n      <td>male</td>\n      <td>71.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>49.5042</td>\n      <td>C</td>\n      <td>First</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Cherbourg</td>\n      <td>no</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>96</th>\n      <td>0</td>\n      <td>1</td>\n      <td>male</td>\n      <td>71.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>34.6542</td>\n      <td>C</td>\n      <td>First</td>\n      <td>man</td>\n      <td>True</td>\n      <td>A</td>\n      <td>Cherbourg</td>\n      <td>no</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>116</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>70.5</td>\n      <td>0</td>\n      <td>0</td>\n      <td>7.7500</td>\n      <td>Q</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Queenstown</td>\n      <td>no</td>\n      <td>True</td>\n    </tr>\n  </tbody>\n</table>'},466:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>survived</th>\n      <th>pclass</th>\n      <th>sex</th>\n      <th>age</th>\n      <th>sibsp</th>\n      <th>parch</th>\n      <th>fare</th>\n      <th>embarked</th>\n      <th>class</th>\n      <th>who</th>\n      <th>adult_male</th>\n      <th>deck</th>\n      <th>embark_town</th>\n      <th>alive</th>\n      <th>alone</th>\n      <th>embark_categorical</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>829</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>62.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>80.000</td>\n      <td>NaN</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>B</td>\n      <td>NaN</td>\n      <td>yes</td>\n      <td>True</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>61</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>38.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>80.000</td>\n      <td>NaN</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>B</td>\n      <td>NaN</td>\n      <td>yes</td>\n      <td>True</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>0</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>22.0</td>\n      <td>1</td>\n      <td>0</td>\n      <td>7.250</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>False</td>\n      <td>Southampton</td>\n    </tr>\n    <tr>\n      <th>541</th>\n      <td>0</td>\n      <td>3</td>\n      <td>female</td>\n      <td>9.0</td>\n      <td>4</td>\n      <td>2</td>\n      <td>31.275</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>child</td>\n      <td>False</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>False</td>\n      <td>Southampton</td>\n    </tr>\n    <tr>\n      <th>542</th>\n      <td>0</td>\n      <td>3</td>\n      <td>female</td>\n      <td>11.0</td>\n      <td>4</td>\n      <td>2</td>\n      <td>31.275</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>child</td>\n      <td>False</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>False</td>\n      <td>Southampton</td>\n    </tr>\n  </tbody>\n</table>'}}]);
//# sourceMappingURL=component---src-pages-techniques-programming-pandas-verbs-sort-values-js-97a14e5408fecd4b19b1.js.map