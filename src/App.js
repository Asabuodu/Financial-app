// import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Service />
      <Client />
      <Footer />
    </div>
  );
}

function Header() {
  return <div className='header'>
    <ul className='logo'>
      <li> <img src='/icons/Group.png ' alt='logo' className='group' />
        <span className='vector'>hargon</span> </li>
    </ul>

    <ul className='list'>
      <li className='shop'>shop</li>
      <li className='partnership'>Partnership</li>
      <li className='auction'>Auction</li>
      <li className='company'>Company</li>
    </ul>

    <button>Get Started</button>
  </div >
}

function Main() {
  return <div className='main'>

    <h1>Easy and Affordable <span> credit solutions </span> you can trust.</h1>

    <p>Experience the power of a seamless credit platform where your needs are made a priority</p>

    <div className='btns'>
      <button className='app-store'><img src='/icons/apple.png' alt='apple-logo' /> <span>coming soon on </span>
        PlayStore</button>

      <button className='play-store'><img src='/icons/play-store.png' alt='play-store logo' /><span>Coming soon on </span>
        App Store</button>

    </div>

    <div className='full-mobile'>
      <img src='/images/frame1.png' alt='frame1' />
    </div>


    <div className='half-mobile'>
      <div className='buttom-image'>
        <img src='/images/Group-90.png' alt='Group' />
        <h2>The <span>ultimate platform </span> to control your  finances</h2>
      </div>


      <div className='top-image'>
        <p className='bills'>HOUSE OF BILLS</p>
        <h2>Pay your bills with no <span> hidden charges </span></h2>
        <img src='/images/phne.png' alt='phne' />
      </div>

    </div>

  </div >

}

function Service() {
  return <div className="partnership-guide">
    <h3><span>Partnership</span> guide</h3>
    <p>Trust Hargon to help you invest your funds with lower risks</p>

    <div className='service-render'>

      <div className='loan'>
        <img src='icons/frame-1.png' alt='frame-1' />
        <h4>Loan distrubution</h4>
        <p>Gain visiblity and track outstanding balances</p>
      </div>

      <div className='collection'>
        <img src='icons/frame-2.png' alt='frame-2' />
        <h4>Collections</h4>
        <p>Provide your borrowers with various means to pay</p>
      </div>

      <div className='real-time'>
        <img src='icons/frame-3.png' alt='frame-3' />
        <h4>Real-time</h4>
        <p>We've digitized the entire loan origination process</p>
      </div>

      <div className='repayment'>
        <img src='icons/frame-4.png' alt='frame-4' />
        <h4>Repayment & disbursement</h4>
        <p>Control how your loans are disbursed.</p>
      </div>

    </div>

  </div>
}

function Client() {
  return <div className='client'>

    <div className='trust'>
      <h1>Our Trusted Clients</h1>

      <ul className='icons'>
        <li><img src='icons/Frame-577.png' alt='frame-577' /></li>
        <li><img src='icons/Frame-2611719.png' alt='Frame-2611719' /></li>
        <li><img src='icons/Frame-2612168.png' alt='Frame-2612168' /></li>
        <li><img src='icons/Frame-2898.png' alt='Frame-2898' /></li>
      </ul>
    </div>

    <div className='get-started'>
      <div className='join'>
        <h2>Join Hargon today & experience a world of financial possibilities.
        </h2>
        <p>Sign up for free and take control of your finances.</p>
        <img src='images/Frame-2612132.png' alt='Frame-2612132' />
      </div>

      <div className='double-mobile'>
        <img src='images/Frame-2614721.png' alt='Frame-2614721' />
      </div>
    </div>

    <p className='para'>Hargon is a fully licensed digital lending platform. Hargon offers innovative financial solutions including investments and credit services. Our credit solution allows businesses and individuals to buy anything and pay for it in installments across online and offline Merchants by providing them with instant access to credit at the point of checkout.
    </p>

  </div>
}

function Footer() {
  return <div className='footer'>

    <div className='footer-info'>

      <div className='hargon'>
        <img src='/icons/Group-1.png' alt='icon' /><span>hargon.</span>
        <p>Fuel your dreams, sustain, and grow your business with reliable lending solutions.</p>

        <button>Get Started</button>
      </div>

      <div className='footer-int'>
        <ul>

          <li>Integration</li>
          <li>Developer</li>
          <li className='line'></li>
          <li>Resources</li>
          <li>Press</li>
          <li>Blogs</li>
        </ul>

      </div>

      <div className='footer-features'>
        <ul>
          <li>Features</li>
          <li>Personal</li>
          <li>Business</li>
          <li>Partnership <span>Coming soon</span></li>
          <li>Wallet</li>
          <li>Bills</li>
          <li>Credit history</li>
        </ul>
      </div>

      <div className='footer-company'>
        <ul>
          <li>Company</li>
          <li>About us</li>
          <li>Career</li>
          <li>FAQS</li>
        </ul>
      </div>

      <div className='footer-trans'>
        <ul>
          <li>Tansperency</li>
          <li>Terms and conditions</li>
          <li>Privacy Policy</li>
          <li>Complaints</li>
        </ul>
      </div>

      <div className='footer-address'>

        <ul>
          <li>Address</li>
          <li>33B, Ogundana street, Allen, Ikeja.</li>
        </ul>

        <ul>
          <li>Contact</li>
          <li>support@hargon.africa</li>
          <li>+234  813  029  2726</li>
        </ul>

        <ul className='footer-icons'>
          <li><img src='/icons/twitter.png' alt='twitter' /></li>
          <li><img src='/icons/in.png' alt='Linkedin' /></li>
          <li><img src='/icons/ig.png' alt='IG' /></li>
          <li><img src='/icons/f.png' alt='f' /></li>
        </ul>

      </div>

    </div>

    <div className='copy'>
      <hr />
      <p>&copy; 2024 Hargon. All right reserved</p>
    </div>


  </div>

}



export default App;
