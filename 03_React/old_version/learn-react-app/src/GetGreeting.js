const user = {
  firstName: 'Harpez',
  lastName: 'Perez'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)} !</h1>
  }
  return <h1>Hello, Stranger !</h1>
}

function GetGreeting() {
  return (
    <div className="GetGreeting">
      {getGreeting(user)}
    </div>
  )
}

export default GetGreeting;
