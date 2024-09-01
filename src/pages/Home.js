import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Carou from "../Components/Carou";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import axios from "axios";
import Ccc from "../Components/Ccc";

const Home = () => {
  const [curdata, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/foodData`);
      setdata(response.data);
      console.log(response.data); // Log the data received from the server
      //console.log(curdata);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="nav ">
        <Navbar />
      </div>
      
      <Carou data={curdata[0]}/>

      <div style={{ backgroundColor: "lightblue" }}>
        <div className="container">
          {curdata?.length !== 0 ? (
            curdata[1]?.map((category) => (
              <div>
                <div style={{ textAlign: "center" }}>
                  <p className="h2">{category.CategoryName}</p>
                </div>
                <div className="row">
                  {curdata[0].map((food) => {
                    return (
                      food.CategoryName === category.CategoryName && (
                        <Card
                          foodItem = {food}
                          // Pehele ek ek karke bhej rahe the, ab direct array bhej rahe hai usko foodItems recieve karega
                          //img={food.img}
                          //name={food.name}
                          description={food.description}
                          options={food.options}
                        />
                      )
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div>Ternary Operator condition failed</div>
          )}
        </div>

        <Ccc />
        <Footer />
      </div>
    </>
  );
};

export default Home;
