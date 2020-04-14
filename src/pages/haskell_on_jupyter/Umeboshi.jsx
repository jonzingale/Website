import React, { Component } from 'react'
import './../../css/main.css'

class Umeboshi extends Component {
  render() {
    var imgUrl = "/images/umeboshi.png"

    return(
      <div className='theme-container'>
        <header>{this.props.title}</header>

        <aside className='sidebar-left'>
          <h1>Audio in Haskell</h1>

          <div className='sidebar-content'>
            Umeboshi is a drum machine written in Haskell and built from a
            Roland 808 sound bank.
          </div>
        </aside>

        <article>
          <h2 className='title'>{this.props.title}</h2>
          <div className='introduction'>
            Umeboshi is a drum machine written in Haskell and built from a
            Roland 808 sound bank. The drum machine is designed to facilitate
            poly-rhythmic percussion in non-standard time signatures. It relies
            heavily on Unboxed Vector types and the Data.WAVE library.
          </div>

          <div className='theme-card'>
            By design, most drum machines facilitate writing drum patterns in
            common 3/4 and 4/4 time signatures and render the ability to have
            more unusual rhythms such as an even pentuplet over three quarter
            notes nearly impossible. This limitation has a coercive effect on
            the forms of music typically made with drum machines. Umeboshi is
            an attempt to fill the gap left by such design choices.<p/>

            Methods such as buildMeasure allow users to write a pentuplet over
            a three quarter note measure as easily as:<p/>

            <code>buildMeasure 122 (Time 3 4) [("xxxxx", conga)]</code><p/>

            By passing a length five string of either <code>'.'</code> or
            <code>'x'</code> and instrument type <code>conga</code>, umeboshi
            determines that a conga should be played evenly five times over the
            3/4 measure. The function <code>makeWavFile</code> (thanks to the
            wonderful Data.WAVE library) then can produce a wav file of the
            constructed rhythm.<p/>

            For a more elaborate example, let's take a measure of 5/4 and layer
            a hi tom triplet evenly over the measure, a snare tuplet and
            otherwise maracas on every other of the underlying quarter notes:<p/>

            <pre><code>
            layeredExample = do<br></br>
              [hiTom, maracas, snare] &lt;- roland808<br></br>
              let ensemble1 = [("xxx", hiTom),("xx", snare),("x.x.x", maracas)]<br></br>
              let measure = buildMeasure 122 (Time 5 4) ensemble1<p/>

              makeWavFile measure
            </code></pre>

            For the gritty details see this project on GitHub:
            <a href="https://github.com/jonzingale/Haskell/tree/master/Audio/umeboshi">Umeboshi</a>
          </div>
        </article>

        <aside className='sidebar-right'>.</aside>
      </div>
    )
  }
}

export default Umeboshi;
