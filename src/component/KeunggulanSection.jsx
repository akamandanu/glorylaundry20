import React from "react";
import "../style/keunggulan.css";
import Pelanggan from '../assets/pelanggan.png'
import Ceklist from "../assets/Checklist.png";

function KeunggulanSection(){
    return(
        <div className="keunggulan">
            <div className="card-keunggulan">
                <div className="gambar-keunggulan">
                    <img src={Pelanggan} alt="" />
                </div>
                <div className="diskripsi-keunggulan">
                    <h2>Kenapa Pelanggan Memilih Kami?</h2>
                    <p>Kami selalu memberikan kualitas layanan terbaik untuk setiap pelanggan kami dan berikut ini contohnya</p>
                    <span className="cheklist"><img src={Ceklist} alt=""/><p>Harum, Bersih, dan Rapih</p></span>
                    <span><img src={Ceklist} alt=""/><p>Bisa Antar Jemput</p></span>
                    <span><img src={Ceklist} alt=""/><p>Bisa Cuci Kilat</p></span>
                </div>
            </div>
        </div>
    );
}

export default KeunggulanSection;