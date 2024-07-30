import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import "../css/hamburger.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import prod1 from "../images/prod1.png";

const App = ({ direciton, size }: { direciton: "left" | "right", size: number | string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {direciton === "left" ? (
        <button onClick={toggleDrawer}>
          <RxHamburgerMenu className="icon" />
        </button>
      ) : direciton === "right" ? (
        <div onClick={toggleDrawer} className="d-flex gap-3 align-tems-center">
          <span className="basket-number">0</span>
          <MdOutlineShoppingCart className="basket-icon mt-1" />
          <span className="basket">SEPET</span>
        </div>
      ) : (
        <></>
      )}

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction={direciton}
        className="bla bla bla"
        size={size}
      >
        {direciton === "left" ? (
          <>
            <ul>
              <li>
                PROTEİN <IoIosArrowForward />
              </li>
              <li>
                SPOR GIDALARI <IoIosArrowForward />
              </li>
              <li>
                SAĞLIK <IoIosArrowForward />
              </li>
              <li>
                GIDA <IoIosArrowForward />
              </li>
              <li>
                VİTAMİN <IoIosArrowForward />
              </li>
              <li>TÜM ÜRÜNLER</li>
            </ul>

            <div className="auth">
              <ul>
                <li>HESABIM</li>
                <li>MÜŞTERİ YORUMLARI</li>
                <li>İLETİŞİM</li>
              </ul>
            </div>
          </>
        ) : direciton === "right" ? (
          <div className="text-dark">
              <h5 className="mt-4 mb-5">SEPETİM</h5>
            <div className="main">

              <div className="left">
                
                <img src={prod1} />
                <div className="d-flex flex-column gap-5">
                <h6>COLLAGEN</h6>
                <div>
                <div>Ahududu</div>
                <div>250 gram</div>
                </div>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <></>
        )}
      </Drawer>
    </>
  );
};

export default App;
