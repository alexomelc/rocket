import { prepareData } from "./task_1";
import { useEffect, useRef, useState } from "react";

const url = "https://api.spacexdata.com/v3/launches/past";

const useFetch = (filterParams) => {
  const cache = useRef({});
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      try {
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data;
        setData(data);
        setStatus("fetched");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getDataFromCache = async () => {
      setStatus("fetching");
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus("fetched");
      }
    };

    getDataFromCache();
    setFilteredData(prepareData(filterParams)(data));
  }, [filterParams, data]);

  return { filteredData, status };
};

export default useFetch;
