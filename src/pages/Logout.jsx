import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { logout } from "../store/actions/handleAuth";
import { useNavigate} from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate("/");
    });

    
}

export default Logout;