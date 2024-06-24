import './MyProfile.css';

export const MyProfile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">My Profile</h1>
      <img
        src="https://img-9gag-fun.9cache.com/photo/aVvX70d_700bwp.webp"
        alt="Profile"
        className="profile__avatar"
      />
      <h2 className="profile__username">Sirbu Nicolae</h2>
      <p className="profile__bio">
        My name is Sîrbu Nicolae, I am a front-end developer,I am from Moldova,
        Balti city. I specialize in creating interactive web applications that
        are user-friendly and enjoyable to use.
      </p>
      <div className="profile__contact">
        <p>Email: ksirbu519@gmail.com</p>
        <p>Phone: +37361036921</p>
      </div>
    </div>
  );
};
