import React, { Component } from 'react'
import PlumBlossom from './../svg/PlumBlossomFull.jsx'
import ExplorableMenu from './../js/ExplorableMenu.jsx'
import './../css/main.css'
// import './../css/full-page.css' // WHY DOES THIS FUCK WITH EVERYTHING???

class Explorable extends Component {
  render() {
    return(
      <div className='container'>
        <header>.</header>
        <article>
          <ExplorableMenu />
        </article>
        <aside className='sidebar-right'>
          <div className='sidebar-content'>
            <PlumBlossom paperColor={'#f4f2e9'}/>
          </div>
        </aside>
      </div>
    )
  }
}

export default Explorable;
