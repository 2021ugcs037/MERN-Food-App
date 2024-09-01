import React, { useState,useRef,useEffect} from "react";
import {useCart, useDispatchCart} from "./ContextReducer";



const Card = (props) => {
  // console.log("props"+props.foodItem.name)
  const priceRef = useRef();
  let dispatch = useDispatchCart();
  let data = useCart();
  // let options = props.options;
  // console.log("options"+props.options);

  let priceoptions = Object.keys(props.options[0]);
  //console.log(priceoptions);
  let foodItem = props.foodItem;



  const [qty, setqty] = useState(1);
  const [size, setsize] = useState("");
  const [finalPrice, setFinalPrice] = useState(props.options[0][size]);

  const handleaddtoCart = async() => {
    let food = []
    console.log(JSON.stringify(data));
    for(const item of data){
       if(item._id === data._id)
       {
        food = item;
        break;
      }
    }

    if(food != [])
    {
       if(food.size === size)
       {
         await dispatch({type: "UPDATE", id:props.foodItem._id, price:finalPrice, qty:qty});
         return
       }
       else if(food.size  !== size)
       {
        await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size});
          return
       }
       return
    }
    


    await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size});
     console.log(data);
    // useCart jo ki state ki value return karta hai wo hai
  }

  const handleNumberChange = (e) => {
    setqty(parseInt(e.target.value, 10));
  };

  const handleQuantityChange = (e) => {
    setsize(e.target.value);
  };
  useEffect( () => {
   setsize(priceRef.current.value);
  },[])

  useEffect(()=>{
    setFinalPrice(qty*props.options[0][size])
  },[qty,size])

  useEffect(() => {
    // This useEffect runs when the 'data' (cart items) state changes
    //console.log("Updated Cart Items:", data);
    // You can also display the updated items in your component, e.g., update a state variable to trigger a re-render
    // setUpdatedItems(data);
  }, [data]); // The useEffect depends on the 'data' state

  let finalprice = qty* props.options[0][size];
  //console.log(qty,props.options[0]);
  return (
     <div className="card mt-3 ms-5 col-4" style={{ width: "18rem" }}>
      <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height: "120px", objectFit: "fill"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>
        <p className="card-text">{props.description}</p>
        <div className="container w-100">
          <select
            className="m-2 h-100  bg-success"
            onChange={handleNumberChange}
            value={qty}
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            className="m-2 bg-success" ref={priceRef}
            onChange={handleQuantityChange}
            value={size}
          >
            {priceoptions
              .filter((data) => data !== '_id')
              .map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
          </select>
          <div className='d-inline h-100 fs-5'>₹{finalPrice}</div>

        </div>
        <hr></hr>
        <div className="btn btn-success bg-black text-success  border border-dark rounded-circle fw-bold" onClick={handleaddtoCart}>Add to Cart</div>
      </div>
    </div>
  );
};

export default Card;
