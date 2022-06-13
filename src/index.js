import React from 'react';
import ReactDOM from 'react-dom/client';  //вложение компонента react в приложение index.html 
import App from './App';                  //компонент
import {DataLayer} from './components/DataLayer';    
import reducer, {initialState} from './components/Reducer';    
import { RecoilRoot } from 'recoil';        // устанавливаем, для каких компонентов нужно использовать Recoil(передачу данных)

const container = document.getElementById('root');  //блок, куда мы будем складывать компонент
const root = ReactDOM.createRoot(container);

root.render(
    <DataLayer initialState={initialState} reducer = {reducer}>
        <RecoilRoot>   
            <App />
        </RecoilRoot>
    </DataLayer>
);


