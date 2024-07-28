import { Container } from "react-bootstrap"
import { LuPackageOpen } from "react-icons/lu";
import "../css/delevery.css"
import { CiFaceSmile } from "react-icons/ci";
import { AiOutlineSafety } from "react-icons/ai";

const Delevery = () => {
  return (
    <>
        <Container className="pb-2 delevery">
            <div className="package">
            <LuPackageOpen />
            <b>AYNI GÜN KARGO</b>
            <span>-</span>
            <span>16:00’DAN ÖNCEKİ SİPARİŞLERDE</span>
            </div>

            <div className="smile">
            <CiFaceSmile />
            <b>ÜCRETSİZ KARGO</b>
            <span>-</span>
            <span>100 TL ÜZERİ SİPARİŞLERDE</span>
            </div>

            <div className="safe">
            <AiOutlineSafety />
            <b>GÜVENLİ ALIŞVERİŞ</b>
            <span>-</span>
            <span>1.000.000+ MUTLU MÜŞTERİ</span>
            </div>
        </Container>
    </>
  )
}

export default Delevery