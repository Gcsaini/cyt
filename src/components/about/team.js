import TeamImg from "../../assets/img/team-07a91f.jpg";
import ImageTag from "../../utils/image-tag";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export default function TeamAbout() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <div class="rbt-team-area bg-color-white rbt-section-gap">
      <div class="container">
        <div class="row mb--60">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <h5 class="title">Team</h5>
              <p class="description mt--10">Awesome Hover Style.</p>
            </div>
          </div>
        </div>
        <Box sx={{ flexGrow: 1, margin: isMobile ? "0 10px" : 0 }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {[1, 2, 3, 4].map((item) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={item}>
                  <div class="team">
                    <div class="thumbnail">
                      <ImageTag
                        alt="Blog"
                        height={"200"}
                        width={"300"}
                        src={TeamImg}
                      />
                    </div>
                    <div class="content">
                      <h4 class="title">Irma J. Erwin</h4>
                      <p class="designation">English Teacher</p>
                    </div>
                    <ul class="social-icon">
                      <li>
                        <a href="/elements/team#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/elements/team#">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/elements/team#">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
