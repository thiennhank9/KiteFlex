import api from '../APIs/TMDb_Config.js';

export default objHash = {
    'Suggestions': api.url_request_suggestions,
    'Cinema': api.url_request_theatres('day'),
}