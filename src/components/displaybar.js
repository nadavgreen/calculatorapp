import React from 'react';
import { Col, Input } from 'reactstrap';

const Displaybar = props => {
    const style = {
        'color':'white', 
        'backgroundColor':'black', 
        'fontSize':'9vw',
        'textAlign': 'right', 
        'minHeight':'9vw'
    }
    // if (props.displayValue.length > 9 && props.displayValue.length < 14){
    //     style.fontSize = `${parseInt(style.fontSize) - ((props.displayValue.length - 9)*10)}px`
    // } else if (props.displayValue.length >= 14){
    //     style.fontSize = '70px'
    // }

    return <Col xs="12" sm="12" md="12" style={{padding:'0px'}}>
            <Input placeholder={props.displayValue} style={style} readOnly></Input>{' '}
        </Col>
}

export default Displaybar;