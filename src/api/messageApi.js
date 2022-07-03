import axios from '../config/axios';

//room chat for keep list person in room 1:1 chat
export async function listChatRooms() {
  const listRoom = await axios.get('/chatRoom');
  return listRoom.data;
}
export async function createChatRoom(firstUserId, secondUserId) {
  const rooms = await axios.post('/chatRoom', { firstUserId, secondUserId });
  return rooms.data.chatRoom;
}

export async function deleteChatRoom(chatRoomId) {
  const chatroom = await axios.post(`/chatRoom/${chatRoomId}`);
  return true;
}

//chat Msg for show the text
export async function listChatMsg(chatRoomId) {
  const listMsg = await axios.get(`/chatMessage/chatRoom/${chatRoomId}`);
  return listMsg.data;
}
export async function createChatMsg(chatRoomId, message) {
  const msg = await axios.post(`/chatMessage/chatRoom/${chatRoomId}`, {
    message,
  });

  return msg.data.chatMessage;
}
export async function deleteChatMsg(chatMessageId) {
  const deleteMsg = await axios.post(`/chatMessage/${chatMessageId}`);
  return true;
}
