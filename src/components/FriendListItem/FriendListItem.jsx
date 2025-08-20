import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div className={css.friendCard}>
      <img src={friend.avatar} alt="Avatar" />
      <p className={css.name}>{friend.name}</p>
      <p
        className={`${css.same} ${friend.isOnline ? css.online : css.offline}`}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
