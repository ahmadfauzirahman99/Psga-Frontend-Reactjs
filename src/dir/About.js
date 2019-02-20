import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="pages_banner" id="parallax">
                    <img src="images/bannar-shap-1.png" alt="" className="layer layer_1" data-depth="0.10"/>
                    <img src="images/bannar-shap-2.png" alt="" className="layer layer_2" data-depth="0.35"/>
                    <div className="container">
                        <img src="images/pages-banner-1.png" alt="" className="bannar_img wow fadeInRight"/>
                        <h2 className="wow fadeInUp">Let's See Our Team</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.3s">Contact our Team if you have opinion, idea, or
                            problems and information</p>
                        <img src="images/p-banner-shap.png" alt="" className="layer_3"/>
                    </div>
                </section>
                <section className="team_area ta_3">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 team_items">
                            <a href="#"><img src="images/team-1.png" alt=""/></a>
                            <a href="#" className="heding">Dr.Alwis Nazir<h6>CEO</h6></a>
                        </div>
                        <div className="col-lg-3 col-sm-6 team_items">
                            <a href="#"><img src="images/team-2.png" alt=""/></a>
                            <a href="#" className="heding">Ahmad Fauzi Rahman<h6>HEAD DEVELOPER</h6></a>
                        </div>
                        <div className="col-lg-3 col-sm-6 team_items">
                            <a href="#"><img src="images/team-3.png" alt=""/></a>
                            <a href="#" className="heding">NURUL<h6>FRONTEND DEVELOPER</h6></a>
                        </div>
                        <div className="col-lg-3 col-sm-6 team_items">
                            <a href="#"><img src="images/team-4.png" alt=""/></a>
                            <a href="#" className="heding">MUTIA<h6>BACKEND DEVELOPER</h6></a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;