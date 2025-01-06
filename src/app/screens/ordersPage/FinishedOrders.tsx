import React from "react";
import { Stack, Box } from "@mui/material";
import { Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  const products = [
    { name: "Lavash", price: 9, image: "/img/lavash.webp" },
    { name: "Kebab", price: 12, image: "/img/kebab.webp" },
    { name: "Cutlet", price: 15, image: "/img/cutlet.webp" },
  ];
  return (
    <TabPanel value={"3"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {products.map((product, productIndex) => {
                  return (
                    <Box key={productIndex} className={"orders-name-price"}>
                      <img
                        src={product.image}
                        alt=""
                        className={"order-dish-img"}
                      />
                      <p className={"title-dish"}>{product.name}</p>
                      <Box className={"price-box"}>
                        <p>${product.price}</p>
                        <img src="/icons/close.svg" alt="" />
                        <p></p>
                        <img src="/icons/pause.svg" alt="" />
                        <p style={{ marginLeft: "15px" }}>
                          ${product.price * 2}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>$22</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Delivery cost</p>
                  <p>$2</p>
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Total</p>
                  <p>$24</p>
                </Box>
              </Box>
            </Box>
          );
        })}
        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              alt=""
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
