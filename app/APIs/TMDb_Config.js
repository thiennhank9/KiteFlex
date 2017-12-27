import windows from '../Themes/Windows.js';
let width = windows.width / 3 - 8;

api_config = {
    key: '0f866d616e28d66616b042c3c43a39d4',
    version: '3',
    width_image: 'w500',
    url_no_version: 'https://api.themoviedb.org/',
    url_base_image_no_width: 'https://image.tmdb.org/t/p/',
}

api_urls = {
    url_main: 'https://api.themoviedb.org/3',
    url_base_image: 'https://image.tmdb.org/t/p/w500',
    url_poster: 'https://image.tmdb.org/t/p/w130'
}

export default api = {
    //Don't care about these path, just for test ~~
    url_get_image: (path) => {
        return api_urls.url_base_image + path
    },
    url_get_poster: (path) => {
        return api_urls.url_poster + path
    },

    //In Loading screen
    url_request_top_popularity: 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1',

    //In Home - include: Movies, TV Shows, and People
    //---List result search - MultiSearch (includes movies, tv shows and people)
    get_multi_search: (query) => {
        return `https://api.themoviedb.org/3/search/multi?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&query=${query}&page=1&include_adult=true`
    },
    //---Movies
    get_top_rated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',
    get_upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',
    get_now_playing: 'https://api.themoviedb.org/3/movie/now_playing?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',
    get_popular_movies: 'https://api.themoviedb.org/3/movie/popular?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',

    //---TV Shows
    get_popular_tv: 'https://api.themoviedb.org/3/tv/popular?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',
    get_top_rated_tv: 'https://api.themoviedb.org/3/tv/top_rated?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',
    get_on_air: 'https://api.themoviedb.org/3/tv/on_the_air?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',
    get_today: 'https://api.themoviedb.org/3/tv/airing_today?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',

    //--People
    get_popular_people: 'https://api.themoviedb.org/3/person/popular?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1',

    //In Screen Detail Film
    //---Similar Movies
    get_similar_movie: (id_movie) => {
        return
        'https://api.themoviedb.org/3/movie/' + id_movie + '/similar?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1'
    },
    url_request_suggestions: 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&primary_release_year=2018&year=2018',
    url_request_theatres: (day) => {
        return 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&include_adult=false&include_video=false&page=1&primary_release_date.gte=2018-11-23&primary_release_date.lte=2019-1-10'
    },
    url_request_detail_movie: (id_movie) => {
        return `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${api_config.key}&language=en-US&append_to_response=credits`;
    },
    url_request_video_demo: (id_movie) => {
        return `https://api.themoviedb.org/3/movie/${id_movie}/videos?api_key=${api_config.key}&language=en-US`;
    },
    url_request_detail_people: (id_people) => {
        return `https://api.themoviedb.org/3/person/${id_people}?api_key=${api_config.key}&language=en-US`
    },
    url_request_genre_movies: (genre_id) => {
        return `https://api.themoviedb.org/3/genre/${genre_id}/movies?api_key=${api_config.key}&language=en-US&include_adult=false&sort_by=created_at.desc`;
    },
    url_request_reviews_movie: (id_movie) => {
        return `https://api.themoviedb.org/3/movie/${id_movie}/reviews?api_key=${api_config.key}&language=en-US&page=1`;
    },
    url_post_rate_movie: (id_movie) => {
        return `https://api.themoviedb.org/3/movie/${id_movie}/rating?api_key=${api_config.key}`;
    },

    //In ScreenSameFilm
    get_category: (category, page = 1) => {
        return `https://api.themoviedb.org/3/${category}?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=${page}`
    }
}