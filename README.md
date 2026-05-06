# Next.js Mock Chat UI

A simple Next.js app that demonstrates a chat interface with a mock backend API. It is built using the App Router and TypeScript.

## Features

- Chat UI with modern bubbles and sender styling
- Mock backend at `/api/chat`
- Realistic typing/loading state
- Easy foundation for future AI/RAG integration

## Run locally

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open http://localhost:3000





## GitHub repository setup

This project is already connected to your GitHub repository named `javascript`.

If you need to push updates again, use:

```bash
git add .
git commit -m "Update Next.js mock chat app"
git push origin master
```

If you have not yet created the repo on GitHub, create it first at `https://github.com/Anii109/javascript`, then run:

```bash
git remote add origin https://github.com/Anii109/javascript.git
git branch -M master
git push -u origin master
```

## Deploying to Vercel

1. Sign in to Vercel and import the repository from GitHub.
2. Select the `javascript` repository.
3. Vercel will detect the Next.js app automatically and build it.
4. After deployment, Vercel provides a public URL you can share.

## Notes

- The frontend sends messages to the mock backend at `/api/chat`.
- Later, you can replace the mock route with a real AI/RAG API.
