import React from 'react';
import {Image} from 'react-konva';
import useImage from 'use-image';

const Piece = (props) =>{
    /**
     * imageUrl
     * color
     * id
     * -color of player
     * -whether or not it's your turn
     * if this player's turn, color of this player is the same color as this piece, 
     *  then we can make this piece draggable / moveable
     */
    const choiceOfColor = props.isWhite ? 0 : 1
    const [image] = useImage(props.imgurls[choiceOfColor]);
    const isDragged = props.id === props.draggedPieceTargetId

    const canThisPieceEvenBeMovedByThisPlayer = props.isWhite === props.thisPlayersColorIsWhite
    const isItThatPlayersTurn = props.playerTurnToMoveIsWhite === props.thisPlayersColorIsWhite
    
    const thisWhiteKingInCheck = props.id === "wk1" && props.whiteKingInCheck
    const thisBlackKingInCheck = props.id === "bk1" && props.blackKingInCheck
    
    return <Image image={image}
        x = {props.x - 90}
        y = {props.y - 90}
        draggable = {canThisPieceEvenBeMovedByThisPlayer && isItThatPlayersTurn}
        width = {isDragged ? 75 : 60}
        height = {isDragged ? 75 : 60}
        onDragStart = {props.onDragStart}
        onDragEnd = {props.onDragEnd}
        fill = {(thisWhiteKingInCheck && "red") || (thisBlackKingInCheck && "red")}
        id = {props.id}
        />;
};
export default Piece;