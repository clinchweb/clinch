import * as React from "react";
const Box = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" strokeWidth={1.5}>
      <path
        fill="currentColor"
        d="m2.695 7.185l9 4l.61-1.37l-9-4zM12.75 21.5v-11h-1.5v11zm-.445-10.315l9-4l-.61-1.37l-9 4z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 17.11V6.89a.6.6 0 0 1 .356-.548l8.4-3.734a.6.6 0 0 1 .488 0l8.4 3.734A.6.6 0 0 1 21 6.89v10.22a.6.6 0 0 1-.356.548l-8.4 3.734a.6.6 0 0 1-.488 0l-8.4-3.734A.6.6 0 0 1 3 17.11"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.5 4.5l8.644 3.842a.6.6 0 0 1 .356.548v3.61"
      ></path>
    </g>
  </svg>
);
export default Box;
