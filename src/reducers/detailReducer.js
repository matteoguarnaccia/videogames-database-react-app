const initalState = { game: {}, screen: {} };

const detailReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
