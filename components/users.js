import Router from 'next/router'

const Users = (props) => {
  return (
    <div>
      <h1>Users</h1>
      {
        props.users.map(user => (
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-action p-4 m-2 d-flex justify-content-between align-items-center"
              key={user.id}
              onClick={e => Router.push("/user/[id]", `/user/${user.id}`)}
            >
              <div>
                <h5 style={{ fontWeight: "bold" }}>{user.first_name} {user.last_name}</h5>
                <p>{user.email}</p>
              </div>
              <img src={user.avatar} alt={user.first_name} style={{ borderRadius: "25%" }} />
            </li>
          </ul>
        ))
      }
    </div>
  );
}

export default Users