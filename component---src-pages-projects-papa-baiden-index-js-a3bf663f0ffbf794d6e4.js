webpackJsonp([0x7f59a8ea3329],{929:function(e,t,a){e.exports=a.p+"static/hexgrid.aa0acf19.png"},298:function(e,t,a){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),h=o(l),c=a(10),d=a(930),u=o(d),g=a(929),p=o(g),m=a(931),f=o(m),w=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return n.createElement(c.Section,{name:"Papa Baiden"},n.createElement(c.Paragraph,null,"I did a project to study homlessness data in England as part of a voluntary program. I created a data processing pipeline in python, and an interactive data visualisation in react/d3. You can find the visualisation ",n.createElement("a",{href:"https://dataewan.github.io/tomorrow-today/"},"here"),"."),n.createElement(c.Subsection,{name:"vizforsocialgood"},n.createElement(c.Paragraph,null,"I found a link to ",n.createElement("a",{href:"https://www.vizforsocialgood.com/"},"vizforsocialgood.com")," on twitter. They have a visualisation project underway all the time. The project that I worked on was from ",n.createElement("a",{href:"https://www.vizforsocialgood.com/join-a-project/2018/1/1/tomorrow-today-papa-baiden"},"Papa Baiden"),", a charity based in London. The project was to meet this requirement: ",n.createElement("i",null,"We need an in-depth dashboard that helps people understand the homelessness issues. The data visualisations will be featured on the website, Facebook group, Twitter, and Instagram."))),n.createElement(c.Subsection,{name:"The raw data"},n.createElement(c.Paragraph,null,"The raw data came from two sources. First are some spreadsheets containing official UK government figures, called ",n.createElement("a",{href:"https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/585706/Rough_Sleeping_Autumn_2016_Final_Tables.xls"},"Rough_Sleeping_Autumn_2016_Final_Tables")," which contains statistics on rough sleeping, and ",n.createElement("a",{href:"https://www.gov.uk/government/statistical-data-sets/live-tables-on-dwelling-stock-including-vacants"},"LT_615"),", which contains information on vacant properties in each region."),n.createElement(c.Paragraph,null,"These spreadsheets were fairly tricky to work with. The tabular data only really makes sense when you are a human reading it: there's a hierarchy in the regional data that is described by empty cells and gaps in the data. The codes for the regions changed at a point in time, which causes the black gaps in the data in Figure 1. The description of this change was recorded in quite bureaucratic language in a cell at the bottom of the spreadsheet, not machine readable."),n.createElement(c.Figure,{fullwidth:!1,caption:"Problems in the spreadsheet data caused by codes changing."},n.createElement("img",{src:u.default})),n.createElement(c.Paragraph,null,"I think this is a really good illustration of how hard it is to maintain a publicly accessible dataset. The UK government invest a lot of time and effort in making this data available, and they generally do an excellent job. Even ",n.createElement("i",null,"they")," find it difficult to make a correct and complete dataset in machine readable format. I wrote python code to parse these spreadsheets to make them repeatable. The code ",n.createElement("a",{href:"https://github.com/dataewan/papabaiden-vizforgood-/blob/master/src/data/extract_lt_data.py"},"is complex"),", with lots of logic to catch edge cases. I'm not sure that I would take this approach again. It is good for repeatability of this data, but hard to generalise.")),n.createElement(c.Subsection,{name:"hexgridmap"},n.createElement(c.Paragraph,null,"Since this is a project I'm doing in my spare time, I allowed myself to get lost in interesting ideas that don't have a clear payoff. The biggest example is that I tried to avoid using a ",n.createElement("i",null,"choropleth map"),". These are the nice looking maps where geographic areas are coloured to represent a variable. The problem with these maps is that while they look nice, they do a bad job at presenting information. It makes areas that are bigger look more important just because they have a larger area, you get a distorted picture."),n.createElement(c.Figure,{caption:n.createElement("div",null,"Illustration from ",n.createElement("a",{href:"http://thewhyaxis.info/bitly/"},"thewhyaxis.info"),". Not that many people read The Scotsman")},n.createElement("img",{src:"http://thewhyaxis.info/content/24-bitly/mediamap-in1.jpg"})),n.createElement(c.Paragraph,{note:n.createElement("a",{href:"https://www.redblobgames.com/grids/hexagons/"},"redblobgames")},"To get around this problem, one solution is to use a hexagonal grid. You assign each region to a hexagon, and then try and arrange the hexagons on the grid to get them to represent geographic locations. Hexagons are good because they are a regular shape, you can make them have all the same area removing the distortion, and hexagons have a lot of immediate neighbours. The downside of hexagons is that geometric calculations are more complex with hexagons than a square grid. Fortunately there is fascinating tutorial from redblobgames that takes you through the calculations."),n.createElement(c.Paragraph,null,"I worked on a python package (",n.createElement("a",{href:"https://github.com/dataewan/hexgridmap"},"hexgridmap"),") to convert from shapefiles to hexgridmaps. The grid geometry works well, and converting a shapefile to python objects also works well. Where it falls down is locating the regions on the hex grid. I tried a few different approaches.",n.createElement("ul",null,n.createElement("li",null,"Assigning each region naively to the nearest hex on the grid. Where there are overlaps (multiple regions assigned to the same hex) sort them out by pushing them outwards. This sort of works, but doesn't keep neighbouring regions close together (Figure 3)."),n.createElement("li",null,"Try and create a function that describes a good placement, and use optimisation techniques like simulated annealing. This is less time consuming, but I couldn't find a good function to describe a good placement. You get something that is very happy once it sorts out all the overlaps, and is happy to achieve that by scattering regions all over the place."),n.createElement("li",null,"I was starting to work on a branch that would create contiguous islands, and then place these next to each other. I stopped myself after just starting to explore this, and is where I would pick up again."))),n.createElement(c.Figure,{caption:"Results from a naive assignment and then pushing overlaps out. The general shape looks okay, but note that the regions in red are regions in Greater London, and get spread out too much. We end up with Ealing on the coast."},n.createElement("img",{src:p.default})),n.createElement(c.Paragraph,null,"I stopped working on this thread of work after a few sessions, because I wanted to meet the deadline.")),n.createElement(c.Subsection,{name:"Building the visualisation"},n.createElement(c.Paragraph,null,"I used react and d3 to build the visualisation. All the interaction and DOM object creation and handling is done by react. Only using d3 for the convenience functions for creating things like scales that map between data and pixel space, or creating SVG path specifications from geographic data."),n.createElement(c.Figure,{caption:n.createElement("div",null,"How the final ",n.createElement("a",{href:"https://dataewan.github.io/tomorrow-today/"},"visualisation")," looks."),fullwidth:!1},n.createElement("img",{src:f.default})),n.createElement(c.Subsubsection,{name:"What worked well"},n.createElement(c.Paragraph,null,"I like the interactivity, it works smoothly. React handling state is a very good way of working. It wasn't complex enough for me to need to reach for Redux. In particular I like the interaction between the table and the maps."),n.createElement(c.Paragraph,null,"I like the scrolly bit in the left. You're able to scroll over that bit, while highlighting parts of the visualisation. That's quite neat.")),n.createElement(c.Subsubsection,{name:"What didn't work well"},n.createElement(c.Paragraph,null,"I didn't do a good job of figuring out how the interactivity was going to work beforehand. Also I don't think I did a good job of making it clear what things can be clicked on. The interactivity is unclear."),n.createElement(c.Paragraph,null,"I think that the display is quite full, I wanted there to be more white space and for it to look neater. These both point to me needing to learn more about UI and design."))))},t}(h.default.Component);t.default=w,e.exports=t.default}).call(t,a(4))},930:function(e,t,a){e.exports=a.p+"static/spreadsheet-problems.e58ad7e5.png"},931:function(e,t,a){e.exports=a.p+"static/visualisation.8e61c316.png"}});
//# sourceMappingURL=component---src-pages-projects-papa-baiden-index-js-a3bf663f0ffbf794d6e4.js.map