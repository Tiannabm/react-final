import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { ProductContext } from './ProductContext';


function ProductForm() {
    let [ product, setProducts ] = useState({
        name: "",
        description: "",
        organic: "",
        price: ""
    })

    let { addProduct } = useContext(ProductContext);
    let navigate = useNavigate();
    let { name, description, price, organic } = product;

    function handleChange(event) {
        setProducts((preValue) => {
            return {...preValue, [event.target.name]: event.target.value}
        });
    }

        function handleSubmit(event) {
            event.preventDefault();
            addProduct(product).then((newProduct) => 
                navigate(`/products/${newProduct.id}`))
        }

        return (

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Organic</Form.Label>
              <Form.Control type="text" name="organic" value={organic} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Button type="submit">Save</Button>
          </Form>
      
        )
    }

export default ProductForm