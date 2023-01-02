import React, { Component } from 'react';
import Board from './Board';
import "./Game.styles.css"

class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill("---"),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
        ]
        for (let i=0; i < lines.length; i++ ){
            const [a,b,c] = lines[i];
            if (squares[a] !== "---" && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i] !== "---") return;
        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState(
            {
             history: history.concat([{
                squares: squares
             }]),
             stepNumber: history.length,
             xIsNext: !this.state.xIsNext,
            }
        );
    }



    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);
        let status;
        if (winner) {
            status = `Winner:  ${winner}`; 
        } else {
            status = `Next player: ${this.state.xIsNext? 'X' : '0'}`;
        }

        const moves = history.map((step, move) => {
            const desc = move ?
            'Go to move #' + move :
            'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => this.handleClick(i)} 
                    />
                </div>
                <div className="game-info">
                    <div className="game-status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>

        )

    }
}



export default Game;