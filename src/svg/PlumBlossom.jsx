import React, { Component } from 'react'
import * as d3 from 'd3'

class PlumBlossom extends Component {

  componentDidMount() {
    var svg = d3.selectAll('#plum-blossom')
    var svg_width = svg.style('width').replace('px','')
    var svg_height = svg.style('height').replace('px','')

    var xScale = d3.scaleLinear()
      .domain([0, 1]).range([0, svg_width])

    var yScale = d3.scaleLinear()
      .domain([0, 1]).range([0, svg_height])

    // background box
    svg.append('rect')
      .attr('class', 'background-box')
      .attr('x', 1).attr('y', 0)
      .attr('stroke','#777')
      .attr('stroke-width','0.3em')
      .attr('fill','#f5f2e3') // cream paper
      .attr('width','100%')

    var lineGenerator = d3.line().curve(d3.curveBasis)
    var pathData, points

    // abstract line
    points = [[0, 260],[100, 300],[300, 280],[700, 240],[svg_width, 280]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', 'black')
    .attr('fill', 'none')

    // tree lines
    lineGenerator = d3.line()
    points = [[700, 340], [680, 180], [500, 120], [400, 200]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#2c202f')
    .attr('stroke-width', 30)
    .attr('fill', 'none')

    points = [[710, 338], [690, 180]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#6f4891')
    .attr('stroke-width', 10)
    .attr("opacity", 0.5)

    points = [[520, 180], [700, 80], [500, 10]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#23242b')
    .attr('stroke-width', 17)
    .attr('fill', 'none')

    points = [[680, 180], [400, 60], [230, 200]];
    pathData = lineGenerator(points);
    svg.append('path').attr('d', pathData)
    .attr('stroke', '#23242b')
    .attr('stroke-width', 17)
    .attr('fill', 'none')

    // tree circles
    var data = []
    for (let i=0; i < 300; i++) { data.push(i)}

    svg.append("g")
      .attr("class", "blue-circles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('id', function(d, i) { return i })
        .attr("r", function(d) { return Math.random()*30 })
        .attr('cy', function(d) { return yScale(Math.random())/1.9 })
        .attr('cx', function(d) { return xScale(Math.random())/1.3 + svg_width/7 })
        .attr('fill', function(d) { return d3.interpolateBlues(d/1200) })
        .attr("opacity", function(d) { return Math.random() + 0.7 })
        .attr('stroke-width', '1.5px')
        .style("filter", d => d < 200 ? "url(#blur)" : ""); // blur

    // blur
    var defs = svg.append("defs")
    defs.append("defs")
      .append("filter")
      .attr("id", "blur")
      .append("feGaussianBlur")
      .attr("stdDeviation", 3)

    data = []
    for (let i=0; i < 150; i++) { data.push(i)}

    svg.append("g")
      .attr("class", "pink-circles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('id', function(d, i) { return i })
        .attr("r", 3)
        .attr('cy', function(d) { return yScale(Math.random())/1.9 })
        .attr('cx', function(d) { return xScale(Math.random())/1.4 + svg_width/6 })
        .attr('fill', function(d) { return d3.interpolateReds(d/200) })
        // .attr('stroke', 'black')
        .attr('stroke-width', '1.5px')
  }

  render(){
    return(
      <div className='card'>
        <svg id='plum-blossom' width='100%' height='400px'></svg>
      </div>
    )
  }
}

export default PlumBlossom;
