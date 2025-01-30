import { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkLogin, thunkSignup } from "../../redux/session";
import { useNavigate } from "react-router-dom";
import "./AuthFormPage.css"; // If you have a specific style

function AuthFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSignup, setIsSignup] = useState(false);  // Track if the user is signing up or logging in

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup && password !== confirmPassword) {
      return setErrors({
        confirmPassword: "Confirm Password must match Password",
      });
    }

    const response = isSignup
      ? await dispatch(thunkSignup({ email, username, password }))
      : await dispatch(thunkLogin({ email, password }));

    if (response) {
      setErrors(response);
    } else {
      navigate("/dashboard");  // Redirect to dashboard on success
    }
  };

  return (
    <div className="auth-form-container">
      <h1>{isSignup ? "Sign Up" : "Log In"}</h1>

      {errors.length > 0 && errors.map((msg, idx) => <p key={idx}>{msg}</p>)}

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}

        {isSignup && (
          <>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            {errors.username && <p>{errors.username}</p>}
          </>
        )}

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}

        {isSignup && (
          <>
            <label>
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </>
        )}

        <button type="submit">{isSignup ? "Sign Up" : "Log In"}</button>
      </form>

      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
}

export default AuthFormPage;
