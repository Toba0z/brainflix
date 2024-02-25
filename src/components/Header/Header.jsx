import "./Header.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import flixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import  searchIcon from "../../assets/Icons/search.svg";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title header__title--logo">
        <a href="../../App.jsx">
          <img src={flixLogo} alt="BrainFlix Logo" className="header__logo" />
        </a>
      </h1>
      <div className="header__actions">
        <div className="header__inputNdAvatar">
          <div className="header__search">
          {/* <img src={searchIcon} className="header__searchIcon" /> */}
            <input
              type="text"
              placeholder="Search"
              class="header__input"
              id="name"
              name="searchName"
            />
          </div>
          <img src={avatarImage} alt="Avatar" className="header__avatar" />
        </div>
        <button className="header__upload">UPLOAD</button>
      </div>
    </header>
  );
};

export default Header;
