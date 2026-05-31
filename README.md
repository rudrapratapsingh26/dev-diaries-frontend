# Dev Diaries — Frontend

A fullstack blog platform frontend built with React and Tailwind CSS. Features rich text editing with TinyMCE, image uploads to Cloudinary, JWT authentication, and protected routes.

---

## Tech Stack

- React + Vite
- Tailwind CSS v4
- Axios
- React Router DOM
- TinyMCE Rich Text Editor
- Context API for auth state

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PostCard.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── CreatePost.jsx
│   ├── EditPost.jsx
│   ├── SinglePost.jsx
│   └── MyPosts.jsx
└── utils/
    └── axios.js
```

---

## Features

- JWT authentication with auto token refresh
- Rich text editor with TinyMCE — bold, underline, headings, lists
- Image uploads from file manager via Cloudinary
- Protected routes — only logged in users can create or edit posts
- Author-only edit and delete on posts
- Draft and published post status
- Responsive layout with Tailwind CSS
- Auto redirect to login on token expiry

---

## Pages

| Route | Access | Description |
|-------|--------|-------------|
| / | Public | Home — all published posts |
| /register | Public | Register new account |
| /login | Public | Login |
| /posts/:slug | Public | Single post view |
| /create | Protected | Create new post |
| /edit/:id | Protected | Edit existing post |
| /my-posts | Protected | View your own posts |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/rudrapratapsingh26/dev-diaries-frontend.git

# Navigate to project directory
cd dev-diaries-frontend

# Install dependencies
npm install

# Run in development
npm run dev
```

---

## Environment

The app connects to the backend API hosted on Railway. To run locally with your own backend update the `baseURL` in `src/utils/axios.js`:

```js
const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true
})
```

---

## Live Demo

- **Frontend:** [dev-diaries-frontend-dun.vercel.app](https://dev-diaries-frontend-dun.vercel.app)
- **Backend:** [dev-diaries-backend-production.up.railway.app](https://dev-diaries-backend-production.up.railway.app)
- **Backend Repo:** [github.com/rudrapratapsingh26/dev-diaries-backend](https://github.com/rudrapratapsingh26/dev-diaries-backend)

---

## Author

**Rudra Pratap Singh**
- GitHub: [@rudrapratapsingh26](https://github.com/rudrapratapsingh26)
- Twitter: [@Rudrapratap2610](https://twitter.com/Rudrapratap2610)
