import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { LightSpeed } from 'react-reveal'
const Category = ({ filterbyCategory, allCategory }) => {

    //to fillter by category
    const onFilter = (cat) => {
        filterbyCategory(cat)
    }
    return (
        <Row className='my-2 mb-5'>

            <Col sm="12" className='d-flex justify-content-center '>
                {
                    allCategory.length >= 1 ? (allCategory.map((cat) => {
                        return (
                            <LightSpeed left>
                                <div>
                                    <button onClick={() => onFilter(cat)} className='btn mx-1 bt'>{cat}</button>
                                </div>
                            </LightSpeed>
                        )
                    })) : <h4>Pas Des Produits !!</h4>
                }

            </Col>
        </Row>
    )
}

export default Category;
