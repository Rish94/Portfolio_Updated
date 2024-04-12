import React, { useEffect,useState } from 'react'
import '../Constants/Css/Secondsection.css'
import { CiLocationArrow1 } from "react-icons/ci";

export default function Secondsection() {
    const [data,setData] = useState([]);

    

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3050/second', {
                method: 'GET'
            });
            
            const jsonData = await response.json();
            // console.log(jsonData); // Check if data is received correctly
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
        //console.log(data); // Check if data state is set correctly
    });


  return (
    <>
        <div className="secondmain">
        <span className='fea'>FEATURES</span><br />
        <span className='what'>What I Do</span>
        <br></br><br></br>
        <div className="second_doing">
            {/* {JSON.stringify(data)} */}
            {data.map((doc)=>(
            <div className="second-do_parts">
            
                <img className='doc_img' src={doc.image} alt="" />
                <br></br>

                <span className='doc_field'>{doc.field}</span>
               
                <p className='doc_para'>{doc.desc}</p>
            
                <button className="go hove"><CiLocationArrow1 /></button>
            </div>
            ))}
            
        </div>
        </div>
        
        
        


    </>
  )
}
