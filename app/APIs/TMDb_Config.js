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
    url_request_top_popularity: 'https://api.themoviedb.org/3/discover/movie?api_key='+ api_config.key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    url_get_image: (path) => {
        return api_urls.url_base_image + path
    }
}