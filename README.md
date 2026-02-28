# Donezo Dashboard

A modern, responsive admin dashboard built with React and Tailwind CSS v4. It connects to a REST API to display real-time data including user stats, product listings, analytics charts, and more.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Private-gray)

---

## Features

- **JWT Authentication** — Login with token-based auth, auto-logout on expiry, and session expiry warning
- **Protected Routes** — Dashboard accessible only to authenticated users
- **Dashboard Widgets** — Stats cards, analytics bar chart, doughnut progress chart, product list, user list, reminders, and time tracker
- **Animated UI** — Page transitions, staggered fade-in animations, and hover-lift effects on cards
- **Responsive Layout** — Fixed sidebar, sticky header, scrollable main area
- **REST API Integration** — Axios with JWT interceptors and global 401 handling
- **Chart.js Visualizations** — Bar chart (views/clicks/conversions) and doughnut chart (active vs inactive users)

---

## Tech Stack

| Technology      | Version | Purpose                    |
| --------------- | ------- | -------------------------- |
| React           | 19      | UI framework               |
| Vite            | 6       | Build tool & dev server    |
| Tailwind CSS    | 4       | Utility-first styling      |
| React Router    | 7       | Client-side routing        |
| Axios           | 1.7+    | HTTP client                |
| Chart.js        | 4.4+    | Data visualization         |
| react-chartjs-2 | 5.2+    | React wrapper for Chart.js |
| Lucide React    | 0.469   | Icon library               |

---

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.jsx          # Login form with validation
│   │   ├── ProtectedRoute.jsx     # Auth guard for routes
│   │   └── SessionWarning.jsx     # Token expiry warning banner
│   ├── common/
│   │   ├── Avatar.jsx             # User avatar component
│   │   ├── Loader.jsx             # Loading spinner
│   │   └── PageTransition.jsx     # Route transition animation
│   ├── dashboard/
│   │   ├── StatsCards.jsx         # Overview stat cards (users, revenue, growth)
│   │   ├── AnalyticsChart.jsx     # Bar chart — views, clicks, conversions
│   │   ├── OverviewProgress.jsx   # Doughnut chart — active vs inactive users
│   │   ├── ProductList.jsx        # Product listing from API
│   │   ├── UsersList.jsx          # Users with status badges
│   │   ├── RemindersCard.jsx      # Static reminders widget
│   │   └── TimeTracker.jsx        # Functional timer with play/pause/stop
│   └── layout/
│       ├── Layout.jsx             # Main layout (sidebar + header + content)
│       ├── Sidebar.jsx            # Fixed navigation sidebar
│       ├── Header.jsx             # Top bar with search, notifications, profile
│       └── MobileAppPromo.jsx     # Mobile app promotion card
├── context/
│   └── AuthContext.jsx            # Global auth state, JWT decode, auto-logout
├── hooks/
│   ├── useAuth.js                 # Auth context hook
│   └── useFetch.js                # Data fetching hook with cancellation
├── pages/
│   ├── LoginPage.jsx              # Login page with split layout
│   └── DashboardPage.jsx          # Main dashboard page
├── services/
│   └── api.js                     # Axios instance, interceptors, API endpoints
├── styles/
│   └── index.css                  # Tailwind config, animations, custom styles
├── utils/
│   ├── helpers.js                 # Formatting utilities (currency, date, etc.)
│   └── jwt.js                     # JWT decode, expiry check utilities
├── App.jsx                        # Route definitions
└── main.jsx                       # App entry point
```

---

## API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/login`        | Authenticate user  |
| GET    | `/api/dashboard`    | All dashboard data |
| GET    | `/api/overview`     | Overview stats     |
| GET    | `/api/users`        | List all users     |
| GET    | `/api/users/:id`    | Get user by ID     |
| GET    | `/api/analytics`    | Analytics data     |
| GET    | `/api/products`     | List all products  |
| GET    | `/api/products/:id` | Get product by ID  |

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AH-Ratul/donezo_dashboard.git
cd donezo_dashboard

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=
```

### Development

```bash
pnpm dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

---

## Demo Credentials

```
Email:    admin@example.com
Password: password123
```

---

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start development server |
| `pnpm build`   | Build for production     |
| `pnpm preview` | Preview production build |
