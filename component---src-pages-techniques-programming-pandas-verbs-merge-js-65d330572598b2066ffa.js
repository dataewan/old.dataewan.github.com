(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{150:function(t,n,e){"use strict";e.r(n);var a=e(6),r=e.n(a),d=e(0),o=e.n(d),i=(e(4),e(164)),h=e(187),s=e.n(h),l=e(454),c=e.n(l),u=e(455),m=e.n(u),p=e(456),f=e.n(p),g=e(457),y=e.n(g),b=e(458),v=e.n(b),S=function(t){function n(n){return t.call(this,n)||this}return r()(n,t),n.prototype.render=function(){return o.a.createElement(i.e,null,o.a.createElement(i.j,{name:"merge"},o.a.createElement(i.h,{note:o.a.createElement("a",{href:"https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.merge.html"},"pandas documentation")},"Merge is a lot like the ",o.a.createElement("span",{className:"mono"},"JOIN")," operation in SQL. You use it to join together dataframe that contain a common key. The common key is a column in each dataframe that you can use to look up between the dataframes, some sort of identifier."),o.a.createElement(i.h,{note:o.a.createElement("a",{href:"https://gist.github.com/dataewan/9e3eb3fee268b1eb4a629fd216e20712"},"where the data comes from")},"I'm going to use three dataframes for this that contain information about movies. There are dataframes named"," ",o.a.createElement("span",{className:"mono"},"movies"),","," ",o.a.createElement("span",{className:"mono"},"cast"),", and"," ",o.a.createElement("span",{className:"mono"},"crew"),"."),o.a.createElement(i.d,{caption:"Movies dataframe",fullwidth:!0},o.a.createElement(i.i,null,s.a)),o.a.createElement(i.d,{caption:"Cast dataframe",fullwidth:!0},o.a.createElement(i.i,null,c.a)),o.a.createElement(i.d,{caption:"Crew dataframe",fullwidth:!0},o.a.createElement(i.i,null,m.a)),o.a.createElement(i.h,null,"Note that there is an ",o.a.createElement("span",{className:"mono"},"id")," column in the movies dataframe. This matches the"," ",o.a.createElement("span",{className:"mono"},"movie_id")," column in the cast and crew dataframes."),o.a.createElement(i.k,{name:"Joins in pandas"},o.a.createElement(i.b,{language:"python",code:"\n(\n    # first a subquery to get all the Christopher Nolan directed films\n    crew\n    .query('job == \"Director\"')\n    .query('name == \"Christopher Nolan\"')\n    # now join with the movies and get their titles\n    .merge(\n        movies,\n        left_on='movie_id',\n        right_on='id'\n    )\n    [['title', 'release_date']]\n)\n          "}),o.a.createElement(i.i,null,f.a),o.a.createElement(i.l,{name:"left, right, inner, outer"},o.a.createElement(i.h,null,"By default pandas does an inner join. This means that only rows in both the dataframes are returned. The"," ",o.a.createElement("span",{className:"mono"},"how")," parameter lets you do different sorts of joins. This (slightly contrived) example returns any years that either Susan Sarandon or Steven Spielberg made a film. This is an outer join, because we want rows that are present in either."),o.a.createElement(i.b,{language:"python",code:"\n# get all the susan sarandon movies\nsarandon = (\n    cast\n    .query('name == \"Susan Sarandon\"')\n    .merge(movies,\n           left_on='movie_id',\n           right_on='id')\n    [['name', 'title', 'year']]\n)\n\n# get all the steven spielberg movies\nspielberg = (\n    crew\n    .query('job == \"Director\"')\n    .query('name == \"Steven Spielberg\"')\n    .merge(movies,\n           left_on='movie_id',\n           right_on='id')\n    [['name', 'title', 'year']]\n)\n\n# perform the outer join\n(\n    sarandon\n    .merge(\n        spielberg,\n        how='outer',\n        on='year',\n    )\n    [['year', 'name_x', 'name_y']]\n    .drop_duplicates()\n    .sort_values('year')\n)\n            "}),o.a.createElement(i.i,null,y.a))),o.a.createElement(i.k,{name:"Checking your merges"},o.a.createElement(i.h,null,"A nice feature introduced in pandas 0.21 is the ability to validate your merges, using the"," ",o.a.createElement("span",{className:"mono"},"validate")," parameter. Sometimes you know that there should be only one matching row in the dataframe you're joining. For example, I thought there would only be one director for each film. Putting in the validation told me that I was wrong."),o.a.createElement(i.b,{language:"python",code:"\ndirectors = (\n    crew\n    .query('job == \"Director\"')\n)\n\n(\n    movies\n    .merge(\n        directors,\n        left_on='id',\n        right_on='movie_id',\n        validate='1:1'\n    )\n)\n\n# This fails with a MergeError\n          "}),o.a.createElement(i.h,null,"That code fails. Looking into the data a bit more, I see that my assumption was incorrect. Some films have multiple directors, and"," ",o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Paris,_je_t%27aime"},"Paris, je t'aime")," ","has 21! I might have to put logic further along in my analysis to catch these cases."),o.a.createElement(i.b,{language:"python",code:"\n(\n    (\n        movies\n        .merge(\n            directors,\n            left_on='id',\n            right_on='movie_id',\n        )\n    )\n    .groupby('title')\n    .agg({'name': 'count'})\n    .sort_values('name')\n)\n          "}),o.a.createElement(i.i,null,v.a),o.a.createElement(i.h,null,"This is very useful if you are working with messy data, or if you want to apply your code to new data in the future. It helps you validate that your assumptions about the structure of the data are correct. It makes your code more resilient."))))},n}(d.Component);n.default=S},158:function(t,n,e){"use strict";n.a={grey:"#50514F",darkgrey:"#3c3d3b",lightgrey:"#646563",vlightgrey:"#cccdcb",red:"#F25F5C",darkred:"#de4b48",lightred:"#ff7370",yellow:"#FFE066",darkyellow:"#ebcc52",lightyellow:"#fff47a",blue:"#247BA0",darkblue:"#10678c",lightblue:"#388fb4",vlightblue:"#b1d7e7",green:"#70C1B3",darkgreen:"#5cad9f",lightgreen:"#84d5c7"}},160:function(t,n,e){"use strict";e.r(n),e.d(n,"graphql",function(){return p}),e.d(n,"StaticQueryContext",function(){return u}),e.d(n,"StaticQuery",function(){return m});var a=e(0),r=e.n(a),d=e(4),o=e.n(d),i=e(159),h=e.n(i);e.d(n,"Link",function(){return h.a}),e.d(n,"withPrefix",function(){return i.withPrefix}),e.d(n,"navigate",function(){return i.navigate}),e.d(n,"push",function(){return i.push}),e.d(n,"replace",function(){return i.replace}),e.d(n,"navigateTo",function(){return i.navigateTo});var s=e(161),l=e.n(s);e.d(n,"PageRenderer",function(){return l.a});var c=e(29);e.d(n,"parsePath",function(){return c.a});var u=r.a.createContext({}),m=function(t){return r.a.createElement(u.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(t,n,e){var a;t.exports=(a=e(163))&&a.default||a},163:function(t,n,e){"use strict";e.r(n);e(30);var a=e(0),r=e.n(a),d=e(4),o=e.n(d),i=e(46),h=e(2),s=function(t){var n=t.location,e=h.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(i.a,Object.assign({location:n,pageResources:e},e.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=s},164:function(t,n,e){"use strict";var a=e(6),r=e.n(a),d=e(0),o=e.n(d),i=e(158),h=e(160),s=e(69),l=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content"},o.a.createElement("blockquote",null,this.props.children)),o.a.createElement("div",{className:"note"},o.a.createElement("a",{href:this.props.source},o.a.createElement("h6",null,this.props.person))))},n}(d.Component),c=e(167),u=e.n(c),m=e(168),p=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t=this.props.language;return o.a.createElement("div",{className:"containerrow"},o.a.createElement("pre",{className:"content"},o.a.createElement(u.a,{language:t,style:m.coy},this.props.code)))},n}(d.Component),f=function(t){function n(){return t.apply(this,arguments)||this}r()(n,t);var e=n.prototype;return e.getcaption=function(){return!0!==this.props.fullwidth?o.a.createElement("figcaption",{className:"note"},o.a.createElement("h6",{className:"figurelabel"}),this.props.caption):o.a.createElement("figcaption",{className:"fullwidth"},o.a.createElement("h6",{className:"figurelabel"}),this.props.caption)},e.getdiv=function(){return!0!==this.props.fullwidth?o.a.createElement("div",{className:"content"},this.props.children):o.a.createElement("div",{className:"fullwidth"},this.props.children)},e.render=function(){var t=this.getcaption(),n=this.getdiv();return this.props.fullwidth?o.a.createElement("figure",{className:"containerrow"},n,t):o.a.createElement("figure",{className:"containerrow"},t,n)},n}(d.Component),g=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t=this.props.note;return o.a.createElement("div",{className:"containerrow"},void 0!==t&&o.a.createElement("aside",{className:"note"},t),o.a.createElement("p",{className:"content"},this.props.children))},n}(d.Component),y=(e(162),e(21),function(t){function n(){return t.apply(this,arguments)||this}r()(n,t);var e=n.prototype;return e.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},e.render=function(){var t=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h2",{className:"content",id:t},this.props.name)),this.props.children)},n}(d.Component)),b=function(t){function n(){return t.apply(this,arguments)||this}r()(n,t);var e=n.prototype;return e.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},e.render=function(){var t=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h3",{className:"content",id:t},this.props.name)),this.props.children)},n}(d.Component),v=function(t){function n(){return t.apply(this,arguments)||this}r()(n,t);var e=n.prototype;return e.getName=function(){return this.props.name.replace(/[^\w]/g,"").toLowerCase()},e.render=function(){var t=this.getName();return o.a.createElement("section",null,o.a.createElement("div",{className:"containerrow"},o.a.createElement("h4",{className:"content",id:t},this.props.name)),this.props.children)},n}(d.Component),S=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return o.a.createElement("nav",{css:{paddingBottom:Object(s.rhythm)(2)}},this.props.children)},n}(d.Component),N=(e(70),function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t=this.props.to.split("/").slice(-1)[0];return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content",css:{border:"1px solid "+i.a.blue}},o.a.createElement(h.Link,{css:{display:"block",color:i.a.darkblue,backgroundColor:i.a.vlightblue},to:this.props.to},t),o.a.createElement("div",{css:{paddingLeft:Object(s.rhythm)(1)}},this.props.desc)))},n}(d.Component)),E=function(t){function n(n){return t.call(this,n)||this}return r()(n,t),n.prototype.render=function(){return o.a.createElement("div",{className:"containerrow"},o.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.children}}))},n}(d.Component),w=(e(4),e(169)),k=e.n(w),C=(e(165),e(170),function(t){var n=t.children;return o.a.createElement("div",null,o.a.createElement(k.a,{title:"Things I wish I could remember",meta:[{name:"description",content:"dataewan things to remember"},{name:"keywords",content:"notebook, explaination"}]}),o.a.createElement("div",{className:"containerrow"},o.a.createElement("header",{className:"content"},o.a.createElement("a",{href:"https://twitter.com/dataewan",className:"twitterlink"},o.a.createElement("img",{src:"./twitter.png",alt:"twitter link",width:"25"})),o.a.createElement(h.Link,{to:"/"},o.a.createElement("h1",null,"dataewan")))),n)}),_=e(166),x=e.n(_),T=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return o.a.createElement("figure",{className:"containerrow"},o.a.createElement(x.a,null,this.props.equation),o.a.createElement("h6",{className:"equationlabel"}))},n}(d.Component);e.d(n,"a",function(){return l}),e.d(n,"b",function(){return p}),e.d(n,"d",function(){return f}),e.d(n,"h",function(){return g}),e.d(n,"j",function(){return y}),e.d(n,"k",function(){return b}),e.d(n,"l",function(){return v}),e.d(n,"g",function(){return S}),e.d(n,"f",function(){return N}),e.d(n,"i",function(){return E}),e.d(n,"e",function(){return C}),e.d(n,"c",function(){return T})},165:function(t,n,e){},187:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>budget</th>\n      <th>id</th>\n      <th>original_title</th>\n      <th>overview</th>\n      <th>popularity</th>\n      <th>release_date</th>\n      <th>runtime</th>\n      <th>status</th>\n      <th>tagline</th>\n      <th>title</th>\n      <th>vote_average</th>\n      <th>vote_count</th>\n      <th>year</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>237000000</td>\n      <td>19995</td>\n      <td>Avatar</td>\n      <td>In the 22nd century, a paraplegic Marine is di...</td>\n      <td>150.437577</td>\n      <td>2009-12-10</td>\n      <td>162.0</td>\n      <td>Released</td>\n      <td>Enter the World of Pandora.</td>\n      <td>Avatar</td>\n      <td>7.2</td>\n      <td>11800</td>\n      <td>2009.0</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>300000000</td>\n      <td>285</td>\n      <td>Pirates of the Caribbean: At World\'s End</td>\n      <td>Captain Barbossa, long believed to be dead, ha...</td>\n      <td>139.082615</td>\n      <td>2007-05-19</td>\n      <td>169.0</td>\n      <td>Released</td>\n      <td>At the end of the world, the adventure begins.</td>\n      <td>Pirates of the Caribbean: At World\'s End</td>\n      <td>6.9</td>\n      <td>4500</td>\n      <td>2007.0</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>245000000</td>\n      <td>206647</td>\n      <td>Spectre</td>\n      <td>A cryptic message from Bond’s past sends him o...</td>\n      <td>107.376788</td>\n      <td>2015-10-26</td>\n      <td>148.0</td>\n      <td>Released</td>\n      <td>A Plan No One Escapes</td>\n      <td>Spectre</td>\n      <td>6.3</td>\n      <td>4466</td>\n      <td>2015.0</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>250000000</td>\n      <td>49026</td>\n      <td>The Dark Knight Rises</td>\n      <td>Following the death of District Attorney Harve...</td>\n      <td>112.312950</td>\n      <td>2012-07-16</td>\n      <td>165.0</td>\n      <td>Released</td>\n      <td>The Legend Ends</td>\n      <td>The Dark Knight Rises</td>\n      <td>7.6</td>\n      <td>9106</td>\n      <td>2012.0</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>260000000</td>\n      <td>49529</td>\n      <td>John Carter</td>\n      <td>John Carter is a war-weary, former military ca...</td>\n      <td>43.926995</td>\n      <td>2012-03-07</td>\n      <td>132.0</td>\n      <td>Released</td>\n      <td>Lost in our world, found in another.</td>\n      <td>John Carter</td>\n      <td>6.1</td>\n      <td>2124</td>\n      <td>2012.0</td>\n    </tr>\n  </tbody>\n</table>'},454:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>cast_id</th>\n      <th>character</th>\n      <th>credit_id</th>\n      <th>gender</th>\n      <th>id</th>\n      <th>movie_id</th>\n      <th>name</th>\n      <th>order</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>242</td>\n      <td>Jake Sully</td>\n      <td>5602a8a7c3a3685532001c9a</td>\n      <td>2</td>\n      <td>65731</td>\n      <td>19995</td>\n      <td>Sam Worthington</td>\n      <td>0</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>3</td>\n      <td>Neytiri</td>\n      <td>52fe48009251416c750ac9cb</td>\n      <td>1</td>\n      <td>8691</td>\n      <td>19995</td>\n      <td>Zoe Saldana</td>\n      <td>1</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>25</td>\n      <td>Dr. Grace Augustine</td>\n      <td>52fe48009251416c750aca39</td>\n      <td>1</td>\n      <td>10205</td>\n      <td>19995</td>\n      <td>Sigourney Weaver</td>\n      <td>2</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>4</td>\n      <td>Col. Quaritch</td>\n      <td>52fe48009251416c750ac9cf</td>\n      <td>2</td>\n      <td>32747</td>\n      <td>19995</td>\n      <td>Stephen Lang</td>\n      <td>3</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>5</td>\n      <td>Trudy Chacon</td>\n      <td>52fe48009251416c750ac9d3</td>\n      <td>1</td>\n      <td>17647</td>\n      <td>19995</td>\n      <td>Michelle Rodriguez</td>\n      <td>4</td>\n    </tr>\n  </tbody>\n</table>'},455:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>credit_id</th>\n      <th>department</th>\n      <th>gender</th>\n      <th>id</th>\n      <th>job</th>\n      <th>movie_id</th>\n      <th>name</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>52fe48009251416c750aca23</td>\n      <td>Editing</td>\n      <td>0</td>\n      <td>1721</td>\n      <td>Editor</td>\n      <td>19995</td>\n      <td>Stephen E. Rivkin</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>539c47ecc3a36810e3001f87</td>\n      <td>Art</td>\n      <td>2</td>\n      <td>496</td>\n      <td>Production Design</td>\n      <td>19995</td>\n      <td>Rick Carter</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>54491c89c3a3680fb4001cf7</td>\n      <td>Sound</td>\n      <td>0</td>\n      <td>900</td>\n      <td>Sound Designer</td>\n      <td>19995</td>\n      <td>Christopher Boyes</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>54491cb70e0a267480001bd0</td>\n      <td>Sound</td>\n      <td>0</td>\n      <td>900</td>\n      <td>Supervising Sound Editor</td>\n      <td>19995</td>\n      <td>Christopher Boyes</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>539c4a4cc3a36810c9002101</td>\n      <td>Production</td>\n      <td>1</td>\n      <td>1262</td>\n      <td>Casting</td>\n      <td>19995</td>\n      <td>Mali Finn</td>\n    </tr>\n  </tbody>\n</table>'},456:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>title</th>\n      <th>release_date</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>The Dark Knight Rises</td>\n      <td>2012-07-16</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>The Dark Knight</td>\n      <td>2008-07-16</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>Interstellar</td>\n      <td>2014-11-05</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>Inception</td>\n      <td>2010-07-14</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>Batman Begins</td>\n      <td>2005-06-10</td>\n    </tr>\n    <tr>\n      <th>5</th>\n      <td>Insomnia</td>\n      <td>2002-05-24</td>\n    </tr>\n    <tr>\n      <th>6</th>\n      <td>The Prestige</td>\n      <td>2006-10-19</td>\n    </tr>\n    <tr>\n      <th>7</th>\n      <td>Memento</td>\n      <td>2000-10-11</td>\n    </tr>\n  </tbody>\n</table>'},457:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>year</th>\n      <th>name_x</th>\n      <th>name_y</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>41</th>\n      <td>1974.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>54</th>\n      <td>1975.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>52</th>\n      <td>1977.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>49</th>\n      <td>1979.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>51</th>\n      <td>1981.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>55</th>\n      <td>1982.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>56</th>\n      <td>1983.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>50</th>\n      <td>1984.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>53</th>\n      <td>1985.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>47</th>\n      <td>1989.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>44</th>\n      <td>1991.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>40</th>\n      <td>1992.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>45</th>\n      <td>1993.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>19</th>\n      <td>1994.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>37</th>\n      <td>1995.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>42</th>\n      <td>1997.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>16</th>\n      <td>1998.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>25</th>\n      <td>1999.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>27</th>\n      <td>2000.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>11</th>\n      <td>2001.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>28</th>\n      <td>2002.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>21</th>\n      <td>2004.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>12</th>\n      <td>2005.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>8</th>\n      <td>2007.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>0</th>\n      <td>2008.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>5</th>\n      <td>2009.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>10</th>\n      <td>2010.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>38</th>\n      <td>2011.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>2012.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>23</th>\n      <td>2013.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>34</th>\n      <td>2014.0</td>\n      <td>Susan Sarandon</td>\n      <td>NaN</td>\n    </tr>\n    <tr>\n      <th>48</th>\n      <td>2015.0</td>\n      <td>NaN</td>\n      <td>Steven Spielberg</td>\n    </tr>\n    <tr>\n      <th>18</th>\n      <td>2016.0</td>\n      <td>Susan Sarandon</td>\n      <td>Steven Spielberg</td>\n    </tr>\n  </tbody>\n</table>'},458:function(t,n){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>name</th>\n    </tr>\n    <tr>\n      <th>title</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>Bambi</th>\n      <td>7</td>\n    </tr>\n    <tr>\n      <th>Fantasia 2000</th>\n      <td>8</td>\n    </tr>\n    <tr>\n      <th>Fantasia</th>\n      <td>12</td>\n    </tr>\n    <tr>\n      <th>Movie 43</th>\n      <td>12</td>\n    </tr>\n    <tr>\n      <th>Paris, je t\'aime</th>\n      <td>21</td>\n    </tr>\n  </tbody>\n</table>'}}]);
//# sourceMappingURL=component---src-pages-techniques-programming-pandas-verbs-merge-js-65d330572598b2066ffa.js.map