import React from "react";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

// Make sure the font exists in the specified path:
const interRegularFontP = fetch(
  new URL("../../../public/bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interBoldFontP = fetch(
  new URL("../../../public/Ibold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req) {
  try {
    const [interRegularFont, interBoldFont] = await Promise.all([
      interRegularFontP,
      interBoldFontP,
    ]);

    const boldText = "Bold Text";
    const regularText = "Regular Text";

    return new ImageResponse(
      (
        <div tw="h-full w-full flex flex-col justify-center items-center bg-gray-50 p-20">
          <p tw="text-7xl font-bold">{boldText}</p>
          <p tw="text-7xl font-regular">{regularText}</p>
        </div>
      ),
      {
        width: 1200,
        height: 627,
        fonts: [
          {
            name: "Inter",
            data: interRegularFont,
            style: "normal",
            weight: 400,
          },
          {
            name: "Inter",
            data: interBoldFont,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}