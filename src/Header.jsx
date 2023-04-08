import Workit from "../images/svg/workit.svg";
import iPhone from "../images/png/iphone.png";
//
import bgL from "../images/svg/bg-l.svg";
import bgR from "../images/svg/bg-r.svg";
//
export default Header;
// 0    /// Header ///
function Header() {
  return (
    <header>
      <HItem1 />
      <HeaderCenter />
      <Iphone />
      <BgSetka />
    </header>
  );
}
//  1
function HItem1() {
  return (
    <div className="HItem1">
      <img src={Workit} alt="Workit" />
      <p className="p h-right">
        Apply for access <div className="h-line"></div>
      </p>
    </div>
  );
}
// 2
function HeaderCenter() {
  return (
    <div className="header-center">
      <h2 className="big-text">
        Data tailored to <div className="big-line"></div> your needs.
      </h2>
      <div className="header-btn">
        <button className="btn">Learn more</button>
      </div>
    </div>
  );
}
// 3
function Iphone() {
  return (
    <div className="iphone-box">
      <img className="iphone" src={iPhone} alt="" />
    </div>
  );
}
// 4
function BgSetka() {
  return (
    <div className="bgSetka">
      <img className="bgSetka1" src={bgL} alt="" />
      <img className="bgSetka2" src={bgR} alt="" />
    </div>
  );
}
