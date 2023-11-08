import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import ProfilePage from "../pages/ProfilePage";
import SettingPage from "../pages/SettingPage";
import EvalPage from "../pages/EvalPage";
import RootLayout from "./RootLayout";
import Protected from "../components/Protected";
import UnAuthenticated from "../components/UnAuthenticated";
import SignLayout from "./SignLayout";
import ConnectionDB from "../components/ConnectionDB";
import { SelectTest } from "../components/SelectTest";
import ShowResult from "../components/ShowResult";

const router = createBrowserRouter([
    {
        element: < RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Protected><DashboardLayout /></Protected>,
                children: [
                    {
                        path: "eval",
                        element: <EvalPage />,
                        children: [
                            {
                                path: "connect",
                                element: <ConnectionDB />,
                                // loader: teamLoader,
                            },
                            {
                                path: "select-test",
                                element: <SelectTest />,
                                // loader: teamLoader,
                            },
                            {
                                path: "show-result",
                                element: <ShowResult />,
                                // loader: teamLoader,
                            },
                        ]
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />,
                        // loader: teamLoader,
                    },
                    {
                        path: "settings",
                        element: <SettingPage />,
                        // loader: teamLoader,
                    },

                ]
            },
            {
                path: "/",
                element: <UnAuthenticated><SignLayout /></UnAuthenticated>,
                children: [
                    {
                        path: "login",
                        element: <UnAuthenticated><LoginPage /></UnAuthenticated>,
                    },
                    {
                        path: "signup",
                        element: <UnAuthenticated><SignUpPage /></UnAuthenticated>,
                    },
                    {
                        path: "terms-and-conditions",
                        element: <TermsAndConditions />,
                    },

                ]
            },

        ],
    },

]);

export default router;
