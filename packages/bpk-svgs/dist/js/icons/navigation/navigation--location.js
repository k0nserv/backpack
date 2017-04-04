import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M18.09 4.77a8.08 8.08 0 0 0-12.18 0C3.11 8 3.45 12.6 6.52 16l4.77 5.71a1 1 0 0 0 1.41 0L17.48 16c3.07-3.4 3.41-8 .61-11.23zM12 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-3a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" /><use width="48" height="48" transform="scale(.5)" xlinkHref="#a" /></svg>;
  }

}