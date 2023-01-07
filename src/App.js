import React from "react";

import Home from "./components/Home";

import Contact from "./components/Contact";

// import About from "./components/About";

import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Success from "./Success";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import FeatureProjects from "./components/FeatureProjects";
import NewProjects from "./components/NewProjects";
import UsersList from "./components/Users";

import UserDetails from "./components/UserDetails";
import Login from "./components/Login";
import { AuthProvider } from "./components/Auth";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    // <MainDataContextProvider>
    //   <UserContextProvider>
    //     <Final />
    //   </UserContextProvider>
    // </MainDataContextProvider>
    <AuthProvider className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />

        <Route path="/projects" element={<Projects />}>
          <Route index element={<NewProjects />} />
          <Route path="featured" element={<FeatureProjects />} />
          <Route path="new" element={<NewProjects />} />
        </Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersList />
            </PrivateRoute>
          }
        />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
