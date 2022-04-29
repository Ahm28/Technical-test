import { Box, Container } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      style={{
        background:
          "url(https://home.poolapack.com/assets/graphic/yellow_bg.png)",
        height: "300px",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", pt: "100px" }}>
          <img
            src="https://home.poolapack.com/assets/graphic/logo_poolapack_red.png"
            width="300px"
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
