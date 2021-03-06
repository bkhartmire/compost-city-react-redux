import React from "react";
import "../styles/LearnMore.css";

export default class LearnMore extends React.Component {
  render() {
    return (
      <div class="learn-more">
        {/* <img id="soil" src={soil} /> */}
        <div class="learn-more-text">
          <p className="learn-more">
            Did you know organic waste can't properly break down inside
            landfills? After you toss your food scraps in the trash, they get
            transported far away in a large truck that generates a lot of CO2
            emissions along the journey.
          </p>
          <br />
          <p className="learn-more">
            Once your food scraps are thrown in a landfill, they will release
            methane gas. Methane is a greenhose gas at least 21 times more
            harmful than carbon. Your food scraps can be composted instead.
          </p>
          <br />
          <p className="learn-more">
            Don't have any need for compost? Compost City connects you with
            local growers and gardeners. By composting your food for local
            growers, you can reduce greenhouse gas emissions and the need for
            chemical fertilizers, helping growers to both save money and keep
            our soil healthy.
          </p>
        </div>
      </div>
    );
  }
}
