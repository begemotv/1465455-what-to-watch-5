import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import App from "./components/app/app";
||||||| 26e337e
import App from "./components/app/app";
=======
import {createStore} from "redux";
import {Provider} from "react-redux";
>>>>>>> ee660ffdecdc90dda74bb9322862d801d49f6796

import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
<<<<<<< HEAD
    <App
      title={MainMovieData.title} genre={MainMovieData.genre} releaseYear={MainMovieData.releaseYear}
    />,
=======
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
>>>>>>> 3e39f65b14999c75186ea351aa625f32717198cd
||||||| 26e337e
    <App
      title={MainMovieData.title} genre={MainMovieData.genre} releaseYear={MainMovieData.releaseYear}
    />,
=======
    <Provider store={store}>
      <App
        films={films} reviews={reviews}
      />
    </Provider>,
>>>>>>> ee660ffdecdc90dda74bb9322862d801d49f6796
    document.querySelector(`#root`)
);

