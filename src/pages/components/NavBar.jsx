import Image from "next/image";
import Styles from "@/styles/NavBar.module.scss";
import Logo from "../../../public/assets/vectors/NWAO Logo.svg";
import Arrow from "../../../public/assets/vectors/Down Double Arrow.svg";

var State = 0;
function RotateArrow() {
  const MenuButton = document.getElementById("MenuButton");
  const Arrow = document.getElementById("Arrow");
  if (State == 0) {
    Arrow.style.cssText =
      "transform: rotate(180deg); transition: all 100ms ease-in-out";
    State = 1;
  } else {
    Arrow.style.cssText =
      "transform: rotate(0deg); transition: all 100ms ease-in-out";
    State = 0;
  }
}

export default function NavBar() {
  return (
    <>
      <header className={Styles.Header}>
        <div className={Styles.NavContainer}>
          <nav className={Styles.NavBar}>
            <div className={Styles.Logo}>
              <Image src={Logo} layout="fill" alt="NWAO Logo" priority />
            </div>
            <h2 className={Styles.BrandName}>New World Animal Organisation</h2>
            <button
              className={Styles.MenuButton}
              id="MenuButton"
              onClick={RotateArrow}
            >
              <Image
                className={Styles.Arrow}
                id="Arrow"
                src={Arrow}
                alt="Menu Button Arrow"
                priority
              />
            </button>
            <ul className={Styles.NavUl}>
              <li className={Styles.NavLi}>
                <button className={Styles.NavLiBtn}>
                  Home
                </button>
                <button className={Styles.NavLiBtn}>
                  PetLog
                </button>
                <button className={Styles.NavLiBtn}>
                  PetShoppe
                </button>
                <button className={Styles.NavLiBtn}>
                  Support Us
                </button>
                <button className={Styles.NavLiBtn}>
                  About Us
                </button>
                <button className={Styles.NavLiBtn}>
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
