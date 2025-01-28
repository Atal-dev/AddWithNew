import React from "react";
import "./Whyus.css";

const Whyus = () => {
  return (
    <section className="containerWhy">
      <div className="left-section">
        <p className="sub-heading">Why Choose Us</p>
        <h2 className="heading">
          A behind the scenes look at <span className="highlight">our agency</span>
        </h2>
        <p className="description">
          From concept to completion, discover how we bring your vision to life
          with innovation, collaboration, and expert craftsmanship.
        </p>
        <div className="feature">
          <img src="https://www.svgrepo.com/show/530598/building.svg" alt="Icon" />
          <div>
            <h4>Tailored Design Solutions</h4>
            <p>
              We provide personalized interior design services that reflect your
              unique vision and lifestyle.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src="https://www.svgrepo.com/show/530598/building.svg" alt="Icon" />
          <div>
            <h4>Seamless Project Management</h4>
            <p>
              We handle the entire design process, from concept to completion,
              with flawless execution.
            </p>
          </div>
        </div>
        <div className="feature">
          <img src="https://www.svgrepo.com/show/530598/building.svg" alt="Icon" />
          <div>
            <h4>Client-Centered Collaboration</h4>
            <p>
              Your input is valued throughout the entire process, ensuring your
              vision is fully realized.
            </p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="image-containerWhy">
          <img className="img1" src="https://th.bing.com/th/id/R.ae06de3a787fde8aa4db7040debcfea6?rik=kk9dek1j%2fsuARg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fInteriorWallpapers-38.jpg&ehk=%2bQFcGPsFKODFqNmUPTIYv%2b9No7I1Lz136blDVnY9wf0%3d&risl=&pid=ImgRaw&r=0" alt="Room 1" />
          <img className="img2" src="https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/clarendon-hills-luxury-home-interior.jpg" alt="Room 2" />
        </div>
        <div className="image-containerWhy">
          <img className="img3" src="https://www.fashiondivadesign.com/wp-content/uploads/2018/12/pexels-photo-1571460-1.jpeg" alt="Room 3" />
          <img className="img4" src="https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png" alt="Room 4" />
        </div>
      </div>
    </section>
  );
};

export default Whyus;
