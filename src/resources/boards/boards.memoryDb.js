const { Board, Column } = require('./boards.model');

const dbBoards = [
  new Board({
    title: 'board1',
    columns: [
      new Column({ title: 'column1', order: 0 }),
      new Column({ title: 'column2', order: 1 }),
      new Column({ title: 'column3', order: 2 })
    ]
  }),
  new Board({
    title: 'board2',
    columns: [
      new Column({ title: 'column4', order: 0 }),
      new Column({ title: 'column5', order: 1 }),
      new Column({ title: 'column6', order: 2 })
    ]
  })
];

const getAllBoard = async () => dbBoards.slice(0);

const getBoard = async id => dbBoards.filter(board => board.id === id)[0];

const createBoard = async board => {
  const newBoard = new Board({
    title: board.title,
    columns: []
  });
  for (const column of board.columns) {
    newBoard.columns.push(new Column(column));
  }
  dbBoards.push(newBoard);
  return newBoard;
};

const updateBoard = async (id, board) => {
  const boardIndex = dbBoards.findIndex(i => i.id === id);
  if (boardIndex === -1) return;
  const currentBoard = await getBoard(id);
  for (const column of board.columns) {
    if (!column.id) return;
    const currentColumn = currentBoard.columns.find(
      col => col.id === column.id
    );
    if (!currentColumn) continue;
    currentColumn.title = column.title;
    currentColumn.order = column.order;
  }
  currentBoard.id = board.id;
  currentBoard.title = board.title;
  return board;
};

const deleteBoard = async id => {
  const boardIndex = dbBoards.findIndex(board => board.id === id);
  if (boardIndex === -1) return;

  dbBoards.splice(boardIndex, 1);
  return true;
};

module.exports = {
  getAllBoard,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard
};
