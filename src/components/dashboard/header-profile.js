import ImageTag from "../../utils/image-tag";

export default function HeaderProfile(props) {
  const user = props.user;
  return (
    <div className="rbt-dashboard-content-wrapper">
      <div className="tutor-bg-photo bg_image bg_image--22 height-350"></div>
      <div className="rbt-tutor-information">
        <div className="rbt-tutor-information-left">
          <div className="thumbnail rbt-avatars size-lg">
            <ImageTag
              alt="Instructor"
              width="300"
              height="300"
              src={user.profile}
            />
          </div>
          <div className="tutor-content">
            <h5 className="title">{user.name}</h5>
            <div className="rbt-review">
              <span className="rating-count"> {user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
