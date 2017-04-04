import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M19.89 17.7l-7-13.3a1 1 0 0 0-1.7 0l-7 13.3A1 1 0 0 0 5 19.11h14a1 1 0 0 0 .89-1.41zM12 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 1 1 2 0z" /><use width="48" height="48" transform="scale(.5)" xlinkHref="#a" /></svg>;
  }

}