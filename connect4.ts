/**
Connect4

Connect4 is a game where two players take turns placing a token on columns that drop to the bottom.
When a player forms 4 of his tokens in a line - horizontally, vertically,or diagonally - the player wins.

[Visualization](https://i.ebayimg.com/images/g/DzMAAOSwSjxj6m0e/s-l1600.jpg)

Implement Connect 4 with the class below.
*/
import * as readline from "readline";

function print(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

export const PLAYER_ONE = 1;
export const PLAYER_TWO = 2;

export class Connect4 {
  private _rows: number = 0;
  private _columns: number = 0;
  private _player1: number = 1;
  private _player2: number = 2;
  private _turn: number = this._player1;
  private _board: string[][] = [];
  private _error: string = "";
  private _winner: number = 0;
  private _winnerForm: string = "";
  private _player1Symbol: string = "X";
  private _player2Symbol: string = "O";

  constructor(width: number, height: number, player1: number, player2: number) {
    this._rows = width;
    this._columns = height;
    this._player1 = player1;
    this._player2 = player2;
    this._board = Array.from({ length: width }, () => Array(height).fill(""));
  }

  getPlayerTurn() {
    return this._turn;
  }

  play(col: number) {
    col -= 1;

    if (col > this._columns) {
      this._error = `Invalid column (${col})`;
      return;
    } else this._error = "";

    const row = this.getAvailableRow(col);

    if (row === -1) {
      this._error = `Full column, choose another (${col})`;
      return;
    } else this._error = "";

    this._board[row]![col] = this._turn === this._player1 ? this._player1Symbol : this._player2Symbol;

    if (this._turn === this._player1) this._turn = this._player2;
    else this._turn = this._player1;
  }

  getWinner() {
    console.info(`Player ${this._winner} won placing 4 tokens ${this._winnerForm}. Congratulations!!`);
  }

  checkWinner() {
    // check if some player has 4 tokens
    for (let i = 0; i < this._rows; i++) {
      for (let j = 0; j < this._columns; j++) {
        // check 4 tokens horizontally
        if (j < this._columns - 4) {
          if (
            this._board[i]![j] === this._player1Symbol &&
            this._board[i]![j + 1] === this._player1Symbol &&
            this._board[i]![j + 2] === this._player1Symbol &&
            this._board[i]![j + 3] === this._player1Symbol
          ) {
            this._winner = this._player1;
            this._winnerForm = "horizontally";
            return true;
          } else if (
            this._board[i]![j] === this._player2Symbol &&
            this._board[i]![j + 1] === this._player2Symbol &&
            this._board[i]![j + 2] === this._player2Symbol &&
            this._board[i]![j + 3] === this._player2Symbol
          ) {
            this._winner = this._player2;
            this._winnerForm = "horizontally";
            return true;
          }
        }

        // check 4 tokens vertically
        if (i < this._rows - 3) {
          if (
            this._board[i]![j] === this._player1Symbol &&
            this._board[i + 1]![j] === this._player1Symbol &&
            this._board[i + 2]![j] === this._player1Symbol &&
            this._board[i + 3]![j] === this._player1Symbol
          ) {
            this._winner = this._player1;
            this._winnerForm = "vertically";
            return true;
          } else if (
            this._board[i]![j] === this._player2Symbol &&
            this._board[i + 1]![j] === this._player2Symbol &&
            this._board[i + 2]![j] === this._player2Symbol &&
            this._board[i + 3]![j] === this._player2Symbol
          ) {
            this._winner = this._player2;
            this._winnerForm = "vertically";
            return true;
          }
        }

        // check 4 tokens diagonal
        if (j < this._columns - 4 && i < this._rows - 3) {
          if (
            this._board[i]![j] === this._player1Symbol &&
            this._board[i + 1]![j + 1] === this._player1Symbol &&
            this._board[i + 2]![j + 2] === this._player1Symbol &&
            this._board[i + 3]![j + 3] === this._player1Symbol
          ) {
            this._winner = this._player1;
            this._winnerForm = "diagonally";
            return true;
          } else if (
            this._board[i]![j] === this._player2Symbol &&
            this._board[i + 1]![j + 1] === this._player2Symbol &&
            this._board[i + 2]![j + 2] === this._player2Symbol &&
            this._board[i + 3]![j + 3] === this._player2Symbol
          ) {
            this._winner = this._player2;
            this._winnerForm = "diagonally";
            return true;
          }
        }
      }
    }

    console.log("\n");
    return false;
  }

  print() {
    console.clear();
    console.table(this._board);
    if (this._error) {
      console.error(this._error);
    }
  }

  private getAvailableRow(col: number) {
    for (let i = 0; i < this._rows; i++) {
      const cell = this._board[i]![col];
      if (cell !== "") return i - 1;
    }
    return this._rows - 1;
  }
}

async function main() {
  const connect4: Connect4 = new Connect4(8, 8, PLAYER_ONE, PLAYER_TWO);
  connect4.print();

  while (!connect4.checkWinner()) {
    const column = await print(`Player ${connect4.getPlayerTurn()} | Insert Column => `);
    connect4.play(Number(column));
    connect4.print();
  }

  connect4.getWinner();
}

main();
