import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Spotify",
  description: "An appliaction powered by Wordpress, React, Next.js and Spotify API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
