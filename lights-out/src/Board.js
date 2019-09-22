import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.2
  }

  constructor(props) {
    super(props);

    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    const {nrows, ncols, chanceLightStartsOn} = this.props;
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < nrows; y++) {
      let rows = [];
      for (let x = 0; x < ncols; x++) {
        rows.push(Math.random() < chanceLightStartsOn)
      }
      board.push(rows);
    }

    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x)
    flipCell(y-1, x)
    flipCell(y+1, x)
    flipCell(y, x-1)
    flipCell(y, x+1)

    let hasPlayerWon = board.every(rows => rows.every(cell => cell===true));

    console.log(hasPlayerWon);
    this.setState({
      board:board, 
      hasWon:hasPlayerWon
    });
  }


  /** Render game board or winning message. */

  render() {
    const {nrows, ncols} = this.props;
    let gameBoard = []

    for (let y= 0; y < nrows; y++) {
      let rows = [];
      for (let x = 0; x < ncols; x++) {
        let coord = `${y}-${x}`;
        rows.push(
          <Cell 
            isLit={this.state.board[y][x]}
            key={coord}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />);
      }
      gameBoard.push(<tr key={y}>{rows}</tr>)
    }

    if (this.state.hasWon) {
      return <div className="winner"><h1>Congratulations! You Won</h1></div>
    } else {

    return (
      <div>
        <h1>Lights Out Game</h1>
        <table className="Board">
          <tbody>{gameBoard}</tbody>
        </table>
      </div>
    )
    }
  }
}


export default Board;
