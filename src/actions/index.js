export const createBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    payload: book,
  };
};

export const removeBook = (book) => {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
  };
};
