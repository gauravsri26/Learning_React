import React from "react";
import { Bookmark } from "lucide-react";

const Cards = () => {
  return (
    <div className="card">
      <div className="top">
        <div className="image">
          <img src="" alt="" />
        </div>
        <button>
          Save <Bookmark size={15} />
        </button>
      </div>
      <div className="center">
        <div className="content">
          Amazon<span>5 days ago</span>
          <p>Senior UI/UX Designer</p>
        </div>
        <div className="btn">
          <button>Part-Time</button>
          <button>Senior-Level</button>
        </div>
      </div>
      <div className="bottom">
        <div>
          $125/hr <br />
          <span>Mumbai, India</span>  
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Cards;
