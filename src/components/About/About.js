import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function About() {
  return (
    <Container sx={{ height: "700px" }}>
      <Grid container spacing={4}>
        <Grid item sx={{ display: "flex", alignItems: "center", my: "auto" }}>
          <Box>
            <Typography
              variant="h3"
              sx={{ color: "#ffc107", fontWeight: "normal", mb: 3 }}
            >
              Tentang <span style={{ fontWeight: "bold" }}> Poolapack</span>
            </Typography>
            <Typography variant="subtitle1" sx={{ width: "500px" }}>
              Satu-satunya <i>B2B Online Marketplace</i> di Indonesia yang
              menjadi <i>platform</i> bagi{" "}
              <span
                style={{
                  color: "#ffc107",
                  fontWeight: "bold",
                  textDecoration: "underlined dotted",
                }}
              >
                Pooler
              </span>{" "}
              dan{" "}
              <span
                style={{
                  color: "#ffc107",
                  fontWeight: "bold",
                  textDecoration: "underlined dotted",
                }}
              >
                Packer
              </span>
              , temukan produk dengan harga termurah dan{" "}
              <span
                style={{
                  color: "#ffc107",
                  fontWeight: "bold",
                  textDecoration: "underlined dotted",
                }}
              >
                MOQ
              </span>{" "}
              terendah.
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderColor: "#ffc107", px: 7, mt: 3 }}
            >
              <a
                href="https://home.poolapack.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "#ffc107" }}
              >
                See Website
              </a>
            </Button>
          </Box>
        </Grid>
        <Grid item sx={{ display: "flex", mx: "auto", mt: "-130px" }}>
          <img src="https://home.poolapack.com/assets/graphic/object_phone.png" />
        </Grid>
      </Grid>
    </Container>
  );
}
