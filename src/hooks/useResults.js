import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 5,
          term: searchTerm,
          location: "Providence"
        }
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("food");
  }, []);

  return [searchApi, results, errorMessage];
};

export default useResults;
