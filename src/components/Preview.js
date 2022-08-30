import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Preview = (props) => {
    const etoprewiew = JSON.parse(localStorage.getItem("etoprewiew"))
    const navigate = useNavigate()
    const eventlistslocal = JSON.parse(localStorage.getItem("Events"))
    const eventitem = eventlistslocal[parseInt(etoprewiew) - 1];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    const handlesave = ()=>{
        navigate("/")
    }
    const handleedit = ()=>{
        navigate("/createevent")
    }
    let date="",month="";
    if(eventitem.Edate!==""){
        date=eventitem.Edate.substring(8,10)
        month=months[parseInt(eventitem.Edate.substring(5,7))-1] +","+eventitem.Edate.substring(0,4)
    }
    return (
        <>
            <div className='h-[200px] w-auto bg-blue-600 sm:h-[300px]' id='imagepreview' style={{ backgroundImage: `url(${eventitem.Ebanner})` }}></div>
            {/* <img className='h-[200px] w-auto bg-blue-600 sm:h-[300px] cover' id='imagepreview' src={eventitem.Ebanner} alt="img" /> */}
            <div className="flex flex-col-reverse lg:flex-row justify-center content-center mt-12 mb-16">
                <div className="flex flex-col lg:w-[700px] ms:ml-auto ">
                    <div className="h-fit w-auto ml-9 lg:ml-24 break-words m-auto mr-3 mt-7">
                        <h1 className="font-bold text-2xl mb-4">{eventitem.Ename}</h1>
                        <p className="text-sm">{eventitem.Edescription}</p>
                    </div>
                    <div className="h-fit w-auto ml-9 lg:ml-24 break-words m-auto mr-3 mt-7 mb-7">
                        <h1 className="font-bold text-2xl mb-4">What will you get ?</h1>
                        <p className="text-sm">{eventitem.Eservices}</p>
                    </div>
                </div>
                <div className="h-[300px] w-[300px] bg-gray-200 m-auto mb-4 rounded-[40px]">
                    <div className="h-20 w-20 m-auto rounded-xl text-blue-600 bg-white mt-[-15px]">
                        <span className="ml-7 material-symbols-outlined">
                            calendar_today
                        </span>
                        <div className="flex flex-col justify-center">
                        <p className="m-auto text-sm mt-[-3px]">{date}</p>
                        <p className="m-auto text-sm mt-[-3px]">{month}</p>
                        </div>
                    </div>
                    <div className="flex flex-row ml-7 mt-3 content-center mb-4">
                        <div className="text-blue-600 material-symbols-outlined">
                            schedule
                        </div>
                        <div className="ml-2">{eventitem.Etime}</div>
                    </div>
                    <div className="flex flex-row ml-7 mt-3 content-center mb-4">
                        <div className="material-symbols-outlined">
                            <span className="text-blue-600 material-symbols-outlined">
                                videocam
                            </span>
                        </div>
                        <a href={eventitem.Elink} target="_blank" rel="noopener noreferrer">
                        <div className="ml-2 text-blue-700 font-bold">Link</div>
                        </a>
                        
                    </div>
                    <div className="flex flex-row ml-7 mt-3 content-center mb-4">
                        <div className="material-symbols-outlined">
                            <span className="text-green-700 material-symbols-outlined">
                                attach_money
                            </span>
                        </div>
                        <div className="ml-2 text-green-700 font-bold">{eventitem.Epricce} Rupees</div>
                    </div>
                    <div className="flex flex-row ml-7 mt-3 content-center mb-4">
                        <div className="material-symbols-outlined">
                            <span className="text-red-400 material-symbols-outlined">
                                translate
                            </span>
                        </div>
                        <div className="ml-2 text-red-400 font-bold">{eventitem.language}</div>
                    </div>
                    <div className="flex flex-row ml-7 mt-3 content-center mb-4">
                        <div className="">
                            <span className="">
                                Duration -
                            </span>
                        </div>
                        <div className="ml-2">{eventitem.Eduration} Minutes</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center content-center mb-12">
                <button className="w-20 h-10 md:w-28 md:h-12 bg-green-500 rounded-2xl m-2 text-white font-bold text-lg" onClick={handlesave}>Save</button>
                <button className="w-20 h-10 md:w-28 md:h-12 bg-yellow-500 rounded-2xl m-2 text-white font-bold text-lg"onClick={handleedit}>Edit</button>
            </div>
        </>
    )

}

export default Preview
