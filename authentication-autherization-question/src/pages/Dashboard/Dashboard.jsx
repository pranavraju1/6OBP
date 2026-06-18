import "./styles.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <p className="welcome-text">
          Welcome back, <strong>pranavraju@gmail.com</strong> 👋
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>1</h2>
            <p>Active Session</p>
          </div>

          <div className="stat-card">
            <h2>17 Jun 2026</h2>
            <p>Last Login</p>
          </div>

          <div className="stat-card">
            <h2>Active</h2>
            <p>Account Status</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Profile Complete</p>
          </div>
        </div>

        <button>View Profile</button>
      </div>
    </div>
  );
}

export default Dashboard;