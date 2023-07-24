import React, { useState } from "react";
import "../style/Cardkiloan.css";

function Cardsatuan({ handleHide }) {
  const [pcs, setPcs] = useState(1);
  const [totalHarga, setTotalHarga] = useState(2000);

  const handleTambah = () => {
    setPcs((prevPcs) => prevPcs + 1);
    setTotalHarga((prevTotal) => prevTotal + 2000);
  };

  const handleKurang = () => {
    if (pcs > 1) {
      setPcs((prevPcs) => prevPcs - 1);
      setTotalHarga((prevTotal) => prevTotal - 2000);
    }
  };

  const handleSendMessage = () => {
    const phoneNumber = "6287891955577"; // Ganti dengan nomor WhatsApp tujuan
    const message = `Halo, saya ingin memesan ${pcs} pcs layanan laundry satuan. Total harga: ${totalHarga}`; // Isi pesan yang ingin dikirimkan
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="notif-card">
      <div className="card">
        <div className="title">
          <h1>Harga Laundry Satuan</h1>
        </div>
        <div className="hasil-satuan">
          <p>Total harga : {totalHarga}</p>
        </div>
        <div className="simulasi">
          <h3>Simulasi : </h3>
          <button onClick={handleKurang}>-</button>
          <p>{pcs} pcs</p>
          <button onClick={handleTambah}>+</button>
        </div>
        <div className="deskripsi">
          <p>
            NB : Untuk Laundry satuan. harganya tidak pasti, dikarenakan di
            sesuaikan dengan ukuran, dan tingkat kekotorannya, Harga di atas merupakan Simulasi.
          </p>
        </div>
        <button className="pesan" onClick={handleSendMessage}>
          Pesan
        </button>

        <button className="close" onClick={handleHide}>
          X
        </button>
      </div>
    </div>
  );
}

export default Cardsatuan;
