import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
    const token = await getAccessToken();

    //const taylorSwift = "06HL4z0CvFAxyc27GXpf02";

    const artists = [
        {
            name: "Taylor Swift",
            spotify_id: "06HL4z0CvFAxyc27GXpf02",
        },
        {
            name: "Beyoncé",
            spotify_id: "6vWDO969PvNqNYHIOW5v0m",
        },
        {
            name: "Ariana Grande",
            spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
        },
        {
            name: "Adele",
            spotify_id: "4dpARuHxo51G3z768sgnrY",
        },
        {
            name: "Alan Jackson",
            spotify_id: "4mxWe1mtYIYfP040G38yvS",
        },
        {
            name: "Eric Church",
            spotify_id: "2IvkS5MXK0vPGnwyJsrEyV",
        },
        {
            name: "Luke Combs",
            spotify_id: "718COspgdWOnwOFpJHRZHS",
        },
        {
            name: "Avicii",
            spotify_id: "1vCWHaC5f2uS3yhpwWbIA6",
        },
        {
            name: "Elton John",
            spotify_id: "3PhoLpVuITZKcymswpck5b",
        },
        {
            name: "Céline Dion",
            spotify_id: "4S9EykWXhStSc15wEx8QFK",
        },
    ];

    // Extract the artist IDs
    const artistsIds = artists.map((artist) => artist.spotify_id);

    // Convert the artist IDs to a string
    const artistsString = artistsIds.join(",");

    const apiResponse = await fetch(
        `https://api.spotify.com/v1/artists?ids=${artistsString}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const artistsData = await apiResponse.json();

    return new Response(JSON.stringify(artistsData));
}
