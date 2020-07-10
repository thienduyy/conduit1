import React from "react";
import { Layout } from "antd";

import Navbar from "./components/layout/navbar";
import Banner from "./components/layout/banner";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import "./App.css";

function App() {
  return (
    <Layout className="layout">
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
