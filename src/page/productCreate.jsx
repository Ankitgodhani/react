import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductCreate() {
    const [product, setProduct] = useState({
        productName: "",
        ProductDescription: "",
        productPrice: "",
        productBrand: "",
        productWarranty: "",
        productReview: "",
    });


    console.log(product,"lllllll")
    const send = useNavigate();
    function ProductPost(e) {
        e.preventDefault()
        axios.post("http://localhost:5000/api/product-create", product).then((res) => {
            if (res.data.status) {
                setProduct(res.data)
                console.log("product post");
                send("/")
            } else {
                toast.error(res.data.message)
                console.log("product not Post");
            };
        });
    };

    return (
        <Container>
            <Form onSubmit={ProductPost}>
                <Button href="/product" variant='primary' className='mb-3'>Back</Button>
                <Row>
                    <Col xs={5}>
                        <Form.Group className="mb-2" controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={product.productName} onChange={(e) => setProduct({ ...product, productName: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productDescription">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter product description" value={product.ProductDescription} onChange={(e) => setProduct({ ...product, ProductDescription: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter product price" value={product.productPrice} onChange={(e) => setProduct({ ...product, productPrice: e.target.value })} pattern="^\d+(\.\d{1, 2})?$" />
                        </Form.Group>

                    </Col>

                    <Col xs={5}>
                        <Form.Group className="mb-2" controlId="productBrand">
                            <Form.Label>Product Brand</Form.Label>
                            <Form.Control type="text" placeholder="Enter product brand" value={product.productBrand} onChange={(e) => setProduct({ ...product, productBrand: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productWarranty">
                            <Form.Label>Product Warranty Information</Form.Label>
                            <Form.Control type="text" placeholder="Enter product warranty information" value={product.productWarranty} onChange={(e) => setProduct({ ...product, productWarranty: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="productReview">
                            <Form.Label>Product Reviews</Form.Label>
                            <Form.Control type="text" placeholder="Enter product reviews" value={product.productReview} onChange={(e) => setProduct({ ...product, productReview: e.target.value })} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" className="w-25 ms-5">Save Data</Button>
            </Form>
        </Container>
    );
}

export default ProductCreate;
