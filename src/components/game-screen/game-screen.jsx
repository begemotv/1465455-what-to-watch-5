import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import {GameType} from '../../const';
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };

    this.handleAnswerClick = this._handleAnswerClick.bind(this);
  }

  _handleAnswerClick() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <QuestionArtistScreen
            question={question}
            onAnswer={this.handleAnswerClick}
          />
        );
      case GameType.GENRE:
        return (
          <QuestionGenreScreen
            question={question}
            onAnswer={this.handleAnswerClick}
          />
        );
    }

    return <Redirect to="/" />;
  }

}

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
  })).isRequired
};

export default GameScreen;
