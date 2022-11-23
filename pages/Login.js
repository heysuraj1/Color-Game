import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5'>


<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" placeholder="Enter email" />
    <label htmlFor="exampleInputEmail1">Enter Password</label>
    <input type="password" className="form-control" placeholder="Enter Password" />
  
  </div>
<div style={{textAlign:"center",marginTop:30}}>
  <button type="submit" className="btn btn-primary">Login</button>
</div>
</form>





    </div>
  )
}

export default Login