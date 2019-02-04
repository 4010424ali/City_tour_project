import React, { Component } from "react";
import "./Tour.scss";

class Tour extends Component {
  state = {
    showinfo: false
  };
  handleInfo = () => {
    this.setState({
      showinfo: !this.state.showinfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.info;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt="" />
          <span onClick={() => removeTour(id)} className="btn-close">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="city-tour">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showinfo ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}

export default Tour;
