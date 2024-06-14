import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroData = () => {
  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );
  return {
    data: data?.data,
    isLoading,
    isError,
    error,
  };
};
