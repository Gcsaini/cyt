import TeamImg from "../../assets/img/founder.png";
import TeamImg3 from "../../assets/img/fab.png";
import TeamImg4 from "../../assets/img/akt.png";
import TeamImg5 from "../../assets/img/slazzer-edit-image(1).png";
import TeamImg6 from "../../assets/img/sidhant.png";
import vibhor from "../../assets/img/vibhor.png";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import ImageTag from "../../utils/image-tag";

const teamInfo = [
  {
    name: "Mr. Deepak Kumar",
    deg: "Founder & Director | Counselling Psychologist   (B.A, M.A, Ph.D Research Scholar)",
    address: " Uttarakhand, IN",
    phone: "+91-8077757951",
    email: "director@chooseyourtherapist.in",
    instagra: "",
    facebook: "",
    linkdin: "",
    profile: TeamImg,
    content:
      "I'm passionate about providing accessible and effective mental health services. At Choose Your Therapist LLP, we aim to provide comprehensive documentation of our platform’s features,  services, and commitment to making mental health care more approachable, convenient, and personalized for everyone",
  },

  {
    name: "Mr. Ashish Kumar Thakran",
    deg: "Co-Founder | Enterepreneur",
    address: " Uttarakhand, IN",
    phone: "1234567890",
    email: "dummy3@gmail.com",
    instagra: "",
    facebook: "",
    linkdin: "",
    profile: TeamImg4,
    content:
      "As a passionate advocate for mental health and a co-founder dedicated to leveraging technology for societal good. My vision is to harness cutting-edge technological solutions to address mental health challenges, fostering a culture of wellness and resilience. ",
  },

  {
    name: "Mr. Gopichand Saini",
    deg: "Cheif Technology officer | Web-Developer",
    address: " Noida, Uttarpradesh, IN",
    phone: "1234567890",
    email: "techsupport@chooseyourtherapist.in",
    instagra: "",
    facebook: "",
    linkdin: "",
    profile: TeamImg5,
    content:
      "I aim to create accessible, effective, and personalized mental health support systems that not only enhance employee well-being but also drive our mission forward. Together, we can build a future where mental health is prioritized, and technology acts as a catalyst for positive change.",
  },
  {
    name: "Ms. Fabiha Sultana Shaik",
    deg: "Cheif Advisor | Psychologist",
    address: " Noida, Uttarpradesh, IN",
    phone: "1234567890",
    email: "advisor@chooseyourtherapist.in",
    instagra: "",
    facebook: "",
    linkdin: "",
    profile: TeamImg3,
    content:
      "I am impassioned about the intricacies of the human mind and the way it works.  Also, a creative thinker and analyst who enjoys generating out-of-the-box ideas and projects aimed at enhancing the quality of our work to provide stigma free and holistic wellbeing through our platform",
  },
  {
    name: "Mr. Vibhor Verma",
    deg: "Legal Advisor | Advocate",
    address: " Uttarakhand, IN",
    phone: "1234567890",
    email: "advisor@chooseyourtherapist.in",
    instagra: "",
    facebook: "",
    linkdin: "",
    profile: vibhor,
    content:
      "I am impassioned about the intricacies of the human mind and the way it works.  Also, a creative thinker and analyst who enjoys generating out-of-the-box ideas and projects aimed at enhancing the quality of our work to provide stigma free and holistic wellbeing through our platform",
  },
  {
    name: "Mr. Sidhant Kataria",
    deg: "Head of Marketing and Communication | Counselling Psychologist",
    address: " Uttarakhand, IN",
    phone: "1234567890",
    email: "advisor@chooseyourtherapist.in",
    instagra: "",
    facebook: "",
    linkdin: "",
    profile: TeamImg6,
    content:
      "I am impassioned about the intricacies of the human mind and the way it works.  Also, a creative thinker and analyst who enjoys generating out-of-the-box ideas and projects aimed at enhancing the quality of our work to provide stigma free and holistic wellbeing through our platform",
  },
];
export default function TeamBanner() {
  const [team, setTeam] = React.useState(teamInfo[0]);

  const handleClick = (id) => {
    console.log("id", id);
    setTeam(teamInfo[id]);
  };
  console.log("team", team);
  return (
    <div
      className="rbt-team-area bg-color-white rbt-section-gapBottom"
      style={{ marginTop: 40 }}
    >
      <div className="container">
        <div className="row mb--60">
          <div className="col-lg-12">
            <div class="section-title text-center">
              <h2 className="title">Meet the Innovative minds at CYT</h2>
              <p className="description mt--10">
                Choose Your Therapist LLP aims to create a network of therapists
                to make mental health services accessible to everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="rbt-team-tab-content tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="team-tab0"
                role="tabpanel"
                aria-labelledby="team-tab0-tab"
              >
                <div className="inner">
                  <div className="rbt-team-thumbnail">
                    <div className="thumb">
                      <ImageTag
                        alt="Testimonial"
                        height="555"
                        width="415"
                        src={team.profile}
                      />
                    </div>
                  </div>
                  <div className="rbt-team-details">
                    <div className="author-info">
                      <h4 className="title">{team.name}</h4>
                      <span className="designation theme-gradient">
                        {team.deg}
                      </span>
                      <span className="team-form">
                        <i className="feather-map-pin"></i>
                        <span className="location">{team.address}</span>
                      </span>
                    </div>
                    <p>{team.content}</p>
                    <ul className="social-icon social-default mt--20 justify-content-start">
                      <li>
                        <a href={team.facebook} target="_blank">
                          <i className="feather-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href={team.linkdin} target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href={team.instagra} target="_blank">
                          <i className="feather-instagram"></i>
                        </a>
                      </li>
                    </ul>
                    <ul className="rbt-information-list mt--25">
                      <li>
                        <a href="">
                          <i className="feather-phone"></i>
                          {team.phone}
                        </a>
                      </li>
                      <li>
                        <a href={"mailto:" + team.email}>
                          <i className="feather-mail"></i>
                          {team.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="top-circle-shape"></div>
            </div>
          </div>
          <div className="col-lg-5">
            <ul
              className="rbt-team-tab-thumb nav nav-tabs"
              id="myTab"
              role="tablist"
            >
              {teamInfo.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => handleClick(index)}
                      id="team-tab0-tab"
                      role="tab"
                    >
                      <div className="rbt-team-thumbnail">
                        <div className="thumb">
                          <ImageTag
                            alt="Testimonial"
                            height="555"
                            width="415"
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
