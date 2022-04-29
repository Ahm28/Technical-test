import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import CardContact from "../Card/CardContact";

export default function Contact() {
  return (
    <Box
      sx={{
        height: "300px",
        overflow: "visible",
        mb: 60,
        background: "url(https://home.poolapack.com/assets/graphic/red_bg.png)",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{ color: "white", fontWeight: "bold", pt: 7 }}
        >
          Hubungi Kami
        </Typography>
        <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
          Kami akan dengan senang hati membantu Anda!
        </Typography>

        <Box>
          <CardContact />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            mt: 10,
          }}
        >
          <Typography variant="h3">
            Siap untuk berkembang bersama Kami?
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "#911311", borderColor: "#911311", px: 7, mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
