import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state)

    useEffect(() => {
        if (!location.state) {
            navigate('/');
        }
    }, [location, navigate]);

    if (!location.state) {
        return null;
    }

    return (
        <>
        {
            location.state ? (<span>hello</span>) : null
        }
        </>
    );
}
export default Detail;