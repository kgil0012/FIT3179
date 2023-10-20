var vg_1= "gdp_pie_chart.vg.json"; 
vegaEmbed("#piechart", vg_1).then(function(result) {
}) . catch(console.error);

var vg_2= "gdp_yearly.vg.json"; 
vegaEmbed("#linechart", vg_2).then(function(result) {
}) . catch(console.error);

var vg_3= "unemployment.vg.json"; 
vegaEmbed("#barchart_unemp", vg_3).then(function(result) {
}) . catch(console.error);

var vg_4= "population_density.vg.json"; 
vegaEmbed("#barchart_pop", vg_4).then(function(result) {
}) . catch(console.error);

var vg_5= "gdp_multiple.vg.json"; 
vegaEmbed("#correlation", vg_5).then(function(result) {
}) . catch(console.error);


