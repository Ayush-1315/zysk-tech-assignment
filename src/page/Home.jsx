import avatar2 from "../assets/avatar2.png";
import heroImage from "../assets/hero-section.png";
import faq from "../assets/faq.png";

import { CompanyList } from "../components/CompanyList/CompanyList";
import { FAQComponent } from "../components/FAQComponent/FAQComponent";
import { BlogCard } from "../components/BlogCard/BlogCard";

import {blogs, questions} from "../data/data";

const Home = () => {
  return (
    <div className="container">
     
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
        <div className="hero-container">
          <img src={heroImage} alt="hero-image" className="hero-image" />
        </div>
      </section>
      <CompanyList />
      <section className="feature-section">
        <div>
          <span>Features</span>
          <h1>Analytics that feels like it’s from the future</h1>
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="feature-container">
          <div className="feature">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17280_802)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="9.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M20.0944 24.2288C20.0322 23.8282 20 23.4179 20 23C20 18.5817 23.6052 15 28.0526 15C32.4999 15 36.1052 18.5817 36.1052 23C36.1052 23.9981 35.9213 24.9535 35.5852 25.8345C35.5154 26.0175 35.4804 26.109 35.4646 26.1804C35.4489 26.2512 35.4428 26.301 35.4411 26.3735C35.4394 26.4466 35.4493 26.5272 35.4692 26.6883L35.8717 29.9585C35.9153 30.3125 35.9371 30.4895 35.8782 30.6182C35.8266 30.731 35.735 30.8205 35.6211 30.8695C35.4911 30.9254 35.3146 30.8995 34.9617 30.8478L31.7765 30.3809C31.6101 30.3565 31.527 30.3443 31.4512 30.3448C31.3763 30.3452 31.3245 30.3507 31.2511 30.3661C31.177 30.3817 31.0823 30.4172 30.893 30.4881C30.0097 30.819 29.0524 31 28.0526 31C27.6344 31 27.2237 30.9683 26.8227 30.9073M21.6316 35C24.5965 35 27 32.5376 27 29.5C27 26.4624 24.5965 24 21.6316 24C18.6667 24 16.2632 26.4624 16.2632 29.5C16.2632 30.1106 16.3603 30.6979 16.5395 31.2467C16.6153 31.4787 16.6532 31.5947 16.6657 31.6739C16.6786 31.7567 16.6809 31.8031 16.6761 31.8867C16.6714 31.9668 16.6514 32.0573 16.6113 32.2383L16 35L18.9948 34.591C19.1583 34.5687 19.24 34.5575 19.3114 34.558C19.3865 34.5585 19.4264 34.5626 19.5001 34.5773C19.5701 34.5912 19.6742 34.6279 19.8823 34.7014C20.4306 34.8949 21.0191 35 21.6316 35Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17280_802"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17280_802"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17280_802"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <h3>Share team inboxes</h3>
            <p>
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="feature">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17280_810)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="9.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M27 15L18.0935 25.6879C17.7446 26.1064 17.5702 26.3157 17.5676 26.4925C17.5653 26.6461 17.6337 26.7923 17.7533 26.8889C17.8907 27 18.1632 27 18.708 27H26L25 35L33.9065 24.3121C34.2554 23.8936 34.4298 23.6843 34.4324 23.5075C34.4347 23.3539 34.3663 23.2077 34.2467 23.1111C34.1093 23 33.8368 23 33.292 23H26L27 15Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17280_810"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17280_810"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17280_810"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Deliver instant answers</h3>
            <p>
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <div className="feature">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17280_818)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="9.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M25 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V26M26 21H30V25M29.5 16.5V15M33.4393 17.5607L34.5 16.5M34.5103 21.5H36.0103M17 26.3471C17.6519 26.4478 18.3199 26.5 19 26.5C23.3864 26.5 27.2653 24.3276 29.6197 21"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17280_818"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17280_818"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17280_818"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Manage your team with reports</h3>
            <p>
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <div className="feature">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17280_827)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="9.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M22.9996 27C22.9996 27 24.3121 28.5 26.4996 28.5C28.6871 28.5 29.9996 27 29.9996 27M29.2496 22H29.2596M23.7496 22H23.7596M26.4996 33C31.194 33 34.9996 29.1944 34.9996 24.5C34.9996 19.8056 31.194 16 26.4996 16C21.8052 16 17.9996 19.8056 17.9996 24.5C17.9996 25.45 18.1555 26.3636 18.443 27.2166C18.5512 27.5376 18.6053 27.6981 18.6151 27.8214C18.6247 27.9432 18.6174 28.0286 18.5873 28.1469C18.5568 28.2668 18.4894 28.3915 18.3547 28.6408L16.7191 31.6684C16.4857 32.1002 16.3691 32.3161 16.3952 32.4828C16.4179 32.6279 16.5034 32.7557 16.6288 32.8322C16.7728 32.9201 17.0169 32.8948 17.5052 32.8444L22.6262 32.315C22.7813 32.299 22.8588 32.291 22.9295 32.2937C22.999 32.2963 23.0481 32.3029 23.1159 32.3185C23.1848 32.3344 23.2714 32.3678 23.4448 32.4345C24.3928 32.7998 25.4228 33 26.4996 33ZM29.7496 22C29.7496 22.2761 29.5258 22.5 29.2496 22.5C28.9735 22.5 28.7496 22.2761 28.7496 22C28.7496 21.7239 28.9735 21.5 29.2496 21.5C29.5258 21.5 29.7496 21.7239 29.7496 22ZM24.2496 22C24.2496 22.2761 24.0258 22.5 23.7496 22.5C23.4735 22.5 23.2496 22.2761 23.2496 22C23.2496 21.7239 23.4735 21.5 23.7496 21.5C24.0258 21.5 24.2496 21.7239 24.2496 22Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17280_827"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17280_827"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17280_827"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Connect with customers</h3>
            <p>
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <div className="feature">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17280_835)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="9.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M23 22V19C23 17.3431 21.6569 16 20 16C18.3431 16 17 17.3431 17 19C17 20.6569 18.3431 22 20 22H23ZM23 22V28M23 22H29M23 28V31C23 32.6569 21.6569 34 20 34C18.3431 34 17 32.6569 17 31C17 29.3431 18.3431 28 20 28H23ZM23 28H29M29 28H32C33.6569 28 35 29.3431 35 31C35 32.6569 33.6569 34 32 34C30.3431 34 29 32.6569 29 31V28ZM29 28V22M29 22V19C29 17.3431 30.3431 16 32 16C33.6569 16 35 17.3431 35 19C35 20.6569 33.6569 22 32 22H29Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17280_835"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17280_835"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17280_835"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Connect the tools you already use</h3>
            <p>
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="feature">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17280_843)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="9.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M34.9996 24.5C34.9996 29.1944 31.194 33 26.4996 33C25.4228 33 24.3928 32.7998 23.4448 32.4345C23.2714 32.3678 23.1848 32.3344 23.1159 32.3185C23.0481 32.3029 22.999 32.2963 22.9295 32.2937C22.8588 32.291 22.7813 32.299 22.6262 32.315L17.5052 32.8444C17.0169 32.8948 16.7728 32.9201 16.6288 32.8322C16.5034 32.7557 16.4179 32.6279 16.3952 32.4828C16.3691 32.3161 16.4857 32.1002 16.7191 31.6684L18.3547 28.6408C18.4894 28.3915 18.5568 28.2668 18.5873 28.1469C18.6174 28.0286 18.6247 27.9432 18.6151 27.8214C18.6053 27.6981 18.5512 27.5376 18.443 27.2166C18.1555 26.3636 17.9996 25.45 17.9996 24.5C17.9996 19.8056 21.8052 16 26.4996 16C31.194 16 34.9996 19.8056 34.9996 24.5Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.4965 21.9493C25.5968 20.9104 24.0965 20.631 22.9692 21.5822C21.842 22.5335 21.6833 24.124 22.5685 25.2491C23.117 25.9461 24.4935 27.2191 25.4616 28.087C25.8172 28.4057 25.995 28.5651 26.2084 28.6293C26.3914 28.6844 26.6017 28.6844 26.7847 28.6293C26.9981 28.5651 27.1759 28.4057 27.5315 28.087C28.4996 27.2191 29.8761 25.9461 30.4246 25.2491C31.3098 24.124 31.1705 22.5235 30.0238 21.5822C28.8772 20.641 27.3963 20.9104 26.4965 21.9493Z"
                  stroke="#344054"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_17280_843"
                  x="0"
                  y="0"
                  width="52"
                  height="52"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_17280_843"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17280_843"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h3>Our people make the difference</h3>
            <p>
              We’re an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>
        <div className="feature-message">
          <svg
            width="142"
            height="40"
            viewBox="0 0 142 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.583374"
              y="16"
              width="7.99999"
              height="7.99999"
              fill="#079455"
            />
            <rect
              x="24.5833"
              y="24"
              width="8"
              height="7.99999"
              transform="rotate(180 24.5833 24)"
              fill="#067647"
            />
            <path d="M8.58347 16L16.5835 8V16L8.58347 24V16Z" fill="#ABEFC6" />
            <path
              d="M16.5833 24L8.58336 32L8.58336 24L16.5833 16L16.5833 24Z"
              fill="#75E0A7"
            />
            <path
              d="M0.583374 16L16.5833 0V7.99999L8.58336 16H0.583374Z"
              fill="#47CD89"
            />
            <path
              d="M24.5833 24L8.58336 40L8.58336 32L16.5834 24L24.5833 24Z"
              fill="#17B26A"
            />
            <path
              d="M42.0067 28.5667C40.7467 28.5667 39.5256 28.3878 38.3434 28.0301C37.1767 27.6723 36.2512 27.1978 35.5667 26.6067L36.6167 24.2501C37.2856 24.779 38.1023 25.2145 39.0667 25.5567C40.0467 25.8834 41.0267 26.0467 42.0067 26.0467C43.22 26.0467 44.1223 25.8523 44.7134 25.4634C45.32 25.0745 45.6234 24.5612 45.6234 23.9234C45.6234 23.4567 45.4523 23.0756 45.11 22.7801C44.7834 22.469 44.3634 22.2278 43.85 22.0567C43.3367 21.8856 42.6367 21.6912 41.75 21.4734C40.5056 21.1778 39.4945 20.8823 38.7167 20.5867C37.9545 20.2912 37.2934 19.8323 36.7334 19.2101C36.1889 18.5723 35.9167 17.7167 35.9167 16.6434C35.9167 15.7412 36.1578 14.9245 36.64 14.1934C37.1378 13.4467 37.8767 12.8556 38.8567 12.4201C39.8523 11.9845 41.0656 11.7667 42.4967 11.7667C43.4923 11.7667 44.4723 11.8912 45.4367 12.1401C46.4012 12.389 47.2334 12.7467 47.9334 13.2134L46.9767 15.5701C46.2612 15.1501 45.5145 14.8312 44.7367 14.6134C43.9589 14.3956 43.2045 14.2867 42.4734 14.2867C41.2756 14.2867 40.3812 14.489 39.79 14.8934C39.2145 15.2978 38.9267 15.8345 38.9267 16.5034C38.9267 16.9701 39.09 17.3512 39.4167 17.6467C39.7589 17.9423 40.1867 18.1756 40.7 18.3467C41.2134 18.5178 41.9134 18.7123 42.8 18.9301C44.0134 19.2101 45.0089 19.5056 45.7867 19.8167C46.5645 20.1123 47.2256 20.5712 47.77 21.1934C48.33 21.8156 48.61 22.6556 48.61 23.7134C48.61 24.6156 48.3612 25.4323 47.8634 26.1634C47.3812 26.8945 46.6423 27.4778 45.6467 27.9134C44.6512 28.349 43.4378 28.5667 42.0067 28.5667Z"
              fill="#101828"
            />
            <path
              d="M51.3379 15.8734H54.2545V28.3334H51.3379V15.8734ZM52.8078 13.8201C52.279 13.8201 51.8356 13.6567 51.4779 13.3301C51.1201 12.9878 50.9412 12.5678 50.9412 12.0701C50.9412 11.5723 51.1201 11.1601 51.4779 10.8334C51.8356 10.4912 52.279 10.3201 52.8078 10.3201C53.3367 10.3201 53.7801 10.4834 54.1378 10.8101C54.4956 11.1212 54.6745 11.5178 54.6745 12.0001C54.6745 12.5134 54.4956 12.949 54.1378 13.3067C53.7956 13.649 53.3523 13.8201 52.8078 13.8201Z"
              fill="#101828"
            />
            <path
              d="M61.9326 28.4967C60.9215 28.4967 59.9338 28.3645 58.9693 28.1001C58.0049 27.8356 57.2349 27.5012 56.6593 27.0967L57.7793 24.8801C58.3393 25.2534 59.0082 25.5567 59.786 25.7901C60.5793 26.0078 61.3571 26.1167 62.1193 26.1167C63.8615 26.1167 64.7326 25.6578 64.7326 24.7401C64.7326 24.3045 64.5071 24.0012 64.056 23.8301C63.6204 23.659 62.9126 23.4956 61.9326 23.3401C60.906 23.1845 60.066 23.0056 59.4126 22.8034C58.7749 22.6012 58.2149 22.2512 57.7326 21.7534C57.266 21.2401 57.0326 20.5323 57.0326 19.6301C57.0326 18.4478 57.5226 17.5067 58.5026 16.8067C59.4982 16.0912 60.836 15.7334 62.516 15.7334C63.3715 15.7334 64.2271 15.8345 65.0826 16.0367C65.9382 16.2234 66.6382 16.4801 67.1826 16.8067L66.0626 19.0234C65.0049 18.4012 63.8149 18.0901 62.4926 18.0901C61.6371 18.0901 60.9837 18.2223 60.5326 18.4867C60.0971 18.7356 59.8793 19.0701 59.8793 19.4901C59.8793 19.9567 60.1126 20.2912 60.5793 20.4934C61.0615 20.6801 61.8004 20.859 62.796 21.0301C63.7915 21.1856 64.6082 21.3645 65.246 21.5667C65.8837 21.769 66.4282 22.1112 66.8793 22.5934C67.346 23.0756 67.5793 23.7601 67.5793 24.6467C67.5793 25.8134 67.0737 26.7467 66.0626 27.4467C65.0515 28.1467 63.6749 28.4967 61.9326 28.4967Z"
              fill="#101828"
            />
            <path
              d="M81.5299 15.8734L75.6966 29.3367C75.1521 30.6901 74.491 31.639 73.7132 32.1834C72.9355 32.7434 71.9943 33.0234 70.8899 33.0234C70.2677 33.0234 69.6532 32.9223 69.0466 32.7201C68.4399 32.5178 67.9421 32.2378 67.5532 31.8801L68.7199 29.7334C68.9999 29.9978 69.3266 30.2078 69.6999 30.3634C70.0888 30.519 70.4777 30.5967 70.8666 30.5967C71.3799 30.5967 71.7999 30.4645 72.1266 30.2001C72.4688 29.9356 72.7799 29.4923 73.0599 28.8701L73.2699 28.3801L67.8332 15.8734H70.8666L74.7866 25.0901L78.7299 15.8734H81.5299Z"
              fill="#101828"
            />
            <path
              d="M90.2595 15.7334C91.4728 15.7334 92.5539 15.9978 93.5028 16.5267C94.4672 17.0556 95.2217 17.8023 95.7661 18.7667C96.3106 19.7312 96.5828 20.8434 96.5828 22.1034C96.5828 23.3634 96.3106 24.4834 95.7661 25.4634C95.2217 26.4278 94.4672 27.1745 93.5028 27.7034C92.5539 28.2323 91.4728 28.4967 90.2595 28.4967C88.5795 28.4967 87.2495 27.9367 86.2695 26.8167V32.8601H83.3528V15.8734H86.1295V17.5067C86.6117 16.9156 87.2028 16.4723 87.9028 16.1767C88.6184 15.8812 89.4039 15.7334 90.2595 15.7334ZM89.9328 26.0001C91.0061 26.0001 91.885 25.6423 92.5695 24.9267C93.2695 24.2112 93.6195 23.2701 93.6195 22.1034C93.6195 20.9367 93.2695 19.9956 92.5695 19.2801C91.885 18.5645 91.0061 18.2067 89.9328 18.2067C89.2328 18.2067 88.6028 18.3701 88.0428 18.6967C87.4828 19.0078 87.0395 19.459 86.7128 20.0501C86.3861 20.6412 86.2228 21.3256 86.2228 22.1034C86.2228 22.8812 86.3861 23.5656 86.7128 24.1567C87.0395 24.7478 87.4828 25.2067 88.0428 25.5334C88.6028 25.8445 89.2328 26.0001 89.9328 26.0001Z"
              fill="#101828"
            />
            <path
              d="M106.419 15.7334C107.99 15.7334 109.25 16.1923 110.199 17.1101C111.148 18.0278 111.622 19.389 111.622 21.1934V28.3334H108.706V21.5667C108.706 20.4778 108.449 19.6612 107.936 19.1167C107.422 18.5567 106.691 18.2767 105.742 18.2767C104.669 18.2767 103.821 18.6034 103.199 19.2567C102.577 19.8945 102.266 20.8201 102.266 22.0334V28.3334H99.3489V11.0201H102.266V17.3201C102.748 16.8067 103.339 16.4178 104.039 16.1534C104.754 15.8734 105.548 15.7334 106.419 15.7334Z"
              fill="#101828"
            />
            <path
              d="M127.386 15.8734V28.3334H124.609V26.7467C124.142 27.3067 123.559 27.7423 122.859 28.0534C122.159 28.349 121.404 28.4967 120.596 28.4967C118.931 28.4967 117.617 28.0378 116.652 27.1201C115.703 26.1867 115.229 24.8101 115.229 22.9901V15.8734H118.146V22.5934C118.146 23.7134 118.394 24.5534 118.892 25.1134C119.406 25.6578 120.129 25.9301 121.062 25.9301C122.104 25.9301 122.929 25.6112 123.536 24.9734C124.158 24.3201 124.469 23.3867 124.469 22.1734V15.8734H127.386Z"
              fill="#101828"
            />
            <path
              d="M135.054 28.4967C134.043 28.4967 133.055 28.3645 132.091 28.1001C131.127 27.8356 130.357 27.5012 129.781 27.0967L130.901 24.8801C131.461 25.2534 132.13 25.5567 132.908 25.7901C133.701 26.0078 134.479 26.1167 135.241 26.1167C136.983 26.1167 137.854 25.6578 137.854 24.7401C137.854 24.3045 137.629 24.0012 137.178 23.8301C136.742 23.659 136.034 23.4956 135.054 23.3401C134.028 23.1845 133.188 23.0056 132.534 22.8034C131.897 22.6012 131.337 22.2512 130.854 21.7534C130.388 21.2401 130.154 20.5323 130.154 19.6301C130.154 18.4478 130.644 17.5067 131.624 16.8067C132.62 16.0912 133.958 15.7334 135.638 15.7334C136.493 15.7334 137.349 15.8345 138.204 16.0367C139.06 16.2234 139.76 16.4801 140.304 16.8067L139.184 19.0234C138.127 18.4012 136.937 18.0901 135.614 18.0901C134.759 18.0901 134.105 18.2223 133.654 18.4867C133.219 18.7356 133.001 19.0701 133.001 19.4901C133.001 19.9567 133.234 20.2912 133.701 20.4934C134.183 20.6801 134.922 20.859 135.918 21.0301C136.913 21.1856 137.73 21.3645 138.368 21.5667C139.005 21.769 139.55 22.1112 140.001 22.5934C140.468 23.0756 140.701 23.7601 140.701 24.6467C140.701 25.8134 140.195 26.7467 139.184 27.4467C138.173 28.1467 136.797 28.4967 135.054 28.4967Z"
              fill="#101828"
            />
          </svg>
          <div className="feature-avatar">
            <h1>
              We’ve been using Untitled to kick start every new project and
              can’t imagine working without it.
            </h1>
            <img src={avatar2} alt="avatar" />
            <span>Candice Wu</span>
            <p>Product Manager, Sisyphus</p>
          </div>
        </div>
      </section>
      <section className="frequently-asked-questions">
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about the product and billing.</p>

        <div className="faq-container">
          {questions.map((question, index) => (
            <FAQComponent key={index} {...question} />
          ))}
        </div>
        <div className="faq-footer">
          <img src={faq} alt="faq-avatar" />
          <h3>Still have questions?</h3>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button>Get in touch</button>
        </div>
      </section>
      <section className="blogs-section">
        <div>
          <div>
          <span>Our blog</span>
          <span>View all posts</span>
          </div>
          <div>
            <h2>Lastest blog posts</h2>
            <p>Tool and strategies modern teams need to help their companies grow.</p>
          </div>
        </div>
        <div className="blogs-container">
          {blogs.map((blog,index)=><BlogCard key={index} {...blog}/>)}
        </div>
      </section>
      <div className="trial-section">
        <h2>Start your free trial</h2>
        <p>Join over 4,000+ startups already growing with Untitled.</p>
        <div className="trial-navigations">
          <span>Learn more</span>
          <span>Get started</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
