# MomEase

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?logo=googlegemini&logoColor=white)

## Short description

MomEase is a pregnancy and postpartum companion app that brings mood tracking, an AI chat companion, educational content, a due-date and weekly progress tracker, a community forum, and a small shop into a single, calming platform.

## Technologies

Next.js 15 (App Router), TypeScript, ShadCN UI, Tailwind CSS, Genkit with Google Gemini models for the AI features, React Hook Form with Zod, Recharts, Lucide React, localStorage for local data persistence

## Features

- An AI companion and mood tracker that logs daily moods and symptoms and visualizes trends over time
- An exercises and well-being hub with trimester-specific physical exercises and mental well-being resources
- An educate section with categorized articles on pregnancy, nutrition, vaccination, and child care, including AI-generated article summaries
- A due date calculator and AI-generated weekly pregnancy progress updates
- A community forum and FAQ section
- An ambient music player with calming soundscapes
- A directory for finding professional help such as OB/GYNs and postpartum therapists
- A shop with cart functionality for browsing and purchasing baby and mother essentials
- Light/dark mode with a saved preference, and a collapsible sidebar with a glassmorphism style

## The process

This was a team project built by Team Coin Toss, with Mohammed Shahzad Anwar as project lead and full-stack developer, Syed Yaseenuddin focused on the frontend and UI/UX, Mohammed Ali Khan on backend and AI integration, and Sohail Mohammed Ayan on QA and content. Bringing together so many different feature areas (AI chat, tracking, a forum, a shop) under one consistent design system was the main challenge, which is why a shared UI library (ShadCN) and a single styling approach (Tailwind) mattered for keeping the app coherent across sections.

## What I learned

- Building and styling a large multi-feature app with a shared component library and consistent design system
- Working within a team, with each person owning a different area of the app (frontend, backend/AI, QA)
- Integrating generative AI (Genkit with Gemini models) for chat, summarization, and personalized content
- Using React Context for cross-cutting state like theme and cart, separate from page-level state
- Validating forms with React Hook Form and Zod

## How it can be improved

- Move from localStorage to a real backend and database so data persists across devices
- Build out a full e-commerce backend for the shop instead of a demo checkout
- Add real-time chat to the community forum
- Add appointment reminders and personalized exercise or meal plans

## How to run the project

1. Clone the repo and run `npm install`
2. Create a `.env` file with a `GOOGLE_API_KEY` from Google AI Studio
3. Run `npm run dev` to start the Next.js app (usually on `http://localhost:9002`)
4. Optionally, run `npm run genkit:dev` to inspect the Genkit AI flows
