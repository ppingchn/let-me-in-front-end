import axios from '../config/axios';

export async function listNotifications() {
  const listNotification = await axios.get('/notification');
  return listNotification.data.notifications;
}
