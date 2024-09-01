import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/myOrderData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {console.log("odata", orderData)};
      <div className="container">
        <div className="row">
          {/* {Object.keys(orderData).length !== 0? Array(orderData).map(data => {
                return(
                    <>
                     data.orderData ? 
                       data.orderData.order_data.slice(0).reverse().map((item) = {
                          console.log(item)
                       })
                    </>
                )
              }):<>orderData ka lenth zero aa gya</>
              } */}
          {orderData.orderData &&
            orderData.orderData.order_data &&
            orderData.orderData.order_data.map((item, index) => {
              {
                /* console.log("item",item) */
              }
              console.log("item-2", item);
              {
                /* console.log("item Length",item.length); */
              }
              return (
                <div className="m-auto mt-5" key={index}>
                  <h4> {item[0].order_date}</h4>

                  <hr />
                  {item.slice(1).map((ele) => {
                    return (
                      <>
                        <table className="table table-dark">
                          <thead className="text-success fs-4">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Size</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.slice(1).map((ele) => {
                              return (
                                <>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.qty}</td>
                                    <td>{ele.size}</td>
                                    <td>{ele.price}</td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
