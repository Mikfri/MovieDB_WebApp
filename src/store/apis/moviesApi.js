import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({     // et set af end-points som beskriver hvordan data hentes (fetch/query. Get requests eller transformers/mutations)
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: 'd8ebbfad8d894a687e27c2be94c6d355'
            },
            method: 'GET',
          };
        },
      }),
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: 'd8ebbfad8d894a687e27c2be94c6d355'
            },
            method: 'GET',
          };
        },
      }),
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: 'd8ebbfad8d894a687e27c2be94c6d355'
            },
            method: 'GET',
          };
        },
      }),

      fetchUpcomingMovies: builder.query({
        query: () => {
          return {
            url: 'movie/upcoming',
            params: {
              sort_by: 'upcoming.desc',
              api_key: 'd8ebbfad8d894a687e27c2be94c6d355'
            },
            method: 'GET',
          };
        },
      }),

      fetchPopularTv: builder.query({
        query: () => {
          return {
            url: 'discover/tv',
            params: {
              sort_by: 'popularity.desc',
              api_key: '5fdc37ea548c0298112fbbf6bd4a8dbb'
            },
            method: 'GET',
          };
        },
      }),

      fetchPopularPersons: builder.query({
        query: () => {
          return {
            url: 'person/popular',
            params: {
              sort_by: 'popularity.desc',
              api_key: 'd8ebbfad8d894a687e27c2be94c6d355'
            },
            method: 'GET',
          };
        },
      }),

    };
  },
});

export const {useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMoviesQuery, useFetchPopularTvQuery, useFetchPopularPersonsQuery} = moviesApi;

export { moviesApi };