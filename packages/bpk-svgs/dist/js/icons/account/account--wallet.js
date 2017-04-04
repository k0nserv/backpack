import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M21 11h-8v6h8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-5 5a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm-4 2h9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h17v2H5a1 1 0 0 0 0 2h16v2h-9z" /></svg>;
  }

}