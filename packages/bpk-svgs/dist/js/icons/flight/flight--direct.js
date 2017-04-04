import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M21.65 12.94a1 1 0 0 0-1.41 0L18 15.17V13a8 8 0 0 0-16 0v4h2v-4a6 6 0 0 1 12 0v2.17l-2.23-2.23a1 1 0 0 0-1.41 1.41L17 19l4.65-4.65a1 1 0 0 0 0-1.41z" /></svg>;
  }

}