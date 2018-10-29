// d3.csv('data.csv').then(function(data){
// 	console.log(data);
// 	generate(data.columns);
// });

d3.json('data.json').then(function(data){
	console.log(data);
	generate(data);
});

function generate(dataset) {

	//var dataset = [5,10,15,20,25]

	var el = d3.select('body')
				.selectAll('p')
				.data(dataset)
				.enter()
				.append('p')
				.text(function (d) {
					return 'this is a paragraph ' + d
				})
				.style('color', function(d){
					if ( d < 15 ) {
						return 'orange';
					} else {
						return 'grey';
					}
				});
}
		
		