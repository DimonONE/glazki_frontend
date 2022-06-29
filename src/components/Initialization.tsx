import React, { useEffect } from "react";
import { useGlobalState } from "../Store/store";
import PageService from "../services/page.service";

export const Initialization = () => {
  const [, setPages] = useGlobalState("pages");

  useEffect(() => {
    (async function () {
      PageService.getPages().then((res: any) => {
        setPages(res.data);
      });
    })();
  }, []);

  return null;
};
