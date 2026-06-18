import "./styles.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          P
        </div>

        <h1>My Profile</h1>

        <div className="profile-info">
          <div className="info-row">
            <span>Email</span>
            <p>pranav@gmail.com</p>
          </div>

          <div className="info-row">
            <span>Joined</span>
            <p>17 June 2026</p>
          </div>

          <div className="info-row">
            <span>Status</span>
            <p>Active</p>
          </div>
        </div>

        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;