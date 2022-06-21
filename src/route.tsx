import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Footer,
  Header,
  Home,
  About,
  Contact,
  Items,
  Item,
  AdminLogin,
  AdminDashboard,
} from "./components";
import React from "react";
import PageService from "./services/page.service";

interface State {
  linkPages: { type: string }[];
}

export class RouterCustom extends React.Component {
  state: State = {
    linkPages: [],
  };
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    const res = await PageService.getPages();
    console.log("res", res);
  }

  render() {
    return (
      <Router>
        <Header />
        <div
          className={
            "no-padding-lr" +
            (window.location.pathname.match(/admin/)
              ? " admin-container"
              : " main-block container")
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            {this.state.linkPages.map((page) => (
              <Route
                key={page.type}
                path={`/${page.type}`}
                element={<Items type={page.type} />}
              />
            ))}
            <Route path="/item/:id" element={<Item />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }
}
