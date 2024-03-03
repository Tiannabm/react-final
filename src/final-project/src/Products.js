import styles from './Products.module.css';
import { Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom"
import { ProductContext } from './ProductContext';
import { useContext, useEffect } from 'react';
import axios from 'axios';


function Products() {

    let params = useParams();
    let navigate = useNavigate();
    let { getProduct, deleteProduct, updateProduct, products, setProducts } = useContext(ProductContext);


        useEffect(() => {
            refreshProducts();
          },[]);
        
          async function refreshProducts() {
            try {
              const response = await axios.get("http://localhost:3000/products");
              setProducts(response.data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          }
        
          let product = getProduct(params.productId);

          if (!params.productId || !products.length || product === undefined) {
            return <p>Product Not Found.</p>;
          }

    let { id, name, description, price, organic, imageURL } = product;

    function handleDeleteProduct(id) {
        deleteProduct(id);
        navigate('/products');
    }

    function detailedView() {
        return(
            <>
            <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
            <Card.Text>
                <strong>Organic:</strong> <span>{organic}</span>
            </Card.Text>
            </>
        );
    }

    function productEdit() {
        updateProduct(id).then((updatedProduct) => {
            navigate(`/products/edit/${updatedProduct.id}`);
    });
}

    return (

        <div className={styles.body}>
        <h1 className={styles.heading}> Products </h1>

        <div className="dropdown">
            <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By Price
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="?_sort=price&_order=desc">Price: High to Low</a>
                <a className="dropdown-item" href="?_sort=price&_order=asc">Price: Low to High</a>
            </div>
        </div>

            <div className={styles.card}> 
            <Card className="align-self-start w-25">
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> 
                    <strong>Price:</strong> <span>{price}</span>
                </Card.Subtitle>
    
                <Button variant="secondary" onClick={detailedView}>View</Button>
                <Button variant="danger" onClick={() => handleDeleteProduct(id)}>Delete</Button>
                <Button variant="primary" onClick={productEdit}>Edit</Button>
            </Card.Body>
            </Card>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default Products