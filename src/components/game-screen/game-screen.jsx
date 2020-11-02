import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import {GameType} from '../../const';
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";
import Mistakes from "../mistakes/mistakes";
import {ActionCreator} from "../../store/action";

import withActivePlayer from "../../hocs/with-active-player/with-active-player";

const QuestionArtistScreenHOC = withActivePlayer(QuestionArtistScreen);
const QuestionGenreScreenHOC = withActivePlayer(QuestionGenreScreen);

const GameScreen = (props) => {
  const {
    mistakes,
    onUserAnswer,
    questions,
    resetGame,
    step
  } = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/" />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <QuestionArtistScreenHOC
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionArtistScreenHOC>
      );
    case GameType.GENRE:
      return (
        <QuestionGenreScreenHOC
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </QuestionGenreScreenHOC>
      );
  }

  return <Redirect to="/" />;
};

GameScreen.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      genre: PropTypes.string,
      picture: PropTypes.string,
      artist: PropTypes.string,
    })).isRequired,
    genre: PropTypes.string,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }),
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  })).isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(question, answer));
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
