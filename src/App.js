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
  return `${parseFloat(num) * -1}`
}

const percent = (num) => {
  return `${parseFloat(num) / 100}`
}

const equals = (display, previous, operation) => {
  if (operation === '/' && parseFloat(display) === 0) {
    return 0
  } else if (operation === '/' && parseFloat(display) === 0) {
    return parseFloat(previous) / parseFloat(display)
  } else if (operation === '+') {
    return parseFloat(previous) + parseFloat(display)
  } else if (operation === '-') {
    return parseFloat(previous) - parseFloat(display)
  } else if (operation === '*') {
    return parseFloat(previous) * parseFloat(display)
  }
}

const addDecimal = (string) => {
  if (!string.split('').includes('.')){
    return string+'.'
  }
  
  return string

}

// Helper Function

const removeZero = (string) => {
  if (string.indexOf('0') === 0 && string.indexOf('.') !== 1 ){
    return string.substring(1,string.length)
  } 
  return string
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      clear: true,
    }

    this.functions = {
      'AC': ac,
      'C': ac,
      '±': reverseSign,
      '%': percent,
      '=': equals,
      '.': addDecimal,
    }

    this.operations = {
      '÷': '/',
      'x': '*',
      '-': '-',
      '+': '+',
    }

    
  }


  handleClick = e => {
    // Handle AC / C button change
    if (!this.functions[e.target.innerText] && !this.operations[e.target.innerText]){
      this.setState({clear:false})
    } else if (e.target.innerText === 'C') {
      this.setState({clear:true})
    }

    // Handle Functions and Operations
    if (!this.functions[e.target.innerText] && !this.operations[e.target.innerText] && this.state.waitingForNewValue === true){
      this.setState({displayValue: removeZero(e.target.innerText), waitingForNewValue: false})
      console.log('1')
    } else if (!this.functions[e.target.innerText] && !this.operations[e.target.innerText]){
      this.setState({displayValue: removeZero(this.state.displayValue+e.target.innerText)})
      console.log('2')
    } else if (this.functions[e.target.innerText]) {
      this.setState({displayValue: this.functions[e.target.innerText](this.state.displayValue, this.state.previousValue, this.operations[this.state.operation])})
      console.log('3')
    } else if (this.operations[e.target.innerText]) {
      this.setState({operation: e.target.innerText, previousValue: this.state.displayValue, waitingForNewValue: true,})
      console.log('4')
    }
    console.log('waiting', this.state.waitingForNewValue)
  }

  render() {
    return (
      <>
        <Container style={{'width': '50%'}}>
          <Row>
            <Displaybar displayValue={this.state.displayValue}/>
            </Row>
            <Row>
            <Mainbody clear={this.state.clear} handleClick={this.handleClick}/>
            </Row>
            <Row>
            <Lastrow handleClick={this.handleClick}/>
            </Row>
  
        </Container>
      </>
    );
  }
}

export default App;