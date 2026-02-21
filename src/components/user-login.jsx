import { Link, useNavigate } from "react-router-dom";
import { Button  } from "@mui/joy";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

export function UserLogin(){

    const [cookies,setCookie, removeCookie]=useCookies('userid');

    let navigate=useNavigate();// use to navigate under react-rote-dom

    const formik=useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        onSubmit:(formdata)=>{
            axios.get('http://127.0.0.1:3300/get-users')
            .then((response)=>{
               var user=response.data.find(user=>user.UserId===formdata.UserId);
               if(user.Password===formdata.Password){
                    setCookie('userid', formdata.UserId);
                    navigate('/dashboard');
               }else{
                navigate('/error');
               }
            })
        }
    })
    return(
        <div  style={{height:'400px'}} className="me-4 pe-4 d-flex justify-content-end align-items-center">
           <div>
             <h1 className="text-white bi bi-person-fill">User Login</h1>
            <form className=" bg-white p-4" onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" className="form-control" onChange={formik.handleChange} name="UserId" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange} className="form-control"/></dd>
                </dl>
                <Button type="submit" variant="solid" color="primary" className='w-100' > Login </Button>
                <Link className="btn btn-link w-100 mt-2" to='/register' > New User? Register </Link>
            </form>
           </div>
        </div>
    )
}