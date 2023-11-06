import React from 'react'

const title = "Hellow World";
const description =
  "Helooooo worlds";

export const metadata = {
  metadataBase: new URL("http://localhost:3000/og"),
  title: title,
  description: description,
  image: `http://localhost:3000/og?title=${title}`,
  openGraph: {
    title: title,
    description: description,
    url: "http://localhost:3000/og",
    siteName: "XIOHOO",
    images: [
      {
        // Find/create nice apple banner
        url: `http://localhost:3000/og?title=${title}`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: title,
    description: description,
    creator: "@XIOHOO",
  },
};
const page = () => {
  return (
    <div>page</div>
  )
}

export default page