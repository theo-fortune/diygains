import React from "react";
import "./news.css";

const News = () => {
  return (
    <section className="news">
      <div className="news-letter">
        <div className="news-letter__text">
          <h1>Join Our Newsletter</h1>
          <p>
            Stay in the loop with DIYGAINS! Subscribe to our newsletter for the
            latest DIY trends, project inspiration, and exclusive rewards. Join
            our community of makers, and be the first to discover exciting
            opportunities to fuel your creativity. Don't miss out – sign up now
            for a world of crafting delights!
          </p>
        </div>
        <div className="news-letter__form">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default News;
