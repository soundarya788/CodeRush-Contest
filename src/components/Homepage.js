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

    <div className='gradient'>
       
    <div className='term'>
        <h2 style={{textAlign:'center'}} className='rules'>Rules & Regulations </h2>
        <ul>
            <li>Each participant will have 5 minutes to complete the quiz.</li>
            <li>The quiz will consist of 5 multiple-choice questions.</li>
            <li>Each question has a single correct answer.</li>
            <li>Participants must complete the quiz within the time limit.</li>
            <li>The quiz moderator's decisions on scoring and timing are final.</li>
            <li>Fair play and adherence to quiz guidelines are expected from all participants.</li>
            
        </ul>
    
        <div className='agree'>
        
         <input type="checkbox" checked={conditions} onChange={handleChange} />
          <label>I agree terms and conditions</label>
        <div className='box' >
        <button className="button"onClick={handleStart} disabled={!conditions}>
          Continue
        </button>
        </div> </div> </div>
    </div>
  );
  }


export default Homepage