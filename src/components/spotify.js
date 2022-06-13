export const authUrl = "https://accounts.spotify.com/authorize";  
const redurectUri = "http://localhost:3000/";
const clientId = "0d812c3555904132ad5efbc036c80da8";
//  const clientId2 = "2f3b4427500b4f328cd6f03ab96093ac";

//отпределяется доступ к функциям spotify (область разрешенных действий)
const scopes = [
    //USER
    // "user-read-email",                  // Доступ для чтения почты пользователя
    // "user-read-private",                // Доступ для чтения сведениий о подписке 
    // "user-read-currently-playing",
    // "user-read-recently-played",
    // "user-read-playback-state",
    // "user-top-read",
    // "user-modify-playback-state",
    

    "user-read-email",                          // Доступ для чтения почты пользователя
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-read-private",                        // Доступ для чтения сведениий о подписке 
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",

    /*
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    */
]

export const getAccessTokenFromUrl = () => {            // после успешного входа в аккаунт достаём hash из получившегося url в виде объекта
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

//ссылка на авторизацию через существующий аккаунт спотифай или его регистрация 
export const loginUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${redurectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;