const Header = () => {

  function changeBg() {
    let navbar = document.querySelector(".navbar-container");
    let scrollValue = window.scrollY;
    if (scrollValue < 700) {
      navbar.classList.remove("bgColor");
    } else {
      navbar.classList.add("bgColor");
    }
  }
  window.addEventListener("scroll", changeBg);
  
  return (
    <>
      <header>
        <nav className="navbar-container">
          <div className="logo">
            <img src="./img/logo.png" alt="band" />
          </div>
          <input type="checkbox" className="menu-btn" id="menu-btn" />
          <label htmlFor="menu-btn" className="menu-icon">
            <i className="fa-solid fa-bars menu-hmbgr"></i>
          </label>
          <div className="bar">
            <a href="#home">Home</a>
            <a href="#classes">Classes</a>
            <a href="#trainer">Trainer</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <button>
              <a href="#joinus">
                <p>JOIN US</p>
              </a>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
