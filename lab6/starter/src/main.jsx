import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

function ErrorScreen({ message }) {
  return (
    <main className="app-shell">
      <section className="workspace-header">
        <div>
          <p className="eyebrow">Startup error</p>
          <h1>Dashboard could not load</h1>
          <p className="header-copy">{message}</p>
        </div>
      </section>
    </main>
  );
}

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <ErrorScreen message={this.state.error.message} />;
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.textContent = 'Dashboard could not load: missing root element.';
} else {
  createRoot(rootElement).render(
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  );
}
