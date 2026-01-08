# SpendWise - Expense Tracker

A modern, dark-mode personal expense tracker built with React, Vite, Tailwind CSS, and Supabase.

## 🛠 Prerequisites

Before starting, ensure you have:
1.  **Node.js** (v18 or higher) - [Download Here](https://nodejs.org/)
2.  **Visual Studio Code** - [Download Here](https://code.visualstudio.com/)
3.  **Supabase Account** - [Sign up Here](https://supabase.com/)

---

## 📦 1. Installation Instructions (Standard Vite + NPM)


### Option A: Install from `package.json` (Recommended)
simply run:

```bash
npm install
```

### Option B: Manually Install Packages
run the following commands in your terminal to install the required libraries:

1.  **Install Core React & Vite:**
    ```bash
    npm install react react-dom react-router-dom
    npm install -D vite @vitejs/plugin-react @types/react @types/react-dom
    ```

2.  **Install Supabase Client:**
    ```bash
    npm install @supabase/supabase-js
    ```

3.  **Install Icons:**
    ```bash
    npm install lucide-react
    ```

4.  **Install Tailwind CSS:**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

---

## 🗄️ 2. Database (Supabase)


```sql
create table transactions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  title text not null,
  amount numeric not null,
  type text check (type in ('income', 'expense')) not null,
  category text default 'General',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

---

## 💻 3. Running the App

1.  **Configure Environment Variables**:
    Create a `.env` file in the root folder and add your keys:
    ```env
    VITE_SUPABASE_URL=https://your-project-id.supabase.co
    VITE_SUPABASE_ANON_KEY=your-anon-key-here
    ```

2.  **Start the Development Server**:
    ```bash
    npm run dev
    ```

3.  Open `http://localhost:5173` in your browser.

---