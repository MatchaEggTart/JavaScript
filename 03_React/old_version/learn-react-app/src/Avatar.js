function Avatar(props) {
  return (
    <img
      alt={props.user.name}
      src={props.user.avatarUrl}
      className="Avatar"
    />
  )
}

export default Avatar;
