import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {

  const [email,setEmail]=useState()
  const [password, setPassword]= useState('')
  const navigate = useNavigate()

  const login=()=>{
    let param = {
      email: email,
      password: password,
    };
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then((res)=>res.json())
    .then((result)=>{
      console.log(result)
      if(result.status !=401){
        localStorage.setItem("userdata",JSON.stringify(result.data))
        setTimeout(()=>{
          navigate('/')
          window.location.reload()

        },1000)
      }else{
        alert("Invalid Credentials")
      }
    })
  }
  return (
    <>
      <section className="mt-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid mt-5"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
              <form className="mt-5">
                <div data-mdb-input-init className="form-outline mb-4">
                  <h1 className="mb-5">Login to your acccount</h1>
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                  <input
                    name="name"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div data-mdb-input-init className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                  <input
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button 
                    type="button"
                    onClick={login}
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link to="/register" className="link-danger">
                      Register
                    </Link>
                  </p>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                  <Link to="/sregister" className="link-danger">
                    Register as Scancenter
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
