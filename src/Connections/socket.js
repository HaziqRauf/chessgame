//const io = require('socket.io-client')
import io from 'socket.io-client';
const URL = 'localhost or your domain'

const socket = io(URL)

var mySocketId

socket.on('createNewGame', statusUpdate=>{
    console.log('A new game has been created! Username: ' +statusUpdate.userName+ ", Game id: " +statusUpdate.gameId + ", Socket id:" +statusUpdate.mySocketId)
    mySocketId = statusUpdate.mySocketId
})

export {
    socket,
    mySocketId
}