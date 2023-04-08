import HumanImg from "../images/png/human.png";
import BgFooter from "../images/svg/bg-footer.svg";
import Workit1 from "../images/svg/workit1.svg";
import fead from "../images/svg/fead.svg";
import twit from "../images/svg/twit.svg";
import instagram from "../images/svg/instagram.svg";
//
export default Footer;

function Footer() {
  return (
    <footer>
      <div className="footer">
        <Human />
        <FooterBox />
      </div>
      <FooterBottom />
    </footer>
  );
}

// 1
function Human() {
  return (
    <div className="footer-human">
      <img className="footer-img" src={HumanImg} alt="human image" />
    </div>
  );
}

// 2
function FooterBox() {
  return (
    <div className="footer-box">
      <h2 className="footer-big">Be the first to test</h2>
      <p className="p footer-p">
        Hi, I'm Louis Graham, the founder of the company. Book a demo call with
        me to become a beta tester for our app and kickstart your company. Apply
        for access below and I’ll be in touch to schedule a call.
      </p>
      <button>Apply for access</button>
      <div>
        <img className="BgFooter" src={BgFooter} alt="" />
      </div>
    </div>
  );
}
// 3
function FooterBottom() {
  return (
    <div className="bottom">
      <img className="workit1" src={Workit1} alt="" width={95.76} height={24.61} />
      <div className="bottom-icons">
        <img src={fead} alt="" />
        <img src={twit} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
}
