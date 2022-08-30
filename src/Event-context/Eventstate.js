import { useState } from 'react'
import Eventcontext from './Eventcontext';
const Eventstate = (props) => {
  const local = localStorage.getItem("Events")
  let previewinit = "0"
  const localpreview = localStorage.getItem("etoprewiew")
  let eventInitial = []
  if(local===null){
    eventInitial=[]
  }
  else{
    eventInitial=JSON.parse(local);
    
  }
  if(localpreview===null){
    previewinit = "1"
  }
  else{
    previewinit=JSON.parse(localpreview);
    
  }
  const [etoprewiew,setEtoprewiew] = useState(previewinit);
  const [events, setEvents] = useState(eventInitial)
  localStorage.setItem("Events",JSON.stringify(events))
  localStorage.setItem("etoprewiew",JSON.stringify(etoprewiew))
  // const {Ename,Ebanner,Edescription,Eservices,language,Epricce,Eduration,Edate,Elink} = eventitem;
  const addevent = (eventitem) => {
    let newevent = events;
    newevent.push(eventitem)
    setEvents(newevent)
    localStorage.setItem("Events",JSON.stringify(events))
  }
  return (
    <Eventcontext.Provider value={{ events, setEvents, addevent,etoprewiew,setEtoprewiew }}>
      {props.children}
    </Eventcontext.Provider>
  )
}
export default Eventstate;