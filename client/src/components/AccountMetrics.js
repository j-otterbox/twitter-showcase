import "./AccountMetrics.css";

const AccountMetrics = (props) => {
  return (
    <ul
      className={`tweet__account-metrics ${
        props.page === "search" ? "xs" : ""
      }`}
    >
      <li>Joined {props.data.joinDate}</li>
      <li>{props.data.followers_count} Following</li>
      <li>{props.data.following_count} Followers</li>
      <li>{props.data.tweet_count} Tweets</li>
    </ul>
  );
};

export default AccountMetrics;
