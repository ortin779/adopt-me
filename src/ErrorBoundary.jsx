import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ hasError: false, redirect: true });
      }, 5000);
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(errorInfo);
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }
    if (this.state.hasError) {
      return (
        <div>
          Something went wrong, please try again or go to{" "}
          <Link to="/">Home</Link>
        </div>
      );
    }

    return this.props.children;
  }
}
