import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        background:
          "url(https://home.poolapack.com/assets/graphic/jumbotron_bg.png)",
      }}
    >
      <Container>
        <Typography variant="h1" sx={{ color: "#ffc107", pt: 17 }}>
          Pool, Pack, <br /> GO <span style={{ fontWeight: "bold" }}>BIG!</span>
        </Typography>
        <Button
          variant="outlined"
          sx={{ borderColor: "#ffc107", px: 7, mt: 2 }}
        >
          <a
            href="https://home.poolapack.com/"
            target="_blank"
            style={{ textDecoration: "none", color: "#ffc107" }}
          >
            See Website
          </a>
        </Button>
      </Container>
    </Box>
  );
}
