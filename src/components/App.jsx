import { Profile } from './profile';
import { Statistics } from './statistics';
import { FriendList } from './friendList';
import { TransactionHistory } from './transactionHistory';
import user from '../json_files/user.json';
import data from '../json_files/data.json';
import friends from '../json_files/friends.json';
import transactions from '../json_files/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
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
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
