import React, { useEffect, useState } from 'react'

function Quizpage() {

    const [minutes,setminutes] = useState(5);
    const [seconds,setseconds] = useState(0);
    const [redirect,setredirect] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds===0){
                if(minutes===0){
                    clearInterval(interval);
                    setredirect(true);}
                    else{
                        setminutes(minutes-1);
                        setseconds(59);
                    }

                }else{
                    setseconds(seconds-1);
                }
            
        },1000);
        return () => clearInterval(interval)
    }, [minutes,seconds]);

    useEffect(() => {
        if(redirect){
            window.location.href ='/Completion';
        }
    },[redirect]);

    const Minutes = minutes.toString().padStart(2, '0')
    const Seconds = seconds.toString().padStart(2, '0')

    


  return (
    <div>Quizpage
        <p>Time Remaining: {Minutes}:{Seconds}</p>
    </div>
  )
}

export default Quizpage