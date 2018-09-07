import React from 'react'


class Board extends React.Component {
    return(){
        <div
            id={`square-${this.props.width}-${this.props.height}`}
            className="board--square"
        >
            
        </div>
    }
}

export default Board