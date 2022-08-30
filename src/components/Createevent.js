import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import eventContext from '../Event-context/Eventcontext'

const Createevent = () => {
    const context = useContext(eventContext)
    const { events, setEvents, etoprewiew, setEtoprewiew } = context
    let navigate = useNavigate()
    const eventslists = JSON.parse(localStorage.getItem("Events"))
    const events1 = eventslists[parseInt(etoprewiew) - 1]
    const [currevent, setCurrevent] = useState(events1)
    const onChange = (e) => {
        setCurrevent({ ...currevent, [e.target.name]: e.target.value })
    }
    const handlepreview = (e) => {
        let newevent = events;
        newevent[parseInt(etoprewiew) - 1] = currevent
        setEvents(newevent)
        localStorage.setItem("Events", JSON.stringify(newevent))
        setEtoprewiew(etoprewiew)
        navigate('/preview')
    }
    function getBase64Image(img) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                var image = new Image();
                image.src = reader.result;
                image.onload = function () {
                    if (image.width > 1500 || image.height > 300) {
                        alert("image height is greater than 300px or width is greater than 1500px please select image of 1500*300px or less")
                        document.getElementById("Ebanner").value=""
                        setCurrevent({...currevent,Ebanner:null})
                    }
                };
                resolve(reader.result)
            }
            reader.onabort = (error) => reject(error)
            reader.readAsDataURL(img)
        })
    }
    const handlefileupload = (e) => {
        const img = e.target.files[0]
        getBase64Image(img).then(base64 => {
                setCurrevent({ ...currevent, Ebanner: base64 })
        })
    }
    return (
        <>
            <div className='flex flex-row mt-3'>
                <Link to="/">
                    <div className="flex mt-2 ml-2 md:ml-16">
                        <span className="p-[2px] text-blue-600 material-symbols-outlined">
                            arrow_back
                        </span>
                        <span className="font-bold text-lg ml-1 text-blue-600">Back</span>
                    </div>
                </Link>
                <button className="h-10 text-red-700 hover:bg-red-200 ml-auto mr-3 font-bold border-2 border-red-700 rounded-full pl-4 pr-4 sm:mr-16" onClick={handlepreview}>Preview Page</button>
            </div>
            <div className="m-2 md:ml-16 font-bold text-2xl md:text-3xl">Create Event</div>
            <form action="submit" onChange={onChange}>
                <div className="flex flex-col lg:flex-row md:ml-16 m-2">
                    <div className="m-2">
                        <input className='p-2 md:mt-10 cursor-text' type="text" name="Ename" id="Ename" value={currevent.Ename} placeholder='Event Name' maxLength={80} />
                        <div className="flex flex-row">

                            <label className='md:mt-7 p-2 text-gray-400 block cursor-pointer' htmlFor="Ebanner">Browse Banner</label>
                            <input className='md:mt-7 p-2' type="file" name="Ebanner" id="Ebanner" onChange={handlefileupload} placeholder='Banner' />
                        </div>
                        <input className='md:mt-7 p-2 cursor-text' type="text" name="Edescription" id="Edescription" value={currevent.Edescription} onchange={onChange} placeholder='Short Description' maxLength={100} />
                        <textarea className='md:mt-7 block p-2 rounded-lg m-2 mt-4 border-2 border-solid' name="Eservices" id="Eservices" cols="40" rows="8" value={currevent.Eservices} onchange={onChange} placeholder='Please describe your Service....'></textarea>
                    </div>
                    <div className="m-2 lg:ml-auto lg:mr-60 xl:mr-96">
                        <label htmlFor="language" className="p-2 text-gray-400">Choose language</label>
                        <select className='text-md text-gray-400' name="language" id="language" value={currevent.language} onchange={onChange}>
                            <option value="none" selected>Select</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                        <div className="flex flex-row">
                            <input className='p-2 mt-4 md:mt-7 cursor-text border-b-2 border-solid w-20' type="number" name="Epricce" id="Eprice" value={currevent.Epricce} onchange={onChange} placeholder='Price' />
                            <span className='p-2 mt-4 md:mt-7 text-gray-400 text-md'>Rupees</span>
                        </div>
                        <div className="flex flex-row">
                            <input className='p-2 mt-4 md:mt-7 cursor-text border-b-2 border-solid w-20' type="number" name="Eduration" id="Eduration" value={currevent.Eduration} onchange={onChange} placeholder='Duration' />
                            <span className='p-2 mt-4 md:mt-7 text-gray-400 text-md'>Minutes</span>
                        </div>
                        <div className="flex flex-row">
                            <input className='p-2 mt-4 md:mt-7 cursor-text border-b-2 border-solid w-36' type="date" name="Edate" id="Edate" value={currevent.Edate} onchange={onChange} placeholder='Date' />
                            <span className='p-2 mt-4 md:mt-7 text-gray-400 text-md'>Date</span>
                        </div>
                        <div className="flex flex-row">
                            <input className='p-2 mt-4 md:mt-7 cursor-text border-b-2 border-solid w-36' type="time" name="Etime" id="Etime" value={currevent.Etime} onchange={onChange} placeholder='Date' />
                            <span className='p-2 mt-4 md:mt-7 text-gray-400 text-md'>Time</span>
                        </div>
                        <input className='p-2 mt-4 md:mt-7 cursor-text' type="text" name="Elink" id="Elink" value={currevent.Elink} onchange={onChange} placeholder='Link' />


                    </div>
                </div>
            </form>

        </>
    )
}

export default Createevent
