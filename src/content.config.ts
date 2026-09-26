import { defineCollection, type ImageFunction } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    imageAlt: z.string(),
  });

export const collections = {
  destination: defineCollection({
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./src/content/destinations",
    }),
    schema: commonSchema,
  }),
  gastronomy: defineCollection({
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./src/content/gastronomy",
    }),
    schema: commonSchema,
  }),
};
