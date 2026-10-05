const apps = [
  'File Manager',
  'Terminal',
  'Text Editor',
  'Settings',
  'System Monitor',
];

export default function App() {
  return (
    <div className="os-shell">
      <div className="boot-screen">
        <div className="boot-logo">ALASKA OS 2</div>
        <div className="boot-progress">
          <span />
        </div>
      </div>

      <div className="desktop">
        <header className="topbar">
          <div className="brand">Alaska</div>
          <div className="status">
            <span>05:42</span>
            <span>Online</span>
          </div>
        </header>

        <main className="workspace">
          <aside className="sidebar">
            <h3>Applications</h3>
            <ul>
              {apps.map((app) => (
                <li key={app}>{app}</li>
              ))}
            </ul>
          </aside>

          <section className="desktop-area">
            <div className="welcome-card">
              <p className="eyebrow">System ready</p>
              <h1>Web OS foundation is live</h1>
              <p>
                Next steps: desktop shell, window manager, file system, and app lifecycle.
              </p>
            </div>
          </section>
        </main>

        <footer className="taskbar">
          <button>Start</button>
          <div className="taskbar-apps">
            <span>Terminal</span>
            <span>Browser</span>
          </div>
          <div className="taskbar-clock">05:42</div>
        </footer>
      </div>
    </div>
  );
}
