"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, Stack } from "@mui/material";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Contact Us", href: "/" },
];

export default function Header() {
  const pathname = usePathname(); // 👈 detects current route

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
          background: "rgba(255, 255, 255, 0.15)",     // transparent white
          backdropFilter: "blur(80px)",
          WebkitBackdropFilter: "blur(50px)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "999px",
          height: 65,
          mx: 3,
          px: { xs: 2, md: 5.5 },
          py: { xs: 1.4, md: 1.9 },
          boxShadow: "0 30px 70px rgba(154,196,255,0.55)",
          // backdropFilter: "blur(50px)",
        }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href; // 👈 check active route

          return (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: 16,
                fontFamily: "DM Sans, sans-serif",
                fontWeight: isActive ? 700 : 500,
                color: "#001790",
                textDecoration: "none",
                // borderBottom: isActive ? "2px solid #2F57FF" : "2px solid transparent",
                paddingBottom: 4,
              }}
            >
              {item.label}
            </Link>
          );
        })}
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
        component={Link}
        href="/contact"
      >
        Contact Us
      </Button>
    </Box>
  );
}
