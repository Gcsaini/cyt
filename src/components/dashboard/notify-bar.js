import { useMediaQuery } from "@mui/material";

export default function NotifyBar({ title = "" }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return <div className="rbt-header-top-2 color-white pt--15 pb--15 mb--15" style={{ backgroundColor: "dark green", borderRadius: "6px", marginTop: isMobile ? '20px' : 1 }}>
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
}