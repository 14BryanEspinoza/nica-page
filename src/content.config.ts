import { defineCollection, type ImageFunction } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: image(),
    imageAlt: z.string(),
  });

const destinationSchema = ({ image }: { image: ImageFunction }) =>
  commonSchema({ image }).extend({
    attractions: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
    moreInfoUrl: z.string(),
  });

const gastronomySchema = ({ image }: { image: ImageFunction }) =>
  commonSchema({ image }).extend({
    ingredients: z.array(z.string()),
    tag: z.string(),
  });

export const collections = {
  destination: defineCollection({
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./src/content/destinations",
    }),
    schema: destinationSchema,
  }),
  gastronomy: defineCollection({
    loader: glob({
      pattern: "**/*.{md,mdx}",
      base: "./src/content/gastronomy",
    }),
    schema: gastronomySchema,
  }),
};
