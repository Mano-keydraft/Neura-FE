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
import { useState, useEffect, useMemo, useCallback, memo, useRef } from "react";
import { red } from "@mui/material/colors";

const manrope = Manrope({ subsets: ["latin"] });

// Memoized constants outside component
const CAROUSEL_ITEMS = 15;
const CAROUSEL_DUPLICATES = 3; // Only render 3 items at a time instead of 45

// Memoized data arrays
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
      image: "/team-member1.svg", // Placeholder
    },
    {
      name: "David Johnson",
      title: "Co-Founder",
      image: "/team-member3.svg", // Placeholder
    },
    {
      name: "Mary Johnson",
      title: "Property Managers",
      image: "/team-member2.svg", // Placeholder
    },
    {
      name: "Patricia Davis",
      title: "Estate Consultant",
      image: "/team-member4.svg", // Placeholder
    },
    {
      name: "Robert Wilson",
      title: "CTO",
      image: "/team-member1.svg", // Placeholder
    },
  ];

export default function AboutUsPage() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [currentLeaderIndex, setCurrentLeaderIndex] = useState(0);
  
  // Refs for IntersectionObserver to pause animations when not visible
  const awardCarouselRef = useRef<HTMLDivElement>(null);
  const leaderCarouselRef = useRef<HTMLDivElement>(null);
  const [isAwardVisible, setIsAwardVisible] = useState(true);
  const [isLeaderVisible, setIsLeaderVisible] = useState(true);

  // Memoized handlers
  const handleNextTeam = useCallback(() => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const handlePrevTeam = useCallback(() => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  // Optimized carousel items - only generate visible items
  const getVisibleCarouselItems = useCallback((currentIndex: number) => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const idx = currentIndex + i;
      if (idx >= 0) {
        items.push({
          index: idx,
          imageIndex: (idx % CAROUSEL_ITEMS) + 1,
          isCenter: i === 0,
        });
      }
    }
    return items;
  }, []);

  const awardItems = useMemo(() => getVisibleCarouselItems(currentAwardIndex), [currentAwardIndex, getVisibleCarouselItems]);
  const leaderItems = useMemo(() => getVisibleCarouselItems(currentLeaderIndex), [currentLeaderIndex, getVisibleCarouselItems]);

  // Memoized transform calculations
  const awardTransform = useMemo(() => ({
    xs: `translateX(calc(50% - ${currentAwardIndex * 83}px - 40px))`,
    md: `translateX(calc(50% - ${currentAwardIndex * 124}px - 60px))`,
  }), [currentAwardIndex]);

  const leaderTransform = useMemo(() => ({
    xs: `translateX(calc(50% - ${currentLeaderIndex * 83}px - 40px))`,
    md: `translateX(calc(50% - ${currentLeaderIndex * 124}px - 60px))`,
  }), [currentLeaderIndex]);

  // IntersectionObserver to pause animations when carousels are not visible
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '50px' };
    
    const awardObserver = new IntersectionObserver((entries) => {
      setIsAwardVisible(entries[0].isIntersecting);
    }, observerOptions);
    
    const leaderObserver = new IntersectionObserver((entries) => {
      setIsLeaderVisible(entries[0].isIntersecting);
    }, observerOptions);

    if (awardCarouselRef.current) awardObserver.observe(awardCarouselRef.current);
    if (leaderCarouselRef.current) leaderObserver.observe(leaderCarouselRef.current);

    return () => {
      awardObserver.disconnect();
      leaderObserver.disconnect();
    };
  }, []);

  // Auto-slide for Award images - only when visible
  useEffect(() => {
    if (!isAwardVisible) return;
    
    const interval = setInterval(() => {
      setCurrentAwardIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAwardVisible]);

  // Auto-slide for Leader images - only when visible
  useEffect(() => {
    if (!isLeaderVisible) return;
    
    const interval = setInterval(() => {
      setCurrentLeaderIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isLeaderVisible]);

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
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, 400px"
  loading="lazy"
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
                    <Image src="/doctor.svg" alt="automation" width={200} height={200} loading="lazy" />
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

                <Image
                        src="/shaping the fature.svg"
                        alt="Shaping the future"
                        width={600}
                        height={400}
                        loading="lazy"
                        style={{ width: "100%", height: "auto" }}
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
          width:"116%",
          ml:-12,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center" mb={6}>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 41 },
                fontWeight: 700,
                background : "linear-gradient(98.7deg, #0179B4 19.22%, #1A536E 73.07%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Team That Powers Winspire
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: { xs: 14, md: 14 },
                fontWeight: 400,
                color: "#2B2B2B",
                maxWidth: "860px",
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
              overflow: "visible",
            }}
          >
            {/* Navigation Arrows */}
            <IconButton
              onClick={handlePrevTeam}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-100 hover:bg-blue-200"
              sx={{
                position: "absolute",
                left: 55,
                top: "100%",
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
                right: 55,
                top: "100%",
                transform: "translateY(-50%)",
                zIndex: 10,
                backgroundColor: "#0179B4",
                "&:hover": { backgroundColor: "#015A8F" },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 20, color: "#FFFFFF" }} />
            </IconButton>

            {/* Team Members Grid */}
            {/* Team Members Grid */}
<Box
  sx={{
    display: "flex",
    gap: 5,
    transform: `translateX(-${currentTeamIndex * (100 / 4)}%)`,
    transition: "transform 0.3s ease-in-out",
    px: 6,
  }}
>
  {teamMembers.map((member, index) => (
    <Paper
      key={index}
      className="flex-shrink-0 w-1/4 rounded-2xl overflow-visible shadow-md"
      elevation={0}
      sx={{
        flexShrink: 0,
        width: { xs: "100%", md: "25%" },
        ml:-2,
        height: { xs: 300, md: 400 },
        overflow: "visible",
        mt: index % 2 === 0 ? { xs: 5, md: 8 } : 0, // ⭐ ZIG-ZAG: Even (0,2,4) up, Odd (1,3,5) down
        // mb: index % 2 === 0 ? 0 :{ xs: 5, md: 8 } , // ⭐ ZIG-ZAG: Even down margin, Odd no margin
      }}
    >
      {/* IMAGE FULL WIDTH */}
      <Box
        sx={{
          width: "99%",
          height: { xs: 250, md: 330 }, // Responsive height to match container
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        {member.image && (
          <Image
            src={member.image}
            alt={member.name}
            fill
            loading="lazy"
            style={{ objectFit: "contain" }} // Fit full inside without cropping
          />
        )}
      </Box>

      {/* TEXT CLOSE TO IMAGE */}
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: { xs: 18, md: 24 },
            fontWeight: 600,
            color: "#564F4F",
            mt: -3,
          }}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            fontWeight: 400,
            color: "#666666",
            mt: 0.5,
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
                gap: 2,
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
          py: { xs: 3, md: 1 },
          px: { xs: 2, md: 4 },
          backgroundColor: "#F8F9FA",
          borderRadius: 10,
          border: "1px solid #E0E0E0",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: "auto", md: 200 },
        }}
      >
        <Container maxWidth="lg" sx={{ width: "100%" }}>
          <Stack spacing={1} alignItems="center" sx={{ width: "100%" , mt:3, }}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 24 },
                fontWeight: 700,
                color: "#1E285F",
                textAlign: "center",
                mb: { xs: 1, md: 10 },
                lineHeight: 0.2,
              }}
            >
              Trusted by leading brands worldwide
            </Typography>

            {/* Brand Logos */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 3, md: 4 },
                width: "100%",
                overflowX: "auto",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: 100, md: 120 },
                    height: { xs: 100, md: 120 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/brand-logo.svg"
                    alt="brand logo"
                    width={120}
                    height={120}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Two Boxes Side by Side Section */}
      <Box
        sx={{
          pt: { xs: 1, md: 1 },
          pb: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          backgroundColor: "#FFFFFF",
          mt:-11,
        }}
      >
        <Container sx={{ px: { xs: 2, md: 0 } }}>
          <Box
            sx={{
              ml:-3,
              width: "106%",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 2 },
            }}
          >
            {/* First Box */}
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: "#F8F9FA",
                borderRadius: 10,
                border: "1px solid #E0E0E0",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                minHeight: { xs: "auto", md: 200 },
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Images Container - Sliding Carousel */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 100, md: 150 },
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Sliding Container */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: { xs: 3, md: 4 },
                    transform: awardTransform,
                    transition: "transform 2s ease-in-out",
                    width: "fit-content",
                  }}
                >
                  {awardItems.map((item) => (
                    <Box
                      key={`award-${item.index}`}
                      ref={item.isCenter ? awardCarouselRef : null}
                      sx={{
                        width: { xs: 80, md: 120 },
                        height: { xs: 80, md: 120 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 2s ease-in-out",
                        opacity: item.isCenter ? 1 : 0.7,
                        filter: item.isCenter ? "blur(0px)" : "blur(2px)",
                        transform: item.isCenter ? "scale(1)" : "scale(0.85)",
                        zIndex: item.isCenter ? 10 : 5,
                      }}
                    >
                      <Image
                        src="/award.svg"
                        alt={`Award ${item.imageIndex}`}
                        width={120}
                        height={120}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Second Box */}
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: "#F8F9FA",
                borderRadius: 10,
                border: "1px solid #E0E0E0",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                minHeight: { xs: "auto", md: 200 },
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Images Container - Sliding Carousel */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 100, md: 150 },
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Sliding Container */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: { xs: 3, md: 4 },
                    transform: leaderTransform,
                    transition: "transform 2s ease-in-out",
                    width: "fit-content",
                  }}
                >
                  {leaderItems.map((item) => (
                    <Box
                      key={`leader-${item.index}`}
                      ref={item.isCenter ? leaderCarouselRef : null}
                      sx={{
                        width: { xs: 80, md: 120 },
                        height: { xs: 80, md: 120 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 2s ease-in-out",
                        opacity: item.isCenter ? 1 : 0.7,
                        filter: item.isCenter ? "blur(0px)" : "blur(2px)",
                        transform: item.isCenter ? "scale(1)" : "scale(0.85)",
                        zIndex: item.isCenter ? 10 : 5,
                      }}
                    >
                      <Image
                        src="/leader.svg"
                        alt={`Leader ${item.imageIndex}`}
                        width={120}
                        height={120}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>


    <Box
        sx={{
          width: "100%",
          bgcolor: "#FFFFFF",
          mt: 15,
          mb:-15,
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/background-4.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "100% auto",
        }}
      >
        {/* Footer Content with Side Padding */}
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            position: "relative",
            minHeight: "825px",
            width: "100%",
            mb: -23,
            px: { xs: 3, md: 6, lg: 10, xl: 12 },
          }}
        >
            
          {/* Footer Content */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              maxWidth: "1200px",
            //   mx: "auto",
              px: { xs: 3, md: 6 },
              position: "relative",
              zIndex: 1,
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 0 },
              ml: -9,
              width: "110%",
              overflow: "visible",
            }}
          >
            {/* Left Box - Paragraph */}
            <Box sx={{ maxWidth: { xs: "100%", md: "590px" } }}>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#05396F",
                  fontWeight: 500,
                  fontSize: "18px",
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
                backgroundImage: "url('/background-4.svg')",
              }}
            >
              {/* Menu */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "#05396F",
                    fontSize: "18px",
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
                    sx={{ color: "#05396F", fontSize: "16px" }}
                  >
                    Home
                  </MuiLink>
                  <MuiLink
                    component={NextLink}
                    href="/about"
                    underline="none"
                    sx={{ color: "#05396F", fontSize: "16px" }}
                  >
                    About Us
                  </MuiLink>
                  <MuiLink
                    component={NextLink}
                    href="#"
                    underline="none"
                    sx={{ color: "#05396F", fontSize: "16px" }}
                  >
                    Our Platform
                  </MuiLink>
                  <MuiLink
                    component={NextLink}
                    href="/who-we-help"
                    underline="none"
                    sx={{ color: "#05396F", fontSize: "16px" }}
                  >
                    Who We Help
                  </MuiLink>
                  <MuiLink
                    component={NextLink}
                    href="/contact"
                    underline="none"
                    sx={{ color: "#05396F", fontSize: "16px" }}
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
                    fontSize: "18px",
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
                    sx={{ color: "#05396F", fontSize: "16px" }}
                  >
                    Resources
                  </MuiLink>
                  <MuiLink
                    component={NextLink}
                    href="#"
                    underline="none"
                    sx={{ color: "#05396F", fontSize: "16px" }}
                  >
                    Legal
                  </MuiLink>
                  <MuiLink
                    component={NextLink}
                    href="#"
                    underline="none"
                    sx={{ color: "#05396F", fontSize: "16px" }}
                  >
                    Careers
                  </MuiLink>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  </Box >
  );
}
