import PropTypes from 'prop-types';

export function FriendListItem(props) {
  const { id, avatar, name, isOnline } = props;
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.array,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
