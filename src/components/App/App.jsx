import { Profile } from '../Profile/profile';
import { Statistics } from '../Statistics/statistics';
import { FriendList } from '../FriendList/friendList';
import { TransactionHistory } from '../TransactionHistory/transactionHistory';
import user from 'json_files/user.json';
import data from 'json_files/data.json';
import friends from 'json_files/friends.json';
import transactions from 'json_files/transactions.json';
import './app.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        padding: '0 15px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
