import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import "../css/hamburger.css"

const App = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}><RxHamburgerMenu className='icon' /></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <ul>
                    <li>PROTEİN <IoIosArrowForward /></li>
                    <li>SPOR GIDALARI <IoIosArrowForward /></li>
                    <li>SAĞLIK <IoIosArrowForward /></li>
                    <li>GIDA <IoIosArrowForward /></li>
                    <li>VİTAMİN <IoIosArrowForward /></li>
                    <li>TÜM ÜRÜNLER</li>
                </ul>

                <div className="auth">
                    <ul>
                        <li>HESABIM</li>
                        <li>MÜŞTERİ YORUMLARI</li>
                        <li>İLETİŞİM</li>
                    </ul>
                </div>
            </Drawer>
        </>
    )
}

export default App