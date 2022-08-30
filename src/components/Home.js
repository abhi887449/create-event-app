import React, { useContext,useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import eventContext from '../Event-context/Eventcontext'
import Event from './Event'

const Home = () => {
    const context = useContext(eventContext)
    const {events,setEvents,addevent, etoprewiew, setEtoprewiew } = context
    let navigate = useNavigate()
    const [currevent, setCurrevent] = useState({ Ename: "", Ebanner: "", Edescription: "", Eservices: "", language: "", Epricce: "", Eduration: "", Edate: "", Etime: "", Elink: "" })
    const handleaddevent = () => {
        setEtoprewiew(`${events.length + 1}`)
        localStorage.setItem("etoprewiew", JSON.stringify(etoprewiew))
        addevent(currevent);
        navigate('/createevent')
    }
    const handledeleteevent = ()=>{
        const i = document.getElementById("delete").value;
        if(i>0 && i<=events.length){
            let newevent = events
            for(let k=i-1;k<newevent.length;k++){
                newevent[k]=newevent[k+1]
            }
            newevent.pop()
            setEvents(newevent)
            localStorage.setItem("Events", JSON.stringify(newevent))
        }
    }
    return (
        <div className="flex flex-row">
            <div className="bg-black h-screen w-[150px] sm:w-[300px]">
                <Link to="/">
                <button className='h-9 sm:h-12 w-32 sm:w-60 bg-red-600 rounded-md text-white font-bold m-3 mt-8 sm:m-5 sm:mt-16'>Dashbord</button>
                </Link>
            </div>
            <div className="m-4 sm:m-7">
                <h1 className="font-bold text-2xl sm:text-3xl mb-4">Welcome</h1>
                <p className='text-sm sm:text-lg'>You can create event by clicking event button</p>
                <button className='h-16 w-44 sm:w-60 rounded-lg mt-12 border-2 border-solid flex flex-row p-4' onClick={handleaddevent}>
                    <span className="material-symbols-outlined mt-1">
                        add_circle
                    </span>
                    <div className="text-xl ml-2 sm:text-2xl">Add Event</div>
                </button>
                <h1 className="mt-5 font-bold text-2xl sm:text-3xl">Saved Events</h1>
                <div className="flex flex-col sm:flex-row mt-4">
                    <input className='sm:w-60' type="number" name="delete" id="delete" placeholder='Enter Event number to delete.......' />
                    <Link to="/">
                    <button className='sm:ml-3 h-10 w-28 sm:mr-2 text-md bg-red-500 hover:bg-red-700 text-white text-md hover:text-lg font-semibold rounded-lg mt-4' onClick={handledeleteevent}>Delete</button>
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap">
                    {
                        events.map((eventitems,index)=>{
                            return (
                                <Event key={index} eventitems={eventitems} index={index}/>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Home
