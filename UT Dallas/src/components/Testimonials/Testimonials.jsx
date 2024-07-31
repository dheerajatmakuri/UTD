import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let tx=0;


    const slideForward = () =>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)` 
    }

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emily Smith</h3>
                  <span>University of Texas at Dallas, USA</span>
                </div>
              </div>
              <p>UT Dallas has been transformative. The diverse community, research, and faculty have greatly contributed to my growth.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Michael Johnson</h3>
                  <span>University of Texas at Dallas, USA</span>
                </div>
              </div>
              <p>Choosing UTD was my best decision. The university’s connections and hands-on learning prepared me well for the professional world.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sarah Lee</h3>
                  <span>University of Texas at Dallas, USA</span>
                </div>
              </div>
              <p>
               Vibrant campus life, abundant resources, and excellent academic programs at UTD have made my time here rewarding
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>David Brown</h3>
                  <span>University of Texas at Dallas, USA</span>
                </div>
              </div>
              <p>
              UT Dallas has been amazing, offering countless opportunities to excel through its commitment to innovation and excellence.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
