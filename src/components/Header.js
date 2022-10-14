import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Flash from 'react-reveal/Flash';

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content text-center">
        <div className='title'>

          <Flash>
            Stickers 
          </Flash>
        </div>
        <div className='justify-content-center d-flex'>
      
        </div>

      </Col>
    </Row>
  )
}

export default Header
