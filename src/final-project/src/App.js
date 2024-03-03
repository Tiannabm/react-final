import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home'
import About from './About';
import Products from './Products';
import styles from './App.module.css';
import Navigation from './Navigation';
import ProductForm from './ProductForm';



function App() {
  return (
        
      <BrowserRouter className={styles.fullPage} >
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="*" element={<h1>Welcome to the Gobble Stop!</h1>} />
        </Routes>

        <footer className={styles.footer}> 
          <div class="row">
            <div class="col-auto mr-auto"><strong>Gobble Stop, Inc.</strong></div>
            <br/>
            <div class="col-auto">Tianna Broderick</div>
          </div>
        </footer>
      </BrowserRouter>
    
    
  )
}

export default App