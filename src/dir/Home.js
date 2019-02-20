import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
           <div>
               <section className="banner_area" id="parallax">
                   <img src="images/bannar-shap-1.png" alt="" className="layer layer_1" data-depth="0.10"/>
                   <img src="images/bannar-shap-2.png" alt="" className="layer layer_2" data-depth="0.35"/>
                   <div className="container">
                       <h2 className="wow fadeInUp">Pusat Studi Gender dan Anak</h2>
                       <p className="wow fadeInUp" data-wow-delay="0.3s"><strong>LPPM UIN SUSKA RIAU</strong></p>
                       <a href="#" className="theme_btn wow fadeInUp" data-wow-delay="0.5s">Tour</a>
                       <img src="images/1-2.png" alt="" className="bannar_img wow fadeInRight"/>
                   </div>
                   <a className="popup-youtube wow fadeInUp video_area" href="https://player.vimeo.com/video/142874198">
                       <img src="images/bannar-video-bg.png" alt=""/>
                       <i className="fa fa-play-circle "></i>
                   </a>
               </section>
               {/*//  Team Area*/}

           </div>

        );
    }
}
export default Home;