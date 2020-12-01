import {DEFAULT_ID, DEFAULT_TAB, FILMS_INCREMENT_COUNT, AuthorizationStatus} from '../const';
import {filmMock, filmsMock, reviewsMock, userMock, activeGenreMock} from '../test-data/film-data';
import {ActionType, changeActiveFilmId, changeActiveFilmGenre, changeActiveTab, changeTabGenre, changeActiveUserData, changeReviewFormStatus, changeFetchingStatus, incrementfilmCardsShownCount, loadFilms, loadFilmsFavorite, requireAuthorization, redirectToRoute, loadfilmReviews, loadfilmPromo, resetfilmCardsShownCount, resetActiveTab} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creators for changing active film id returns correct action`, () => {
    expect(changeActiveFilmId(4)).toEqual({
      type: ActionType.CHANGE_ACTIVE_FILM_ID,
      payload: 4,
    });
  });

  it(`Action creators for changing active film genre returns correct action`, () => {
    expect(changeActiveFilmGenre(activeGenreMock)).toEqual({
      type: ActionType.CHANGE_ACTIVE_FILM_GENRE,
      payload: activeGenreMock,
    });
  });

  it(`Action creators for changing active film tab returns correct action`, () => {
    expect(changeActiveTab(DEFAULT_ID)).toEqual({
      type: ActionType.CHANGE_ACTIVE_TAB,
      payload: DEFAULT_ID,
    });
  });

  it(`Action creators for changing active film genre tab returns correct action`, () => {
    expect(changeTabGenre(activeGenreMock)).toEqual({
      type: ActionType.CHANGE_TAB_GENRE,
      payload: activeGenreMock,
    });
  });

  it(`Action creators for changing active user data returns correct action`, () => {
    expect(changeActiveUserData(userMock)).toEqual({
      type: ActionType.CHANGE_ACTIVE_USER_DATA,
      payload: userMock,
    });
  });

  it(`Action creators for changing review form status returns correct action`, () => {
    expect(changeReviewFormStatus(true)).toEqual({
      type: ActionType.CHANGE_REVIEW_FORM_STATUS,
      payload: true,
    });
  });

  it(`Action creators for changing fetch status returns correct action`, () => {
    expect(changeFetchingStatus(true)).toEqual({
      type: ActionType.CHANGE_FETCHING_STATUS,
      payload: true,
    });
  });

  it(`Action creators for incrementing film cards count returns correct action`, () => {
    expect(incrementfilmCardsShownCount()).toEqual({
      type: ActionType.INCREMENT_FILM_CARDS_SHOWN_COUNT,
      payload: FILMS_INCREMENT_COUNT,
    });
  });

  it(`Action creators for loading films returns correct action`, () => {
    expect(loadFilms(filmsMock)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: filmsMock,
    });
  });

  it(`Action creators for loading favourite films returns correct action`, () => {
    expect(loadFilmsFavorite(filmsMock)).toEqual({
      type: ActionType.LOAD_FILMS_FAVORITE,
      payload: filmsMock,
    });
  });

  it(`Action creators for requiring authorization returns correct action`, () => {
    expect(requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creators for redirecting to route returns correct action`, () => {
    expect(redirectToRoute(filmMock.videoSrc)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: filmMock.videoSrc,
    });
  });

  it(`Action creators for loading film reviews returns correct action`, () => {
    expect(loadfilmReviews(reviewsMock)).toEqual({
      type: ActionType.LOAD_ACTIVE_FILM_REVIEWS,
      payload: reviewsMock,
    });
  });

  it(`Action creators for loading promo film returns correct action`, () => {
    expect(loadfilmPromo(filmMock)).toEqual({
      type: ActionType.LOAD_ACTIVE_FILM_DETAILS_PROMO,
      payload: filmMock,
    });
  });

  it(`Action creators for reseting film cards count returns correct action`, () => {
    expect(resetfilmCardsShownCount()).toEqual({
      type: ActionType.RESET_FILM_CARDS_SHOWN_COUNT,
      payload: FILMS_INCREMENT_COUNT,
    });
  });

  it(`Action creators for reseting active film tab returns correct action`, () => {
    expect(resetActiveTab()).toEqual({
      type: ActionType.RESET_ACTIVE_TAB,
      payload: DEFAULT_TAB,
    });
  });
});
