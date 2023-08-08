import { createBrowserRouter } from "react-router-dom";
import { ProfileSettings, Payments, Security, TopUp } from "../pages";
import { AuthChecker } from "../middlewares";

import {
  BookingPage,
  DashboardPage,
  ExamsPage,
  SettingsPage,
  HomePage,
  AuthPage,
} from "../pages";

const router = createBrowserRouter([
  {
    element: (
      <AuthChecker>
        <HomePage />
      </AuthChecker>
    ),
    children: [
      {
        path: "/",
        element: (
          <AuthChecker>
            <DashboardPage />
          </AuthChecker>
        ),
      },
      {
        path: "/exams",
        element: (
          <AuthChecker>
            <ExamsPage />
          </AuthChecker>
        ),
      },
      {
        path: "/settings",
        element: (
          <div className="flex gap-4 w-full">
            <AuthChecker>
              <SettingsPage />
            </AuthChecker>
          </div>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileSettings />,
          },
          {
            path: "top-up",
            element: <TopUp />,
          },
          {
            path: "payment",
            element: <Payments />,
          },
          {
            path: "security",
            element: <Security />,
          },
        ],
      },
      {
        path: "/exams/:examId",
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
