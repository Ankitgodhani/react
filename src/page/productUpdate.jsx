import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

function ProductUpdate() {

    const [product, setProduct] = useState({
        productName: "",
        ProductDescription: "",
        productPrice: "",
        productBrand: "",
        productWarranty: "",
        productReview: ""
    })

    const { productId } = useParams();
    function updateget() {
        console.log(9090909090909);
        axios.get("http://localhost:5000/api/product-updateget/" + productId).then((res) => {
            console.log(res);
            if (res.data.status) {
                setProduct(res.data.data)
                console.log("product updateget success");
            } else {
                console.log("product updateget fail");
            };
        });
    };

    useEffect(() => {
        updateget();
    }, [])

    const send = useNavigate();
    function updatepost(e) {
        e.preventDefault();
        axios.put("http://localhost:5000/api/product-update/" + productId, product).then((res) => {
            console.log(res, "....................");
            if (res.data.status) {
                setProduct(res.data)
                send("/");
                console.log("product update successfull");
            } else {
                toast.error(res.data.message)
                console.log("product update fail");
            }
        })
    }


    return (
        <><Container>
            <Form onSubmit={updatepost} >
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

                        <Form.Group className="mb-2" controlId="productwarranty">
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
        </Container></>
    );
};

export default ProductUpdate