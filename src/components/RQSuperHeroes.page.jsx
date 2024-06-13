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
      refetchOnMount: false, //By default is true, if data is stale there will be a refetch request when the component is mounted. true | false | 'always'
      refetchOnWindowFocus: false, //By default is true, refetches data when the window is focused. No need to refresh the window. true | false | 'always'
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
