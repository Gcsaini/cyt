
export function NotifyBar({ title = "Dashboard currently under development" }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div
      className="rbt-header-top-2 color-white pt--15 pb--15 mb--15"
      style={{
        backgroundColor: "rgba(43, 194, 76, 1)",
        borderRadius: "6px",
        marginTop: isMobile ? "20px" : 0,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 col-12">
            <div className="fancy-menu-text fancu-menu-start">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


