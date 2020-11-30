import MockAdapter from "axios-mock-adapter";

import {createAPI} from "../../../services/api";
import {filmData} from "./film-data";
import {ActionType} from "../../action";
import {filmMock, filmsMock, reviewsMock, commentMock, ratingMock} from "../../../test-data/film-data";
import {fetchFilmList, fetchPromoFilm, fetchFilmReviews, postFilmReview} from "../../api-actions/api-actions";
import {ApiRoute} from "../../../const";
import {adaptFilmToClient, adaptReviewToClient} from "../../../services/adapter";
import {filmsMockServer, filmMockServer, reviewsMockServer} from "../../../test-data/server-data";

const initialState = {
  films: [],
  filmPromo: null,
  filmReviews: [],
  isFetching: false,
  isReviewFormBlocked: false,
};

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);

const idMock = 2;

describe(`Sync operation work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmData(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update film list`, () => {
    expect(filmData({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: filmsMock,
    })).toEqual({
      films: filmsMock
    });
  });

  it(`Reducer should update promo film`, () => {
    expect(filmData({
      filmPromo: null,
    }, {
      type: ActionType.LOAD_ACTIVE_FILM_DETAILS_PROMO,
      payload: filmMock,
    })).toEqual({
      filmPromo: filmMock
    });
  });

  it(`Reducer should update film reviews`, () => {
    expect(filmData({
      filmReviews: [],
    }, {
      type: ActionType.LOAD_ACTIVE_FILM_REVIEWS,
      payload: reviewsMock,
    })).toEqual({
      filmReviews: reviewsMock
    });
  });

  it(`Reducer should update fetching status`, () => {
    expect(filmData({
      isFetching: false,
    }, {
      type: ActionType.CHANGE_FETCHING_STATUS,
      payload: true,
    })).toEqual({
      isFetching: true
    });
  });

  it(`Reducer should update review form status`, () => {
    expect(filmData({
      isReviewFormBlocked: false,
    }, {
      type: ActionType.CHANGE_REVIEW_FORM_STATUS,
      payload: true,
    })).toEqual({
      isReviewFormBlocked: true
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmList();

    apiMock
      .onGet(ApiRoute.FILMS)
      .reply(200, filmsMockServer);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: filmsMockServer.map(adaptFilmToClient),
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const dispatch = jest.fn();
    const filmPromoLoader = fetchPromoFilm();

    apiMock
      .onGet(ApiRoute.PROMO)
      .reply(200, filmMockServer);

    return filmPromoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ACTIVE_FILM_DETAILS_PROMO,
          payload: adaptFilmToClient(filmMockServer),
        });
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const dispatch = jest.fn();
    const filmReviewsLoader = fetchFilmReviews(idMock);

    apiMock
      .onGet(`${ApiRoute.COMMENTS}${idMock}`)
      .reply(200, reviewsMockServer);

    return filmReviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_ACTIVE_FILM_REVIEWS,
          payload: reviewsMockServer.map(adaptReviewToClient),
        });
      });
  });

  it(`Should post comment to film`, () => {
    const comment = commentMock;
    const rating = ratingMock;
    const dispatch = jest.fn();
    const filmReviewSubmitter = postFilmReview(idMock, comment, rating);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}${idMock}`)
      .reply(200, reviewsMock[0]);

    return filmReviewSubmitter(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });
});
