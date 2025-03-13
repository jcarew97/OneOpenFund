export const metadata = {
  title: "Grant Genie",
  description: "Grant Genie is a chatbot that helps you find grants.",
};

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
