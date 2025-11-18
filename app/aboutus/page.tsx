"use client";
import Link from "next/link";
import Header from "../header";
import NextLink from "next/link";
import Image from "next/image";
import { Link as MuiLink } from "@mui/material";
import { Button } from "@mui/material";
import {
  Box,
  Typography,
  Stack,
  Container,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { Manrope } from "next/font/google";
import LockIcon from "@mui/icons-material/Lock";
import BusinessIcon from "@mui/icons-material/Business";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { red } from "@mui/material/colors";

const manrope = Manrope({ subsets: ["latin"] });

export default function AboutUsPage() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const featureCards = [
    {
        image: "/image.png",
        title: "Problem statement",
        description: "Silos, inefficiency, manual work",
    },
    {
      image: "/image (3).svg",
      title: "Problem statement",
      description: "Silos, inefficiency, manual work",
    },
    {
      image: "/image (4).svg",
      title: "Solution",
      description: "Neura AI, an AI-powered ecosystem",
    },
    {
      image: "/image (8).svg",
      title: "Benefits",
      description: "Real-time insights, knowledge preservation, top ROI, focus",
    },
    {
      image: "/image (6).svg",
      title: "Outcome",
      description: "Process-powered, not people-dependent",
    },
  ];

  const items = [
    {
      side: "right",
      year: "2002 – 2021",
      text: "17 Years. 15+ Promotions. 5,000+ Team Members Built.",
    },
    {
      side: "left",
      year: "2021 – 2024",
      text: "0 to 300 Employees. $4M ARR in 2 Years.",
    },
    {
      side: "right",
      year: "2024 – PRESENT",
      text: "Winspire RCM: 70+ Employees. $2M ARR. Neura AI Launched.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Project Discovery Call",
      description: "Party we years to order allow asked of. We so opinion friends me message as delight.",
    },
    {
      number: "2",
      title: "Project Discovery Call",
      description: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
    },
    {
      number: "3",
      title: "Project Discovery Call",
      description: "From they fine john he give of rich he. They age and dreams like improving and did not his truly his.",
    },
    {
      number: "4",
      title: "Project Discovery Call",
      description: "From they fine john he give of rich he. They age and dreams like improving and did not his truly his.",
    },
    {
      number: "5",
      title: "Project Discovery Call",
      description: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
    },
    {
      number: "6",
      title: "Project Discovery Call",
      description: "Party we years to order allow asked of. We so opinion friends me message as delight.",
    },
  ];

  const teamMembers = [
    {
      name: "John Smith",
      title: "Company CEO",
      image: "/team-member-1.jpg", // Placeholder
    },
    {
      name: "David Johnson",
      title: "Co-Founder",
      image: "/team-member-2.jpg", // Placeholder
    },
    {
      name: "Mary Johnson",
      title: "Property Managers",
      image: "/team-member-3.jpg", // Placeholder
    },
    {
      name: "Patricia Davis",
      title: "Estate Consultant",
      image: "/team-member-4.jpg", // Placeholder
    },
    {
      name: "Robert Wilson",
      title: "CTO",
      image: "/team-member-5.jpg", // Placeholder
    },
  ];

  const handleNextTeam = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrevTeam = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (

    <Box
    component="main"
    sx={{
      backgroundImage: "url('/Back-ground-img.svg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
        width: "100%",
        maxWidth: "1120px",
        px: { xs: 2.5, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 6, md: 13 },
        mt: { xs: -5, md: -7 },
      }}
    >
      {/* header */}
      <Header />



       {/* hero */}
       <Stack spacing={1.5} alignItems="center" textAlign="center" >
            <Typography
              component="h1"
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: 32, md: 40 },
                fontWeight: 850,
              }}
            >
              Your goals, our 25 years of know-how
            </Typography>
            
            <Typography
              sx={{
                fontFamily: "Inter",
                maxWidth: 980,
                fontSize: 17,
                // lineHeight: 0.2,
                color: "#4B5563",
              }}
            >
              From claim data to compliance, we’ve spent decades perfecting the processes so you can focus on results
            </Typography>
          </Stack>

          <Box
  sx={{
    position: "relative",
    width: "100%",
    maxWidth: 1200,
    mx: "auto",
    mt: -5,
  }}
>
  {/* TOP TAG BAR */}
<Box
  sx={{
    position: "absolute",
    top: 35,            // move upward above background
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 3,
    px: 4,
    py:2.5,
    width:750,
    background: "#fff",
    borderRadius: "40px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    zIndex: 10,
  }}
>
  {/* TAG 1 */}
   <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
    <Image src="/realtime-icon.svg" alt="real-time" width={20} height={20} />
    <Typography sx={{ fontFamily:"Manrope", fontSize: 17, fontWeight: 800,background: "linear-gradient(98.7deg, #02ABFD 19.22%, #006799 73.07%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
    Bank-Level Security
    </Typography>
  </Box>

  {/* TAG 2 */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
    <Image src="/realtime-icon.svg" alt="real-time" width={20} height={20} />
    <Typography sx={{ fontFamily:"Manrope", fontSize: 17, fontWeight: 800,background: "linear-gradient(98.7deg, #02ABFD 19.22%, #006799 73.07%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
      Real-Time Intelligence
    </Typography>
  </Box>

  {/* TAG 3 */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
    <Image src="/automation-icon.svg" alt="automation" width={20} height={20} />
    <Typography sx={{ fontFamily:"Manrope" ,fontSize: 17, fontWeight: 800,background: "linear-gradient(98.7deg, #02ABFD 19.22%, #006799 73.07%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>
      Smart Automation
    </Typography>
  </Box>
</Box>

  {/* BLUE BACKGROUND CARD */}
  <Box
    sx={{
      width: "100%",
      height: 600,
      borderRadius: 4,
      backgroundImage: "url('/blue-shade.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      overflow: "visible",
    }}
  >
    {/* MAIN RIGHT IMAGE */}
    <Box
      sx={{
        position: "absolute",
        right: 20,
        bottom: -30,
        width: "55%",
        height: "75%",
        borderRadius: 10,
        overflow: "hidden",
        // boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
        zIndex: 2,  
      }}
    >
      <Image
        src="/blue-shade-doc1.svg"
        alt="Main"
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
  </Box>

  {/* BOTTOM-LEFT OVERLAP IMAGE */}
  <Box
    sx={{
      position: "absolute",
      bottom: -150,
      left: 40,
      width: "49%",
      height: 410,
      borderRadius: 4,
      overflow: "hidden",
      zIndex: 1,  
    }}
  >
    <Image
      src="/blue-shade-doc.svg"
      alt="Small"
      fill
      style={{ objectFit: "cover" }}
    />

    {/* LABEL INSIDE SMALL IMAGE */}
    <Box
      sx={{
        position: "absolute",
        top: 12,
        left: 12,
        background: "rgba(0,0,0,0.45)",
        color: "#fff",
        px: 2,
        py: 0.7,
        fontSize: 14,
        borderRadius: "999px",
        backdropFilter: "blur(5px)",
      }}
    >
      25+ Years of Trusted Care
    </Box>
  </Box>
</Box>




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

          </Box>

    <Box
      sx={{
        minHeight: "100vh",
        fontFamily: manrope.style.fontFamily,
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container >
        {/* Top Section: Rethinking Revenue Cycle Management */}
        <Box sx={{ mb: { xs: 8, md: 12 }, width: "100%"}}>
  <Stack spacing={4} alignItems="center" textAlign="center">

            <Typography
              component="h1"
              sx={{
                fontFamily: "Manrope",
                background: "linear-gradient(98.7deg, #02ABFD 19.22%, #006799 73.07%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
                fontSize: { xs: 32, md: 40 },
                fontWeight: 760,
                height:"52px",
                lineHeight: 0.8,
              }}
            >
              Rethinking Revenue Cycle Management
            </Typography>

    <Typography
      sx={{
        fontFamily: "Inter",
        fontSize: { xs: 14, md: 19 },
        fontWeight: 400,
        color: "#4B5563",
        maxWidth: "1166px",
        lineHeight: 1.7,
      }}
    >
      For 25 years, we've watched traditional RCM struggle with silos and inefficiency. That's why we built Neura AI the world's first AI-powered, end-to-end ecosystem that unifies departments, preserves knowledge, and empowers teams to focus on high-impact actions. No more firefighting. No more people-dependence. Just intelligent, process-powered results
    </Typography>

  </Stack>
</Box>
            {/* Feature Cards Grid */}
            <Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    mt: 4,
    justifyContent: "center",
  }}
>
  {featureCards.map((card, index) => {
    const isBig = index < 2;

    return (
      <Paper
  key={index}
  elevation={0}
  sx={{
    width: isBig ? "47%" : "30.5%",
    minHeight: isBig ? "310px" : "310px",
    minWidth: 250,
    p: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 3,
    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    textAlign: "left",
  }}
>
<Image
  src={card.image}
  alt={card.title}
  width={0}
  height={0}
  sizes="100vw"
  style={{
    width: "100%",
    height: "auto",
    objectFit: "contain",
  }}
/>

<Box sx={{ display: "flex", flexDirection: "column", gap: 0.8, mt: 2 }}>
  <Typography
    sx={{
      fontSize: 20,
      fontWeight: 700,
      color: "#1E285F",
      lineHeight: 1.1,   // tighter title
      textAlign: "left", // bottom-left type alignment
      width: "100%",
    }}
  >
    {card.title}
  </Typography>

  <Typography
    sx={{
      fontSize: 12,
      fontWeight: 400,
      color: "#666666",
      lineHeight: 1.25,  // tight description spacing
      textAlign: "left", // aligns with title
      width: "100%",
    }}
  >
    {card.description}
  </Typography>
</Box>

      </Paper>
    );
  })}
</Box>

        {/* History & Experience Section */}
        <Box
      sx={{
        width: "99vw",
        mt: 10,
        ml:-13.3,
        minHeight: "100vh",
        backgroundColor: "#001426",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 12,
        position: "relative",
      }}
    >
      {/* ---------------------- */}
      {/* TITLE SECTION */}
      {/* ---------------------- */}
      <Box textAlign="center" mb={12}>
        <Typography
          sx={{
            mt:5,
            fontSize: 42,
            fontFamily: "Manrope",
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          <span style={{ background: "linear-gradient(98.7deg, #02ABFD 19.22%, #FFFFFF 73.07%)",  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", }}>HISTORY & EXPERIENCE </span>
        </Typography>

        <Typography
          sx={{
            fontSize: 21,
            fontWeight: 400,
            fontFamily: "Inter",
            mt: 1,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Building trust through proven results
        </Typography>
      </Box>

      {/* ---------------------- */}
      {/* TIMELINE WRAPPER */}
      {/* ---------------------- */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* VERTICAL TIMELINE LINE */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 4,
            border: "3px solid #F0F0F0",
            background: "linear-gradient(#00A3FF, #ffffff)",
            borderRadius: 4,
          }}
        />

        {/* ---------------------- */}
        {/* TIMELINE ITEMS */}
        {/* ---------------------- */}
        <Box sx={{ width: "100%" }}>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: item.side === "left" ? "flex-start" : "flex-end",
                mt: index === 0 ? 0 : 14,
              }}
            >
              {/* DOT ON CENTER LINE */}
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  border: "3px solid #fff",
                  backgroundColor: "#001426",
                  zIndex: 2,
                  boxShadow: "0 0 12px 4px rgba(255,255,255,0.7)",
                }}
              />

              {/* HORIZONTAL CONNECTOR LINE */}
              <Box
                sx={{
                  position: "absolute",
                  top: "5%",
                  left: item.side === "right" ? "calc(50% + 36px)": "auto",
                  right: item.side === "left" ? "calc(50% + 36px)": "auto",
                  width: 50,
                  height: 2,
                  backgroundColor: "rgba(255,255,255,0.4)",
                  zIndex: 1,
                }}
              />

              {/* CARD */}
              <Paper
                sx={{
                  width: 420,
                  height: 200,
                  p: 3,
                  mx:6,
                  background: "linear-gradient(80deg, #001224 15.58%, #003367 100%)",
                  backdropFilter: "blur(50px)",
                  borderRadius: 6,
                  color: "#fff",
                  boxShadow: "0px 0px 30px rgba(0,0,0,0.4)",
                }}
              >
                {/* DATE BADGE */}
                <Paper
                  sx={{
                    display: "inline-block",
                    px: 1.5,
                    py: 0.5,
                    mt: 2,
                    background: "#CCCCCc",
                    color: "#05396F",
                    borderRadius: 10,
                    fontSize: 14,
                    fontFamily:"Poppins",
                    fontWeight: 700,
                  }}
                >
                  {item.year}
                </Paper>

                {/* TEXT */}
                <Typography
                  sx={{
                    fontSize: 20.5,
                    lineHeight: "39px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.9)",
                    mt: 3,
                    alignItems: "center",
                  }}
                >
                  {item.text}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
        </Container>
      </Box>

      {/* Founder Story Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          ml:-10,
          mt: -15,
          backgroundColor: "#FFFFFF",
          width:"116%",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
            <Typography
              sx={{
                fontFamily: "Manrope",
                background: "linear-gradient(98.7deg, #02ABFD 19.22%, #006799 73.07%)",
                WebkitBackgroundClip: "text",
                 WebkitTextFillColor: "transparent",
                fontSize: { xs: 24, md: 40 },
                fontWeight: 800,
                color: "#0179B4",
                letterSpacing: 1,
                lineHeight: 0.8,
              }}
            >
              Founder Story
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: 16, md: 21 },
                mt:-10,
                pt:-5,
                fontWeight: 400,
                color: "#2B2B2B",
              }}
            >
              Building the Happiest RCM Company in the World
            </Typography>
          </Stack>

          <Box
            sx={{
              mt:10,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "flex-start",
            }}
          >
            {/* Founder Image Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box
                className="rounded-2xl border-4 border-blue-500 p-0 shadow-lg"
                sx={{
                  mt:2,
                  width: "100%",
                  maxWidth: 400,
                  height: 340,
                  backgroundColor: "#F0F7FF",
                  borderRadius: 3,
                  border: "10px solid #0179B4",
                  boxShadow: "0px 8px 24px rgba(1, 121, 180, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "visible",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb:6.5,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      color: "#666",
                      textAlign: "center",
                    }}
                  >
                    <img src="doctor.svg" alt="automation"  />
                  </Typography>
                </Box>
              </Box>

              {/* Experience Callout */}
              {/* <Box
                className="bg-blue-50 rounded-xl p-4 border border-blue-200"
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  backgroundColor: "#F0F7FF",
                  borderRadius: 2,
                  p: 3,
                  border: "1px solid #B3D9FF",
                }}
              > */}
                {/* <Typography
                  sx={{
                    fontSize: { xs: 14, md: 16 },
                    fontWeight: 500,
                    color: "#1E285F",
                    lineHeight: 1.6,
                    textAlign: "center",
                  }}
                >
                  25+ years of RCM expertise. 3,000+ team members built. Leading
                  the Neura AI revolution.
                </Typography> */}
              {/* </Box> */}
            </Box>

            {/* Founder Narrative Section */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography
                sx={{
                  fontSize: { xs: 28, md: 36 },
                  fontWeight: 700,
                  color: "#0179B4",
                }}
              >
                Suresh Nish
              </Typography>

              <Typography
                sx={{
                  fontFamily:"Poppins",
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 400,
                  color: "#2B2B2B",
                  lineHeight: 1.7,
                }}
              >
                For over 25 years, Suresh Nish has worked at the heart of Revenue
                Cycle Management, partnering with hospitals and health systems
                across North America. His expertise spans operations, strategy,
                process reengineering, and technology adoption.
              </Typography>

              <Typography
                sx={{
                  fontFamily:"Poppins",
                  fontWeight: 400,
                  fontSize: { xs: 14, md: 16 },
                  color: "#2B2B2B",
                  lineHeight: 1.7,
                }}
              >
                That global exposure shaped a profound conviction: the industry
                could be better, more transparent, more connected, and more human.
                Years of experience revealed the industry's biggest flaw: silos.
                Departments working in isolation, software systems failing to
                communicate, and leaders making decisions without complete data.
              </Typography>
            </Box> 
          </Box>
          <Typography
                sx={{
                  alignItems: "center",
                  mt:7,
                  fontFamily:"Poppins",
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 400,
                  color: "#2B2B2B",
                  lineHeight: 1.7,
                }}
              >
                Determined to solve this, Suresh envisioned Neura AI, the world's
                first AI-enabled, end-to-end RCM ecosystem. Under his leadership,
                WinspireRCM is redefining healthcare revenue management with
                precision, transparency, and innovation.
              </Typography>
        </Container>
      </Box>

      {/* Shaping the Future of RCM Together Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          backgroundColor: "#F8F9FA",
          ml:-10.5,
          width:"116%",

        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, md: 8 },
              alignItems: "center",
            }}
          >
            {/* Illustration Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                className="relative w-full h-96 bg-linear-to-br from-blue-50 to-purple-50 rounded-3xl p-8"
                sx={{
                  width: "100%",
                  height: { xs: 300, md: 600 },
                  boxShadow: "0px 8px 24px rgba(1, 121, 180, 0.2)",
                  p: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Placeholder for illustration - Target, People, Puzzle Pieces */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#666",
                      textAlign: "center",
                      zIndex: 1,
                    }}
                  >

                <img
                        src="/shaping the fature.svg"
                        alt="Shaping the fature"
                      />
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Mission & Vision Section */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 800,
                  background: "linear-gradient(100.68deg, #0179B4 20.59%, #88D8FF 86.44%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight:1.2,
                  mb: 2,
                }}
              >
                Shaping the Future of RCM Together
              </Typography>

              {/* Mission */}
              <Box>
              <Typography
  sx={{
    fontSize: { xs: 18, md: 22 },
    fontFamily: "Poppins",
    fontWeight: 600,
    color:"#7C7C7C",
    mb: 1.5,
  }}
>
  MISSION
</Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 18 },
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#7C7C7C",
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  We envision a world where healthcare organizations no longer struggle
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    "Patient-Centric Approach",
                    "End-to-End Visibility",
                    "Intelligent Integration",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <CheckCircleIcon
                        sx={{ fontSize: 20, color: "#10B981", flexShrink: 0 }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: { xs: 14, md: 18 },
                          fontFamily: "Poppins",
                          color: "#7C7C7C",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Vision */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 22 },
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    color:"#7C7C7C",
                    mb: 1.5,
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 18 },
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    color: "#7C7C7C",
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  We are committed to building the future where healthcare supply chains
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    "Connected Ecosystem",
                    "Predictive Intelligence",
                    "Zero Waste",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <CheckCircleIcon
                        sx={{ fontSize: 20, color: "#10B981", flexShrink: 0 }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: { xs: 14, md: 18 },
                          fontFamily: "Poppins",
                          color: "#7C7C7C",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* The Team That Powers Winspire Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 700,
                color: "#1E285F",
              }}
            >
              The Team That Powers Winspire
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 400,
                color: "#666666",
                maxWidth: "800px",
                lineHeight: 1.7,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit id
              venenatis pretium risus euismod dictum egestas orci netus feugiat
              ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci
              in. Id sed montes. Lorem ipsum dolor sit
            </Typography>
          </Stack>

          {/* Team Carousel */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            {/* Navigation Arrows */}
            <IconButton
              onClick={handlePrevTeam}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200"
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: "#E0F2FE",
                "&:hover": { backgroundColor: "#B3E5FC" },
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: 20, color: "#0179B4" }} />
            </IconButton>

            <IconButton
              onClick={handleNextTeam}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600"
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: "#0179B4",
                "&:hover": { backgroundColor: "#015A8F" },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 20, color: "#FFFFFF" }} />
            </IconButton>

            {/* Team Members Grid */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                transform: `translateX(-${currentTeamIndex * (100 / 4)}%)`,
                transition: "transform 0.3s ease-in-out",
                px: 6,
              }}
            >
              {teamMembers.map((member, index) => (
                <Paper
                  key={index}
                  className="flex-shrink-0 w-1/4 rounded-2xl overflow-hidden shadow-md"
                  elevation={0}
                  sx={{
                    flexShrink: 0,
                    width: { xs: "100%", md: "25%" },
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    className="bg-blue-50 p-6 flex flex-col items-center"
                    sx={{
                      backgroundColor: "#F0F7FF",
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      className="w-32 h-32 rounded-full bg-blue-200 overflow-hidden border-4 border-white shadow-lg"
                      sx={{
                        width: 128,
                        height: 128,
                        borderRadius: "50%",
                        backgroundColor: "#B3D9FF",
                        border: "4px solid #FFFFFF",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PersonIcon sx={{ fontSize: 64, color: "#0179B4" }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 18, md: 20 },
                        fontWeight: 700,
                        color: "#1E285F",
                        mt: 1,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 14, md: 16 },
                        fontWeight: 400,
                        color: "#666666",
                      }}
                    >
                      {member.title}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>

            {/* Carousel Dots */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mt: 4,
              }}
            >
              {teamMembers.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentTeamIndex(index)}
                  className="cursor-pointer"
                  sx={{
                    width: index === currentTeamIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor:
                      index === currentTeamIndex ? "#0179B4" : "#E0E0E0",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Trusted by leading brands worldwide Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          backgroundColor: "#F8F9FA",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            <Typography
              sx={{
                fontSize: { xs: 24, md: 32 },
                fontWeight: 700,
                color: "#1E285F",
                textAlign: "center",
              }}
            >
              Trusted by leading brands worldwide
            </Typography>

            {/* Brand Logos */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 3, md: 4 },
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Box
                  key={index}
                  className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center"
                  sx={{
                    width: { xs: 80, md: 96 },
                    height: { xs: 80, md: 96 },
                    borderRadius: "50%",
                    backgroundColor: "#424242",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 10, md: 12 },
                      fontWeight: 500,
                      color: "#FFFFFF",
                      textAlign: "center",
                    }}
                  >
                    logoipsum
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Awards and Recognition Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 6, md: 8 },
              alignItems: "flex-start",
            }}
          >
            {/* Awards Badges (Left) */}
            <Box>
              <Stack spacing={3} alignItems="center">
                {[
                  { text: "APP OF THE DAY 2005", label: "Apple" },
                  { text: "SPECIAL MENTION 2025", label: "JUHLAVA IDPP" },
                  { text: "LOS ANGELES", label: "LOS ANGELES" },
                ].map((award, index) => (
                  <Box
                    key={index}
                    className="relative w-64 h-32 bg-gradient-to-b from-yellow-100 to-yellow-50 rounded-lg border-2 border-yellow-300 flex items-center justify-center shadow-md"
                    sx={{
                      width: { xs: "100%", md: 256 },
                      height: 128,
                      background:
                        "linear-gradient(180deg, #FEF3C7 0%, #FDE68A 100%)",
                      borderRadius: 2,
                      border: "2px solid #FCD34D",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      p: 2,
                    }}
                  >
                    {/* Laurel Wreath Decoration */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 40,
                        height: 20,
                        borderTop: "2px solid #D97706",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: 12, md: 14 },
                        fontWeight: 700,
                        color: "#92400E",
                        mb: 0.5,
                      }}
                    >
                      {award.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 10, md: 12 },
                        fontWeight: 600,
                        color: "#78350F",
                        textAlign: "center",
                      }}
                    >
                      {award.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Leader Badges (Right) */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                {[
                  { color: "#9333EA", label: "Leader", text: "WINTER 2005" },
                  { color: "#DC2626", label: "Leader", text: "WINTER 2005" },
                  { color: "#F59E0B", label: "Leader", text: "WINTER 2005" },
                  { color: "#2563EB", label: "Leader", text: "WINTER 2005" },
                  { color: "#1E40AF", label: "Leader", text: "WINTER 2005" },
                ].map((badge, index) => (
                  <Box
                    key={index}
                    className="relative w-32 h-40 flex flex-col items-center justify-center text-white shadow-lg"
                    sx={{
                      width: { xs: 100, md: 128 },
                      height: 160,
                      backgroundColor: badge.color,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                      position: "relative",
                      clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)",
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 14, md: 16 },
                        fontWeight: 700,
                        color: "#FFFFFF",
                        mb: 1,
                      }}
                    >
                      {badge.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 10, md: 12 },
                        fontWeight: 500,
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      {badge.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
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
          Copyright © 2025 Winsipe RCM. All rights reserved
        </Box> 
        </Box>
  );
}
