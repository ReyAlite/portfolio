import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projekte = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projekte' }),
  schema: z.object({
    title: z.string(),
    beschreibung: z.string(),
    vorschaubild: z.string(),
    bilder: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    datum: z.string(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { projekte };