// import
//
import { Profile } from './Profile/profile';
import user from '../data/user.json';
//
// import { Statistics } from './Statistics/statistics';
// import user from '../data/data.json';
// //
// import { FriendList } from './FriendList/friendList';
// import user from '../data/friends.json';
// //
// import { TransactionHistory } from './TransactionHistory/transactionHistory';
// import user from '../data/transactions.json'
//
//export const app
export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </div>
  );
};