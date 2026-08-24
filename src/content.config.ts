import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.string(),
    order: z.number(),
    domain: z.array(z.string()),
    stack: z.array(z.string()),
    image: z.string(),
    links: z.object({
      live: z.string().optional(),
      repos: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    }).optional(),
  }),
});

export const collections = { projects };
