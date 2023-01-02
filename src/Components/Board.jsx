import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {

    // renderSquare(i){
    //     return (
    //         <Square 
    //             value={this.props.squares[i]}
    //             onClick={() => this.props.onClick(i)}
    //         />
    //     );
    // }

    render(){
        return (
            <div>
                <div>
                    <Square 
                        value={this.props.squares[0]}
                        onClick={() => this.props.onClick(0)}
                    />
                    <Square 
                        value={this.props.squares[1]}
                        onClick={() => this.props.onClick(1)}
                    />
                    <Square 
                        value={this.props.squares[2]}
                        onClick={() => this.props.onClick(2)}
                    />
                </div>
                <div> 
                    <Square 
                        value={this.props.squares[3]}
                        onClick={() => this.props.onClick(3)}
                    />
                    <Square 
                        value={this.props.squares[4]}
                        onClick={() => this.props.onClick(4)}
                    />
                    <Square 
                        value={this.props.squares[5]}
                        onClick={() => this.props.onClick(5)}
                    />
                </div>
                <div>
                    <Square 
                        value={this.props.squares[6]}
                        onClick={() => this.props.onClick(6)}
                    />
                    <Square 
                        value={this.props.squares[7]}
                        onClick={() => this.props.onClick(7)}
                    />
                    <Square 
                        value={this.props.squares[8]}
                        onClick={() => this.props.onClick(8)}
                    />
                </div>
            </div>
        )
    }
}


export default Board;