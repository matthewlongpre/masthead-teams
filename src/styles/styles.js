import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const S = {};

S.Global = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Segoe UI Light", arial, sans-serif;
  }

  html, body, #root {
    height: 100vh;
    font-size: 16px;
  }

  body {
    background: #181818;
    color: #fafafa;
    overflow-x: hidden;
    margin: 0;
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

const textOverflowEllipsis = `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  max-width: 100%;
`;

const muted = `
  opacity: 0.8;
`;

const maxWidth = `
  max-width: 1200px;
`;

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const w100 = `
  width: 100%;
`;

const w100vw = `
  width: 100vw;
`;

const h100vh = `
  height: 100vh;
`;

S.Logo = styled.img`
  height: 60px;
`;

S.Header = styled.header`
  ${flexCenter}

  width: 100%;
  margin: auto;
  padding: 0 22px 0 0;
  flex-direction: column;
  flex: 0 0 200px;
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
    background: #202020;
    border: 0;
    color: #fff;

    i {
      margin-right: 5px;
    }
    
  }
`;

S.Main = styled.main`
  flex: 1 1 calc(100% - 200px);
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
    background-color: #202020;
  }


`;

S.Container = styled.div`

  ${maxWidth}
  ${flexCenter}

  width: 100%;
  height: 100%;
  flex-direction: column;
  min-width: 320px;
  position: relative;
  margin: auto;
  padding: 20px;
`;

S.Background = styled.div`
  background: #181818;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -5px;
  right: 0;
`;

S.Tile = styled.div`

  ${flexCenter}

  position: relative;
  flex: 1 0 24%;
  max-width: calc(33.3333vw - 20px);
  justify-content: center;
  color: #fafafa;
  border: 0;
  background: #202020;
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
  margin: 5px;
  padding: 10px;
  transition: 0.3s all ease-in-out;
  overflow: hidden;
  text-decoration: none;

  &:before {
    content: '';
    padding-top: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }

`;

S.Items = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  max-height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  background: rgba(255, 255, 255, 0.025);

  i {
    font-size: 1em;
    position: relative;s
    top: 2px;
  }

`;


export default S;
