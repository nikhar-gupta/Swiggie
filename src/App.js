import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import ContactUs from "./pages/ContactUs";
import RestaurantMainPage from "./pages/RestaurantMainPage";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
        <ToastContainer />
      </div>
    </Provider>
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
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
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
