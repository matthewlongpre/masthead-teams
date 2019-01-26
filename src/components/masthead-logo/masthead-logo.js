import React from "react";
import StyledMastheadLogo from "./masthead-logo.styles";

const MastheadLogo = (props) => (
  <StyledMastheadLogo id="masthead-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.4 59.7">
    <path fill={props.color || "#e0f3ff"} d="M1 58.2c-.7-.7-1-1.5-1-2.6V21.3c0-1 .3-1.9 1-2.6.7-.7 1.5-1.1 2.6-1.1 1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6v3.3c1.5-2.1 3.3-3.9 5.4-5.3 2.1-1.4 4.8-2.1 8.2-2.1 3 0 5.6.8 7.7 2.4 2.1 1.6 3.7 3.6 4.6 5.8 3.3-5.5 8.2-8.3 14.7-8.3 3 0 5.5.7 7.5 2.2 2 1.5 3.5 3.4 4.4 5.8 1 2.4 1.4 4.8 1.4 7.4v23.1c0 1-.4 1.9-1.1 2.6-.7.7-1.6 1-2.6 1s-1.9-.3-2.6-1c-.7-.7-1-1.5-1-2.6V34c0-3.5-.6-6-1.8-7.7-1.2-1.6-3.3-2.4-6.3-2.4-2.7 0-5 .7-6.8 2.1-1.8 1.4-3.4 3.3-4.8 5.6v24c0 1-.4 1.9-1.1 2.6-.7.7-1.6 1-2.6 1s-1.9-.3-2.6-1c-.7-.7-1-1.5-1-2.6V34c0-3.5-.6-6-1.8-7.7-1.2-1.6-3.3-2.4-6.3-2.4-2.7 0-5 .7-6.8 2.1-1.8 1.4-3.4 3.3-4.8 5.6v24c0 1-.4 1.9-1.1 2.6-.7.7-1.6 1-2.6 1-.9.1-1.8-.3-2.5-1zM72.8 58.2c-2-1-3.6-2.4-4.8-4.2-1.2-1.8-1.8-4-1.8-6.4 0-4 1.6-7.1 4.7-9.5 3.1-2.3 7.7-3.5 13.7-3.5h9.7V34c0-3.5-.9-6.1-2.6-7.6-1.7-1.5-4.4-2.3-8.1-2.3-2 0-3.8.2-5.4.5-1.5.3-3.2.8-5.2 1.4-.4.1-.8.2-1 .2-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1 0-1.4.7-2.5 2.1-3 4.5-1.9 9.2-2.9 13.9-2.9 3.7 0 6.8.7 9.3 2.2 2.5 1.5 4.4 3.4 5.6 5.8 1.2 2.4 1.8 5 1.8 7.7v22.7c0 1-.4 1.9-1.1 2.6-.7.7-1.6 1-2.6 1s-1.9-.3-2.6-1c-.7-.7-1-1.5-1-2.6v-2.1c-4 4.1-9 6.1-15.1 6.1-2.3 0-4.5-.5-6.5-1.5zm16.1-6.6c2.2-1.1 4-2.6 5.5-4.3v-6.7h-8.7c-8.1 0-12.1 2.1-12.1 6.3 0 1.9.7 3.5 2 4.6 1.3 1.2 3.5 1.8 6.5 1.8 2.3 0 4.6-.6 6.8-1.7zM108.2 56.1c-.9-.6-1.4-1.5-1.4-2.6 0-.9.3-1.6.9-2.2.6-.6 1.3-1 2.2-1 .5 0 1 .1 1.4.3 1.7.7 3.4 1.3 5.1 1.8 1.7.4 3.6.6 5.8.6 5.9 0 8.9-1.9 8.9-5.7 0-1.2-.7-2.2-2-2.8s-3.6-1.4-6.7-2.2c-3.2-.7-5.8-1.5-7.8-2.3-2.1-.8-3.8-2-5.3-3.6s-2.2-3.8-2.2-6.4c0-3.7 1.3-6.8 4-9.1s6.6-3.5 11.6-3.5c4.1 0 8 .7 11.6 2 .7.2 1.3.6 1.7 1.2.4.6.6 1.2.6 1.8 0 .9-.3 1.6-.9 2.2-.6.6-1.4 1-2.3 1-.3 0-.6-.1-1-.2-3.1-1-6.1-1.4-9.1-1.4-2.9 0-5.1.5-6.8 1.6-1.6 1-2.4 2.4-2.4 4s.7 2.8 2.2 3.5c1.5.7 3.8 1.5 7 2.2 3.2.8 5.7 1.6 7.7 2.4 2 .8 3.7 2 5.1 3.6 1.4 1.7 2.1 3.9 2.1 6.6 0 3.4-1.3 6.2-4 8.5-2.7 2.2-6.5 3.4-11.4 3.4-5.3-.1-10.2-1.3-14.6-3.7zM147.1 49.1V24.3h-5.7c-.4 0-.8-.1-1.1-.4-.3-.3-.4-.7-.4-1.1 0-.5.2-1 .7-1.4l10.9-10.7c.5-.5.9-.7 1.4-.7.4 0 .8.2 1.1.5.3.3.4.7.4 1.1V18h9.1c.9 0 1.7.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9h-9.1v24.2c0 2.1.5 3.4 1.5 4 1 .6 2.2.8 3.7.8 1.1 0 2.1-.2 3.2-.5.2-.1.4-.1.7-.2.2-.1.5-.1.9-.1.7 0 1.4.3 2 .8.6.6.9 1.2.9 2 0 1.2-.6 2.2-1.8 2.8-2.1 1-4.3 1.4-6.6 1.4-7.9.3-11.8-3.2-11.8-10.3zM172.3 58.2c-.7-.7-1-1.5-1-2.6v-52c0-1 .3-1.9 1-2.6.7-.7 1.5-1.1 2.6-1.1 1 0 1.9.4 2.6 1.1.7.7 1.1 1.6 1.1 2.6v20.9c2-2.2 4.2-4 6.6-5.4 2.3-1.3 5.1-2 8.3-2 2.9 0 5.5.7 7.7 2.1 2.2 1.4 3.8 3.3 5 5.7s1.7 5 1.7 7.9v22.8c0 1-.4 1.9-1.1 2.6-.7.7-1.6 1-2.6 1s-1.9-.3-2.6-1c-.7-.7-1-1.5-1-2.6v-22c0-6.5-2.9-9.8-8.8-9.8-2.7 0-5.1.7-7.2 2.1-2.1 1.4-4.1 3.3-6 5.6v24c0 1-.4 1.9-1.1 2.6-.7.7-1.6 1-2.6 1-1.1.2-1.9-.2-2.6-.9zM217.8 54.1c-3.7-3.7-5.5-8.9-5.5-15.7 0-3.8.7-7.3 2.1-10.5 1.4-3.2 3.5-5.8 6.4-7.8 2.9-2 6.4-3 10.7-3 4 0 7.4.9 10.3 2.8 2.9 1.8 5.1 4.3 6.6 7.4 1.5 3.1 2.2 6.4 2.2 10.1 0 1-.3 1.9-1 2.6-.7.7-1.6 1-2.7 1h-27.2c.4 3.7 1.8 6.6 4.2 8.7 2.3 2.1 5.6 3.1 9.9 3.1 2.2 0 4.2-.2 5.9-.6 1.7-.4 3.3-1 4.9-1.8.4-.2.9-.3 1.4-.3.9 0 1.6.3 2.2.9s1 1.3 1 2.2c0 1.2-.7 2.2-2.1 3-2.1 1.2-4.1 2.1-6.2 2.6-2 .6-4.6.9-7.9.9-6.4 0-11.5-1.9-15.2-5.6zm25.5-19c-.2-2.6-.8-4.8-2-6.6-1.2-1.8-2.7-3.1-4.4-3.9-1.8-.8-3.6-1.2-5.4-1.2-1.8 0-3.6.4-5.4 1.2-1.8.8-3.2 2.1-4.4 3.9-1.2 1.8-1.8 4-2 6.6h23.6zM259.5 58.2c-2-1-3.6-2.4-4.8-4.2s-1.8-4-1.8-6.4c0-4 1.6-7.1 4.7-9.5 3.1-2.3 7.7-3.5 13.7-3.5h9.7V34c0-3.5-.9-6.1-2.6-7.6-1.7-1.5-4.4-2.3-8.1-2.3-2 0-3.8.2-5.4.5-1.6.3-3.3.8-5.2 1.4-.4.1-.8.2-1 .2-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.2 0-1.4.7-2.5 2.1-3 4.5-1.9 9.2-2.9 13.9-2.9 3.7 0 6.8.7 9.3 2.2 2.5 1.5 4.4 3.4 5.6 5.8 1.2 2.4 1.8 5 1.8 7.7v22.7c0 1-.4 1.9-1.1 2.6s-1.6 1-2.6 1-1.9-.3-2.6-1c-.7-.7-1-1.5-1-2.6v-2.1c-4 4.1-9 6.1-15.1 6.1-2.3.1-4.5-.4-6.5-1.4zm16.1-6.6c2.2-1.1 4-2.6 5.5-4.3v-6.7h-8.7c-8.1 0-12.1 2.1-12.1 6.3 0 1.9.7 3.5 2 4.6 1.3 1.2 3.5 1.8 6.5 1.8 2.3 0 4.6-.6 6.8-1.7zM303 57.2c-3-1.7-5.4-4.1-7.2-7.4-1.8-3.2-2.8-7-2.8-11.3 0-4.3.9-8.1 2.8-11.3 1.8-3.2 4.2-5.7 7.2-7.4 3-1.7 6.1-2.5 9.4-2.5 5.2 0 9.8 2 13.7 6.1V3.7c0-1.1.4-1.9 1.1-2.6.7-.7 1.6-1 2.6-1s1.9.4 2.6 1.1c.7.7 1 1.6 1 2.6v52c0 1-.3 1.9-1 2.6-.7.7-1.5 1-2.6 1s-1.9-.3-2.6-1-1.1-1.5-1.1-2.6v-2.1c-3.9 4.1-8.5 6.1-13.7 6.1-3.3-.1-6.4-1-9.4-2.6zm17.4-6c2.2-1.1 4.1-2.5 5.7-4.4V30c-1.7-1.8-3.6-3.3-5.7-4.4-2.2-1.1-4.5-1.6-6.9-1.6-4 0-7.1 1.3-9.5 3.8-2.4 2.5-3.6 6.1-3.6 10.7s1.2 8.1 3.6 10.7c2.4 2.5 5.6 3.8 9.5 3.8 2.5-.1 4.8-.7 6.9-1.8z" />
  </StyledMastheadLogo>
);

export default MastheadLogo;