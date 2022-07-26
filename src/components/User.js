function Header(props) {
  return (
    <section className="user">
      <h2>Welcome, {props.user.name}!</h2>
      {/* <p>{props.user.age}</p> */}
      <div>Your favorite movies/ shows: {props.children}</div>
    </section>
  );
}
 
export default Header;