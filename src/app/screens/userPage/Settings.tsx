import React from "react";
import { Box, Button } from "../../../../node_modules/@mui/material/index";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function Settings() {
  return (
    <Box className={"settings"}>
      <Box className={"upload"}>
        <div className={"user-img"}>
          <img src={"/img/justin.webp"} alt="" className={"user-avatar"} />
        </div>
        <div className={"upload-img"}>
          <div
            className={"upload-title"}
            style={{ marginBottom: "10px", marginTop: "10px" }}
          >
            Upload Image
          </div>
          <div className={"upload-text"} style={{ marginBottom: "10px" }}>
            JPG, JPEG, PNG format only!
          </div>
          <Button className={"download-btn"} component="label">
            <CloudDownloadIcon />
            <input type="file" hidden />
          </Button>
        </div>
      </Box>
      <Box className={"input-name"}>
        <input
          type="text"
          name="userName"
          placeholder="Justin"
          className={"user-name"}
        />
      </Box>
      <div className={"input-phone-address"}>
        <input
          type="text"
          name="phoneNumber"
          placeholder="821024694424"
          className={"user-phone"}
        />

        <input
          type="text"
          name="userAddress"
          placeholder="South Korea, Busan"
          className={"user-address"}
        />
      </div>
      <Box className={"input-area"}>
        <form action="/submit" method="post">
          <textarea
            className={"text-area"}
            placeholder="Description"
            value={"Description"}
            name="userDesc"
          ></textarea>
          <Button
            type="submit"
            className={"text-area-btn"}
            variant={"contained"}
            color={"primary"}
          >
            SAVE
          </Button>
        </form>
      </Box>
    </Box>
  );
}
