import { useMediaQuery } from "@mui/material";

export default function NotifyBar({ title = "Good to see you here." }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    return <div class="rbt-header-top-2 color-white pt--15 pb--15 mb--15" style={{ backgroundColor: "rgba(43, 194, 76, 1)", borderRadius: "6px", marginTop: isMobile ? '20px' : 0 }}>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-5 col-12">
                    <div class="fancy-menu-text fancu-menu-start">
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>





    
    
}