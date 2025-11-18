"use client";

import Link from "next/link";
import { Box, Button, Stack, useTheme, useMediaQuery } from "@mui/material";

const navItems = [
  { label: "Home", active: true },
  { label: "About Us" },
  { label: "Blogs" },
  { label: "Case Studies" },
  { label: "Who We Help" },
  { label: "Contact Us" },
];

export default function Header() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 6,
        ml: 3,
      }}
    >
      {/* Logo */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ ml: -8 }}>
        <Box
          component="img"
          src="/logo.png"
          alt="Winspire RCM"
          sx={{ width: { xs: 140, md: 200 }, height: "auto" }}
        />
      </Stack>

      {/* Nav Items */}
      <Stack
        direction="row"
        spacing={2.5}
        alignItems="center"
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "999px",
          height: 70,
          mx: 3,
          px: { xs: 2, md: 5.5 },
          py: { xs: 1.4, md: 1.9 },
          boxShadow: "0 20px 45px rgba(154,196,255,0.45)",
          backdropFilter: "blur(50px)",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href="#"
            style={{
              fontSize: 16,
              fontWeight: item.active ? 700 : 500,
              color: item.active ? "#2F57FF" : "#3B4E75",
              textDecoration: "none",
            }}
          >
            {item.label}
          </Link>
        ))}
      </Stack>

      {/* Button */}
      <Button
        disableRipple
        sx={{
          borderRadius: "200px",
          mr: -2,
          px: 3,
          py: 1.3,
          fontSize: 16,
          maxWidth: 300,
          minHeight: 55,
          fontWeight: 400,
          color: "#ffffff",
          textTransform: "none",
          background: "linear-gradient(180deg,#2e2e2e 0%,#0f0f0f 100%)",
          "&:hover": {
            background: "linear-gradient(180deg,#242424 0%,#050505 100%)",
          },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
}
