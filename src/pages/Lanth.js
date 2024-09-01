import React, { useEffect, useState } from 'react';
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null);

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/myOrderData`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: userEmail
                    })
                });
                const data = await response.json();
                setOrderData(data);
            } catch (error) {
                console.error("Error fetching my order:", error);
            }
        }
    }

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData !== null && orderData.orderData && Array.isArray(orderData.orderData) && orderData.orderData.map((orderItem, index) => (
                        <div key={index}>
                            {orderItem.map((order, orderIndex) => (
                                <div key={orderIndex}>
                                    {order.Order_date ? (
                                        <div className='m-auto mt-5'>
                                            {order.Order_date}
                                            <hr />
                                        </div>
                                    ) : (
                                        <div className='col-12 col-md-6 col-lg-3'>
                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                <img src={order.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{order.name}</h5>
                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                        <span className='m-1'>{order.qty}</span>
                                                        <span className='m-1'>{order.size}</span>
                                                        <span className='m-1'>{order.Order_date}</span>
                                                        <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                            ₹{order.price}/-
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
