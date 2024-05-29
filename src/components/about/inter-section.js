import TeamImg from "../../assets/img/shivangi.png";
import TeamImg2 from "../../assets/img/aparajitab.png";
import shivangirana from "../../assets/img/shivangirana.png";
import avika from "../../assets/img/avika.png";
import ImageTag from "../../utils/image-tag";
import React from "react";
const internInfo = [
  {
    name: "Shivangi Chandola",
    deg: "Intern",
    profile: TeamImg,
    noOfStars: 4,
    content:
      "I'm passionate about providing accessible and effective mental health services. At Choose Your Therapist LLP, we aim to provide comprehensive documentation of our platform’s features,  services, and commitment to making mental health care more approachable, convenient, and personalized for everyone",
  },

  {
    name: "Aparaajita Bhawaani",
    deg: "Intern",
    profile: TeamImg2,
    noOfStars: 3,
    content:
      "And commitment to making mental health care more approachable, convenient, and personalized for everyone",
  },

  {
    name: "Shivangi Rana",
    deg: "Intern",
    profile: shivangirana,
    noOfStars: 5,
    content: "Choose Your Therapist LLP, we aim to provide comprehensive",
  },
  {
    name: "Avika",
    deg: "Intern",
    profile: avika,
    noOfStars: 2,
    content:
      "At Choose Your Therapist LLP, we aim to provide comprehensive documentation of our platform’s features,  services, and commitment to making mental health care more approachable, convenient, and personalized for everyone",
  },
];
export default function InterSection() {
  const [team, setTeam] = React.useState(internInfo[0]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (id) => {
    setTeam(internInfo[id]);
    setSelectedIndex(id);
  };
  return (
    <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
      <div className="wrapper mb--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  EDUCATION FOR EVERYONE
                </span>
                <h2 className="title">
                  People like histudy education. <br />
                  No joking - Parents Review Here!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center row--30">
          <div className="col-lg-6">
            <div
              className="rbt-testimonial-content tab-content"
              id="myTabContent"
            >
              <div
                className="tab-pane fade active show"
                id="testimonial-tab1"
                role="tabpanel"
                aria-labelledby="testimonial-tab1-tab"
              >
                <div className="inner">
                  <div className="rating mb--30">
                    {Array.from({ length: team.noOfStars }).map((_, index) => {
                      return <i className="fa fa-star" key={index}></i>;
                    })}
                  </div>
                  <p>{team.content}</p>
                </div>
                <div className="author-info">
                  <h6>
                    <span>{team.name} </span> - {team.deg}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <ul className="testimonial-thumb-wrapper nav nav-tabs" id="myTab">
              {internInfo.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className={index == selectedIndex ? "active" : ""}
                      id="testimonial-tab1-tab"
                      aria-selected={index == selectedIndex ? "true" : "false"}
                      onClick={() => handleClick(index)}
                    >
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <ImageTag
                            alt="Testimonial Images"
                            width="494"
                            height="494"
                            src={item.profile}
                          />
                        </div>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
