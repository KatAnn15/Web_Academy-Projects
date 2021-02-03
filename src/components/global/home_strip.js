import React from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import { isMobile } from "react-device-detect";

const ComponentToTrack = ({
  isVisible,
  title,
  name,
  subtitle,
  description,
}) => {
  const style = {
    transition: "1s",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0, 0)" : "translate(0, 20px)",
  };
  return (
    <div className="regular-info-wrapper">
      <h2 style={style} className={`strip-title title_${name}`}>
        {title}
      </h2>
      <h3 style={style} className={`strip-subtitle subtitle_${name}`}>
        {subtitle}
      </h3>
      <p style={style} className={`strip-description description_${name}`}>
        {description}
      </p>
    </div>
  );
};

export default class HomeMainStrip extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleText: true,
      opacity: false,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ opacity: true });
    }, 300);
  };
  render() {
    const {
      stripName,
      subtitle,
      linkPage,
      button,
      description,
      title,
    } = this.props;
    return (
      <div
        className={`page-strip strip_${stripName}`}
        ref={this.div}
        style={
          isMobile
            ? {
                opacity: this.state.opacity ? 1 : 0,
                transform: this.state.opacity
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition: "all .8s",
              }
            : { opacity: 1 }
        }
      >
        <div className={`strip_${stripName}__wrapper`}>
          <div className={`strip-img img_${stripName}`}></div>
          <div className={`strip-info strip-info_${stripName}`}>
            {isMobile ? (
              <div className="regular-info-wrapper">
                <h2 className={`strip-title title_${stripName}`}>{title}</h2>
                <h3 className={`strip-subtitle subtitle_${stripName}`}>
                  {subtitle}
                </h3>
                <p className={`strip-description description_${stripName}`}>
                  {description}
                </p>
              </div>
            ) : (
              <TrackVisibility once partialVisibility={true}>
                <ComponentToTrack
                  name={stripName}
                  title={title}
                  subtitle={subtitle}
                  description={description}
                />
              </TrackVisibility>
            )}

            <Link to={`${linkPage}`}>
              <button className={`strip-action-btn btn_${stripName}`}>
                {button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
