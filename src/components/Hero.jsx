import logo from "../assets/logo.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container" data-aos="slide-up">

        <div className="hero-left">
          <img src={logo} alt="HR Compliance" />
        </div>

        <div className="hero-right">
          <h4 className="sub-title">WELCOME TO ABHIJIT HR SERVICES</h4>

          <h1>
            Your Trusted Partner in <br />
            Labour & Employment Compliance
          </h1>

          <p>
            We simplify complex statutory regulations and help 
            businesses maintain full compliance while focusing 
            on growth and operational excellence.
          </p>

          <button className="hero-btn">
            Explore Our Services
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;