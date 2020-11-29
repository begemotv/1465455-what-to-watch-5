import MockAdapter from "axios-mock-adapter";

import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {filmsMock} from "../../../test-data/film-data";
import {userMock} from "../../../test-data/user-data";
import {fetchFavoriteFilmList, checkAuth, login, addToFavorites} from "../../api-actions/api-actions";
import {ApiRoute, AuthorizationStatus} from "../../../const";
import {adaptFilmToClient, adaptUserToClient} from "../../../services/adapter";
import {filmsMockServer, filmMockFavoriteServer, userMockServer} from "../../../test-data/server-data";

const initialState = {
  activeUser: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  filmsFavorite: [],
};

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);

describe(`Sync operation work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update active user data`, () => {
    expect(user({
      activeUser: null,
    }, {
      type: ActionType.CHANGE_ACTIVE_USER_DATA,
      payload: userMock,
    })).toEqual({
      activeUser: userMock
    });
  });

  it(`Reducer should check authorization`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`Reducer should update film favourites`, () => {
    expect(user({
      filmsFavorite: [],
    }, {
      type: ActionType.LOAD_FILMS_FAVORITE,
      payload: filmsMock,
    })).toEqual({
      filmsFavorite: filmsMock
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct get API call to /favorite`, () => {
    const dispatch = jest.fn();
    const filmsFavoriteLoader = fetchFavoriteFilmList();

    apiMock
      .onGet(ApiRoute.FAVORITE)
      .reply(200, filmsMockServer);

    return filmsFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS_FAVORITE,
          payload: filmsMockServer.map(adaptFilmToClient),
        });
      });
  });

  it(`Should make a correct get API call to /login`, () => {
    const dispatch = jest.fn();
    const userDataLoader = checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, userMockServer);

    return userDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_ACTIVE_USER_DATA,
          payload: adaptUserToClient(userMockServer),
        });
      });
  });

  it(`Should make a correct post API call to /login`, () => {
    const dispatch = jest.fn();
    const loginPost = login({login: `jack@daniels.com`, password: `teeto`});

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, userMock);

    return loginPost(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should add film to user favorites`, () => {
    const idMock = 2;
    const statusMock = 1;
    const dispatch = jest.fn();
    const favoritesAdd = addToFavorites(idMock, statusMock);

    apiMock
      .onPost(`${ApiRoute.FAVORITE}${idMock}/${statusMock}`)
      .reply(200, filmMockFavoriteServer);

    return favoritesAdd(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
