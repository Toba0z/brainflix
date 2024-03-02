import "./Header.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import flixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import buttonIcon from "../../assets/Icons/upload.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title header__title--logo">
        <NavLink to="/">
          <img src={flixLogo} alt="BrainFlix Logo" className="header__logo" />
        </NavLink>
      </h1>
      <div className="header__actions">
        <div className="header__inputNdAvatar">
          <div className="header__search">
            <img
              src={searchIcon}
              alt="BrainFlix icon"
              className="header__searchIcon"
            />
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
        <div className="header__buttonIconStyle">
          <NavLink to="/uploads">
            <button className="header__upload">UPLOAD</button>
          </NavLink>
          <img
            src={buttonIcon}
            alt="BrainFlix iconbutton"
            className="header__buttonIcon"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
