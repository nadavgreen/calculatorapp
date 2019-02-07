import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';

// Components

import Displaybar from './components/displaybar'
import Mainbody from './components/mainbody'
import Lastrow from './components/lastrow'

const ac = () => {
  return '0'
}

const reverseSign = (num) => { 
  return parseFloat(num) * -1
}

const percent = (num) => {
  return parseFloat(num) / 100
}

const addDecimal = (string) => {
  if (!string.split('').includes('.')){
    return string+'.'
  }
  return string
}

// Helper Function

// const removeZero = (string) => {
//   if (string.split('')[0]==='0' && string.split(1) !== '.'){
//     return string.split('').shift(0)
//   }
//   return string
// }

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }

    this.functions = {
      'AC': ac,
      '±': reverseSign,
      '%': percent,
      '÷': 'clear()',
      'x': 'clear()',
      '-': 'clear()',
      '+': 'clear()',
      '=': 'clear()',
      '.': addDecimal,
    }
  }


  handleClick = e => {
    !this.functions[e.target.innerText] ?  this.setState({displayValue: this.state.displayValue+e.target.innerText}) : this.setState({displayValue: this.functions[e.target.innerText](this.state.displayValue)})
  }

  render() {
    return (
      <>
        <Container style={{'width': '50%'}}>
          <Row>
            <Displaybar displayValue={this.state.displayValue}/>
            <Mainbody handleClick={this.handleClick}/>
            <Lastrow handleClick={this.handleClick}/>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
