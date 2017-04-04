import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M14.6 17.5l3.8-4a2.28 2.28 0 0 0 0-3.08l-3.8-4a1.55 1.55 0 0 0-2.1-.1 1.53 1.53 0 0 0-.1 2.09l1.9 2H6.5A1.7 1.7 0 0 0 5 12a1.53 1.53 0 0 0 1.5 1.49h7.8l-1.9 2a1.27 1.27 0 0 0-.4 1 1.59 1.59 0 0 0 .5 1.09 1.46 1.46 0 0 0 2.1-.08z" /></svg>;
  }

}