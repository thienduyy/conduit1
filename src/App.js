import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/navbar";
import Home from "./components/layout/home";
import Footer from "./components/layout/footer";
import SignIn from "./components/auth/signIn";
import "./App.css";
import SignUp from "./components/auth/signup";

function App() {
  return (
    <>
      <Navbar />
      <Layout className="layout">
        <div style={{ minHeight: "80vh" }}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            {/* <Route exact path="/home/:tag" component={Home} /> */}
          </Switch>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
