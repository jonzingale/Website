import React, { Component } from 'react'
import CottonWoods from './../js/CottonWoods.jsx'
import PlumBlossom from './../js/PlumBlossom.jsx'
import BeanSoup from './../js/BeanSoup.jsx'
import Notebook from './../js/Notebook.jsx'

import './../css/main.css'

class SvgTemplate extends Component {
  render() {
    return(
      <div className='container'>
        <header>SVG Templates</header>

        <aside className='sidebar-left'>
          <h1>SVG Templates</h1>

          <div className='sidebar-content'>
            This is a space for testing new svg ideas.
          </div>
        </aside>

        <article>
          <h2>svg notebook:</h2>
          <BeanSoup />
          <PlumBlossom />
          <CottonWoods />
          <Notebook />
        </article>

      </div>
    )
  }
}

export default SvgTemplate;
