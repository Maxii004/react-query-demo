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
      select: (data) => {
        const superHeroNames = data?.data.map((hero) => hero.name);
        return superHeroNames;
      },
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
        {data?.map((heroName) => (
          <li key={heroName}>{heroName}</li>
        ))}
      </ul>
    </div>
  );
};
