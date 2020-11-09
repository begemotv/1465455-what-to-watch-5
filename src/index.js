import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import App from "./components/app/app";

const MainMovieData = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014

};

ReactDOM.render(
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
    document.querySelector(`#root`)
);
