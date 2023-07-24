import React, { useState, useEffect } from "react";
import "../style/Cardkiloan.css"

function CardKiloan({handleHide}) {

  const handleSendMessage = () => {
    const phoneNumber = "6287891955577"; // Ganti dengan nomor WhatsApp tujuan
    const message = "Halo, saya tertarik dengan layanan Anda"; // Isi pesan yang ingin dikirimkan
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const hargaPerKilogram = 5000;
  const [berat, setBerat] = useState(1);
  const [totalHarga, setTotalHarga] = useState(hargaPerKilogram);

  useEffect(() => {
    setTotalHarga(hargaPerKilogram * berat);
  }, [berat]);

  const tambahBerat = () => {
    setBerat((prevBerat) => prevBerat + 1);
  };

  const kurangiBerat = () => {
    if (berat > 1) {
      setBerat((prevBerat) => prevBerat - 1);
    }
  };

  // Fungsi untuk menambahkan titik sebagai pemisah ribuan
  const formatTotalHarga = (harga) => {
    return harga.toLocaleString();
  };

  return (
    <div className="notif-card">
      <div className="card">
        <div className="title">
          <h1>Harga Laundry Kiloan</h1>
        </div>
        <div className="deskripsi">
          <p>Untuk Harga Kiloan Laundry. sudah Pasti sesuai dengan berat pada saat di timbang</p>
        </div>
        <div className="card-calc">
          <button onClick={kurangiBerat}>-</button>
          <p>{berat}/Kg</p>
          <button onClick={tambahBerat}>+</button>
        </div>
        <div className="harga">
          <p>total harga : Rp {formatTotalHarga(totalHarga)}</p>
        </div>
        <button className="pesan" onClick={handleSendMessage}>Pesan</button>

        <button className="close" onClick={handleHide}>X</button>
      </div>
    </div>
  );
}

export default CardKiloan;
