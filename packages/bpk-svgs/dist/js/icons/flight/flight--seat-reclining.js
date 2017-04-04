import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M9 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm6.77 12l1.33 4.1a1.5 1.5 0 0 0 1.4 1 .9.9 0 0 0 .5-.1 1.55 1.55 0 0 0 .9-2l-2-6H13l-2-4H8.52a1 1 0 0 0-.92 1.39l1.88 4.39A2 2 0 0 0 11.32 16zm-5.1 2a3 3 0 0 1-2.54-1.41L4.77 9H2.58l3.74 8.46.06.11A5 5 0 0 0 10.67 20H15v-2z" /></svg>;
  }

}