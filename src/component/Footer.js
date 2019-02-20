import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer_area">
                <img src="images/footer-shap.png" alt="" className="shap"/>
                <div className="round_shap"></div>
                <div className="footer_inner row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 footer_logo wow fadeIn">
                        <a href="index.html"><img src="images/logo.png" alt=""/></a>
                        <div className="language">
                            <h6>Language :</h6>
                            <div className="language_select">
                                <select className="post_select">
                                    <option>English (UK)</option>
                                    <option>English (US)</option>
                                    <option>Bangla (BN)</option>
                                </select>
                            </div>
                        </div>
                        <ul className="footer_menu">
                            <li><a href="#">CAREERS</a></li>
                            <li><a href="contact.html">CONTACT</a></li>
                            <li><a href="#">PRIVACY</a></li>
                        </ul>
                        <ul className="footer_social">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer_widget fw_1 col-xl-2 col-lg-3 col-md-3 col-sm-6 wow fadeIn"
                         data-wow-delay="0.2s">
                        <h4>Core Link</h4>
                        <ul className="footer_nav">
                            <li><a href="#">Team Member</a></li>
                            <li><a href="#">Pricing plan</a></li>
                            <li><a href="#">Google Map</a></li>
                            <li><a href="#">Apps store</a></li>
                            <li><a href="about.html">About Company</a></li>
                        </ul>
                    </div>
                    <div className="footer_widget fw_2 col-xl-2 col-lg-3 col-md-3 col-sm-6 wow fadeIn"
                         data-wow-delay="0.4s">
                        <h4>Information</h4>
                        <address>
                            113 momo Street, bd 721 <br/>NY 20012
                            <a href="#" className="email">kabbohelp@gmail.com</a>
                            <a href="#" className="phone">+88 (0) 29292162</a>
                        </address>
                    </div>
                    <div className="footer_widget fw_3 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                         data-wow-delay="0.6s">
                        <h4>Stay In Loop</h4>
                        <p>Subscribe to receive biweekly tips on creative automation and digital advertising!</p>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="What’s Your email"/>
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-caret-right"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="footer_widget fw_4 col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeIn"
                         data-wow-delay="0.8s">
                        <h4>About Company</h4>
                        <ul className="footer_nav">
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Development </a></li>
                            <li><a href="#">Digital markeing </a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container btn_container">
                    <a href="#" className="theme_btn apple"><i className="fab fa-apple"></i>App Store</a>
                    <a href="#" className="theme_btn"><i className="fab fa-google-play"></i>Play Store</a>
                </div>
                <p className="copy_right">© 2018 All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;