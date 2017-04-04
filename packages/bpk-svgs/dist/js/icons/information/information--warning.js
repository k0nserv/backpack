import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M21.85 19.24l-8.79-16.6a1.2 1.2 0 0 0-2.12 0l-8.79 16.6A1.2 1.2 0 0 0 3.21 21h17.58a1.2 1.2 0 0 0 1.06-1.76zM12 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5a1 1 0 0 1-2 0V8a1 1 0 1 1 2 0z" /><use width="48" height="48" transform="scale(.5)" xlinkHref="#a" /></svg>;
  }

}