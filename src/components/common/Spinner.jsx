import { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>Loading ....</div>
      </div>
    );
  }
}
