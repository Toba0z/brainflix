import "./Header.scss";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import flixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import buttonIcon from "../../assets/Icons/upload.svg";
// Define the Header functional component
const Header = () => {
  // Render method returning JSX
  return (
    // The main container for the header, using the "header" class for styling
    <header className="header">
      {/* Header title which also serves as the logo container */}
      <h1 className="header__title header__title--logo">
        {/* Link wrapping the logo image for navigation or home redirection */}
        <a href="../../App.jsx">
          {/* Logo image */}
          <img src={flixLogo} alt="BrainFlix Logo" className="header__logo" />
        </a>
      </h1>
      {/* Container for actionable items like search and avatar */}
      <div className="header__actions">
        {/* Container for the search input and avatar image */}
        <div className="header__inputNdAvatar">
          {/* Search input container */}
          <div className="header__search">
            {/* Search icon */}
            <img
              src={searchIcon}
              alt="BrainFlix icon"
              className="header__searchIcon"
            />
            {/* Search input field */}
            <input
              type="text"
              placeholder="Search"
              class="header__input" // Note: "class" should be "className" in JSX
              id="name"
              name="searchName"
            />
          </div>
          {/* Avatar image */}
          <img src={avatarImage} alt="Avatar" className="header__avatar" />
        </div>
        {/* Container for the upload button and its icon */}
        <div className="header__buttonIconStyle">
          {/* Upload button */}
          <button className="header__upload">UPLOAD</button>
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

// Export the Header component for use in other parts of the application
export default Header;
