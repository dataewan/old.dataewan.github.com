(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{EcCI:function(t,d){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>survived</th>\n      <th>pclass</th>\n      <th>sex</th>\n      <th>age</th>\n      <th>sibsp</th>\n      <th>parch</th>\n      <th>fare</th>\n      <th>embarked</th>\n      <th>class</th>\n      <th>who</th>\n      <th>adult_male</th>\n      <th>deck</th>\n      <th>embark_town</th>\n      <th>alive</th>\n      <th>alone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>22.0</td>\n      <td>1</td>\n      <td>0</td>\n      <td>7.2500</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>38.0</td>\n      <td>1</td>\n      <td>0</td>\n      <td>71.2833</td>\n      <td>C</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>C</td>\n      <td>Cherbourg</td>\n      <td>yes</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>1</td>\n      <td>3</td>\n      <td>female</td>\n      <td>26.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>7.9250</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>yes</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>35.0</td>\n      <td>1</td>\n      <td>0</td>\n      <td>53.1000</td>\n      <td>S</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>C</td>\n      <td>Southampton</td>\n      <td>yes</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>35.0</td>\n      <td>0</td>\n      <td>0</td>\n      <td>8.0500</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>True</td>\n    </tr>\n  </tbody>\n</table>'},VTkL:function(t,d,n){"use strict";n.r(d);var e=n("q1tI"),a=n.n(e),r=n("Kvkj"),h=n("EcCI"),o=n.n(h),s=n("wFsd"),l=n.n(s);var m=function(t){var d,n;function e(d){return t.call(this,d)||this}return n=t,(d=e).prototype=Object.create(n.prototype),d.prototype.constructor=d,d.__proto__=n,e.prototype.render=function(){return a.a.createElement(r.e,null,a.a.createElement(r.j,{name:"drop"},a.a.createElement(r.h,{note:a.a.createElement("a",{href:"https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.drop.html"},"pandas documentation")},"Use drop to remove labels from an axis. Most of the time you use this to remove columns from a dataframe. Use the titanic dataset to illustrate. Here's the raw data."),a.a.createElement(r.b,{language:"python",code:"\nimport pandas as pd\nimport seaborn as sns\n\ndf = sns.load_dataset('titanic')\ndf.head(5)\n          "}),a.a.createElement(r.i,null,o.a),a.a.createElement(r.k,{name:"remove columns"},a.a.createElement(r.h,null,"Use the ",a.a.createElement("span",{className:"mono"},"drop")," function to remove columns from your data frame. Pass the list of column names in as the first argument, and set ",a.a.createElement("span",{className:"mono"},"axis=1")," ","to make it apply this over your column names. Returns a copy of the data frame with those columns removed."),a.a.createElement(r.b,{language:"python",code:"\n(\n    df\n    .drop(['sibsp', 'parch'], axis=1)\n).head(5)\n          "}),a.a.createElement(r.i,null,l.a))))},e}(e.Component);d.default=m},wFsd:function(t,d){t.exports='<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>survived</th>\n      <th>pclass</th>\n      <th>sex</th>\n      <th>age</th>\n      <th>fare</th>\n      <th>embarked</th>\n      <th>class</th>\n      <th>who</th>\n      <th>adult_male</th>\n      <th>deck</th>\n      <th>embark_town</th>\n      <th>alive</th>\n      <th>alone</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>22.0</td>\n      <td>7.2500</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>38.0</td>\n      <td>71.2833</td>\n      <td>C</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>C</td>\n      <td>Cherbourg</td>\n      <td>yes</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>1</td>\n      <td>3</td>\n      <td>female</td>\n      <td>26.0</td>\n      <td>7.9250</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>yes</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>1</td>\n      <td>1</td>\n      <td>female</td>\n      <td>35.0</td>\n      <td>53.1000</td>\n      <td>S</td>\n      <td>First</td>\n      <td>woman</td>\n      <td>False</td>\n      <td>C</td>\n      <td>Southampton</td>\n      <td>yes</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>0</td>\n      <td>3</td>\n      <td>male</td>\n      <td>35.0</td>\n      <td>8.0500</td>\n      <td>S</td>\n      <td>Third</td>\n      <td>man</td>\n      <td>True</td>\n      <td>NaN</td>\n      <td>Southampton</td>\n      <td>no</td>\n      <td>True</td>\n    </tr>\n  </tbody>\n</table>'}}]);
//# sourceMappingURL=component---src-pages-techniques-programming-pandas-verbs-drop-js-e8e7b16bdb069e5c1b86.js.map