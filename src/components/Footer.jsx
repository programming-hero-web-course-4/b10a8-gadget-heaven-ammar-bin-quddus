const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="text-center">
        <p className="font-bold text-3xl">Gadget Heaven</p>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="divider"></div>
      <footer className="footer bg-base-200 text-base-content justify-between p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping and Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Career</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
