import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<Link to="/">
					<li className={styles.logo}>NOTICEBOARD</li>
				</Link>
				<Link to="/create-notice">
					<li className={styles.CreateNotice}>Create a Notice</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;