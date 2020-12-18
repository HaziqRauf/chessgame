import React from 'react';
import {useParams} from 'react-router-dom';
const socket = require('../Connections/socket').socket;

/**
 * Join game is where we actually join the game room.
 */

 const JoinGameRoom = (gameid, userName, isCreator) =>{
     /**
      * For this browser instance, we want
      * to join it to a game room, for now 
      * assume that the game room exists 
      * on the backend
      * 
      * TODO: handle the case when the game room does not exists 
      */
     const idData = {
         gameId: gameid,
         userName: userName,
         isCreator: isCreator
     }
     socket.emit("playerJoinGame", idData)
 }

 const JoinGame = (props) =>{
     /**
      * Extract the ' game id' from the URL
      * the 'game id' is the gameRoom ID
      */
     const {gameid} = useParams()
     JoinGameRoom(gameid, props.userName, props.isCreator)
     return <div>
         <h1 style ={{textAlign:"center"}}>Welcome to the Chess my friend!</h1>
     </div>
 }
 export default JoinGame;