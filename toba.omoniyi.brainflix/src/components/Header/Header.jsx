import "./Header.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import flixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import buttonIcon from "../../assets/Icons/upload.svg";
import { NavLink } from "react-router-dom";

// Defines a Header functional component.
const Header = () => {
  // Returns JSX for rendering the header.
  return (
    <header className="header">
      {/* Title and logo part of the header */}
      <h1 className="header__title header__title--logo">
        {/* Link that redirects to the homepage when the logo is clicked */}
        <NavLink to="/">
          {/* Logo image */}
          <img src={flixLogo} alt="BrainFlix Logo" className="header__logo" />
        </NavLink>
      </h1>
      {/* Container for header actions like search and user avatar */}
      <div className="header__actions">
        {/* Container for the search input field and avatar */}
        <div className="header__inputNdAvatar">
          {/* Search input field */}
          <div className="header__search">
            {/* Search icon */}
            <img
              src={searchIcon}
              alt="BrainFlix icon"
              className="header__searchIcon"
            />
            {/* Actual search input where users can type queries */}
            <input
              type="text"
              placeholder="Search"
              className="header__input" // Note: This should be className instead of class
              id="name"
              name="searchName"
            />
          </div>
          {/* User avatar image */}
          <img src={avatarImage} alt="Avatar" className="header__avatar" />
        </div>
        {/* Container for the upload button and icon */}
        <div className="header__buttonIconStyle">
          {/* Link that redirects to the uploads page when the upload button is clicked */}
          <NavLink to="/uploads">
            {/* Upload button */}
            <button className="header__upload">UPLOAD</button>
          </NavLink>
          {/* Icon next to the upload button */}
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
