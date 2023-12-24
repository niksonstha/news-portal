import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },

  styles: {
    global: {
      body: {
        bg: "#BBAB8C",
        color: "black",
      },
      // Add custom scrollbar styles here
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#ED7D31", // Color of the scrollbar thumb
        borderRadius: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: "#E5E7EB", // Color of the scrollbar track
      },
      scrollbarWidth: "thin", // For non-WebKit browsers
      scrollbarColor: "#6B7280 #E5E7EB", // Thumb and track color for non-WebKit browsers
    },
  },
});
