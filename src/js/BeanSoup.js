import React, { Component } from 'react'
import * as d3 from 'd3'

class BeanSoup extends Component {

  componentDidMount() {
    var lights = [0,1,0,0,1,1,1,1]

    var svg = d3.selectAll('#bean-soup')
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
      // .attr('fill','#f5f2e3')
      .attr('fill','#e1c4bd')
      .attr('width','100%')

    var flaxScheme = ['#d0dd09', '#9ee109', '#bfee3c']
    var beanScheme = ['#b25f27', '#dd8b53', '#e5d3c6', '#94613f']

    // beans
    var data = []
    for (let i=0; i < 300; i++) { data.push(i) }

    var beans = svg.append("g")
      .attr("class", "beans")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('cx', function(d) {
          return Math.floor(Math.random() * svg_width)
        })
        .attr('cy', function(d) {
          return Math.floor(Math.random() * 400)
        })
        .attr("r", function(d) {
          return Math.floor(Math.random() * 50)
        })
        .attr('fill', function(d) {
          let r = Math.floor(Math.random() * beanScheme.length)
          return beanScheme[r]
        })
      .style("filter", "url(#glow)");

    var defs = svg.append("defs")
    var filter = defs.append("defs")
      .append("filter")
      .attr("id", "glow")
      .append("feGaussianBlur")
      .attr("stdDeviation", 3)
      .attr("result","coloredBlur");

    // oil bubbles
    var data = []
    for (let i=0; i < 100; i++) { data.push(i) }

    svg.append("g")
      .attr("class", "oil-bubbles")
      .selectAll("circle")
      .data(data).enter().append("circle")
        .attr('id', function(d, i) { return i })
        .attr("r", function(d) {
          return Math.floor(Math.random() * 20)
        })
        .attr('cx', function(d) {
          return Math.floor(Math.random() * svg_width)
        })
        .attr('cy', function(d) {
          return Math.floor(Math.random() * 400)
        })
        .attr('fill', function(d) {
          let r = Math.floor(Math.random() * flaxScheme.length)
          return flaxScheme[r]
        })
        .attr('opacity', 0.7)
        .attr('stroke', 'yellow')
        .attr('stroke-width', '1.5px')

    svg.append('text')
      .attr('id', 'lights-label')
      .attr('x', 20).attr('y', 30)
      .text('Bean Soup')
  }

  render(){
    return(
      <div className='card'>
        <svg id='bean-soup' width='100%' height='400px'></svg>
      </div>
    )
  }
}

export default BeanSoup;
