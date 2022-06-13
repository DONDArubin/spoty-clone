import React, { useEffect } from 'react';               // ядро
import Login from './components/Login';                           // компонент
import Slidebar from './components/Slidebar';                     // компонент
import { getAccessTokenFromUrl } from './components/spotify';
import "./styles/app.css";                                        //стили для страницы
import SpotifyWebApi from 'spotify-web-api-node';                 // API SPOTIFY
import {useDataLayerValue} from './components/DataLayer'
import Center from './components/Center';



const spotify = new SpotifyWebApi();

function App() {                                                  // запуск компонентов с синтаксисом JSX
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(() => {                                               // хук (запускает код после выполнения условия). в данном случае один раз при изменении состояния кнопки
    const hash = getAccessTokenFromUrl();                         // записываем hash url 
    window.location.hash = "";                                    // очищаем url от access token
    const _token = hash.access_token;                             //записываем access token

    if (_token) {                                                 // проверяем наличие token и устанавливаем его 
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      }); 
      
      spotify.setAccessToken(_token);                             // передаём токен в spotify api

      spotify.getMe().then(user => {                              // получаем данные о пользователе и устанавливаем его
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      
      spotify.getUserPlaylists().then((playlists) => {            // получаем данные о всех плейлистах и устанавливаем их
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });


      dispatch({                                                  // устанавливаем spotify с токеном
        type: 'SET_SPOTIFY',
        spotify: spotify,
      });
      
    }
  }, [dispatch]);                                                         // массив зависимостей. из-за [] useeffect вызывается один раз

  //console.log("user:",user);
  //console.log("token:",token)


  return (
    <div className="App">
      {                     
        token ? (                                                 // если токен определён, то загружаем следующую страницу, если нет, то отправляем регистрироваться
        <main className='main'>
          <Slidebar/>
          <Center/>
        </main>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;

