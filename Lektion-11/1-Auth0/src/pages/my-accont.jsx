import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function MyAccountPage() {


  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
export default withAuthenticationRequired(MyAccountPage, {
  onRedirecting: () => <p>Loading...</p>
})