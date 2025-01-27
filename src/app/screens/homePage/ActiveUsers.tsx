import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";

/**REDUX SLICE && SELECTOR **/
const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);

  return (
    <div className={"homapage"}>
      <div className={"active-users-frame"}>
        <Container>
          <Stack className={"main"}>
            <Box className={"category-title"}>Active Users</Box>
            <Stack className={"cards-frame"}>
              <CssVarsProvider>
                {topUsers.length !== 0 ? (
                  topUsers.map((member: Member) => {
                    const imagePath = `${serverApi}/${member.memberImage}`;
                    return (
                      <Card
                        key={member._id}
                        variant="outlined"
                        className={"card"}
                      >
                        <CardOverflow>
                          <AspectRatio ratio="1">
                            <img src={imagePath} alt="" />
                          </AspectRatio>
                        </CardOverflow>

                        <CardOverflow className="product-detail">
                          <Stack>
                            <CardContent className={"member-nickname"}>
                              <Typography level="title-md">
                                {member.memberNick}
                              </Typography>
                            </CardContent>
                          </Stack>
                        </CardOverflow>
                      </Card>
                    );
                  })
                ) : (
                  <Box className="no-data"> No Active Users!</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
