// import { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt);
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Form />
      </main>
    </>
  );
}

export default App;
