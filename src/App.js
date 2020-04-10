import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.lightInterval = null
    this.lbUpOpacity = 0.2
    this.lbDownOpacity = 1.2
    this.changeingValueUp = 0.1
    this.changeingValueDown = 0.1
    this.upLight = 2
    this.downLight = 1

    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    this.lightInterval = setInterval(this.timer, 100)
  }

  componentWillUnmount() {
    clearInterval(this.lightInterval)
  }

  timer() {
    let downElem = document.querySelector(`#bubble-${this.downLight}`)
    let upElem = document.querySelector(`#bubble-${this.upLight}`)

    let downElOpacity = parseInt(downElem.style.opacity)
    let upElOpacity = parseInt(upElem.style.opacity)


    if( upElOpacity >= 1.2 || upElOpacity <= 0.1) {
      this.changeingValueUp *= -1
    }

    if(downElOpacity >= 1.2 || downElOpacity <= 0.1) {
      this.changeingValueDown *= -1
    }

    downElOpacity += this.changeingValueDown
    upElOpacity += this.changeingValueUp

    downElem.style.opacity += downElOpacity
    upElem.style.opacity += upElOpacity

    // if(this.upLight >= 5) {
    //   this.upLight = 0
    // } else {
    //   this.upLight++
    // }

    // if(this.downLight === 5) {
    //   this.downLight = 0
    // } else {
    //   this.downLight++
    // }
  }

  render() {
    let lightBubbles = [
      '(197, 59%, 62%, 1)',
      '(287, 59%, 62%, 1)',
      '(107, 72%, 70%, 1)',
      '(47, 59%, 62%, 1)',
      '(257, 59%, 62%, 1)',
      '(137, 72%, 70%, 1)'
    ].map((el, i) => {
      let lbStyle = {
        backgroundColor: `hsla${el}`,
        boxShadow: `0px 0px 30px 0px hsla${el}`,
        opacity: i === 1 ? '1' : '.2'
      }
      return (<li className='lightBubble' id={`bubble-${i}`} key={i} style={lbStyle}></li>)
    })
    return (
      <div className="App">
        <h2>Xmas Lights</h2>

        <ul className="lightChain">{lightBubbles}</ul>
      </div>
    );
  }
}

export default App;
