import React from 'react';
import { Col, Input } from 'reactstrap';

const Displaybar = props => {
    const style = {
        'color':'white', 
        'backgroundColor':'black', 
        'fontSize':'120px',
        'textAlign': 'right', 
        'minHeight':'120px'
    }

    return <Col md="12" style={{padding:'0px'}}>
            <Input placeholder={props.displayValue} style={style} readOnly></Input>{' '}
        </Col>
}

export default Displaybar;