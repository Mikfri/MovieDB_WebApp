import { useFetchPopularTvQuery } from "../store/apis/moviesApi";
import TvCard from "./tvCard";

function PopularTvList() {
  const {data, error, isFetching } = useFetchPopularTvQuery();

let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading Tv Series.</div>;
  } else {
    content = data.results.map((tv) => {
      return <TvCard key={tv.id} tv={tv} />
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default PopularTvList;