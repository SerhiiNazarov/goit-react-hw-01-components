import PropTypes from 'prop-types';
import './frienList.css';

export function FriendListItem(props) {
  const { id, avatar, name, isOnline } = props;
  return (
    <li className="friendList-item" key={id}>
      {isOnline ? (
        <span className="status"></span>
      ) : (
        <span className="status status-OffLine"></span>
      )}

      <img
        className="friendList-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friendList-name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.array,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
