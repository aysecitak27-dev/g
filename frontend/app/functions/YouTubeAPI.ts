// YouTubeAPI.ts

/**
 * Extracts video ID from a given YouTube URL.
 * @param url - The YouTube video URL.
 * @returns The extracted video ID.
 */
function extractVideoID(url: string): string | null {
    const regex = /[?&]v=([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

/**
 * Validates if the given URL is a proper YouTube URL.
 * @param url - The URL to validate.
 * @returns True if valid YouTube URL, otherwise false.
 */
function validateYouTubeURL(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
}

/**
 * Fetches video metadata for a given YouTube video ID.
 * @param videoID - The YouTube video ID.
 * @returns A promise containing the video metadata.
 */
async function getVideoMetadata(videoID: string): Promise<any> {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=YOUR_API_KEY`);
    return await response.json();
}

/**
 * Builds the Shorts URL for a given video ID.
 * @param videoID - The YouTube video ID.
 * @returns The Shorts URL.
 */
function buildShortsURL(videoID: string): string {
    return `https://youtube.com/shorts/${videoID}`;
}

export { extractVideoID, validateYouTubeURL, getVideoMetadata, buildShortsURL };