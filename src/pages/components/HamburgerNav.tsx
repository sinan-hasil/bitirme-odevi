import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import "../css/hamburger.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import prod1 from "../images/prod1.png";
import "../css/sepet.css"
import { LuTrash } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";




const App = ({ direciton, size }: { direciton: "left" | "right", size: number | string }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    
    const ekranBoyut = () => {
      setIsMobile(window.innerWidth < 576);
    };

    window.addEventListener('resize', ekranBoyut);
    return () => window.removeEventListener('resize', ekranBoyut);
  }, []);

  return (
    <>
      {direciton === "left" ? (
        <button onClick={toggleDrawer}>
          <RxHamburgerMenu className="icon" />
        </button>
      ) : direciton === "right" ? (
        isMobile ? (
          <MdOutlineShoppingCart />
        ) : (
          <div onClick={toggleDrawer} className="d-flex gap-3 align-items-center">
            <span className="basket-number">0</span>
            <MdOutlineShoppingCart className="basket-icon mt-1" />
            <span className="basket">SEPET</span>
          </div>
        )
      ) : null}

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
                <Nav.Link as={Link} to={"/allProducts"} className="w-100 d-flex justify-content-between align-items-center">PROTEİN <IoIosArrowForward /></Nav.Link>
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
                <li><Nav.Link as={Link} to={"/login"}>HESABIM</Nav.Link></li>
                <li>MÜŞTERİ YORUMLARI</li>
                <li>İLETİŞİM</li>
              </ul>
            </div>
          </>
        ) : direciton === "right" ? (
          
          <>
          {isMobile ? (
            <>
              <h5 className="text-dark">SEPETİM</h5>
          <div className="main">            

            <div className="sepet-left">
              <img src={prod1} />
              
              <div>
              <h6>COLLAGEN</h6>
                <p>Ahududu</p>
                <p>250g</p>
              </div>
            </div>

            <div className="sepet-right">
              <b>499 TL</b>
              <div className="sepet-card mt-4">
              <LuTrash />
              <span>1</span>
              <FiPlus />
              </div>
            </div>
          </div>
            </>
          ) : null}
            <h5 className="text-dark">SEPETİM</h5>
          <div className="main">            

            <div className="sepet-left">
              <img src={prod1} />
              
              <div>
              <h6>COLLAGEN</h6>
                <p>Ahududu</p>
                <p>250g</p>
              </div>
            </div>

            <div className="sepet-right">
              <b>499 TL</b>
              <div className="sepet-card mt-4">
              <LuTrash />
              <span>1</span>
              <FiPlus />
              </div>
            </div>
          </div>
          </>
        ) : null }
      </Drawer>
    </>
  );
};

export default App;
