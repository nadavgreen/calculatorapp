import React from 'react';
import { Button, Col } from 'reactstrap';

const Mainbody = (props) => {
    const arr = ['AC', '±', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+'];
    const greyBox = {
        'color': 'rgb(102, 102, 102)',
        'backgroundColor': 'rgb(224, 224, 230)',
        'width': '100%', 'fontSize': '40px',
        'borderRadius': '0',
        'borderLeft': '1px solid #666',
        'borderBottom': '1px solid #666'
    };
    const orangeBox = {
        'backgroundColor': 'rgb(238, 155, 62)',
        'width': '100%', 'fontSize': '40px',
        'borderRadius': '0',
        'borderLeft': '1px solid #666',
        'borderBottom': '1px solid #666'
    };

    const grey = (e) => {
        return <Col md="3" style={{ padding: '0px' }}>
            <Button style={greyBox} onClick={props.handleClick}>{e}</Button>{' '}
        </Col>;
    };

    const orange = (e) => {
        return <Col md="3" style={{ padding: '0px' }}>
            <Button style={orangeBox} onClick={props.handleClick}>{e}</Button>{' '}
        </Col>;
    };

    return arr.map((e, i) => (i+1) % 4 ? grey(e) : orange(e));

};

export default Mainbody;