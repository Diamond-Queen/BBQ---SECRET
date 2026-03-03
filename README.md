# Big Rob's Rib Shack 🍖

A BBQ-themed web application built with React, Vite, and Prisma.

## Features

- **Boston Butt** - Slow-cooked perfection
- **Brunswick Stew** - Southern comfort in a bowl
- **Fried Turkey** - Crispy and delicious
- **Ribs** - Fall-off-the-bone goodness

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router DOM
- **Database**: Prisma ORM with PostgreSQL
- **Styling**: Custom CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "BBQ - SECRET"
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your database connection:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/bbq_db"
```

4. Set up Prisma:
```bash
npx prisma generate
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── pages/              # React page components
│   ├── index.jsx       # Main entry point
│   ├── boston-butt.jsx
│   ├── brunswick-stew.jsx
│   ├── friedturkey.jsx
│   └── ribs.jsx
├── prisma/             # Prisma schema and migrations
│   └── schema.prisma
├── stylesheets/        # CSS files
│   └── index.css
├── index.html          # HTML entry point
└── package.json        # Project dependencies

```

## License

ISC

---

*Built with ❤️ and BBQ sauce*
