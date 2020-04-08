import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    let lightBubbles = [
      '(197, 59%, 62%, 1)',
      '(287, 59%, 62%, 1)',
      '(107, 72%, 70%, 1)',
      '(47, 59%, 62%, 1)',
      '(257, 59%, 62%, 1)',
      '(137, 72%, 70%, 1)'
    ].map((el, i) => {
      return (<li className='lightBubble' key={i} style={{backgroundColor: `hsla${el}`}}></li>)
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
