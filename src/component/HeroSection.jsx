import Hero from "../assets/mesin-cuci.png";
import "../style/Herosection.css";

function HeroSection(){

    const handleScrollToLayanan = () => {
        const layananSection = document.getElementById("layanan");
        if (layananSection) {
          const scrollOffset = -70; // Anda bisa menyesuaikan nilai offset sesuai kebutuhan
          const y = layananSection.getBoundingClientRect().top + window.pageYOffset + scrollOffset;
          const duration = 600; // Durasi scroll dalam milidetik (0.3 detik)
    
          // Fungsi untuk mengatur posisi scroll dengan animasi
          const scrollToY = (scrollTargetY, speed) => {
            const startingY = window.pageYOffset;
            const time = Math.max(0.1, Math.min(Math.abs(startingY - scrollTargetY) / speed, 0.8));
    
            function easeInOutCubic(time) {
              return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
            }
    
            function tick() {
              const currentTime = Date.now();
              const timeElapsed = currentTime - timeStart;
              const nextY = startingY + (scrollTargetY - startingY) * easeInOutCubic(timeElapsed / speed);
    
              if (timeElapsed < speed) {
                window.scrollTo(0, nextY);
                requestAnimationFrame(tick);
              } else {
                window.scrollTo(0, scrollTargetY);
              }
            }
    
            const timeStart = Date.now();
            tick();
          };
    
          scrollToY(y, duration);
        }
      };
    
    return(
        <div className="hero-section" id="herosection">
            <div className="hero">
                <div className="left">
                    <h1>Menyatu dalam Kelembutan, Kilaukan Keindahan</h1>
                    <p>Kami percaya bahwa pakaian yang bersih adalah cerminan dari diri Anda yang terbaik. Dengan sepenuh hati, kami berkomitmen untuk memberikan layanan laundry terbaik bagi Anda dan pakaian kesayangan Anda.</p>
                    <div>
                        <button onClick={handleScrollToLayanan}>Selengkapnya</button>
                    </div>
                </div>
                <div className="right"> 
                    <div className="card">
                        <img src={Hero} alt="Hero" />
                    </div>
                    <div className="card-2">
                        <img src={Hero} alt="Hero" />
                    </div>
                </div>
                <div className="circle"></div>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
            </div>
        </div>
    );
}

export default HeroSection;