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
import React, { useMemo } from "react";
import PageService from "./services/page.service";
import { useGlobalState } from "./Store/store";

interface State {
  linkPages: { type: string }[];
}

export const RouterCustom: React.FC = () => {
  const [pages] = useGlobalState("pages");
  const linkPages = useMemo(
    () => (pages ? pages.map((page) => page.type) : []),
    [pages]
  );

  console.log("linkPages", linkPages);
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {linkPages.map((type) => (
            <Route
              key={type}
              path={`/${type}`}
              element={<Items type={type} />}
            />
          ))}
          <Route path="/item/:id" element={<Item />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
