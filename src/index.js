import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app/app";
import rootReducer from "./store/reducers";
import {requireAuthorization} from "./store/action";
import {fetchFilmList, checkAuth, fetchFilmReviews} from "./store/api-actions/api-actions";
import {AuthorizationStatus} from "./const";
import {createAPI} from "./services/api";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(fetchFilmReviews(4));

Promise.all([
  store.dispatch(fetchFilmList()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
