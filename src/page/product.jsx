import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Product() {

    const [product, setProduct] = useState([]);

    function ProductGet() {
        axios.get("http://localhost:5000/api/productget").then((res) => {
            if (res.data.status) {
                setProduct(res.data.data);
                console.log(res);
            } else {
                console.log("product not get");
            };
        });
    };

    useEffect(() => {
        ProductGet();
    }, [])

    function productRemove(_id) {
        var token = localStorage.getItem("token");
        axios.delete("http://localhost:5000/api/product-remove/" + _id)
            .then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message);
                    console.log(res.data.data);
                    ProductGet();
                } else {
                    toast.error(res.data.message);
                    console.log("user remove failed");
                };
            });
    };
    function productCreate() {
        
    }
    return (
        <>
            <a href="/product-create"><button className="btn btn-primary mb-3">Add List</button></a>

            <div className="row">
                {/* {
                    product.map(productList => {
                        return (
                            <div className="col-3 mb-5 ">
                                <Link to={"/product-cart/" + productList._id} style={{ textDecoration: 'none' }}>
                                    <div className="card h-100 text-muted">
                                        <img className="card" src={productList.productImage} alt="img" />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder ">{productList.productName}</h5>
                                                <span className=" text-decoration-line-through">{productList.ProductDescription}</span><br />
                                                <span className=" text-decoration-line-through">{productList.productPrice}</span>
                                            </div>
                                        </div>
                                        <div className="card-footer justify-content-around  p-4 pt-0 border-top-0 bg-transparent d-flex">
                                            <div className="text-center"><Link to={"/product-cart-view/" + productList._id} className="btn btn-outline-primary mt-auto">Add to cart</Link></div>
                                            <div className="text-center"><Link to={"/product-buy"} className="btn btn-outline-primary mt-auto">Add to Buy</Link></div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="d-flex justify-content-center">
                                    <td><button className='btn btn-danger' onClick={() => productRemove(productList._id)}>Remove</button></td>
                                    <td><Link to={"/product-update/" + productList._id} className='btn btn-success'>Edit</Link></td>
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>productName</th>
                        <th>ProductDescription</th>
                        <th>productPrice</th>
                        <th>productBrand</th>
                        <th>productWarranty</th>
                        <th>productReview</th>
                        <th>delete</th>
                        <th>update</th>
                    

                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(tr => {
                            console.log(6666);
                            return (
                                <tr>
                                    <td>{tr.productName}</td>
                                    <td>{tr.ProductDescription}</td>
                                    <td>{tr.productPrice}</td>
                                    <td>{tr.productBrand}</td>
                                    <td>{tr.productWarranty}</td>
                                    <td>{tr.productReview}</td>
                                    <td><button onClick={() => productRemove(tr._id)} className='btn btn-danger'>delete</button></td>
                                    <td><Link to={"/product/" + tr._id} className='btn btn-success'>update</Link></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </>
    )
}

export default Product