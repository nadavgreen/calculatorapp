import React, { Component } from 'react';
import { Container, Row} from 'reactstrap';

// Components

import Displaybar from './components/displaybar'
import Mainbody from './components/mainbody'
import Lastrow from './components/lastrow'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  handleClick = e => {
    console.log(e.target.innerText)
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
