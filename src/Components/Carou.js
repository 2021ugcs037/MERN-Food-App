import React from 'react'

import image1 from "../images/food1.jpg"
import image2 from "../images/food2.jpg"
//import image3 from "../images/food3.jpg"
const Carou = ({data}) => {
  // console.log({data});
const style1={width:"800vw",height:"70vh"}
const [search,setSearch]=React.useState("");
const arr=[];

const handleChange = (event) => {
  const { search,value } = event.target;
  setSearch((prevData) => ({
    ...prevData,
    [search]: value,
  }));
};

const handleSubmit=(e)=>{
e.preventDefault();
console.log(search)

// const res=arr.filter()

}

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide m-3" data-bs-ride="carousel">
  {/* <div className="carousel-indicators" >

    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div class="carousel-caption d-none d-md-block" style={{zIndex : '2'}}>
  <form class="d-flex" onSubmit={handleSubmit}>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' value={search} onChange={handleChange}/>
      <button class="btn btn-dark" type="submit">Search</button>
    </form>
      </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} style={style1}  className="d-block w-100" alt="..."/>
    </div>
    {/* https://source.unsplash.com/random/30x30?university */}
    <div className="carousel-item">
      <img src={image2} style={style1} className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carou;
