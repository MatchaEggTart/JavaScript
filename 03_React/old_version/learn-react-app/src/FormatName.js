const user = {
  firstName: 'Harpez',
  lastName: 'Perez'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <div className="FormatName">
    <h2>{formatName(user)}</h2>
    <span>1 + 2 = {1 + 2}</span>
  </div>
)

function FormatName() {
  return element;
}

export default FormatName;
