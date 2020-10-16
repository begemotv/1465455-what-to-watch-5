const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/49/Wolfgang_Amadeus_Mozart_%281756-1791%29_-_Quaerite_primum_regnum_Dei_%C3%A04%2C_K.86_73v_%281770%29.ogg`,
      genre: `classic`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/en/7/7d/ACDC_Itsalongway.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/ru/4/44/%D0%A4%D0%B8%D0%BB%D0%B8%D0%BF%D0%BF_%D0%9A%D0%B8%D1%80%D0%BA%D0%BE%D1%80%D0%BE%D0%B2_-_%D0%90%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D0%B8%D0%B4%D0%B0.ogg`,
      genre: `crap`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/en/c/c0/IronMaidenRTTH.ogg`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `David Gilmour`,
      src: `https://upload.wikimedia.org/wikipedia/uk/1/1c/Pink_floyd_comfortably_numb.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Gnom Gnomych`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `David Gilmour`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Ricky Martin`,
    }],
  }
];
