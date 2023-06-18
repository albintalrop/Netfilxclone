import React from "react";
import AppRouter from "./AppRouter";

function MainRouter() {
    return (
        <Routes>
            <Route
                path="auth/*"
                element={
                    <AuthRoute>
                        <AuthRouter />
                    </AuthRoute>
                }
            />
            <Route
                path="/*"
                element={
                    <PrivateRoute>
                        <AppRouter />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default MainRouter;
