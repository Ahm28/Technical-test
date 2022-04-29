import { Card, CardContent, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import React from "react";

export default function CardContact() {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ dislpay: "flex", flexDirection: "column", p: 3 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#911311" }}
          >
            Kirim Pesan
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Nama" variant="standard" />
            <TextField id="standard-basic" label="Kontak" variant="standard" />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField
              id="standard-basic"
              label="Perusahan"
              variant="standard"
            />
          </Box>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="fullWidth"
              label="Pesan"
              variant="standard"
              fullWidth
            />
          </Box>

          <Button
            variant="contained"
            sx={{ background: "#911311", borderColor: "#911311", px: 7, mt: 2 }}
          >
            Kirim
          </Button>
        </CardContent>
      </Box>

      <CardContent sx={{ flex: "1 0 auto", background: "#f2f2f2", p: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#911311" }}>
          Informasi Kontak
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "space-between",
            width: "250px",
          }}
        >
          Email{" "}
          <span style={{ fontWeight: "bold", color: "#911311" }}>
            email@email.co
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
