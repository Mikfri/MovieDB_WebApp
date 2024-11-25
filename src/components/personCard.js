function PersonCard({ person }) {
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    console.log("Person knownFor", person);
    //console.log(posterBasePath + person.poster_path);
    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src={posterBasePath + person.profile_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title "><span>{person.name}</span></h5>
                    {person.known_for.map((movie, index) => (
                        <div key={index}>
                            <span>{movie.title}</span>
                        </div>
                    ))}
                    <div className="d-flex justify-content-between p-0"><span className="far fa-star"> {person.popularity}</span></div>
                </div>
            </div>
        </div>
    );
}

export default PersonCard;