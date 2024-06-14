import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error } = useSuperHeroesData();

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
        {data?.map((hero) => (
          <Link key={hero.id} to={`/rq-super-heroes/${hero.id}`}>
            <li>{hero.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
