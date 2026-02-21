import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom"


export function UserRegister(){
     
    const[errorColor, setErrorColor]=useState('');
    const [error,setError]=useState('')
    let navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Email:'',
            Mobile:''
        },
        onSubmit:(user=>{
            axios.post('http://127.0.0.1:3300/register-user',user)
            .then(()=>{
                alert("Registered Successfully..");
                navigate('/login');
            })

        })
    })
    function VerifyUserId(e){
        axios.get(`http://127.0.0.1:3300/get-users`)
        .then(response=>{
            for(var user of response.data)
            {
                if(user.UserId===e.target.value){
                     setError('User Id Taken - Try Another ');
                     setErrorColor('text-danger');
                     break;
                }else{
                    setError("User id availible ");
                    setErrorColor('text-success');
                }
            }
        })
    }

    return(
        <div className="d-flex justify-content-end">
            <form onSubmit={formik.handleSubmit} className="mt-4 p-4 bg-light border border-3 border-light">
                <h3>Register User</h3>
                <dl>
                    <dt>UserId</dt>
                    <dd><input onKeyUp={VerifyUserId} onChange={formik.handleChange} name="UserId" className="form-control" type="text" /></dd>
                    <dd className={errorColor}>{error}</dd>
                    <dt>User Name</dt>
                    <dd><input  onChange={formik.handleChange} name="UserName" type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input  onChange={formik.handleChange}  name="Password" type="password" className="form-control" /></dd>
                    <dt>Email</dt>
                    <dd><input  onChange={formik.handleChange} name="Email" type="email" className="form-control" /></dd>
                    <dt>Mobile</dt>
                    <dd><input  onChange={formik.handleChange} name="Mobile" type="text" className="form-control" /></dd>
                </dl>
                <button className="mb-3 btn btn-dark w-100">Register</button>
               <div className="text-center" >
                 <Link  className="btn btn-link" to='/login'>Have Account ? Login</Link>
               </div>
            </form>
        </div>
    )
}