import { Timestamp } from 'firebase/firestore';
import moment from 'moment';

export const getDateFromFirebaseTimestamp = (timestamp: Timestamp) => {
  const date = new Date(timestamp.seconds * 1000);

  return moment(date).format('MMMM Do,hh:mm A');
};
