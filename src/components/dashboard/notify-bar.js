import { useMediaQuery } from "@mui/material";

export default function NotifyBar() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return <div class="rbt-header-top-2 color-white pt--15 pb--15 mb--15" style={{ backgroundColor: "darkblue", borderRadius: "6px", marginTop: isMobile ? '20px' : 0 }}>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="fancy-menu-text fancu-menu-start">
                        <p>Intro price. Get Histudy for Big Sale -95% off.<i class="feather-chevron-right"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}