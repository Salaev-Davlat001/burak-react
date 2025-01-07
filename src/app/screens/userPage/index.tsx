import React from "react";
import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Settings from "./Settings";
import "../../../css/userPage.css";

export default function UserPage() {
  return (
    <div className={"user-page"}>
      <Container>
        <Stack className={"user-container"}>
          <Stack className={"user-left"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box className={"menu-name"}>Modify Member Details</Box>
              <Box className={"menu-content"}>
                <Settings />
              </Box>
            </Box>
          </Stack>

          <Stack className={"user-right"}>
            <Box className={"user-info-box"}>
              <Box className={"member-box"}>
                <Box className={"user-box"}>
                  <div className={"user-img"}>
                    <img
                      src={"/img/justin.webp"}
                      alt=""
                      className={"user-avatar"}
                    />
                    <div className={"user-icon-box"}>
                      <img
                        src={"/icons/user-badge.svg"}
                        alt=""
                        className={"user-prof-img"}
                      />
                    </div>
                  </div>
                  <span className={"user-name"}>Justin</span>
                  <span className={"user-prof"}>USER</span>
                </Box>
                <Box className={"user-address"}>
                  <div style={{ display: "flex" }}>South Korea, Busan</div>
                </Box>
                <Box className={"social-medias"}>
                  <div className={"social-medias-icons"}>
                    <InstagramIcon />
                  </div>
                  <div className={"social-medias-icons"}>
                    <FacebookIcon />
                  </div>
                  <div className={"social-medias-icons"}>
                    <TelegramIcon />
                  </div>
                  <div className={"social-medias-icons"}>
                    <YouTubeIcon />
                  </div>
                </Box>
                <Box className={"user-info"}>
                  <p>Description</p>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
