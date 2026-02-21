import axios from "axios";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";


export function UserDashboard() {
    const [cookies, setCookie, removeCookie] = useCookies('userid');
    const [Appointments, setAppointments] = useState([{ Appointment_Id: 0, Title: '', Description: '', Date: Date(), UserId: '' }]);
    const [editAppointments, setEditAppointments] = useState([{ Appointment_Id: 0, Title: '', Description: '', Date: Date(), UserId: '' }]);

    var navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            Appointment_Id: 0,
            Title: '',
            Description: '',
            Date: '',
            UserId: cookies['userid']
        },
        onSubmit: appointment => {
            axios.post('http://127.0.0.1:3300/add-task', appointment)
                .then(() => {
                    alert("Task added successfully ...");
                    window.location.reload();
                })
        }
    });


    const editformik = useFormik({
       
    //    Method - 1
        // initialValues: {
        //     Appointment_Id: 0,
        //     Title: '',
        //     Description: '',
        //     Date: '',
        //     UserId: cookies['userid']
        // },

        // method 2 
          initialValues: {
        Appointment_Id: editAppointments?.Appointment_Id || 0,
        Title: editAppointments?.Title || '',
        Description: editAppointments?.Description || '',
        Date: editAppointments?.Date || '',
        UserId: cookies?.userid || ''
          },
         enableReinitialize: true,
        
        onSubmit: (appointments) => {
            axios.put(`http://127.0.0.1:3300/edit-task/${appointments.Appointment_Id}`,appointments)
                .then(() => {
                    alert('updated Successfully ...');
                    window.location.reload();
                });

        },

    });



    function LoadAppointments() {
        axios.get(`http://127.0.0.1:3300/get-appointments/${cookies['userid']}`)
            .then(response => {
                setAppointments(response.data);
            })
    }

    useEffect(() => {
        LoadAppointments();
    }, []);

    function handleSignout() {
        removeCookie('userid');
        navigate('/');
    }

    function handleRemoveClick(id) {
        axios.delete(`http://127.0.0.1:3300/remove-task/${id}`).then(() => {
            alert('deleted successfully ...');
            window.location.reload();
        });
    }

    function handleEditClick(id) {
        axios.get(`http://127.0.0.1:3300/appointments/${id}`)
            .then(response => {

                // method1 to enable Editing 
                // const data = response.data[0]; // assuming array
                //  if (!data) return;
                // editformik.setValues({
                //     Appointment_Id: data.Appointment_Id,
                //     Title: data.Title,
                //     Description: data.Description,
                //     Date: data.Date,
                //     UserId: cookies['userid']
                // });

                // Method -2  To enable Editing 
                setEditAppointments(response.data[0]);
               
            })

    }

    return (
        <div className="row pt-4">
            <div className="col-7">
                <button data-bs-target="#addTask" data-bs-toggle="modal" style={{ marginLeft: '250px', marginTop: '300px' }} className="bi bi-calendar btn btn-warning"> Add Appointment </button>
                <div className="modal" id="addTask">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="modal-header">
                                    <h2>Add Appointment</h2>
                                    <button type="button" className="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">

                                    <dl>
                                        <dt>Appointment</dt>
                                        <dd><input type='number' className="form-control" name="Appointment_Id" onChange={formik.handleChange} /></dd>
                                        <dt>Title</dt>
                                        <dd><input className="form-control" name="Title" type="text" onChange={formik.handleChange} /></dd>
                                        <dt>Description</dt>
                                        <dd>
                                            <textarea name="Description" className="form-control" row="4" col="40" onChange={formik.handleChange} ></textarea>
                                        </dd>
                                        <dt>Date</dt>
                                        <dd>
                                            <input name="Date" type="date" className="form-control" onChange={formik.handleChange} />
                                        </dd>
                                    </dl>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" data-bs-dismiss="modal" className="bi bi-calendar-date btn btn-info" > Add task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-5" id="task-list">
                <h3>{cookies['userid']}-Dashboard <button onClick={handleSignout} className="btn btn-danger">signout</button></h3>
                <div className="mt-4" >
                    {
                        Appointments.map(appointment =>
                            <div className="alert alert-success alert-dismissible">
                                <button onClick={() => handleRemoveClick(appointment.Appointment_Id)} className="btn btn-close" data-bs-dismiss="alert"></button>
                                <h2 className="alert-title">{appointment.Title}</h2>
                                <p className="alert-text">{appointment.Description}</p>
                                <p>
                                    {appointment.Date}
                                </p>
                                <button onClick={() => { handleEditClick(appointment.Appointment_Id) }} data-bs-target="#EditTask" data-bs-toggle="modal" className="btn btn-warning bi bi-pen-fill">Edit Task</button>
                                <div className="modal modal-fade" id="EditTask">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                           <form onSubmit={editformik.handleSubmit}>
                                             <div className="modal-header">
                                                <h2>Edit Task</h2>
                                                <buttton  type="button" data-bs-dismiss="modal" className="btn btn-close  " style={{ position: 'absolute', top: '10px', right:'10px' }}></buttton>
                                            </div>

                                            <div className="modal-body">
                                                <dl>
                                                    <dt>Appointment</dt>
                                                    <dd><input type="number" onChange={editformik.handleChange} className="form-control" name="Appointment_Id" value={editformik.values.Appointment_Id} /></dd>
                                                    <dt>Title</dt>
                                                    <dd><input type="text" onChange={editformik.handleChange} className="form-control" name="Title" value={editformik.values.Title} /></dd>
                                                    <dt>Description</dt>
                                                    <dd>
                                                        <textarea onChange={editformik.handleChange}  name="Description" value={editformik.values.Description} className="form-control"></textarea>
                                                    </dd>
                                                </dl>
                                            </div>
                                            <div className="modal-footer">
                                                <button data-bs-dismiss='modal' type="submit" className="btn btn-success bi bi-floppy-fill">
                                                    &nbsp; Update
                                                </button>
                                            </div>
                                           </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

//  value={editformik.values.Appointment_Id}