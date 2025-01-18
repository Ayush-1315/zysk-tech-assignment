import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import heroImage from "../assets/hero-section.png";
const Home = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li className="nav-options">
            <img src={logo} alt="zysk-logo" />
          </li>
          <li className="nav-options">Home</li>
          <li className="nav-options">Products</li>
          <li className="nav-options">Resources</li>
          <li className="nav-options">Pricing</li>
        </ul>
        <span className="avatar-contianer">
          <img src={avatar} alt="avatar" />
        </span>
      </nav>
      <section className="hero-sections">
        <div className="feature">
          <span>New Feature</span>
          <span>
            Check out the team dashboard{" "}
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833336 6.00016H10.1667M10.1667 6.00016L5.5 1.3335M10.1667 6.00016L5.5 10.6668"
                stroke="#E63F3A"
                stroke-opacity="0.6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <h1>Beautiful analytics to grow smarter</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div>
          <button>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.49999 18.3332C14.1024 18.3332 17.8333 14.6022 17.8333 9.99984C17.8333 5.39746 14.1024 1.6665 9.49999 1.6665C4.89762 1.6665 1.16666 5.39746 1.16666 9.99984C1.16666 14.6022 4.89762 18.3332 9.49999 18.3332Z"
                stroke="#344054"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.41666 7.47095C7.41666 7.07321 7.41666 6.87434 7.49978 6.76332C7.57221 6.66657 7.68308 6.60603 7.80364 6.59742C7.94198 6.58754 8.10926 6.69508 8.44383 6.91016L12.3777 9.43905C12.668 9.62569 12.8131 9.719 12.8633 9.83766C12.9071 9.94134 12.9071 10.0583 12.8633 10.162C12.8131 10.2807 12.668 10.374 12.3777 10.5606L8.44383 13.0895C8.10926 13.3046 7.94198 13.4121 7.80364 13.4023C7.68308 13.3936 7.57221 13.3331 7.49978 13.2364C7.41666 13.1253 7.41666 12.9265 7.41666 12.5287V7.47095Z"
                stroke="#344054"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Demo
          </button>
          <button>Sign Up</button>
        </div>
        <div>
            <img src={heroImage} alt="hero=image" />
        </div>
        <div className="compainies-list">
            <p>Join 4,000+ companies already growing</p>
            <div className="company-container">
              <div>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84975 34.1503 0 22 0C9.84971 0 0 9.84975 0 22C0 34.1503 9.84971 44 22 44ZM28.8632 10.2485C29.1973 9.06186 28.0457 8.36015 26.994 9.10944L12.3124 19.5685C11.1718 20.3811 11.3512 22 12.5819 22H16.448V21.9701H23.9828L17.8433 24.1363L15.1368 33.7515C14.8027 34.9382 15.9542 35.6399 17.006 34.8906L31.6876 24.4315C32.8282 23.619 32.6487 22 31.4181 22H25.5553L28.8632 10.2485Z" fill="#155EEF"/>
</svg>jsdfggsdkjfjk

              </div>
            </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
