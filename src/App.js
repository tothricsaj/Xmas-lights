import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.lightInterval = null

    this.timer = this.timer.bind(this)
  }

  componentDidMount() {
    this.lightInterval = setInterval(this.timer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.lightInterval)
  }

  timer() {
    console.log(Math.floor(Math.random() * 3))
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
