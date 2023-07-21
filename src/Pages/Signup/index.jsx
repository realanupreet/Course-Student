import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import signup from "../../images/signup.png";
import google from "../../images/google.png";
import facebook from "../../images/facebook.jpg";
import apple from "../../images/apple.jpg";

function Signup() {

	const [selectedButton, setSelectedButton] = useState("Option 1");

	const handleButtonClick = (buttonText) => {
		setSelectedButton(buttonText);
	};

	return (
		<div className={styles.container}>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src={signup} alt="signup" />
				</div>
				<div className={styles.right}>
					<div className={styles.heading_container}>
						<h2 className={styles.from_heading}>Join Edfling as a</h2>
					</div>
					<div className={styles.buttons_container}>
						<button
							className={
								selectedButton === "Option 1"
									? `${styles.join_button} ${styles.selected}`
									: styles.join_button
							}
							onClick={() => handleButtonClick("Option 1")}
						>
							User
						</button>
						<button
							className={
								selectedButton === "Option 2"
									? `${styles.join_button} ${styles.selected}`
									: styles.join_button
							}
							onClick={() => handleButtonClick("Option 2")}
						>
							Instructor
						</button>
						<button
							className={
								selectedButton === "Option 3"
									? `${styles.join_button} ${styles.selected}`
									: styles.join_button
							}
							onClick={() => handleButtonClick("Option 3")}
						>
							TA
						</button>
					</div>
					<h2 className={styles.fromm_heading}>Sign up</h2>
					<input type="text" className={styles.input} placeholder="Enter your Username/ Email" />
					<input type="text" className={styles.input} placeholder="Enter your Password" />
					<div>
						<span className={styles.text_span}>
							<Link to="/signup">Sign up with mobile</Link>
						</span>
						<span className={styles.text_span}>
							<Link to="/signup">Forget Password?</Link>
						</span>
					</div>

					<label className={styles.checkbox_container}>
						<input type="checkbox" className={styles.checkbox} />
						By signing up for Edfling course, you agree to <br></br>our Terms of use and Privacy Policy.
					</label>
					<button className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn}>
						<img src={google} alt="google icon" />
						<span>Continue with Google</span>
					</button>
					<button className={styles.google_btn}>
						<img src={facebook} alt="facebook icon" />
						<span>Continue with Facebook</span>
					</button>
					<button className={styles.apple_btn}>
						<img src={apple} alt="apple icon" />
						<span>Continue with Apple</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Signup;
