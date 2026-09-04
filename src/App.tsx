import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Offers from "./pages/Offers";
import Book from "./pages/Book";
import BookingSuccess from "./pages/BookingSuccess";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/:slug", Component: ServiceDetail },
      { path: "gallery", Component: Gallery },
      { path: "reviews", Component: Reviews },
      { path: "offers", Component: Offers },
      { path: "book", Component: Book },
      { path: "booking-success", Component: BookingSuccess },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
