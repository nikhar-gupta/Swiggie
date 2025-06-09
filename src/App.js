import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import RestaurantMainPage from "./pages/RestaurantMainPage";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMainPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
