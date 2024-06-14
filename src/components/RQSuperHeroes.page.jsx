import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error } = useSuperHeroData();

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
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  );
};
