const WelcomeMessage = ({ handleGetPostClick }) => {
  return (
    <center className="m-3">
      <h1>There are no Posts</h1>
      <button className="btn btn-primary" onClick={handleGetPostClick}>
        Fetch Posts from server
      </button>
    </center>
  );
};
export default WelcomeMessage;
