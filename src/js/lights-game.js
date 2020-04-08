function lightsGame() {
  var lights = [0,1,0,0,1,1,1,1]

  var svg = d3.select('#game'),
      width = +svg.attr("width"),
      height = +svg.attr("height");

  var svg_width = svg.style('width').replace('px','')

  var xScale = d3.scaleLinear()
    .domain([0, 7])
    .range([70, svg_width/1.2])

  // background box
  var rect = svg.append('rect')
    .attr('class', 'background-box')
    .attr('x', 1).attr('y', 0)

  // bounding box
  var rect = svg.append('rect')
    .attr('class','bounding-box')
    .attr('x', 20).attr('y', 50)

  // lights
  var lights = svg.append("g")
    .attr("class", "lights")
    .selectAll("circle")
    .data(lights).enter().append("circle")
      .attr('id', function(d, i) { return i })
      .attr('cy', 90).attr("r", 17)
      .attr('cx', function(d, i) { return xScale(i) })
      .attr('fill', function(d) {
        return d3.schemeTableau10[d*2 + 3] // 3 or 5
      })
      .attr('stroke', 'black')
      .attr('stroke-width', '1.5px')

  var text = svg.append('text')
    .attr('id', 'lights-label')
    .attr('x', 20).attr('y', 30)
    .text('Click a light')
}

lightsGame()