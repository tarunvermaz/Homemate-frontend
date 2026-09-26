import React, { useEffect, useState } from "react";
import Bannner from "../componants/Bannner";
import Fourth from "../componants/fourth";
import Footer from "../componants/Footer";
import Fifth from "../componants/Fifth";
import Axios from "../useHooks/useAxios";

const Service = ({ service }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Bannner />
      <Fourth service={service} />
      <Fifth />
      <Footer />
    </>
  );
};

export default Service;
