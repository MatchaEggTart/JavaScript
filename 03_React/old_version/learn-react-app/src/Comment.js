import UserInfo from "./UserInfo";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function Comment() {
  return (
    <div className="Comment">
      <UserInfo user={comment.author}/>
      <div className="Comment-text">
	{comment.text}
      </div>
      <div className="Comment-date">
	{comment.date.toLocaleDateString()}
      </div>
    </div>
  )
}

export default Comment;
