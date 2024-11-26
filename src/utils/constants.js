const GOOGLE_API_KEYS = 'AIzaSyBKcMCSZQnI4911nB1B0crWeBbVIIrNbRI';

export const OFFSET_LIVE_CHAT = 10;
export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=' + GOOGLE_API_KEYS;

export const VIDEOBY_ID = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=1kVK0MZlbI4&key='+GOOGLE_API_KEYS;

export const YOUTUBE_SEARCH_API = 'api/complete/search?client=firefox&ds=yt&q='