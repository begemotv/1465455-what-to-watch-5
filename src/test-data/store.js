import configureStore from "redux-mock-store";

import {NameSpace} from "../store/reducers";
import {filmsMock, filmMock, reviewsMock} from "./film-data";
import {userMock} from "./user-data";
import {AuthorizationStatus, FILMS_INCREMENT_COUNT, DEFAULT_ID, DEFAULT_TAB} from "../const";

const configuredStore = configureStore([]);

const storeMock = configuredStore({
  [NameSpace.DATA]: {
    films: filmsMock,
    filmPromo: filmMock,
    filmReviews: reviewsMock,
    isFetching: false,
    isReviewFormBlocked: false,
  },
  [NameSpace.OPERATIONS]: {
    activeFilmId: DEFAULT_ID,
    activeFilmIdGenre: ``,
    activeGenre: `All genres`,
    activeTab: DEFAULT_TAB,
    filmCardsShownCount: FILMS_INCREMENT_COUNT,
  },
  [NameSpace.USER]: {
    activeUser: userMock,
    authorizationStatus: AuthorizationStatus.AUTH,
    filmsFavorite: filmsMock,
  }
});

export {storeMock};
