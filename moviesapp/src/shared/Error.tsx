import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import errorPage from "../assets/404_animation.gif";
const Error = () => {
    const [time, setTime] = useState(100);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
            if (time === 0) {
                navigate("/", { replace: true });
            }
        }, 1000);
    }, [time, navigate]);

    return (
        <div className="error_page">
            <img src={errorPage} width={300} height={300} alt='error' />
            <h3>Redirecting to home page in {time} sec</h3>
        </div>
    )
}

export default Error;