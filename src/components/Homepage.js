import React ,{useState} from 'react'
import './Homepage.css'

function Homepage() {

    const [conditions,setConditions] = useState(false);
    
    const handleChange = () => {
        setConditions(!conditions);
    };

    const handleStart = () => {
        if(conditions) {
            window.location.href = '/Quizpage';
        } else{
            console.log("please ")
        }
        }
    


  return (
    <div className='term'>
        <div className='agree'>
        
        <input type="checkbox" checked={conditions} onChange={handleChange} />

        
       <label>I agree terms and conditions</label>
       
        
        <div className='button' >
        <button  onClick={handleStart} disabled={!conditions}>
          Agree
        </button>
        </div>

        </div>

    </div>
  );
  }


export default Homepage