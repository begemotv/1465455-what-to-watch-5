import {filmOperations} from "./film-operations";
import {ActionType} from "../../action";
import {activeGenreMock} from "../../../test-data/film-data";
import {DEFAULT_ID, DEFAULT_TAB, FILMS_INCREMENT_COUNT} from "../../../const";

const initialState = {
  activeFilmId: DEFAULT_ID,
  activeFilmIdGenre: ``,
  activeGenre: `All genres`,
  activeTab: DEFAULT_TAB,
  filmCardsShownCount: FILMS_INCREMENT_COUNT,
};

describe(`Sync operation work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmOperations(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update active film id`, () => {
    expect(filmOperations({
      activeFilmId: DEFAULT_ID,
    }, {
      type: ActionType.CHANGE_ACTIVE_FILM_ID,
      payload: 5,
    })).toEqual({
      activeFilmId: 5
    });
  });

  it(`Reducer should update active film id genre`, () => {
    expect(filmOperations({
      activeFilmIdGenre: ``,
    }, {
      type: ActionType.CHANGE_ACTIVE_FILM_GENRE,
      payload: `Action`,
    })).toEqual({
      activeFilmIdGenre: `Action`
    });
  });

  it(`Reducer should update active genre`, () => {
    expect(filmOperations({
      activeGenre: activeGenreMock,
    }, {
      type: ActionType.CHANGE_TAB_GENRE,
      payload: `Action`,
    })).toEqual({
      activeGenre: `Action`
    });
  });

  it(`Reducer should update active tab`, () => {
    expect(filmOperations({
      activeTab: DEFAULT_TAB,
    }, {
      type: ActionType.CHANGE_ACTIVE_TAB,
      payload: `Details`,
    })).toEqual({
      activeTab: `Details`
    });
  });

  it(`Reducer should update film cards count`, () => {
    expect(filmOperations({
      filmCardsShownCount: FILMS_INCREMENT_COUNT,
    }, {
      type: ActionType.INCREMENT_FILM_CARDS_SHOWN_COUNT,
      payload: FILMS_INCREMENT_COUNT,
    })).toEqual({
      filmCardsShownCount: FILMS_INCREMENT_COUNT + FILMS_INCREMENT_COUNT
    });
  });

  it(`Reducer should reset film cards count`, () => {
    expect(filmOperations({
      filmCardsShownCount: 16,
    }, {
      type: ActionType.RESET_FILM_CARDS_SHOWN_COUNT,
      payload: FILMS_INCREMENT_COUNT,
    })).toEqual({
      filmCardsShownCount: FILMS_INCREMENT_COUNT
    });
  });

  it(`Reducer should reset active tab`, () => {
    expect(filmOperations({
      activeTab: `Details`,
    }, {
      type: ActionType.RESET_ACTIVE_TAB,
      payload: DEFAULT_TAB,
    })).toEqual({
      activeTab: DEFAULT_TAB
    });
  });
});
