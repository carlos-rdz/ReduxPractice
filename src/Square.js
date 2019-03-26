import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Square extends Component {
    render() {
      return (
        <Card bg={this.props.backgroundColor} style={{ width: '18rem' }}>
          <Card.Body>
            <Button variant="primary">This is the card</Button>
        </Card.Body>
        </Card>
      );
    }
  }
  
  export default Square;