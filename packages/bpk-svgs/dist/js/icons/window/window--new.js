import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M12.52 11.29a1 1 0 0 0 1.41 0L19 6.23V9a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.4l-4.88 4.88a1 1 0 0 0 0 1.41zM19 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7v2H5v12h12v-7h2" /><use width="48" height="48" transform="scale(.5)" xlinkHref="#a" /></svg>;
  }

}