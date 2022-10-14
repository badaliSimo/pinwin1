import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Category from './components/Category';
import Cards from './components/Cards';
import { items } from './Data';
import Footer from './components/Footer';



function App() {
  const [itemsData, setItemsData] = useState(items)

  //get all cat unique
  const allCategory = ['Tout', ...new Set(items.map((i) => i.category))]
  console.log(allCategory)
  //Filter By Category
  const filterbyCategory = (cat) => {
    if (cat === 'Tout') {
      setItemsData(items)
    }
    else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

  return (
    <div className='color-body font body'>
       
    
      <Container className='toutes'>
       <NavBar />
        <Header />
        
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory} />
        <Cards itemsData={itemsData} />
        <Footer/>
      </Container>
    </div>
  )
}

export default App;
  
  /*<ImgCard/>*/