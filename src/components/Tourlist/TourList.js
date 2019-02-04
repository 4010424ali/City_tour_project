import React, { Component } from "react";
import Tour from "../Tour/Tour";
import { tour_data } from "../tourData";
import "./TourList.scss";

class TourList extends Component {
  state = {
    Tours: tour_data
  };
  removeTour = id => {
    console.log(id);

    const { Tours } = this.state;
    const tourSort = Tours.filter(tour => {
      return tour.id !== id;
    });
    this.setState({
      Tours: tourSort
    });
  };
  render() {
    const { Tours } = this.state;
    return (
      <section className="tourlist">
        {Tours.map(item => (
          <Tour key={item.id} info={item} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default TourList;
