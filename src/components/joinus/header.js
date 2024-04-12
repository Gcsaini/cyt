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
        <h1 className="title">Join US</h1>
        <p className="mb--20">Short description Here.</p>
      </div>
    </div>
  );
}
