import { Link } from 'react-router';
import classes from './NotFound.module.css';

function NotFound() {
  return (
    <div className={classes.root}>
      <span className={classes.code}>404</span>
      <p className={classes.message}>There is nothing here.</p>
      <Link to="/" className={classes.homeLink}>
        Take me home
      </Link>
    </div>
  );
}

export default NotFound;
