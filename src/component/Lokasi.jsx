import React from "react";
import "../style/Lokasi.css";

function Lokasi(){
    return(
        <div className="lokasi"> 
            <div className="title-lokasi">
                <h1>Temui Kami di sini</h1>
                <p>72M6+RMC, Jalan Urip Sumoharjo, Gang Plaosan V, Purworejo, Kec. Purworejo, Plaosan, Purworejo, Kec. Purworejo, Kabupaten Purworejo, Jawa Tengah 54151</p>
                <button>Kontak Kami</button>
            </div>
            <div className="map">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.10617105174387!2d110.01161597179411!3d-7.715438592910332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aebc6785672cb%3A0x6ce7bd2959f4a8e8!2sGlory%20Laundry!5e0!3m2!1sid!2sid!4v1690175929235!5m2!1sid!2sid" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Lokasi;