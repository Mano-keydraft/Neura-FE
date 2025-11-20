"use client";

import Header from "../header";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Button,
  Paper,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";

export default function CareersPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });

  const cultureCards = [
    {
      title: "Work From Anywhere, Truly",
      description:
        "Your home. A café. Another country. We're remote-first by design, not by default. Our team spans the globe, and we've built everything from how we communicate to how we celebrate wins around that reality.",
      icon: "/globe.svg",
      position: "left",
    },
    {
      title: "We're Building the Happiest RCM Company in the World",
      description:
        "Your home. A café. Another country. We're remote-first by design, not by default. Our team spans the globe, and we've built everything from how we communicate to how we celebrate wins around that reality.",
      icon: "/globe.svg",
      position: "right",
    },
    {
      title: "You'll Grow Here",
      description:
        "From your first week, you'll have access to training, mentorship, and tools that help you learn faster and go further. We track your development not to judge you, but to help you reach your goals.",
      icon: "/globe.svg",
      position: "left",
    },
    {
      title: "People First, Always",
      description:
        "Yes, we use AI for hiring and performance tracking but only to make things fairer and more transparent. At the end of the day, real people make the calls. And those people genuinely care about your success.",
      icon: "/globe.svg",
      position: "left",
    },
    {
      title: "Your Work Helps Healthcare Work Better",
      description:
        "Every day, you'll contribute to solutions that help hospitals recover revenue, reduce errors, and operate more smoothly. That means real providers, real teams, and real patients benefit from what you do.",
      icon: "/globe.svg",
      position: "right",
    },
    {
      title: "Your Ideas Actually Matter",
      description:
        "Have a better way to do something? We want to hear it. Our Innovation Hub makes sure great ideas don't get lost in Slack threads. We review them, implement them, and recognize the people behind them every month.",
      icon: "/globe.svg",
      position: "right",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "801px",
          opacity: 0.5,
          background:
            "linear-gradient(152deg, rgba(255, 255, 255, 1) 74%, rgba(14, 38, 249, 1) 100%)",
          zIndex: 0,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Header - No side padding */}
        <Box
          sx={{
            mt: 5,
            width: "100%",
            maxWidth: "1440px",
            mx: "auto",
          }}
        >
          <Header />
        </Box>

        {/* Content Container - With side padding */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: 3, md: 4, lg: 6, xl: 8 },
            py: { xs: 4, md: 6 },
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Hero Section */}
          <Box sx={{ mb: 8, position: "relative", mt: { xs: 4, md: 6 } }}>
            <Stack
              direction="row"
              alignItems="flex-start"
              spacing={2}
              sx={{ mb: 4 }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: { xs: "26px", md: "46px" }, // 48-2
                  fontWeight: 800,
                  lineHeight: "1.25em",
                  letterSpacing: "-0.02em",
                  color: "#313131",
                  flex: 1,
                  maxWidth: { xs: "100%", md: "825px" }, // 827-2
                }}
              >
                Build the future of healthcare RCM from anywhere in the world.
              </Typography>
              <Box
                sx={{
                  width: { xs: 28, md: "38px" }, // 40-2
                  height: { xs: 28, md: "38px" },
                  flexShrink: 0,
                  mt: { xs: 0, md: 1 },
                }}
              >
                <Image
                  src="/globe.svg"
                  alt="Globe"
                  width={38}
                  height={38}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Stack>

            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "14px", md: "18px" }, // 20-2
                fontWeight: 400,
                lineHeight: "1.6em",
                color: "#6D758F",
                mb: 4,
                maxWidth: { xs: "100%", md: "547px" }, // 549-2
              }}
            >
              Join a global team building Neura AI and transforming revenue cycle
              management.
            </Typography>

            {/* Large Blue Image */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "717px" }, // 719-2
                height: { xs: "300px", md: "723px" }, // 725-2
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                bgcolor: "#f0f0f0",
                ml: { xs: 0, md: "auto" },
                mr: { xs: 0, md: 0 },
              }}
            >
              <Image
                src="/placeholder-careers.jpg"
                alt="Careers"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* Our Culture Section */}
          <Box sx={{ mb: 12, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "30px", md: "46px" }, // 48-2
                fontWeight: 800,
                lineHeight: "1.08em",
                background:
                  "linear-gradient(126deg, rgba(1, 121, 180, 1) 18%, rgba(136, 216, 255, 1) 96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                mb: 8,
              }}
            >
              Our Culture
            </Typography>

            {/* Culture Image */}
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: "831px" }, // 833-2
                height: { xs: "300px", md: "648px" }, // 650-2
                mx: "auto",
                mb: 8,
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                bgcolor: "#f0f0f0",
              }}
            >
              <Image
                src="/placeholder-careers.jpg"
                alt="Our Culture"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Culture Cards Grid */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                maxWidth: "1200px",
                mx: "auto",
              }}
            >
              {cultureCards.map((card, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent:
                      card.position === "left" ? "flex-start" : "flex-end",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      p: "1px",
                      borderRadius: "35px",
                      background:
                        card.position === "left"
                          ? "linear-gradient(162deg, rgba(255, 255, 255, 1) 15%, rgba(205, 238, 255, 1) 100%)"
                          : "linear-gradient(167deg, rgba(255, 255, 255, 1) 0%, rgba(206, 239, 255, 1) 96%)",
                      width: { xs: "100%", md: card.position === "left" ? "563px" : "567px" }, // 565-2, 569-2
                    }}
                  >
                    <Paper
                      sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: "35px",
                        background: "#FFFFFF",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: "54px", // 56-2
                            height: "54px",
                            borderRadius: "8px",
                            bgcolor: "#F3F3F3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            mt: 1,
                          }}
                        >
                          <Image
                            src={card.icon}
                            alt={card.title}
                            width={30}
                            height={30}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              fontFamily: "Manrope, sans-serif",
                              fontSize: { xs: "18px", md: card.title.includes("Happiest") || card.title.includes("Healthcare") ? "30px" : "30px" }, // 32-2
                              fontWeight: 400,
                              lineHeight: card.title.includes("Happiest") || card.title.includes("Healthcare")
                                ? "1em"
                                : "0.875em",
                              color: "#404040",
                              mb: 2,
                            }}
                          >
                            {card.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Manrope, sans-serif",
                              fontSize: { xs: "14px", md: "16px" }, // 18-2
                              fontWeight: 400,
                              lineHeight: "1.44em",
                              color: "#6D758F",
                              textAlign: "justify",
                            }}
                          >
                            {card.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Think you belong here Section */}
          <Box
            sx={{
              mb: 12,
              maxWidth: { xs: "100%", md: "459px" }, // 461-2
              mx: { xs: "auto", md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "30px", md: "62px" }, // 64-2
                fontWeight: 400,
                lineHeight: "0.94em",
                color: "#404040",
                mb: 3,
              }}
            >
              Think you belong here? So do we.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "14px", md: "16px" }, // 18-2
                fontWeight: 400,
                lineHeight: "1.44em",
                color: "#6D758F",
                mb: 4,
                textAlign: "justify",
              }}
            >
              The best hires often come from people who reach out before we even
              post the job. If you think you belong here, if you have the skills,
              the curiosity, and the drive to help us build something meaningful,
              we want to hear from you. Send us your profile and let's talk.
            </Typography>
            <Button
              sx={{
                borderRadius: "30px",
                px: 3,
                py: 1.2,
                bgcolor: "#131313",
                color: "#FFFFFF",
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "18px", md: "26px" }, // 28-2
                fontWeight: 400,
                lineHeight: "1.86em",
                textTransform: "none",
                minWidth: { xs: "auto", md: "298px" }, // 300-2
                boxShadow: "inset 0px 0px 6px 0px rgba(255, 255, 255, 1)",
                "&:hover": {
                  bgcolor: "#2a2a2a",
                },
              }}
            >
              Introduce yourself
            </Button>
          </Box>

          {/* Employee Stories Section */}
          <Box
            sx={{
              mb: 12,
              position: "relative",
              minHeight: { xs: "600px", md: "1003px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* World Map Background */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 0,
              }}
            >
              {/* Simplified world map representation */}
              <Box
                sx={{
                  width: { xs: "300px", md: "1000px" },
                  height: { xs: "300px", md: "1000px" },
                  position: "relative",
                  borderRadius: "50%",
                  border: "1px solid #BFEEED",
                }}
              >
                {/* Employee dots would go here */}
              </Box>
            </Box>

            {/* Employee Stories Title */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                mb: { xs: 4, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "150px", md: "200px" },
                  height: { xs: "150px", md: "200px" },
                  borderRadius: "50%",
                  bgcolor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                  boxShadow: "0px 0px 12px 2px rgba(0, 160, 239, 0.25)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: { xs: "16px", md: "30px" }, // 32-2
                    fontWeight: 800,
                    lineHeight: "1.25em",
                    color: "#3E3E3E",
                    textAlign: "center",
                  }}
                >
                  Employee Stories
                </Typography>
              </Box>
            </Box>

            {/* Employee Testimonial Card */}
            <Paper
              sx={{
                position: "absolute",
                bottom: { xs: 0, md: "377px" },
                left: { xs: "50%", md: "64px" },
                transform: { xs: "translateX(-50%)", md: "none" },
                width: { xs: "90%", md: "260px" },
                p: 2,
                borderRadius: "12px",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "11px",
                  bgcolor: "#FAC106",
                  borderRadius: "2px",
                  mb: 1,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "12px",
                  fontWeight: 800,
                  lineHeight: "1.67em",
                  color: "#000000",
                  mb: 0.5,
                  textAlign: "center",
                }}
              >
                Dr. Meera Rajan
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "8px",
                  fontWeight: 400,
                  lineHeight: "2.25em",
                  color: "#000000",
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Clinical Research Specialist
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "6px",
                  fontWeight: 700,
                  lineHeight: "1.67em",
                  color: "#000000",
                  mb: 1,
                }}
              >
                "At Winspire, every day feels meaningful. I'm part of a team that
                truly cares — not just about innovation, but about people's lives.
                As a woman in healthcare, I'm proud to contribute to solutions that
                make real patient impact."
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "6px",
                  fontWeight: 400,
                  lineHeight: "3em",
                  color: "#000000",
                  textAlign: "center",
                }}
              >
                — Dr. Meera Rajan, Clinical Research Specialist
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "6px",
                  fontWeight: 400,
                  lineHeight: "3em",
                  color: "#AEAEAE",
                  textAlign: "center",
                }}
              >
                12 months ago
              </Typography>
            </Paper>
          </Box>

          {/* Join Winspire Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              mb: 12,
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1, maxWidth: { md: "525px" } }}>
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: { xs: "30px", md: "62px" }, // 64-2
                  fontWeight: 400,
                  lineHeight: "0.94em",
                  color: "#404040",
                  mb: 3,
                }}
              >
                Join Winspire — Be the Reason Someone Heals
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: { xs: "14px", md: "16px" }, // 18-2
                  fontWeight: 400,
                  lineHeight: "1.44em",
                  color: "#6D758F",
                  mb: 4,
                }}
              >
                At Winspire, we believe healthcare is more than treatment — it's
                trust, empathy, and innovation working together.
                <br />
                <br />
                We're looking for passionate professionals who are ready to make a
                real difference in people's lives.
                <br />
                <br />
                If you're driven by care, guided by science, and inspired by
                purpose — this is where you belong.
              </Typography>
              <Button
                sx={{
                  borderRadius: "30px",
                  px: 3,
                  py: 1.2,
                  bgcolor: "#131313",
                  color: "#FFFFFF",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: { xs: "18px", md: "26px" }, // 28-2
                  fontWeight: 400,
                  lineHeight: "1.86em",
                  textTransform: "none",
                  boxShadow: "inset 0px 0px 6px 0px rgba(255, 255, 255, 1)",
                  "&:hover": {
                    bgcolor: "#2a2a2a",
                  },
                }}
              >
                Apply Now
              </Button>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "698px" }, // 700-2
                height: { xs: "300px", md: "522px" }, // 524-2
                position: "relative",
                borderRadius: "35px",
                overflow: "hidden",
                bgcolor: "#f0f0f0",
                flexShrink: 0,
              }}
            >
              <Image
                src="/placeholder-careers.jpg"
                alt="Join Winspire"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "#FFFFFF",
            mt: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              maxWidth: "1440px",
              mx: "auto",
              position: "relative",
              minHeight: "825px",
              width: "100%",
              px: { xs: 3, md: 6, lg: 10, xl: 12 },
            }}
          >
            {/* Background Image/Overlay */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: "200px", md: "377px" },
                left: { xs: "50%", md: "476px" },
                transform: { xs: "translateX(-50%)", md: "none" },
                width: { xs: "90%", md: "500px" },
                maxWidth: "500px",
                height: { xs: "400px", md: "575px" },
                bgcolor: "rgba(255, 255, 255, 0.2)",
                backgroundImage: "url('/background-4.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            />

            {/* NEURA AI Text */}
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "100px", md: "280px" },
                fontWeight: 500,
                lineHeight: "0.103em",
                textAlign: "center",
                background:
                  "linear-gradient(180deg, rgba(130, 150, 255, 1) 0%, rgba(255, 255, 255, 1) 85%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                position: "relative",
                zIndex: 1,
                pt: { xs: 8, md: 12 },
                pb: { xs: 4, md: 8 },
              }}
            >
              NEURA AI
            </Typography>

            {/* Footer Content */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                maxWidth: "1200px",
                mx: "auto",
                px: { xs: 3, md: 6 },
                position: "relative",
                zIndex: 1,
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 0 },
                width: "100%",
              }}
            >
              {/* Left Box - Paragraph */}
              <Box sx={{ maxWidth: { xs: "100%", md: "520px" } }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#05396F",
                    fontWeight: 500,
                    fontSize: { xs: "16px", md: "18px" },
                    lineHeight: "1.65em",
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s
                </Typography>
              </Box>

              {/* Right Boxes - Menu & Company */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 6, md: 14 },
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {/* Menu */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: "#05396F",
                      fontSize: { xs: "18px", md: "20px" },
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Menu
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <MuiLink
                      component={NextLink}
                      href="/"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      Home
                    </MuiLink>
                    <MuiLink
                      component={NextLink}
                      href="/about"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      About Us
                    </MuiLink>
                    <MuiLink
                      component={NextLink}
                      href="#"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      Our Platform
                    </MuiLink>
                    <MuiLink
                      component={NextLink}
                      href="/who-we-help"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      Who We Help
                    </MuiLink>
                    <MuiLink
                      component={NextLink}
                      href="/contact"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      Contact Us
                    </MuiLink>
                  </Box>
                </Box>

                {/* Company */}
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      color: "#05396F",
                      fontSize: { xs: "18px", md: "20px" },
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Company
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <MuiLink
                      component={NextLink}
                      href="#"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      Resources
                    </MuiLink>
                    <MuiLink
                      component={NextLink}
                      href="#"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      Legal
                    </MuiLink>
                    <MuiLink
                      component={NextLink}
                      href="/careers"
                      underline="none"
                      sx={{ color: "#05396F", fontSize: { xs: "16px", md: "18px" } }}
                    >
                      Careers
                    </MuiLink>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Footer bottom */}
            <Box
              sx={{
                mt: { xs: 6, md: 12 },
                textAlign: "left",
                color: "#BABABA",
                fontSize: { xs: "14px", md: "16px" },
                fontFamily: "DM Sans, sans-serif",
                px: { xs: 3, md: 6 },
                pb: 4,
                maxWidth: "1200px",
                mx: "auto",
                width: "100%",
              }}
            >
              Copyright © 2025 Winspire RCM. All rights reserved
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

