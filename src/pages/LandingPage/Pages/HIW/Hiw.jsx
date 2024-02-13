import React from "react";
import "./hiw.css";
import { MBP, Star, reactangleAbs, triangleAbs } from "../../../../assets";

const Hiw = () => {
  return (
    <section className="hiw">
      <img src={MBP} alt="mockup" className="hiw-mockup"/>
        <img src={Star} alt="star" className="star" />
      <div className="hiw-card">
        <img src={triangleAbs} alt="triangle" className="triangle-abs" />
        <img src={reactangleAbs} alt="rectangle" className="rectangle-abs" />
        <div className="hiw-card__text">
          <h1>How It Works</h1>
          <p>
            Embrace the spirit of community and growth with the DIYGAINS
            Referral Program. Share the joy of DIY projects with your friends
            and earn exciting rewards together. As a valued member of DIYGAINS,
            you have the opportunity to invite others into our vibrant community
            of makers. When your friends join through your referral, both you
            and your friend are rewarded with exclusive benefits, bonuses, and
            access to special features. It's more than just sharing a platform;
            it's about creating a network of like-minded individuals who
            appreciate the art of DIY. Join us in spreading the love for
            creativity and reaping the rewards of a thriving community. Start
            referring, start earning!
          </p>
        </div>
        <button>Join Now</button>
      </div>
    </section>
  );
};

export default Hiw;
