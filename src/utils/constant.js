export const google_api_key = "AIzaSyCAMdq2oDSYxknNRxQiDQm54VxttACUuOU";
export const youtube_videos_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  google_api_key;
export const live_youtube__video_api =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  google_api_key;

const id = "";
export const video_details_by_ID =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` +
  google_api_key;

export const youtube_search_api =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const video_search_api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=kapil&key=" +
  google_api_key;

export const youtube_live_broadcast_api =
  "https://youtube.googleapis.com/youtube/v3/liveBroadcasts?key=[YOUR_API_KEY]";
