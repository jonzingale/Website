import React, { Component } from 'react'
import * as d3 from 'd3'

class TreeTemplate1 extends Component {

  componentDidMount() {
    var lights = [0,1,0,0,1,1,1,1]

    var svg = d3.selectAll('#game')
    var svg_width = svg.style('width').replace('px','')

    var xScale = d3.scaleLinear()
      .domain([0, 7])
      .range([70, svg_width/1.2])

    // background box
    svg.append('rect')
      .attr('class', 'background-box')
      .attr('x', 1).attr('y', 0)
      .attr('stroke','#777')
      .attr('stroke-width','0.3em')
      .attr('width','99%')
      // .attr('height','160px')
      .attr('fill','#000')

    // bounding box
    svg.append('rect')
      .attr('class','bounding-box')
      .attr('x', 20).attr('y', 50)
      .attr('height','300px')
      .attr('width','90%')
      .attr('stroke','#666')
      .attr('stroke-width','2px')
      .attr('fill','none')

    // lights
    svg.append("g")
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

    svg.append('text')
      .attr('id', 'lights-label')
      .attr('x', 20).attr('y', 30)
      .text('Click a light')
  }

  render(){
    return(<svg id='game' width='100%' height='400px'></svg>)
  }
}

export default TreeTemplate1;
