import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><circle cx="12.016" cy="4" r="2" /><path d="M15.353 12l.363-2.7c.2-1.2-.8-2.3-2-2.3h-.7l-.754 3.771c-.054.269-.438.269-.492 0L11.016 7h-.7c-1.2 0-2.1 1.1-2 2.3L8.68 12h6.673zM19 15H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm-4.854 7H9.904c-.504 0-.932-.371-1.003-.87L8.025 15h8l-.876 6.13c-.071.499-.498.87-1.003.87z" /></svg>;
  }

}