import React from "react";
import Navigasi from "../component/Navigasi";
import Footer from "../component/Footer";
import Tentangimg from "../assets/TentangGlory.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../style/Tentang.css";

function Tentang() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleBackToHome = () => {
    navigate("/"); // Navigate to the home page when the "Hubungi Sekarang" button is clicked
  };

  return (
    <div>
      <Navigasi />
      <div className="tentang-kami" id="tentang">
        <div className="diskripsi">
          <h2>Tentang Glory Laundry</h2>
          <p>
            Glory Laundry adalah sebuah bisnis di bidang laundry yang berdiri
            sejak Maret 2007 dan berlokasi di Plaosan RT 04 RW 14 Purworejo
            Jawa Tengah. Glory Laundry juga menyediakan layanan cuci pakaian dan
            benda lainnya seperti handuk, seprai, karpet, dan sebagainya. Bisnis
            ini dilengkapi dengan mesin cuci dan mesin pengering modern untuk
            memudahkan proses pencucian. Selain itu, Glory Laundry juga
            menawarkan layanan setrika pakaian dengan harga terjangkau
          </p>
          <button onClick={handleBackToHome}>Hubungi Sekarang</button>
        </div>
        <div className="card-image">
          <img src={Tentangimg} alt="Tentang" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tentang;
