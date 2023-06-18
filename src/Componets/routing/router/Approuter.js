import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function AppRouter() {
    return (
        <Routes>
            <Route path="/signin" element={<Singnuppage />} />
            <Route path="/signup" element={<Loginpage />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default AppRouter;
