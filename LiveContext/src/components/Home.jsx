// Home.jsx (or any deeply nested component)
import useUser from '../contexts/User';

function Home() {
  const { user, setUser } = useUser();

  return (
    <div>
      <h1>Hello, {user ? user.name : "Guest"}</h1>
      <button onClick={() => setUser({ name: "Rahul" })}>
        Login as Rahul
      </button>
      <button onClick={() => setUser(null)}>
        Logout
      </button>
    </div>
  );
}

export default Home;