import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  {
    /* useEffect(() => {
    getResult();
  }, []); */
  }

  return [getResult, result];
};
