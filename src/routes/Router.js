import { lazy } from "react";
import { MainLayout } from "../layouts/MainLayout";
const TechHomePage = lazy(() => import("../pages/technology/TechHomePage"));
const ClientsPage = lazy(() => import("../pages/ClientsPage"));
const RecServicesPage = lazy(() => import("../pages/recruitment/RecServicesPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const RecHomePage = lazy(() => import("../pages/recruitment/RecHomePage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const TechServicesPage = lazy(() => import("../pages/technology/TechServicesPage"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Blogs = lazy(() => import("../pages/BlogsPage"));
const CareerPage = lazy(() => import("../pages/CareerPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const FullBlog = lazy(() => import("../components/blogs/FullBlog"));
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const AdminLogin = lazy(() => import("../pages/admin/AdminLogin"));

const AppRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/technology", element: <TechHomePage /> },
      { path: "/technology-services", element: <TechServicesPage /> },
      { path: "/clients", element: <ClientsPage /> },
      { path: "/recruitment", element: <RecHomePage /> },
      { path: "/recruitment-services", element: <RecServicesPage /> },
      { path: "/contact", element: <ContactUsPage /> },
      { path: "/aboutB3", element: <AboutUsPage /> },
      { path: "/careers", element: <CareerPage /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/adminlogin", element: <AdminLogin /> },
      { path: "/dashboard", element: <AdminDashboard /> },
      { path: "/blog/:id", element: <FullBlog /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export default AppRoutes;
