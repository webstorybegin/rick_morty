import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: "#098545",
    fontSize: 40,
    marginTop: 20,
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 700
  }
})

export const Navbar = () => {
  const styles = useStyles();

  return (
    <Link to="/" className={styles.link}>
      <h1>Rick and Morty</h1>
    </Link>
  )
}