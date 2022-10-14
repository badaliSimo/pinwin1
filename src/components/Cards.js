import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Fade from 'react-reveal/Fade';


const Cards = ({ itemsData }) => {
    return (
        <Row>
            {
                itemsData.length >= 1 ? (itemsData.map((item) => {
                    return (
                        <Fade left >
                            <Col key={item.id} sm="2" className='mb-10 card'>
                                <Card className='d-flex flex-row' style={{ backgroundColor: '#ffff' }}>

                                    <Card.Img className='img-card' variant="top" src={item.imgUrl} />

                                    <Card.Body>
                                        <Card.Title className=' justify-content-between  '>
                                            <div className='item-title hot '>{item.title}</div>
                                        </Card.Title>
                                        <Card.Text className='mg-3  '>

                                            <div className='p'>{item.description} </div>
                                            <h5> (PCS: {item.pcs}) </h5>
                                            <div className='id'>{item.id} </div>
                                            <div className='item-prixe'> {item.prix}</div>


                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Fade>
                    )
                })) : <h3 className='text-center'>Not Cars !</h3>
            }
        </Row>
    )
}

export default Cards;
