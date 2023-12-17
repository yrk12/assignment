import React, {useState} from "react"
import "./enroll.css"
import axios from "axios"
import { Link , useNavigate, useLocation} from "react-router-dom"


const Enroll = ({}) => {
    const [ slot, setSlot] = useState({
        time: ""
    })
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state
    const handleChange = e =>{
        setSlot({
            ["time"]: e.target.value
        })
    }

    const pay = e =>{
        const { time } = slot
        data['time']=time
        if(!time){
            alert("Please select a time slot")
        }
        else{
            axios.post("https://flexmoneybackend-cg2g.onrender.com/enroll", data)
            .then(res => {
                if(res.data.success){
                    alert("successfully enrolled for the month in slot " + time)
                    navigate("/")
                }
                else{
                    alert("already enrolled for the month in slot "+res.data.slot.time)
                }
            })
        }
    }

    return (
        <div className="login">
            <section class="radio-section">
                <div class="radio-list">
                    <h1>Please select Time slot</h1>
                    <div class="radio-item"><input name="radio" value="6-7" id="radio1" type="radio" onClick={ handleChange }/><label for="radio1">6-7 AM</label></div>
                    <div class="radio-item"><input name="radio" value="7-8" id="radio2" type="radio" onClick={ handleChange }/><label for="radio2">7-8 AM</label></div>
                    <div class="radio-item"><input name="radio" value="8-9" id="radio3" type="radio" onClick={ handleChange }/><label for="radio3">8-9 AM</label></div>
                    <div class="radio-item"><input name="radio" value="9-10" id="radio4" type="radio" onClick={ handleChange }/><label for="radio4">9-10 AM</label></div>
                </div>
            </section>
            <div className="button" onClick={ pay }>Pay and Enroll</div>

        </div>
    )
}


export default Enroll