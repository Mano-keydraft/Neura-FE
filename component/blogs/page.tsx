"use client";

import Header from "../header";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
  Button,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";

export default function BlogPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });

  const popularPosts = [
    {
      image: "/IMAGE (9).svg",
      category: "Product",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/IMAGE (10).svg",
      category: "Product | Enterprise",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/IMAGE (11).svg",
      category: "Productivity",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "/IMAGE (12).svg",
      category: "Productivity",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const relatedArticles = [
    {
      image: "/IMAGE (12).svg",
      category: "Product",
      readTime: "4 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem",
    },
    {
      image: "/IMAGE (11).svg",
      category: "Product",
      readTime: "6 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,",
    },
    {
      image: "/IMAGE (10).svg",
      category: "Productivity",
      readTime: "7 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem",
    },
    {
      image: "/IMAGE (9).svg",
      category: "Productivity",
      readTime: "7 Minute Read",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFFFF", minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <Box sx={{ mt: 5 ,width: "90%%", maxWidth: "1440px", mx: "auto", px: { xs: 3, md: 6, lg: 10, xl: 12 } }}>
      <Header />
      </Box>

      {/* Content Container with Side Padding */}
      <Box sx={{ mt: 7, width: "100%", maxWidth: "1440px", mx: "auto", px: { xs: 4, md: 7.5, lg: 13, xl: 17 }, py: { xs: 4, md: 6 } }}>
        {/* Category, Heading, and Meta Section - Outside Grid */}
        <Box sx={{ maxWidth: { lg: "843px" }, mb: 4 }}>
          {/* Category */}
          <Typography
            sx={{
              fontFamily: "Segoe UI, sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "1.75em",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#115FD6",
              mb: 2,
            }}
          >
            Category
          </Typography>

          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontSize: { xs: "36px", md: "44px" },
              fontWeight: 400,
              lineHeight: "1.15em",
              color: "#172B4D",
              mb: 3,
              width: "70%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>

          {/* Meta Section */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ mb: 4 , mt: 9}}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                border: "1px solid #979797",
                bgcolor: "#f0f0f0",
                overflow: "hidden",
              }}
            >
              <Image
                src="/Author Image.svg"
                alt="Author"
                width={40}
                height={40}
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Segoe UI",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "1.5em",
                color: "#172B4D",
              }}
            >
                By
            </Typography>
            <Typography
              sx={{
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "1.6em",
                color: "#172B4D",
              }}
            >
              Jordan Mirchev
            </Typography>
            <Typography
              sx={{
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "1.5em",
                color: "#172B4D",
              }}
            >
              |
            </Typography>
            <Typography
              sx={{
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "1.6em",
                color: "#172B4D",
              }}
            >
              Published on
            </Typography>
            <Typography
              sx={{
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "1.6em",
                color: "#172B4D",
              }}
            >
              November 14, 2022
            </Typography>
            <Typography
              sx={{
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "1.5em",
                color: "#172B4D",
              }}
            >
              |
            </Typography>
            <Typography
              sx={{
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "1.6em",
                color: "#172B4D",
              }}
            >
              2 min read
            </Typography>
          </Stack>
        </Box>

        {/* Feature Image - Outside Grid, with side padding */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%",
            height: { xs: "250px", md: "499px" },
            mb: 4,
            position: "relative",
            overflow: "hidden",
            bgcolor: "#f0f0f0",
          }}
        >
          <Image
            src="/Feature Image.svg"
            alt="Feature"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Grid Layout for Main Content and Sidebar */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, lg: 2.5 },
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
          }}
        >
          {/* Main Content */}
          <Box sx={{ flex: 1, maxWidth: { lg: "843px" }, width: "100%", mr: 4, mt: 2}}>

            {/* Blog Body */}
            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  fontFamily: "Segoe UI",
                  fontSize: "18.5px",
                  fontWeight: 400,
                  lineHeight: "1.5em",
                  color: "#000000",
                  mb: 3,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "18.5px",
                  fontWeight: 400,
                  lineHeight: "1.5em",
                  color: "#000000",
                  mb: 3,
                }}
              >
                Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "18.5px",
                  fontWeight: 400,
                  lineHeight: "1.5em",
                  color: "#000000",
                  mb: 3,
                }}
              >
                Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              </Typography>

              <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontSize: { xs: "36px", md: "43px" },
              fontWeight: 400,
              lineHeight: "1.15em",
              color: "#172B4D",
              mb: 3,
              width: "90%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>

              <Typography
                sx={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "18.5px",
                  fontWeight: 400,
                  lineHeight: "1.5em",
                  color: "#000000",
                  mb: 3,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "18.5px",
                  fontWeight: 400,
                  lineHeight: "1.5em",
                  color: "#000000",
                  mb: 3,
                }}
              >
                Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "18.5px",
                  fontWeight: 400,
                  lineHeight: "1.5em",
                  color: "#000000",
                  mb: 3,
                }}
              >
                Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              </Typography>
              
            </Box>

            {/* Blog Footer */}
            <Divider sx={{ borderColor: "#D6DADC", mb: 3, mt: 13 }} />
            <Typography
              sx={{
                fontFamily: "Segoe UI, sans-serif",
                fontSize: "17px",
                fontWeight: 400,
                lineHeight: "3.65em",
                color: "#172B4D",
                mb: 6,
              }}
            >
              Good or bad, we'd love to hear your thoughts. Find us on Twitter
              (@twitter)
            </Typography>

            {/* Related Articles */}
            <Box sx={{ mb: 8 }}>
              <Typography
                sx={{
                  fontFamily: "Segoe UI, sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "1.75em",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#42526E",
                  mb: 4,
                }}
              >
                Here are some related articles you may find interesting:
              </Typography>

              <Stack spacing={4}>
                {relatedArticles.map((article, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: 3,
                      flexDirection: { xs: "column", sm: "row" },
                      
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "250px" },
                        height: "199px",
                        position: "relative",
                        overflow: "hidden",
                        bgcolor: "#f0f0f0",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ mb: 1 }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Segoe UI, sans-serif",
                            fontSize: "10px",
                            fontWeight: 400,
                            lineHeight: "1.75em",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#42526E",
                          }}
                        >
                          {article.category}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Segoe UI, sans-serif",
                            fontSize: "10px",
                            fontWeight: 400,
                            lineHeight: "1.75em",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#42526E",
                          }}
                        >
                          -
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Segoe UI, sans-serif",
                            fontSize: index === 2 || index === 3 ? "9px" : "10px",
                            fontWeight: 400,
                            lineHeight: index === 2 || index === 3 ? "1.91em" : "1.75em",
                            letterSpacing: "0.065em",
                            textTransform: "uppercase",
                            color: "#42526E",
                          }}
                        >
                          {article.readTime}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          fontFamily: "Segoe UI, sans-serif",
                          fontSize: index === 1 ? "20px" : "20px",
                          fontWeight: 400,
                          lineHeight: index === 1 ? "1.45em" : "1.33em",
                          color: "#172B4D",
                          mb: 1.5,
                        }}
                      >
                        {article.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Segoe UI, sans-serif",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "1.5em",
                          color: "#172B4D",
                        }}
                      >
                        {article.excerpt}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* Sidebar */}
          {!isMobile && (
            <Box sx={{ width: { lg: "317px" }, flexShrink: 0, mr: -6}}>
              {/* Popular Posts */}
              <Box sx={{ mb: 6 }}>
                <Typography
                  sx={{
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "1.7em",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#42526E",
                    mb: 3,
                  }}
                >
                  Popular Posts
                </Typography>

                <Stack spacing={4}>
                  {popularPosts.map((post, index) => (
                    <Box key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          height: "70px",
                          width: "83%",
                          mb: index < popularPosts.length - 1 ? 3 : 0,
                        }}
                      >
                        <Box
                          sx={{
                            width: "70px",
                            height: "76px",
                            position: "relative",
                            borderRadius: "4px",
                            overflow: "hidden",
                            bgcolor: "#f0f0f0",
                            flexShrink: 0,
                          }}
                        >
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            sx={{
                              fontFamily: "Segoe UI, sans-serif",
                              fontSize: "10px",
                              fontWeight: 400,
                              lineHeight: "1.75em",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: "#42526E",
                              mb: 0,
                            }}
                          >
                            {post.category}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Segoe UI",
                              fontSize: index === 1 ? "17px" : "17px",
                              fontWeight: 400,
                              lineHeight: index === 1 ? "1.26em" : "1.2em",
                              color: "#172B4D",
                            }}
                          >
                            {post.title}
                          </Typography>
                        </Box>
                      </Box>
                      {index < popularPosts.length - 1 && (
                        <Divider
                          sx={{
                            borderColor: "#172B4D",
                            opacity: 0.1,
                            mt: 3,
                          }}
                        />
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Ad Section */}
              <Paper
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(0, 67, 112, 1) 0%, rgba(0, 152, 252, 1) 100%)",
                  borderRadius: "4px",
                  p: 3,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    color: "#FFFFFF",
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Get More Done Together With US
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Segoe UI, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "1.5em",
                    color: "#FFFFFF",
                    mb: 3,
                    textAlign: "center",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    border: "2px solid #DEEBFF",
                    borderRadius: "3px",
                    py: 1.5,
                    px: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Segoe UI, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "1.25em",
                      color: "#091E42",
                    }}
                  >
                    Get Started
                  </Typography>
                </Box>
              </Paper>
            </Box>
          )}
        </Box>
      </Box>

      {/* Footer - Full Width Background */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#FFFFFF",
          mt: 15,
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
    </Box>
  );
}

