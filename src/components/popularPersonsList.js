import { useFetchPopularPersonsQuery } from "../store/apis/moviesApi"; 
import PersonCard from "./personCard";

function PopularPersonsList() {                                      
  const {data, error, isFetching } = useFetchPopularPersonsQuery();  

  let content;
  if (isFetching) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading persons.</div>;
  } else {
    content = data.results.map((person) => {
      return <PersonCard key={person.id} person={person}></PersonCard>
    });
  }
    return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      {content}
    </div>
  );
}
export default PopularPersonsList;