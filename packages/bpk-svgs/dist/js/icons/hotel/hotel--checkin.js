import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M19 4v2h-4V4H9v2H5V4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V10h14zM8 5H6V3h2zm10 0h-2V3h2zm-7 11H7v-4h4z" /></svg>;
  }

}