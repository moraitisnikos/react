import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ReactDatePicker from 'react-datepicker'
import { useNavigate  } from "react-router-dom";



function Statistics() {
    const [results, setResults] = useState([])
    const [Date, setDate] = useState()
    const [secondDate, setSecondDate] = useState()
    const [id, setId] = useState('')
    const navigate  = useNavigate();
    function handleClick() {
        navigate("/Mainpage");
    }

        
        useEffect(() =>{
        axios.get('https://data.gov.gr/api/v1/query/mdg_emvolio', {
            headers: {
            'Authorization': `token d2647654fac157751e7f43e2775cf4727f01a679`
            }
        }).then(res => {
            const data = res.data;
            console.log(data)
            setResults(data)
            }).catch(error => console.log(error))
        }, []) 
           
        
        
        
    
    return (
        <div>
           
            <div className="container bg-primary text-secondary">
            
            <h2 className="text-dark text-center">Παρακολουθήστε όλες τις πρώτες δόσεις που έχουν γίνει.</h2>
            </div>
            <div className="container">
                <button onClick={handleClick}>Επιστροφή</button>
                {results.map((result,i) => (
                <ul key={i} className="theResults">
                <li>{result.area}</li>
                <li>{result.dailydose1}</li>        
                </ul>
                )
                )}
            </div>
        </div>
    )
}

export default Statistics
