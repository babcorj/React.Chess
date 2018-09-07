import React from 'react'

import start from '../assets/data/start'

const getSquare = (w, h, c) => {
    return (
        <Square
            width={w}
            height={h}
            color={c}
        />
    )
}

class Board extends React.Component {
    state = {
        width : 8,
        height : 8,
        move : 0,
        players : start
    }
    
    nextMove(id, position){
        this.setState(prev => ({
            ...prev,
           move : ++move
        }))
    }

    return(){
        <div
            id="board"
            className="board"
        >
            {() => {
                for(let i = 0; i < width; i++){
                    for(let j = 2; j < height-2; j++){
                        let color = ((i+j)) % 2 === 0 ? "white" : "black"
                        
                        getSquare(this.state.width, this.state.height, color)
                    }
                }
            }}
        </div>
    }
}

export default Board