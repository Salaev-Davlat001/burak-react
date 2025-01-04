import React from "react";
import { Badge, Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className={"top-text"}>
              <Box className={"category-title"}>Burak Restaurant</Box>
              <Stack>
                <Box className={"search-input"}>
                  <input
                    className={"search"}
                    style={{ border: "none" }}
                    type="text"
                    placeholder="Type here"
                  />

                  <Button
                    className={"search-btn"}
                    variant={"contained"}
                    color={"primary"}
                  >
                    Search <SearchIcon className={"search-icon"} />
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"filter-sect"}>
              <Box>
                <Button
                  className={"filter-btn"}
                  variant={"contained"}
                  color={"primary"}
                >
                  NEW
                </Button>
              </Box>

              <Box>
                <Button
                  className={"filter-btn"}
                  variant={"contained"}
                  color={"secondary"}
                >
                  PRICE
                </Button>
              </Box>

              <Box>
                <Button
                  className={"filter-btn"}
                  variant={"contained"}
                  color={"secondary"}
                >
                  VIEWS
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className="product-category">
              <Stack className="list-menu">
                <Button
                  className={"order-btn"}
                  variant={"contained"}
                  color={"primary"}
                >
                  DISH
                </Button>
                <Button
                  className={"order-btn"}
                  variant={"contained"}
                  color={"secondary"}
                >
                  SALAD
                </Button>
                <Button
                  className={"order-btn"}
                  variant={"contained"}
                  color={"secondary"}
                >
                  DRINK
                </Button>
                <Button
                  className={"order-btn"}
                  variant={"contained"}
                  color={"secondary"}
                >
                  DESSERT
                </Button>
                <Button
                  className={"order-btn"}
                  variant={"contained"}
                  color={"secondary"}
                >
                  OTHER
                </Button>
              </Stack>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"product-sale"}>Normal size</div>
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                            alt=""
                          />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color={"secondary"}>
                            <RemoveRedEyeIcon
                              sx={{
                                color: 20 ? "white" : "gray",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>

                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon /> {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className={"no-data"}>Proucts are not available!</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Stack className={"category-title"}>Our Family Brands</Stack>
          <Stack className={"brand-list"}>
            <div className={"review-box"}>
              <img src={"/img/gurme.webp"} />
            </div>
            <div className={"review-box"}>
              <img src={"/img/seafood.webp"} />
            </div>
            <div className={"review-box"}>
              <img src={"/img/sweets.webp"} />
            </div>
            <div className={"review-box"}>
              <img src={"/img/doner.webp"} />
            </div>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.9614232859403!2d69.17314086327512!3d41.28794403576372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sen!2skr!4v1728779851239!5m2!1sen!2skr"
              style={{ marginTop: "50px" }}
              width={1320}
              height={500}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
