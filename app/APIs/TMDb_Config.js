api_config = {
    key: '  ',
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