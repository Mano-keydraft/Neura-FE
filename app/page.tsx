"use client";

import AiChatBox from './AiChatBox';
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";

import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  IconButton,
  Chip,
} from "@mui/material";

import { Manrope } from "next/font/google";
import { Inter } from "next/font/google";
import { run } from 'node:test';

const navItems = [
  { label: "Home", href: "/home" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Contact Us", active: true, href: "/"},
];

const textInputs = [
  { name: "name", label: "Enter your name", type: "text" },
  { name: "email", label: "Enter email address", type: "email" },
  { name: "phone", label: "Telephone", type: "tel" },
  { name: "subject", label: "Subject", type: "text" },
];

const faqs = [
  {
    q: "How long until we deliver your first blog post?",
    a: "Really boy law county she unable her sister. Feet you off its like six. Among sex are leave law built now. Among sex are leave law built now. Among sex are leave law wormly. ",
  },
  {
    q: "How long until we deliver your first blog post?",
    a: "Yes, we offer up to two rounds of revisions for every project to ensure your satisfaction.",
  },
  {
    q: "How long until we deliver your first blog post?",
    a: "Absolutely! You can cancel your subscription anytime before your next billing date.",
  },
  {
    q: "How long until we deliver your first blog post?",
    a: "You can upgrade or request additional content anytime from your dashboard.",
  },
  {
    q: "How long until we deliver your first blog post?",
    a: "You can upgrade or request additional content anytime from your dashboard.",
  },
];

// Memoized FAQ Item Component
const FAQItem = React.memo(({ 
  item, 
  index, 
  expanded, 
  onToggle 
}: { 
  item: { q: string; a: string }; 
  index: number; 
  expanded: number | false; 
  onToggle: (index: number) => void;
}) => {
  const isExpanded = expanded === index;
  
  const handleChange = useCallback((event: React.SyntheticEvent, isExpanded: boolean) => {
    onToggle(isExpanded ? index : -1);
  }, [index, onToggle]);

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange}
      sx={{
        backgroundColor: "#fff",
        width: 500,
        borderRadius: 1,
        mb: 4,
        "&::before": { display: "none" },
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <AccordionSummary
        sx={{
          minHeight: 87,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: isExpanded ? 24 : 32,
            color: "#00A0EF",
            display: "inline-block",
            pl: 3,
            transition: "font-size 0.2s ease-in-out",
          }}
        >
          {isExpanded ? "−" : "+"}
        </Typography>
        
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            height: 40,
            fontWeight: 600,
            color: "#1B1139",
            textAlign: "center",
            width: "85%",
            padding: 1.5,
            margin: "0 auto",
          }}
        >
          {item.q}
        </Typography>
      </AccordionSummary>
      
      <AccordionDetails 
        sx={{ 
          padding: 3, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          height: 100, 
          pt: 4,
          pl: 11.5, 
          pr: 8, 
          pb: 10,
        }}
      >
        <Typography 
          sx={{ 
            color: "#444", 
            fontSize: 12.5, 
            letterSpacing: 0.1, 
            fontFamily: "inter",
          }}
        >
          {item.a}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
});

FAQItem.displayName = "FAQItem";

export default function Home() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });

  const [expanded, setExpanded] = useState<number | false>(0);

  const handleToggle = useCallback((index: number) => {
    setExpanded(index === -1 ? false : index);
  }, []);

  return (
    <>
      {/* Contact Form Section */}
      <Box
        component="main"
        sx={{
          backgroundImage: "url('/Back-ground-img.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // image inside public/ folder
          position: "relative",
          minHeight: "100vh",
          pb: { xs: 10, md: 15 },
          pt: { xs: 8, md: 12 },
          backgroundColor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            mx: "auto",
            width: "min(1120px, 100%)",
            px: { xs: 2.5, md: 4 },
            display: "flex",
            flexDirection: "column",
            gap: { xs: 6, md: 13 },
            mt: { xs: -5, md: -7 },
          }}
        >
          {/* header */}
          <Box
            component="header"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 6,
              ml: 3,
              // width: 1100 ,
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center" sx={{ ml: -8 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Winspire RCM"
                sx={{ width: { xs: 140, md: 200 }, height: "auto" }}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={2.5}
              alignItems="center"
              sx={{
                // width: "650",
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
            href={item.href}
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

            <Button
              disableRipple
              sx={{
                borderRadius: "200px",
                mr:-2,
                px: 3,
                py: 1.3,
                fontSize: 16,
                maxWidth:300,
                minHeight:55,
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

          {/* hero */}
          <Stack spacing={2.5} alignItems="center" textAlign="center">
            <Typography
              component="h1"
              sx={{
                fontFamily: "Manrope",
                fontSize: { xs: 32, md: 42 },
                fontWeight: 700,
                lineHeight: 0.8,
                pt: -3,
                background:
                  "linear-gradient(98.7deg, #0179B4 19.22%, #1E285F 73.07%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch With Us
            </Typography>
            <Typography
              sx={{
                maxWidth: 480,
                fontSize: 18,
                lineHeight: 1.4,
                color: "GrayText",
              }}
            >
              We’d love to hear from you. Please fill out this form.
            </Typography>
          </Stack>

          {/* form */}
          <Box
            component="form"
            sx={{
              width: "min(980px, 100%)",
              mx: "auto",
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3.5, md: 4 },
              mt: -8,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: { xs: 2, md: 6 },
              }}
            >
              {textInputs.map((field) => (
                <TextField
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.label}
                  fullWidth
                  InputProps={{
                    sx: {
                      fontSize: 20,
                      py: 1,
                      px: 2.6,
                      backgroundColor: "#ffffff",
                      "& fieldset": {
                       borderColor: "transparent",
                       borderWidth: 0
    }
                    },
                  }}
                  sx={{
                    boxShadow: "0 24px 40px rgba(40,80,135,0.14)",
                  }}
                />
              ))}
            </Box>

            <TextField
              placeholder="Textarea"
              multiline
              minRows={isSmall ? 4 : 5}
              InputProps={{
                sx: {
                  fontSize: 20,
                  py: 1,
                  px: 2.4,
                  backgroundColor: "#ffffff",
                  "& fieldset": {
  borderColor: "transparent",
  borderWidth: 0
}

                },
              }}
              sx={{
                boxShadow: "0 24px 40px rgba(40,80,135,0.14)",
              }}
            />

            <Button
              type="submit"
              disableRipple
              sx={{
                alignSelf: isSmall ? "stretch" : "center",
                width: isSmall ? "100%" : 190,
                textTransform: "none",
                py: 1.5,
                mt: 5,
                fontSize: 20,
                fontWeight: 500,
                color: "#ffffff",
                background:
                  "linear-gradient(90deg, rgba(7,118,198,1) 0%, rgba(54,180,255,1) 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(5,100,180,1) 0%, rgba(48,168,242,1) 100%)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>

      {/* FAQ + Chat Section */}
      <Box
      sx={{

        backgroundImage: "url('/background-3.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        alignItems: "start",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: 8,
        overflow: "hidden",
      }}>
      <Typography
              variant="h4"
              sx={{
                fontFamily: "Manrope",
                fontWeight: 700,
                fontSize: 43,
                height: 52,
                textAlign: "center",
                mb: 1,
                background: "linear-gradient(98.7deg, #0179B4 19.22%, #1E285F 73.07%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Need Instant Help?
        </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "#505050",
                mb: 4,
              }}
            >
              Chat with our FAQ bot for quick answers
            </Typography>
            <Box
        sx={{
          Height: "100vh",
          overflow:'hidden',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
          py: 8,
          contain: "layout",
        }}
      >
      
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 9,
            width: "min(1200px, 100%)",
            ml:-4,
            alignItems: "start",
          }}
        >

<Box>
                    {faqs.map((item, index) => (
                      <FAQItem
                        key={index}
                        item={item}
                        index={index}
                        expanded={expanded}
                        onToggle={handleToggle}
                      />
                    ))}
                </Box>
                <AiChatBox />
        </Box>
      </Box>
      </Box>

      {/* Footer Section */}
      <Box sx={{
        bgcolor: "#fff",
        py: 8,
        px: { xs: 2, md: 10 },
        backgroundImage: "url('/background-4.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "100% auto",
      }}>
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            background: "linear-gradient(98.7deg, #0179B4 19.22%, #1E285F 73.07%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "manrope",
            fontSize: 43,
            fontWeight: 700,
            mt:10,
            mb: 2,
          }}
        >
          Find Us Here
        </Typography>

        {/* Offices Section */}
        <Box
          sx={{
            mt:8,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 3.5,
            justifyContent: "center",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* Office 1 */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="/register-one.svg"
              alt="Regional Office"
              loading="lazy"
              sx={{ width: "100%", borderRadius: 1, objectFit: "cover" }}
            />
            <Typography sx={{ mt: 3, fontWeight: 700 , textAlign:"left", fontSize:20,}}>
              Regional Office:
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#667085", textAlign: "left", width: 260, }}>
            Regus - UB City, Level 14 & 15, Concorde Towers 1, Ashok Nagar, Bangalore, India - 560001 </Typography>
          </Box>

          {/* Office 2 */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="/register-two.svg"
              alt="Bill Walsh Leadership Lessons"
              loading="lazy"
              sx={{ width: "100%", borderRadius: 1, objectFit: "cover" }}
            />
            <Typography sx={{  mt: 3, fontWeight: 600 , textAlign:"left", fontSize:21}}>
              Bill Walsh leadership lessons
            </Typography>
            <Typography sx={{ fontFamily:"Inter", fontSize: 13, color: "#667085", textAlign: "left", width: 390,}}>
            2810 N Church St, Wilmington, Delaware, USA. 19802-4447
            </Typography>
          </Box>
        </Box>




{/* Menu & Company Links */}
<Box
  sx={{
    backgroundImage:"url('/background-4.svg')",
    display: "flex",
    justifyContent: "space-between", // left & right corners
    alignItems: "flex-start",
    maxWidth: "1200px",
    mx: "auto",
    mt: 35,
  }}
>
  {/* Left Box - Paragraph */}
  <Box sx={{ maxWidth: 590 }}>
    <Typography
      sx={{
        fontStyle: "Poppins",
        color: "#05396F",
        fontWeight: 500,
        fontSize: 20,
        textAlign: "left",
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    </Typography>
  </Box>

  {/* Right Boxes - Menu & Company */}
  <Box
    sx={{
      display: "flex",
      gap: 14,
      mr: 3, // space between Menu and Company
    }}
  >
    {/* Menu */}
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3, color:"#05396F" }}>Menu</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <MuiLink component={NextLink} href="#" underline="none">Home</MuiLink>
        <MuiLink component={NextLink} href="#" underline="none">About Us</MuiLink>
        <MuiLink component={NextLink} href="#" underline="none">Our Platform</MuiLink>
        <MuiLink component={NextLink} href="#" underline="none">Who We Help</MuiLink>
        <MuiLink component={NextLink} href="#" underline="none">Contact Us</MuiLink>
      </Box>
    </Box>

    {/* Company */}
    <Box>
      <Typography sx={{ fontWeight: 600, mb: 3, color:"#05396F" }}>Company</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <MuiLink component={NextLink} href="#" underline="none">Resources</MuiLink>
        <MuiLink component={NextLink} href="#" underline="none">Legal</MuiLink>
        <MuiLink component={NextLink} href="#" underline="none">Careers</MuiLink>
      </Box>
    </Box>
  </Box>
</Box>


        {/* Footer bottom */}
        <Box sx={{ mt: 47, textAlign: "left", color: "#999", fontSize: 12 }}>
          {/* Copyright © 2025 Winsipe RCM. All rights reserved */}
        </Box>
      </Box>
            
    </>
  );
}
