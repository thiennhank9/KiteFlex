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
}

export default api = {
    
    //Don't care about these path, just for test ~~
    url_get_image: (path) => {
        return api_urls.url_base_image + path
    },
    url_request_lastest: 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&primary_release_year=2018&year=2018',
    url_request_theatres: (day) => {
        return 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&include_adult=false&include_video=false&page=1&primary_release_date.gte=2018-11-23&primary_release_date.lte=2019-1-10'
    },
    url_request_top_tvshows: 'https://api.themoviedb.org/3/discover/tv?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false',
    url_request_top_cartoons: 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&certification_country=US&certification.lte=G&sort_by=popularity.desc',
    url_request_coming_soon: 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=release_date.desc&include_adult=true&include_video=false&page=1',

    //In Loading screen
    url_request_top_popularity: 'https://api.themoviedb.org/3/discover/movie?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1',

    //In Home - include: Movies, TV Shows, and People
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
    get_popular_people: 'https://api.themoviedb.org/3/person/popular?api_key=0f866d616e28d66616b042c3c43a39d4&language=en-US&page=1'

}