import TherypyImg from "../../assets/img/therapysessioncyt.png";
import SupportImg from "../../assets/img/support.png";
import StudentImg from "../../assets/img/studentorientation.png";
import WorkplaceImg from "../../assets/img/workplacetraining.png";
import ActivitesImg from "../../assets/img/therapeutic.png";
import AssessmentImg from "../../assets/img/assessmentss.png";
import ProjectsImg from "../../assets/img/projectscyt.png";
import SpecialOfferImg from "../../assets/img/special.png";
import Services from "../../components/home/Services";
import LazyImage from "../../utils/lazy-image";

export default function Services() {
  const services = [
    {
      title: "Wellbeing Therapy Session",
      img: TherypyImg,
      action: "Book Now",
      link: "/view-all-therapist",
    },
    {
      title: "Community Group Programs",
      img: SupportImg,
      action: "Register Now",
      link: "#",
    },
    {
      title: "Mentorship Programs",
      img: StudentImg,
      action: "Register Now",
      link: "#",
    },
    {
      title: "Mindfulness Tour Initiative",
      img: WorkplaceImg,
      action: "Coming Soon",
      link: "#",
    },
    {
      title: "Therapeutic Activities",
      img: ActivitesImg,
      action: "Explore Now",
      link: "#",
    },
    {
      title: "Assessments & Screenings",
      img: AssessmentImg,
      action: "Take Assessment",
      link: "#",
    },
    {
      title: "Research & Projects",
      img: ProjectsImg,
      action: "View Projects",
      link: "#",
    },
    {
      title: "Special Offers",
      img: SpecialOfferImg,
      action: "Avail Now",
      link: "#",
    },
  ];

  return (
    <div
      className="rbt-categories-area bg-color-white rbt-section-gapBottom"
      style={{ marginTop: 80 }}
    >
      <div className="container">
        <div className="row g-5 mt--20">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6">
              <a
                className="rbt-cat-box rbt-cat-box-1 text-center"
                href={service.link}
              >
                <div className="inner">
                  <div className="icons">
                    <LazyImage alt={service.title} dim={"80"} src={service.img} />
                  </div>
                  <div className="content">
                    <h5 className="title">{service.title}</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        {service.action} <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
