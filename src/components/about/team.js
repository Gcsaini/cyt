import TeamImg from "../../assets/img/shivangi.png";
import TeamImg2 from "../../assets/img/aparajitab.png";
import shivangirana from "../../assets/img/shivangirana.png";
import avika from "../../assets/img/avika.png";
import ImageTag from "../../utils/image-tag";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function TeamAbout() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div class="rbt-team-area bg-color-white rbt-section-gap">
      <div class="container">
        <div class="row mb--60">
          <div class="col-lg-12">
          <div class="section-title text-center">
              <h2 class="title">Get to Know Our Executive Team</h2>
              <p class="description mt--10">Our Executive Team at Choose Your Therapist LLP is a dynamic group of 
              individuals dedicated to driving our mission of providing accessible and effective mental health services. </p>
            </div>
          </div>
        </div>
        <Box sx={{ flexGrow: 1, margin: isMobile ? "0 10px" : 0 }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
             <Grid item xs={12} sm={6} md={3} key={1}>
                  <div class="team">
                    <div class="thumbnail">
                      <ImageTag
                        alt="Blog"
                        height={"180"}
                        width={"300"}
                        src={TeamImg}
                      />
                    </div>
                    <div class="content">
                      <h4 class="title">Shivangi Chandola</h4>
                      <p class="designation">Intern</p>
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
                <Grid item xs={12} sm={6} md={3} key={2}>
                  <div class="team">
                    <div class="thumbnail">
                      <ImageTag
                        alt="Blog"
                        height={"180"}
                        width={"300"}
                        src={TeamImg2}
                      />
                    </div>
                    <div class="content">
                      <h4 class="title">Aparaajita Bhawaani</h4>
                      <p class="designation">Intern</p>
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
                <Grid item xs={12} sm={6} md={3} key={3}>
                  <div class="team">
                    <div class="thumbnail">
                      <ImageTag
                        alt="Blog"
                        height={"180"}
                        width={"300"}
                        src={shivangirana}
                      />
                    </div>
                    <div class="content">
                      <h4 class="title">Shivangi Rana</h4>
                      <p class="designation">Intern</p>
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
                <Grid item xs={12} sm={6} md={3} key={4}>
                  <div class="team">
                    <div class="thumbnail">
                      <ImageTag
                        alt="Blog"
                        height={"180"}
                        width={"300"}
                        src={avika}
                      />
                    </div>
                    <div class="content">
                      <h4 class="title">Avika</h4>
                      <p class="designation">Intern</p>
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
          </Grid>
        </Box>
      </div>
    </div>
  );
}
