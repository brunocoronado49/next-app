import fetch from 'isomorphic-fetch'
import Container from '../components/container'
import Users from '../components/users'

function Index(props) {
  return (
    <Container>
      <Users users={props.users}/>
    </Container>
  )
}

Index.getInitialProps = async ctx => {
  const res = await fetch("https://reqres.in/api/users")
  const resJSON = await res.json()
  return {
    users: resJSON.data
  }
}

export default Index