import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M16.74 3.32A1 1 0 0 0 15 4a1 1 0 0 0 .13.5v.06L17 8h1.62l.38.38V14a1 1 0 0 1-2 0v-3a3 3 0 0 0-3-3V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16h10V10a1 1 0 0 1 1 1v3a3 3 0 0 0 6 0V7.59zM12 11H6V5h6z" /><use width="48" height="48" transform="scale(.5)" xlinkHref="#a" /></svg>;
  }

}