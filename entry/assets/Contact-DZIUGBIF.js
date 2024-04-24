import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useHelmet } from "../entry-server.js";
import { useState, useEffect } from "react";
import axios from "axios";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "@loadable/component";
import "react-router-dom";
const Contact = (props) => {
  const [legend, setLegend] = useState("  here is useState original legend");
  const helmet = useHelmet();
  useEffect(() => {
    helmet.setTitle("Contact");
  }, [helmet]);
  useEffect(() => {
    axios.get("/api/proxy1").then(
      (response) => {
        setLegend(response.data);
      }
    );
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Contact Page" }),
    /* @__PURE__ */ jsx("p", { children: legend })
  ] });
};
export {
  Contact as default
};
