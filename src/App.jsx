import Header from "./components/Header";
//import { Fragment } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

export default function App() 
{
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

 //export defaultApp;
