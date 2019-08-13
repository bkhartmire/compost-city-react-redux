import React from "react";
import "./PostList.css";
import avatar from "../images/avatar-placeholder.png";
import bokashi from "../images/bokashi.png";
import foodScraps from "../images/foodscraps.png";
import waste from "../images/waste.png";

export default class Post extends React.Component {
  render() {
    return (
      <div className="post-container">
        <div className="image">
          <img
            src={avatar}
            alt="..."
            className="img-fluid rounded-circle profile-pic"
          />
        </div>
        <div className="text">
          <p>
            {this.props.username} is located {this.props.distance} mile(s) away.
          </p>
        </div>
        <div className="footer">
          <div className="details-img">
            {this.props.bokashi && (
              <img
                src={bokashi}
                className="detail"
                alt="This user accepts bokashi compost."
                title="This user accepts bokashi compost."
              />
            )}
            {this.props.foodScraps && (
              <img
                src={foodScraps}
                className="detail"
                alt="This user accepts food scraps."
                title="This user accepts food scraps."
              />
            )}
            {this.props.waste && (
              <img
                src={waste}
                className="detail"
                alt="This user accepts composted animal and human waste."
                title="This user accepts composted animal and human waste."
              />
            )}
          </div>
          <div className="contact">
            <a href={`mailto:${this.props.email}`} className="email-btn">
              Email
            </a>
          </div>
        </div>
      </div>
    );
  }
}
