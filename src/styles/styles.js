import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
import layout from "./layout";

const S = {};

S.Global = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
    font-size: 16px;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem
  }

  body, input, textarea, select, button, a {
    font-family: 'Segoe UI', Tahoma, Helvetica, Sans-Serif;
  }

  .font-sm {
    font-size: 66%;
  }

  .w-100vw {
    width: 100vw;
  }

  .h-100vh {
    height: 100vh;
  }

  .masthead-enter {
    transform: translate3d(100%, 0, 0px);
    opacity: 0;
  }

  .masthead-enter.masthead-enter-active {
    transform: translate3d(0%, 0, 0px);
    opacity: 1;
    transition: transform 300ms ease-out, opacity 300ms ease-out;
  }

  .masthead-exit {
    transform: translate3d(0%, 0, 0px);
    opacity: 1;
  }

  .masthead-exit.masthead-exit-active {
    transform: translate3d(100%, 0, 0px);
    opacity: 0;
    transition: transform 300ms ease-in, opacity 300ms ease-in;
  }

`

const textOverflowEllipsis = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  max-width: 100%;
  line-height: 1.4;
`;

const muted = css`
  opacity: ${({ theme }) => theme["gray-02"]};
`;

const maxWidth = css`
  max-width: 1200px;
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Logo = styled.img`
  height: 60px;
`;

S.Header = styled.header`
  ${flexCenter}
  ${maxWidth}

  width: 100%;
  margin: auto;
  padding: 0 22px 0 0;
  flex-direction: column;
  flex: 0 0 ${layout["header-height"]};
  justify-content: space-around;

`;

S.HeaderRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

S.MenuTitle = styled.div`
  width: 100%;
  min-height: 60px;

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    background: ${({ theme }) => theme["bg-01"]};
    border: 0;
    color: ${({ theme }) => theme["fg-01"]};
    box-shadow: ${layout["box-shadow-01"]};

    i {
      margin-right: 5px;
    }
    
  }
`;

S.Main = styled.main`
  ${maxWidth}

  flex: 1 1 calc(100% - ${layout["header-height"]});
  display: flex;
  position: relative;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent;
  }
  
  &::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: ${({ theme }) => theme["bg-01"]};
  }

`;

S.Container = styled.div`

  ${flexCenter}

  background: ${({ theme }) => theme["bg-02"]};
  color: ${({ theme }) => theme["fg-01"]};

  width: 100%;
  height: 100%;
  flex-direction: column;
  min-width: 320px;
  position: relative;
  margin: auto;
  padding: 20px;
`;

S.Background = styled.div`
  background: ${({ theme }) => theme["bg-02"]};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -5px;
  right: 0;
`;

const tile = css`

  ${flexCenter}

  position: relative;
  flex: 1 0 24%;
  max-width: calc(33.3333vw - 20px);
  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-radius: 2px;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  margin: 5px;
  padding: 10px;
  transition: 0.3s all ease-in-out;
  overflow: hidden;
  text-decoration: none;
  box-shadow: ${layout["box-shadow-01"]};

  color: ${({ theme }) => theme["fg-01"]};
  background: ${({ theme }) => theme["tile-bg"]};
  border-color: ${({ theme }) => theme["tile-border"]};

  &:before {
    content: '';
    padding-top: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

`;

S.TileLink = styled.a`
  ${tile}
`;

S.TileButton = styled.button`
  ${tile}  
`;

S.Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`;

S.Item = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  align-items: center;
`;

S.Icon = styled.i`
  font-size: calc(24px + (64 - 24) * ((100vw - 300px) / (1600 - 300)));
  margin-bottom: 20px;
`;

S.Title = styled.div`
  ${textOverflowEllipsis}
`;

S.SubItems = styled.div`

  ${textOverflowEllipsis}
  ${muted}

  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.66em;
  padding: 1em;
  background: ${({ theme }) => theme["gray-96"]};
  width: 100%;
  text-align: right;

  i {
    font-size: 1em;
    position: relative;s
    top: 2px;
  }

  display: none;

  @media (min-width: 640px) {
    display:block;
  }

`;

S.Search = styled.div`

  width: 100%;

  .react-autosuggest__container {
    position: relative;
    width: 100%;
    padding: 0 0 0 20px;
  }

  .react-autosuggest__input {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    background: ${({ theme }) => theme["input-bg"]};
    color: ${({ theme }) => theme["input-fg"]};
    border-width: 1px;
    border-style: solid;
    border-radius: ${layout["border-radius"]};
    border-color: ${({ theme }) => theme["input-border"]};

    &::placeholder {
      color: ${({ theme }) => theme["input-placeholder"]};
    }
  }

  .react-autosuggest__suggestions-container {
    position: absolute;
    top: 40px;
    width: calc(100% - 20px);
    max-height: 33vh;
    z-index: 1200;
    background: ${({ theme }) => theme["bg-01"]};
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: ${layout["box-shadow-02"]};
    border-radius: ${layout["border-radius"]};
  }

  .react-autosuggest__suggestions-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .react-autosuggest__suggestion {
    padding: 0px;
  }

  .react-autosuggest__suggestions-list a, .react-autosuggest__suggestions-list button {
    color: ${({ theme }) => theme["fg-01"]};
    text-decoration: none;
    display: flex;
    background: 0;
    border: 0;
    font-size: 1rem;
    text-align: left;
    width: 100%;
    padding: 20px 20px 20px 10px;
    transition: 0.3s all ease-in-out;
  }

  .react-autosuggest__suggestions-list a:hover, .react-autosuggest__suggestions-list button:hover {
    cursor: pointer;
    background: ${({ theme }) => theme["bg-02"]};
  }

  .suggestion-icon {
    display: flex;
    justify-content: center;
    flex-basis: 50px;
    min-width: 50px;
  }

  .suggestion-text {
    max-width: calc(100% - 60px);
    .text-overflow {
      ${textOverflowEllipsis}
    }
  }

`;

export default S;
