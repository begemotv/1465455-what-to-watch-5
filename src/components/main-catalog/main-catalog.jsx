import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import GenreList from "../genre-list/genre-list";
import FilmList from "../film-list/film-list";
import {getFilmsToShow, getHasMoreFilmsStatus} from "../../store/selectors";
import LoadMoreButton from "../load-more-button/load-more-button";
import {incrementfilmCardsShownCount} from "../../store/action";

const MainCatalog = () => {
  const filmsToShow = useSelector(getFilmsToShow);
  const hasMoreFilms = useSelector(getHasMoreFilmsStatus);

  const dispatch = useDispatch();
  const incrementCardCount = useCallback(() => {
    dispatch(incrementfilmCardsShownCount());
  }, [dispatch]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <FilmList films={filmsToShow} />
      {
        hasMoreFilms
          && <LoadMoreButton onShowMoreButtonClick={incrementCardCount} />
      }
    </section>
  );
};

export default MainCatalog;
