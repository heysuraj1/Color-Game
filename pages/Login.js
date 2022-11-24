import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal';



const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false);

  const router = useRouter()


  useEffect(() => {


    setShow(true)
      
      
      
    }, [])
 



  const handleSubmit = (e) =>{

    e.preventDefault();

    try {
      
      axios.post("/api/Authentication/login",{
        "email":email,
        "password":password
      })
      .then((acc)=>{
        console.log(acc.data)
        localStorage.setItem("jwt",JSON.stringify(acc.data))
        router.push("/")
      })
      .catch((err)=>{
        console.log(err)
      })

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='container mt-5'>





<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" placeholder="Enter email" />
    <label htmlFor="exampleInputEmail1" className='mt-2'>Enter Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" placeholder="Enter Password" />
  
  </div>
<div style={{textAlign:"center",marginTop:30}}>
  <button type="submit" style={{width:"20%"}} className="btn btn-primary">Login</button>
</div>
</form>





    </div>
  )
}

export default Login