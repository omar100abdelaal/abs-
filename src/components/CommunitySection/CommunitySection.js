import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './CommunitySection.css';
import image1 from '../../images/google.png';

export const CommunitySection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/page2');
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/page2');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="community-section">
      <div className="benefits-section">
        <h2 className="title">
          Get more benefits<br />
          by Sign Up & Join<br />
          Mejiwoo Community!
        </h2>
        <ul className="benefits-list">
          <li>♦ FREE Special Gift to a new member</li>
          <li>♦ Get 2x JIWOO Points to purchase items</li>
          <li>♦ Get special voucher code every month</li>
          <li>♦ Claim Voucher Disc. Up To 50%</li>
        </ul>
      </div>

      {/* Vertical line divider */}
      <div className="vertical-line"></div>

      <div className="form-section">
        <input
          className="form-input"
          placeholder="Full Name"
        />
        <input
          className="form-input"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button" onClick={signIn}>Sign In</button>
        <div className="separator">Or</div>
        <button className="google-button" onClick={signInWithGoogle}>
          <img src={image1} alt="Google" /> Sign Up With Google
        </button>
      </div>
    </div>
  );
};