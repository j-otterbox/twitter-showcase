import "./TweetMetrics.css";

const TweetMetrics = (props) => {
  return (
    <ul className="tweet__metrics">
      <li>
        <span className="icon material-symbols-outlined">schedule</span>
        {props.data.displayDate}
      </li>
      <li>
        <span className="icon material-symbols-outlined">chat_bubble</span>
        {props.data.reply_count}
      </li>
      <li>
        <span className="icon material-symbols-outlined">autorenew</span>
        {props.data.retweet_count}
      </li>
      <li>
        <span className="icon material-symbols-outlined">favorite</span>
        {props.data.like_count}
      </li>
    </ul>
  );
};

export default TweetMetrics;
