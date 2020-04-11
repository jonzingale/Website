import React, { Component } from 'react'
import TreeTemplate1 from './../js/TreeTemplate1'
import './../css/main.css'

class SvgTemplate extends Component {
  render() {
    return(
      <div className='container'>
        <header>Haskell on Jupyter</header>

        <aside className='sidebar-left'>
          <h1>SVG Template</h1>

          <div className='sidebar-content'>
            This is a space for testing new svg ideas
          </div>
        </aside>

        <article>
          <h2 className='title'>Templates:</h2>
          <div className='card'>
            <TreeTemplate1 />
          </div>
        </article>

        <aside className='sidebar-right'>.</aside>
      </div>
    )
  }
}

export default SvgTemplate;
