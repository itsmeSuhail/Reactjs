import React, { useState } from 'react'
import Email from "emailjs-com"
const App = () => {
    const [mail,setmail]=useState("");
    const [name,setname]=useState("");
    const [text,settext]=useState("");

    const submit=(e)=>{
        e.preventDefault()
        const obj={
            name,mail,text
        }
        console.log(obj)
        Email.sendForm("service_rq387p9","template_549uaup",e.target,"uhuV4w4GUTmmLGbcG").then(res=>{
console.log(res)
        }).catch(e=>{
            console.log(e)
        })
        setmail("")
        settext("")
        setname("")
    }
  return<>
 <div style={{textAlign:"center"}}>
<form onSubmit={submit}>
<input type="text" name='name'  placeholder='Enter Your Name'  value={name} onChange={(e)=>setname(e.target.value)}/>
 <input type="email" name='mail' placeholder='Enter Your EMail'   value={mail} onChange={(e)=>setmail(e.target.value)}/>
<textarea name="message" id="" placeholder='Enter Your Message' value={text} onChange={(e)=>settext(e.target.value)} cols="30" rows="10"></textarea>
  <button
  type='submit'
  >Click to Send</button>  
</form>
 </div>
  
  </>
}

export default App