import React, { useEffect, useState } from "react";
import axios from "axios"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
           refreshProducts()
    }, []);

    async function refreshProducts() {
        try {
        const response = await axios.get("http://localhost:3000/products");
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
    }

    async function getProduct(id) {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            return response.data;
          } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
            throw error;
    }
}

    async function deleteProduct(id) {
        try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        refreshProducts();
        } catch (error) {
            console.error('Error deleting products:', error);
        }
    }

    async function addProduct(product) {
        try {
        const response = await axios.post("http://localhost:3000/products", product)
          refreshProducts()
          return response.data;
        } catch (error) {
            console.error('Error adding products:', error);
        }
    }

    async function updateProduct(product) {
        try {
        const response = await axios.put(`http://localhost:3000/products/${product.id}`, product)
          refreshProducts();
          return response.data;
        } catch (error) {
            console.error('Error updating product:', error);
        }
    }


    return (
        <ProductContext.Provider
            value={{
                products,
                getProduct,
                deleteProduct,
                addProduct,
                updateProduct
            }} >
                {props.children}
            </ProductContext.Provider>
    )
}