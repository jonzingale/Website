import React, { Component } from 'react'
import * as d3 from 'd3'

class NoteBook extends Component {

  componentDidMount() {
    var svg = d3.selectAll('#notebook')
    var svg_width = svg.style('width').replace('px','')

    svg.append('rect')
      .attr('id','paper-box')
      .attr('stroke', '#777')
      .attr('width','100%')
      .attr('fill','#e3dedd')

    // Paper
    svg.append('rect')
      .attr('y', 100)
      .attr('stroke','#777')
      .attr('class', 'paper')
      .attr('width','70%')
      .attr('fill','white')
      .attr('opacity', 1)

    // Lines
    function yScale(i) { return(i*40 + 180) }
    var data = []
    for (let i=0; i < 6; i++) { data.push([0, yScale(i)]) }

    var lineGenerator = d3.line();

    svg.selectAll('horizontal-lines')
       .data(data).enter()
       .append("path")
       .attr('stroke', '#754d3d')
       .attr('stroke-width', '1px')
       .attr('fill', 'none')
       .attr('d', function(d, i) {
          let pathData = lineGenerator([d, [svg_width*0.7, yScale(i)]])
          return(pathData)
        })

    data = [[100, 100], [100, 400]]
    svg.append('path').attr('d', lineGenerator(data))
       .attr('stroke', '#ddd')

    // Text
    svg.append('text')
      .attr('id', 'lights-label')
      .attr('x', 120).attr('y', 215)
      .text('Notebook: A home for explorations.')
  }   

  render(){
    return(
      <div className='card'>
        <svg id='notebook' width='100%' height='400px'></svg>
      </div>
    )
  }
}

export default NoteBook;
