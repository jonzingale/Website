import React, { Component } from 'react'
import CottonWoods from './../svg/CottonWoods.jsx'
import PlumBlossom from './../svg/PlumBlossom.jsx'
import BeanSoup from './../svg/BeanSoup.jsx'
import Notebook from './../svg/Notebook.jsx'

import './../css/main.css'

class SvgTemplate extends Component {
  render() {
    return(
      <div className='container'>
        <header>{this.props.title}</header>

        <aside className='sidebar-left'>
          <h1>About this page:</h1>

          <div className='sidebar-content'>
            This is a space for testing new svg ideas.<p />
            Whether making soup in a crock-pot at home or walking along the
            tree-lined sidewalk of Montezuma street, there is striking beauty
            to be found in nearly every aspect of every day life.<p />
            This svg journal is here for me to share with you these impressions.
          </div>
        </aside>

        <article>
          <h2>{this.props.title}:</h2>
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
