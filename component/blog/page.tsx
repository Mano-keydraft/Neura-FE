"use client";

import React, { memo } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
} from "@mui/material";

// Import Header directly - needed immediately for SSR
import Header from "../header";

// Category data outside component to prevent re-creation
const categories = [
  { image: "/image Placeholder (1).svg", alt: "Product Updates", label: "Product Updates", priority: true },
  { image: "/image Placeholder (2).svg", alt: "Product Updates", label: "Product Updates", priority: true },
  { image: "/image Placeholder (3).svg", alt: "How-To Guides", label: "How-To Guides", priority: false },
  { image: "/image Placeholder (4).svg", alt: "Health & Wellness", label: "Health & Wellness", priority: false },
];

// Memoized Category Card Component
const CategoryCard = memo(({ 
  image, 
  alt, 
  label,
  priority = false
}: { 
  image: string; 
  alt: string; 
  label: string;
  priority?: boolean;
}) => (
  <Paper
    elevation={0}
    sx={{
      position: "relative",
      height: { xs: 270, md: 310 },
      width: { xs: "100%", md: "95%" },
      minWidth: { xs: "100%", md: "210px" },
      borderRadius: "12px",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      willChange: "transform, box-shadow",
      "&:hover": {
        boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
        transform: "translateY(-4px)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      },
    }}
  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: 15, md: 17 },
            fontWeight: 600,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  </Paper>
));

CategoryCard.displayName = "CategoryCard";

export default function BlogPage() {
  return (
    <Box
      suppressHydrationWarning
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/BG.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        overflow: "hidden",
        contain: "layout style paint",
      }}
    >
      <Box sx={{ mt: 5, width: "100%", maxWidth: "1440px", mx: "auto", px: { xs: 3, md: 6, lg: 10, xl: 12 } }}>
        <Header />
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          mt: 2,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 3, md: 6 },
            maxWidth: { xs: "100%", md: "1190px" },
          }}
        >
          <Box sx={{ mt: 4 }}>
            <Stack
              direction="column"
              spacing={3}
              alignItems="center"
              sx={{ textAlign: "center" }}
            >
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: { xs: 36, md: 52 },
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                }}
              >
                Blogs & Resources
              </Typography>
              <Typography
                sx={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: { xs: 12, md: 15.5},
                  fontWeight: 100,
                  color: "#FFFFFF",
                  lineHeight: 1.6,
                  maxWidth: "580px",
                }}
              >
                Revenue-saving ideas, industry trends, and AI breakthroughs from the frontlines of RCM.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Category Cards Section */}
      <Box
        sx={{
          mt: { xs: -4, md: 0 },
          px: { xs: 3, md: 7 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "20px",
            maxWidth: { xs: "100%", md: "1500px" },
            height: "380px",
            p: 4,
            boxShadow: "0px 10px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 2, md: 2 },
              height: "100%",
              pl: { xs: 1, md: 1.5},
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                image={category.image}
                alt={category.alt}
                label={category.label}
                priority={category.priority}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          mt: -5,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: { xs: 3, md: 6 },
            maxWidth: { xs: "100%", md: "1100px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              textAlign: "center",
              width: "60%",
              mx: "auto",
              fontSize: { xs: 14, md: 16 },
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#9795B5",
              mb: { xs: 6, md: 8 },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. 
          </Typography>

          {/* Article Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "50% 45%",
              },
              gap: 0,
              mb: { xs: 6, md: 5 },
            }}
          >
            {/* Large Vertical Card */}
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
                borderRadius: "12px",
                overflow: "hidden",
                ml: -1.8,
                width: "99%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "89%",
                  height: { xs: 220, md: 290 },
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/image (15).svg"
                  alt="Sustainable Travel Tips"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: 20, md: 22 },
                    fontWeight: 750,
                    lineHeight: 1.2,
                    color: "#1A1A1A",
                  }}
                >
                  Sustainable Travel Tips: Reducing Your Carbon Footprint
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/article-image (1).svg"
                      alt="Amelia Scott"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#667085",
                    }}
                  >
                    By Amelia Scott
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#667085",
                    }}
                  >
                    •
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#667085",
                    }}
                  >
                    August 20, 2022
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Right Column - Two Horizontal Cards */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 4, md: 4 },
                width: "100%",
                ml: -2.5,
              }}
            >
              {/* Horizontal Card 1 */}
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  width: "120%",
                  gap: 3,
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", sm: "290px" },
                    height: { xs: 200, sm: "185px" },
                    borderRadius: "12px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/article-image.svg"
                    alt="Chasing Sunsets"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
                  <Typography
                    sx={{
                      alignItems: "center",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: 18, md: 21 },
                      fontWeight: 700,
                      width: "110%",
                      lineHeight: 1.3,
                      color: "#1A1A1A",
                    }}
                  >
                    Chasing Sunsets: The World’s Most Scenic Destinations                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src="/article-image (1).svg"
                        alt="Amelia Scott"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#667085",
                      }}
                    >
                      Amelia Scott
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#667085",
                      }}
                    >
                      •
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        fontWeight: 400,
                        color: "#667085",
                      }}
                    >
                      Nov 29, 2024
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Horizontal Card 2 */}
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                  borderRadius: "12px",
                  overflow: "visible",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", sm: "290px" },
                    height: { xs: 200, sm: "185px" },
                    borderRadius: "12px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/article-image (1).svg"
                    alt="Hidden Gems"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
                  <Typography
                    sx={{
                      alignItems: "center",
                      fontFamily: "Inter, sans-serif",
                      fontSize: { xs: 18, md: 21 },
                      fontWeight: 700,
                      lineHeight: 1.3,
                      width: "150%",
                      color: "#1A1A1A",
                    }}
                  >
                    Hidden Gems: Europe’s Best Kept Secret Destinations                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                    <Image
                      src="/article-image (1).svg"
                      alt="Amelia Scott"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: "#667085",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Oliver Grant
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: "#667085",
                      }}
                    >
                      •
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: "#667085",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Nov 29, 2024
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Box>

        {/* Featured Card with Overlay */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 350, md: 410 },
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/Card Image.svg"
            alt="Technology Impact"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 24, md: 32 },
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.2,
              }}
            >
              The Future of Technology: How AI is Transforming Industries
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                    <Image
                      src="/article-image (1).svg"
                      alt="Amelia Scott"
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                By Amelia Scott
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                •
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                August 20, 2022
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>

      {/* Blog Posts Grid Section */}
      <Box
        sx={{
          py: { xs: 6, md: 11 },
          px: { xs: 3, md: 6 },
          ml:-5,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            pl: 0,
            pr: { xs: 2, md: 4 },
            maxWidth: { xs: "100%", md: "1150px" },
            ml: 3.5,
          }}
        >
          {/* Heading */}
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: 32, md: 42 },
                fontWeight: 880,
                lineHeight: 0.8,
                color: "#1A1A1A",
                background:
                  "linear-gradient(91deg, rgba(1, 121, 180, 1) 18%, rgba(136, 216, 255, 1) 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                // mb: 2,
              }}
            >
              Latest articles
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 14, md: 14 },
                fontWeight: 400,
                lineHeight: 3.5,
                color: "#667085",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
              .
            </Typography>
          </Box>

          {/* Blog Posts Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 3, md: 3 },
              mb: { xs: 6, md: 8 },
              ml: 3,
              mt: -2,
            }}
          >
    {/* Blog Post Card 1 */}
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, md: 200 },
            borderRadius: 0,
            overflow: "hidden",
          }}
      >
        <Image
          src="/IMAGE (21).svg"
          alt="Bill Walsh leadership lessons"
          fill
          style={{ objectFit: "cover", borderRadius: 0 }}
        />
      </Box>
      <Box
        sx={{
          pl: 0,
          pr: 1,
          pt: 1,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: 1.43,
              color: "#6941C6",
            }}
          >
            Alec Whitten • 1 Jan 2023
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 19.5, md: 21.5 },
                fontWeight: 600,
                lineHeight: 1.33,
                color: "#1A1A1A",
                flex: 1,
              }}
            >
              Bill Walsh leadership lessons
            </Typography>
            <Box 
              component={NextLink}
              href="/blog/bill-walsh-leadership-lessons"
              sx={{ 
                width: 24, 
                height: 24, 
                mt: 0.5,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#667085",
            }}
          >
            Like to know the secrets of transforming a 2-14 team into a
            3x Super Bowl winning Dynasty?
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F9F5FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F9F5FF",
                color: "#363F72",
              }}
            >
              Leadership
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#ECFDF3",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#ECFDF3",
                color: "#027A48",
              }}
            >
              Management
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>

    {/* Blog Post Card 2 */}
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, md: 200 },
            borderRadius: 0,
            overflow: "hidden",
          }}
      >
        <Image
          src="/IMAGE (16).svg"
          alt="PM mental models"
          fill
          style={{ objectFit: "cover", borderRadius: 0 }}
        />
      </Box>
      <Box
        sx={{
          pl: 0,
          pr: 1,
          pt: 1,
          pb: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: 1.43,
              color: "#6941C6",
            }}
          >
            Demi Wilkinson • 1 Jan 2023
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 19.5, md: 21.5 },
                fontWeight: 600,
                lineHeight: 1.33,
                color: "#1A1A1A",
                flex: 1,
              }}
            >
              PM mental models
            </Typography>
            <Box 
              component={NextLink}
              href="/blog/pm-mental-models"
              sx={{ 
                width: 24, 
                height: 24, 
                mt: 0.5,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#667085",
            }}
          >
            Mental models are simple expressions of complex processes or
            relationships.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F0F9FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F0F9FF",
                color: "#026AA2",
              }}
            >
              Product
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#EEF4FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#EEF4FF",
                color: "#3538CD",
              }}
            >
              Research
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F9F5FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F9F5FF",
                color: "#C4320A",
              }}
            >
              Frameworks
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>

    {/* Blog Post Card 3 */}
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, md: 200 },
            borderRadius: 0,
            overflow: "hidden",
          }}
      >
        <Image
          src="/IMAGE (17).svg"
          alt="What is Wireframing?"
          fill
          style={{ objectFit: "cover", borderRadius: 0 }}
        />
      </Box>
      <Box
        sx={{
          pl: 0,
          pr: 1,
          pt: 1,
          pb: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: 1.43,
              color: "#6941C6",
            }}
          >
            Candice Wu • 1 Jan 2023
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 19.5, md: 21.5 },
                fontWeight: 600,
                lineHeight: 1.33,
                color: "#1A1A1A",
                flex: 1,
              }}
            >
              What is Wireframing?
            </Typography>
            <Box 
              component={NextLink}
              href="/blog/what-is-wireframing"
              sx={{ 
                width: 24, 
                height: 24, 
                mt: 0.5,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#667085",
            }}
          >
            Introduction to Wireframing and its Principles. Learn from
            the best in the industry.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F9F5FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F9F5FF",
                color: "#475467",
              }}
            >
              Design
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F9F5FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F9F5FF",
                color: "#3538CD",
              }}
            >
              Research
            </Typography>
          </Box>
        </Box>
      </Box>
            </Paper>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 3, md: 3 },
              mb: { xs: 6, md: 8 },
              ml: 3,
              mt: -4,
            }}
          >
    {/* Blog Post Card 1 */}
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, md: 200 },
            borderRadius: 0,
            overflow: "hidden",
          }}
      >
        <Image
          src="/IMAGE (18).svg"
          alt="Bill Walsh leadership lessons"
          fill
          style={{ objectFit: "cover", borderRadius: 0 }}
        />
      </Box>
      <Box
        sx={{
          pl: 0,
          pr: 1,
          pt: 1,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: 1.43,
              color: "#6941C6",
            }}
          >
            Alec Whitten • 1 Jan 2023
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 19.5, md: 21.5 },
                fontWeight: 600,
                lineHeight: 1.33,
                color: "#1A1A1A",
                flex: 1,
              }}
            >
              Bill Walsh leadership lessons
            </Typography>
            <Box 
              component={NextLink}
              href="/blog/bill-walsh-leadership-lessons"
              sx={{ 
                width: 24, 
                height: 24, 
                mt: 0.5,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#667085",
            }}
          >
            Like to know the secrets of transforming a 2-14 team into a
            3x Super Bowl winning Dynasty?
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F9F5FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F9F5FF",
                color: "#363F72",
              }}
            >
              Leadership
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#ECFDF3",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#ECFDF3",
                color: "#027A48",
              }}
            >
              Management
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>

    {/* Blog Post Card 2 */}
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, md: 200 },
            borderRadius: 0,
            overflow: "hidden",
          }}
      >
        <Image
          src="/IMAGE (19).svg"
          alt="PM mental models"
          fill
          style={{ objectFit: "cover", borderRadius: 0 }}
        />
      </Box>
      <Box
        sx={{
          pl: 0,
          pr: 1,
          pt: 1,
          pb: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: 1.43,
              color: "#6941C6",
            }}
          >
            Demi Wilkinson • 1 Jan 2023
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 19.5, md: 21.5 },
                fontWeight: 600,
                lineHeight: 1.33,
                color: "#1A1A1A",
                flex: 1,
              }}
            >
              PM mental models
            </Typography>
            <Box 
              component={NextLink}
              href="/blog/pm-mental-models"
              sx={{ 
                width: 24, 
                height: 24, 
                mt: 0.5,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#667085",
            }}
          >
            Mental models are simple expressions of complex processes or
            relationships.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F0F9FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F0F9FF",
                color: "#026AA2",
              }}
            >
              Product
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#EEF4FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#EEF4FF",
                color: "#3538CD",
              }}
            >
              Research
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F9F5FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F9F5FF",
                color: "#C4320A",
              }}
            >
              Frameworks
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>

    {/* Blog Post Card 3 */}
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, md: 200 },
            borderRadius: 0,
            overflow: "hidden",
          }}
      >
        <Image
          src="/IMAGE (20).svg"
          alt="What is Wireframing?"
          fill
          style={{ objectFit: "cover", borderRadius: 0 }}
        />
      </Box>
      <Box
        sx={{
          pl: 0,
          pr: 1,
          pt: 1,
          pb: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: 1.43,
              color: "#6941C6",
            }}
          >
            Candice Wu • 1 Jan 2023
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: 19.5, md: 21.5 },
                fontWeight: 600,
                lineHeight: 1.33,
                color: "#1A1A1A",
                flex: 1,
              }}
            >
              What is Wireframing?
            </Typography>
            <Box 
              component={NextLink}
              href="/blog/what-is-wireframing"
              sx={{ 
                width: 24, 
                height: 24, 
                mt: 0.5,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#1A1A1A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13.5,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#667085",
            }}
          >
            Introduction to Wireframing and its Principles. Learn from
            the best in the industry.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F8F9FC",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F8F9FC",
                color: "#363F72",
              }}
            >
              Design
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.55,
              py: 0.55,
              borderRadius: "50px",
              backgroundColor: "#F9F5FF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11.5,
                fontWeight: 500,
                lineHeight: 1.43,
                backgroundColor: "#F9F5FF",
                color: "#3538CD",
              }}
            >
              Research
            </Typography>
          </Box>
        </Box>
      </Box>
            </Paper>
          </Box>

          {/* Pagination */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 2.5,
              borderTop: "1px solid #EAECF0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <Box sx={{ width: 20, height: 20 }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="#667085"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  lineHeight: 1.43,
                  color: "#667085",
                }}
              >
                Previous
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 0.25, alignItems: "center" }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.43,
                    color: "#7F56D9",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  cursor: "pointer",
                  "&:hover": {
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.43,
                    color: "#667085",
                  }}
                >
                  2
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  cursor: "pointer",
                  "&:hover": {
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.43,
                    color: "#667085",
                  }}
                >
                  3
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  cursor: "pointer",
                  "&:hover": {
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.43,
                    color: "#667085",
                  }}
                >
                  ...
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  cursor: "pointer",
                  "&:hover": {
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: 1.43,
                    color: "#667085",
                  }}
                >
                  8
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  lineHeight: 1.43,
                  color: "#667085",
                }}
              >
                Next
              </Typography>
              <Box sx={{ width: 20, height: 20 }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="#667085"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          width: "100%",
          backgroundImage: "url('/background-4.svg')",
          backgroundSize: "100% auto",
          mt: 15,
          mb: 0,
          position: "relative",
          overflow: "hidden",
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
    </Box>
  );
}

