import React, { SyntheticEvent, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import FinishedOrders from "./FinishedOrders";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../../css/orders.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className={"order-container"}>
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-new-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label={"basic tabs example"}
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDERS" value="1" />
                  <Tab label="PROCESS ORDERS" value="2" />
                  <Tab label="FINISHED ORDERS" value="3" />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={"/img/justin.webp"}
                  alt=""
                  className={"order-user-avatar"}
                />
                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    alt=""
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>
              <span className={"order-user-name"}>Martin</span>
              <span className={"order-user-prof"}>User</span>
            </Box>
            <Box className={"liner"}></Box>
            <Box className={"order-user-address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
                South Korea, Busan
              </div>
            </Box>
          </Box>
          <div className={"order-info-box"}>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card number : **** 4090 2002 7495"
              className={"card-input"}
            />
            <div>
              <input
                type="text"
                name="cardPeriod"
                placeholder="07/24 "
                className={"card-half-input"}
              />
              <input
                type="text"
                name="cardCVV"
                placeholder="CVV:010 "
                className={"card-half-input"}
              />
            </div>
            <input
              type="text"
              name="cardCreator"
              placeholder="Justin Robertson"
              className={"card-input"}
            />

            <div className={"cards-box"}>
              <img src="/icons/western-card.svg" />
              <img src="/icons/master-card.svg" />
              <img src="/icons/paypal-card.svg" />
              <img src="/icons/visa-card.svg" />
            </div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}
