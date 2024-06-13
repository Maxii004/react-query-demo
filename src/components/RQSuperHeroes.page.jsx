import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  const { data, isLoading, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      staleTime: 30000, //Stops refetching data for the specified time. In this case 30s since the initial request was sent.
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>RQ Super Heroes Page</h1>
      <ul>
        {data?.data.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};
