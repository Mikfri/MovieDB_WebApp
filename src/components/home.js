import MovieImg from '../assets/Images/movie_black2.jpg';

function Home() {
    return (
        <div class="container text-center">
            <div class="Logo">Movie Finder</div>
            <img src={MovieImg} class="rounded" alt="homeImage" width="550" height="450"/>
            <div class="Logo2 mt-5" >by Sponge</div>        
        </div>
    )
}

export default Home;