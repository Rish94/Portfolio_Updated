import React from 'react'
import '../Constants/Css/Thirdsection.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Thirdsection() {

// const third = document.getElementsByClassName('third_doing');
//   const check = ()=>{
//     third.scrollRight +=200;
//   }

var settings = {
  // dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 3,
};




  return (
    <>

    <div className="third_main">
    <span className='comp'>8+ COMPLETED PROJECTS</span><br />
    <span className='myp'>My Projects</span>
    <br></br><br></br>
    <div className="third_doing">
        <Slider {...settings}>
        <div className="da dp">f</div>
        <div className="db dp">f</div>
        <div className="dc dp">f</div>
        <div className="dd dp">f</div>
        <div className="de dp">f</div>

        <div className="da dp">f</div>
        <div className="db dp">f</div>
        <div className="dc dp">f</div>
        <div className="dd dp">f</div>
        <div className="de dp"></div>

        <div className="da dp">f</div>
        <div className="db dp">f</div>
        <div className="dc dp">f</div>
        
        </Slider>
        

    </div>
    </div>
    
    
    


</>
  )
}
