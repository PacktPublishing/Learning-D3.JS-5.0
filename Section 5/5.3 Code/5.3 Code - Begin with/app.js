var dataset = [5,10,15,20,25]

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
		
		