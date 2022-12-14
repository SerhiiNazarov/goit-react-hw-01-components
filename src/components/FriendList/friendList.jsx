import { FriendListItem } from './friendListItem';
import PropTypes from 'prop-types';
import './frienList.css';

export function FriendList(props) {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(friend => FriendListItem(friend))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
