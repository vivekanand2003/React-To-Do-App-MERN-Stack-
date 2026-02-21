import { Link } from "react-router-dom";


export function UserError(){
    return(
        <div className="text-end me-4">
            <h1 className=" text-danger pt-4">Invalid credential</h1>
            <Link to='/login' className="btn btn-warning"  >Try Again</Link>
        </div>
    )
}