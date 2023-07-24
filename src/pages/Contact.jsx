import React from "react";
import "../style/Contact.css";
import Footer from "../component/Footer";
import Navigasi from "../component/Navigasi";

function Contact(){

    const handleSendMessage = () => {
      const phoneNumber = "6287891955577"; // Ganti dengan nomor WhatsApp tujuan
      const message = "Halo, saya tertarik dengan layanan Anda"; // Isi pesan yang ingin dikirimkan
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    };

    return(
        <div>
          <Navigasi/>
            <div className="contact">
            <div className="form" id="kontak">
              <div className="form-left">
                <form>      
                    <div className="title">
                        <h1>Kontak Kami</h1>
                    </div>
                    <input name="name" type="text" className="feedback-input" placeholder="Nama" />   
                    <input name="email" type="text" className="feedback-input" placeholder="Email" />
                    <textarea name="text" className="feedback-input" placeholder="Pesan"></textarea>
                    <input type="submit" value="SUBMIT" onClick={handleSendMessage}/>
                </form>
              </div>
              <div className="form-right">
                <h2>Tunggu apa lagi? Buruan hubungi kami sekarang</h2>
              </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Contact;