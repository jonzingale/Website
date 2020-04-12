import React, { Component } from 'react'
import PlumBlossom from './../svg/PlumBlossomFull.jsx'
import ExplorableMenu from './../js/ExplorableMenu.jsx'
import './../css/main.css'
import './../css/full-page.css'

class Explorable extends Component {
  render() {
    return(
      <div className='explorable'>
        <div className='container'>
          <header>D3 projects</header>
          <article>
            <ExplorableMenu />
          </article>
          <aside className='sidebar-right'>
            <div className='sidebar-content'>
              <PlumBlossom />
            </div>
          </aside>
        </div>
      </div>
    )
  }
}

export default Explorable;
