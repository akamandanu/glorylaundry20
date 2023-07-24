import "../style/Layanan.css";
import React, { useState, useRef } from "react";


import Kiloan from "../assets/kiloan.png";
import Satuan from "../assets/satuan.png";
import Sprei from "../assets/sprei.png";
import CardKiloan from "./Cardkiloan";
import Cardsatuan from "./Cardsatuan";


function LayananSection(){

    const layananRef = (element) => {
        // `element` akan mewakili elemen DOM yang merupakan komponen LayananSection
        // Anda bisa menyimpannya dalam variabel atau menggunakannya langsung di sini
      };

    const [showCardKiloan, setShowCardKiloan] = useState(false);
    const [showCardsatuan, setShowCardsatuan] = useState(false);

    const handleShowCardKiloan = () => {
        setShowCardKiloan(true);
    };

    const handleHideCardKiloan = () => {
        setShowCardKiloan(false);
    };

    const handleShowCardsatuan = () => {
        setShowCardsatuan(true);
    };

    const handleHideCardsatuan = () => {
        setShowCardsatuan(false);
    };
    return(
        <div className="product" id="layanan" ref={layananRef}>
            <h1>Apa yang kami tawarkan?</h1>
            <div className="card">
                <div className="card-produk">
                    <span className="latar-gambar"><img src={Kiloan} alt="Kiloan"/></span>
                    <h3>Laundry Kiloan</h3>   
                    <p>Kami menyediakan layanan cuci, gosok, dan lipat untuk pakaian sehari hari dengan harga terjangkau.</p>
                    <button onClick={handleShowCardKiloan}>Detail Selengkapnya</button>
                </div>
                <div className="card-produk">
                    <span className="latar-gambar"><img src={Satuan} alt="Satuan"/></span>
                    <h3>Laundry Satuan</h3>
                    <p>Kami menyediakan jasa laundry satuan yang sangat cocok untuk pakaian spesial Anda seperti kemeja, jas, dan sejenisnya.</p>
                    <button onClick={handleShowCardsatuan}>Detail Selengkapnya</button>
                </div>
                <div className="card-produk">
                    <span className="latar-gambar"><img src={Sprei} alt="sprei"/></span>
                    <h3>Laundry Sprei</h3>
                    <p>Kami menyediakan jasa laundry sprei dengan kualitas terbaik dengan harga terjangkau. </p>
                    <button>Detail Selengkapnya</button>
                </div>
            </div>
            {showCardKiloan && <CardKiloan handleHide={handleHideCardKiloan} />}
            {showCardsatuan && <Cardsatuan handleHide={handleHideCardsatuan} />}
        </div>
    );
}

export default LayananSection;