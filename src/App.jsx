import React from "react";
import {Header} from "./components/header";
import {Article} from "./components/main/article";
import {QuemSomos} from "./components/main/sections/quemSomos";
import {Servicos} from "./components/main/sections/servicos";
import {Planos} from "./components/main/sections/planos";
import {Footer} from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Article/>
      <QuemSomos/>
      <Servicos/>
      <Planos/>
      <Footer/>
    </div>
  );
}

export default App;
