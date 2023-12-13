import React from 'react'
import { Card } from 'react-bootstrap';

export const CardText = ({ texto }) => {
    
    return (
        <Card.Text className="custom-card-text">
        {texto}
      </Card.Text>
  )
}
