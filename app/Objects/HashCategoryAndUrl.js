import api from '../APIs/TMDb_Config.js';

export default objHash = {
    //Movies
    'Top Rated Movies': api.get_top_rated,
    'Upcoming movies': api.get_upcoming,
    'Now playing movies': api.get_now_playing,
    'Popular movies': api.get_popular_movies,

    //TVShows
    'Popular TV shows': api.get_popular_tv,
    'Top rated TV shows': api.get_top_rated_tv,
    'On the air TV shows': api.get_on_air,
    'Airing today TV shows': api.get_today,

    //People
    'Popular people': api.get_popular_people,
    'Suggestions': api.url_request_suggestions,
    'Cinema': api.url_request_theatres('day'),
}