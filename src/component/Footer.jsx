import React from "react";
import "../style/Footer.css";

function Footer(){
    return(
        <footer>
        <div className="footer-content">
            <h3>Glory Laundry</h3>
            <p>72M6+RMC, Jalan Urip Sumoharjo, Gang Plaosan V, Purworejo, Kec. Purworejo, Plaosan, Purworejo, Kec. Purworejo, Kabupaten Purworejo, Jawa Tengah 54151</p>
            <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy; <a href="#">Glory Laundry</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a href="">Beranda</a></li>
                        <li><a href="">Tentang</a></li>
                        <li><a href="">Layanan</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
    );
}

export default Footer;