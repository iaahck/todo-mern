import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewTask from "./pages/ViewTask";
import UpdateTask from "./pages/UpdateTask";
import DeleteTask from "./pages/DeleteTask";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view" element={<ViewTask />} />
      <Route path="/update/:id" element={<UpdateTask />} />
      <Route path="/delete/:id" element={<DeleteTask />} />
    </Routes>
    <Toaster />
    </>
  );
};

export default App;
