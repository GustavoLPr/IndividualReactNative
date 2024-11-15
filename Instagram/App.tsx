import React from "react";
import { StatusBar } from "expo-status-bar";
import { Login } from "./src/screens/Login";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar  style= "light"/>
      <Login />
      {/* <Routes/> */}
    </>
  );
}
