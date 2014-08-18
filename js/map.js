// Build Map

svg.append("path")
    .datum(topojson.feature(shape, shape.objects.states))
    .attr("class", "border border--state")
    .attr("d", path);
	
svg.append("g")
    .attr("class", "bubble")
  .selectAll("circle")
    .data(topojson.feature(us, us.objects.counties).features)
  .enter().append("circle")
    .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
    .attr("r", 1.5);
	
	
	