// AiChatBox.jsx

import { Box, Typography, Paper, Chip, TextField, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// ... import other necessary icons

export default function AiChatBox() {
  return (
    <Paper
        elevation={8}
        sx={{
            borderRadius: 4,
            p: 3,
            width: "525px",
            minHeight: "140px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.15))",
            backdropFilter: "blur(40px)",
            border: "2px solid white",
            padding: 2,
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
    >
        {/* Top Bar */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1, justifyContent: "space-between"}}>
            {/* ... (rest of the Top Bar code) */}
            <Box sx={{display: "flex"}}>
    <img src="sparkles-sharp.svg" alt="Example" />
    <Typography sx={{ fontWeight: 600, color: "#4A4A4A", ml: 1 }}> AI Assist</Typography>
    </Box>
    <Box sx={{alignItems: "center", display: "flex", gap: 1}}>
    <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
    <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
    <Box sx={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#28C840" }} />
    </Box>
        </Box>

        {/* Chat Messages */}
        <Box
            sx={{
                flex: 1,
                ackgroundColor: "transparent",
                borderRadius: 3,
                p: 1,
                flexDirection: "column",
                gap: 1,
                overflowY: "auto",
              }}
            >
              {/* Bot Message */}
              <Typography
                sx={{
                  alignSelf: "flex-end",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 10,
                  px: 2,
                  py: 1,
                  my: 2,
                  border: "2px solid white",
                  color: "#4A4A4A",
                  maxWidth: "80%",
                  display: "inline-block",
                  fontSize: "16",
                  fontFamily: "Inter",
                  lineHeight: 1.5,
                }}
              >
                Hi there, ask me anything
              </Typography>
          
              {/* User Message */}
              <Typography
                sx={{
                  alignSelf: "flex-end",
                  border: "2px solid white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: 3,
                  backdropFilter: "blur(10px)",
                  px: 2,
                  py: 1,
                  color: "#2B2B2B",
                  maxWidth: "90%",
                  display: "inline-block",
                  fontFamily: "Inter",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes. Lorem ipsum dolor sit     </Typography>
          
                <Typography
                sx={{
                  alignSelf: "flex-end",
                  backgroundColor: "white",
                  backdropFilter: "blur(10px)",
                  borderRadius: 10,
                  px: 2,
                  py: 1,
                  my: 2,
                  border: "2px solid white",
                  color: "4A4A4A#",
                  maxWidth: "80%",
                  display: "inline-block",
                  fontSize: "16",
                  fontFamily: "Inter",
                  lineHeight: 1.5,
                }}
              >
                What is this site about?
              </Typography>
          
            {/* ... (all Typography blocks for messages) */}
        </Box>

        {/* Suggested Questions */}
        <Box sx={{ mt: 2 }}>
        <Typography sx={{ mb: 1, opacity: 0.9, fontSize: "0.9rem", display:"flex", gap:1, color: "#201D2F"}}>
    <img src="sparkles-sharp.svg" alt="Example" /> I suggest you some names you can ask me..
    </Typography>
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb:-2 }}>
      <Chip
        label="What can you do?"
        sx={{
          backgroundColor: "#131313",
          font:10,
          fontFamily:"Plus Jakarta Sans",
          color: "#fff",
          "&:hover": { backgroundColor: "#0179B4" },
        }}
      />
      <Chip
        label="What is this site about?"
        sx={{
          backgroundColor: "#131313",
          font:10,
          fontFamily:"Plus Jakarta Sans",
          color: "#fff",
          "&:hover": { backgroundColor: "#0179B4" },
        }}
      />
    </Box>
            {/* ... (all Chip components) */}
        </Box>

        {/* Input Field */}
        <Box
            sx={{
                mt: 3,
                display: "flex",
                alignItems: "flex-end", // aligns send button to bottom
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: 3,
                border: "2px solid white",
                height: 100,
                px: 2,
                py: 1,
              }}
            >
              <TextField
                fullWidth
                placeholder="Ask a question....."
                variant="standard"
                multiline
                minRows={1} // starts with one row
                maxRows={4} // grows up to 4 rows
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: "#2B2B2B",
                    fontSize: 16,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "flex-end", // aligns text at bottom
                    padding: 0, // remove default padding
                  },
                }}
                sx={{
                  backgroundColor: "transparent",
                  flex: 1,
                }}
              />
              <IconButton
                sx={{
                  // background: "linear-gradient(90deg, #0179B4 1.98%, #88D8FF 118.96%, #0179B4 281.67%)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #0169A4 1.98%, #78C8EF 118.96%, #0169A4 281.67%)",
                  },
                }}
              >
                <ArrowForwardIcon sx={{ color: "black", transform: "rotate(360deg)" }} />
              </IconButton>
            {/* ... (TextField and IconButton) */}
        </Box>
    </Paper>
  );
}