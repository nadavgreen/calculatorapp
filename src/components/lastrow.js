import React from 'react';
import { Button, Col } from 'reactstrap';

const Lastrow = (props) => {
    const styleOne = {
        'color': 'rgb(102, 102, 102)',
        'backgroundColor': 'rgb(224, 224, 230)',
        'width': '100%', 'fontSize': '40px',
        'borderRadius': '0',
        'borderLeft': '1px solid #666',
        'borderBottom': '1px solid #666'
    };
    const styleTwo = {
        'backgroundColor': 'rgb(238, 155, 62)',
        'width': '100%', 'fontSize': '40px',
        'borderRadius': '0',
        'borderLeft': '1px solid #666',
        'borderBottom': '1px solid #666'
    };

    return <>
        <Col md="6" style={{ padding: '0px' }}>
            <Button color="primary" style={styleOne} onClick={props.handleClick}>0</Button>{' '}
        </Col>
        <Col md="3" style={{ padding: '0px' }}>
            <Button color="primary" style={styleOne} onClick={props.handleClick}>.</Button>{' '}
        </Col>
        <Col md="3" style={{ padding: '0px' }}>
            <Button color="primary" style={styleTwo} onClick={props.handleClick}>=</Button>{' '}
        </Col>
    </>

};

export default Lastrow;