import ImageTag from "../../utils/image-tag";
import BlogCardImg from "../../assets/img/bg-image-10.webp";
export default function JoinHeader() {
  return (
    <div className="breadcrumb-image-container breadcrumb-style-max-width">
      <div className="breadcrumb-image-wrapper">
        <ImageTag
          alt="Education"
          width="1920"
          height="1408"
          src={BlogCardImg}
        />
      </div>
      <div className="breadcrumb-content-top text-center">
        <h1 className="title">Make a Difference with Choose Your Therapist !</h1>
        <p className="mb--20">At Choose Your Therapist LLP, we believe in empowering therapists to 
        reach more clients and make a positive impact on mental health. Join us to 
        provide accessible, inclusive, and effective mental health services to individuals, schools, 
        hospitals, and corporations. Together, we can transform mental health care for the better. </p>
      </div>
    </div>
  );
}
