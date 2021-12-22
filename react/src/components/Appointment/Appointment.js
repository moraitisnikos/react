import React , {useState , useEffect} from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Formal from '../Formal'
import './Appointment.css'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";



function Appointment() {
    
    const [Date, setDate] = useState(null)
    const [response, setResponse] = useState()
    const navigate  = useNavigate();
    function handleClick() {
        navigate("/Mainpage");
    }
    
    const reply = (data) => {
        setResponse({"Message": data.message, "Status": data.status})
    }

    const handlereply = (error) => {
        try{
        alert(response.Message)
        }
        catch {
        alert("there was an error plz try again after refreshing the site")
        }
        
    }

    useEffect(() =>{
        axios.post('https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate', reply )
            .then(res => {
            const data = res.data;
            reply(data)
            console.log(data)
            }).catch(error => console.log(error))
        }, [])


    return (
        <div className="appoint">
            <div>
                <h3 className="text-center bg-dark text-light">Συμπληρώστε τα στοιχεία σας για το ραντεβού σας </h3>
            </div>
            <div className="container">
                <Formal/>
                <ReactDatePicker
                    placeholderText="eg 30/7/2021"
                    className="pick"
                    selected={Date}
                    onChange={setDate}
                    dateFormat='dd/MM/yyyy' 
                    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0 }
                    />
                <button className="accept" onClick={handlereply}>Υποβολή</button>
                <button className="delete" onClick={handleClick}>Ακύρωση</button>
                
                
            </div>
        </div>
    )
}
export default Appointment
