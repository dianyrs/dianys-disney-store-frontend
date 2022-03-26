import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>404 Route Not Found 🙊</h2>
            <Link to="/">Go home</Link>
        </div>
    );
};

export default NotFound