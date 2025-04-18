# 💼 ShiftCycle Management App
## Effortlessly manage shifts and cycles!

**ShiftCycle Management App** is a modern frontend application designed to efficiently manage shift and cycle operations. With its user-friendly interface and robust tech stack, it enhances operational productivity with ease.

---

👉 **Live Demo:** []

### Demo

![Project Demo]()

## Features

-  Add & manage shift and cycle entries  
-  View, update, and delete records  
-  Form validation (Zod + React Hook Form)  
-  Real-time toast notifications (React Toastify)  
-  API operations with Axios and TanStack React Query  
-  Sleek UI built with Material UI  

---

## Tech Stack

- **React**: `^19.0.0`
- **React DOM**: `^19.0.0`
- **React Router DOM**: `^7.5.1`
- **React Hook Form**: `^7.55.0`
- **Zod**: `^3.24.3`
- **Material UI**: `^7.0.2`
- **@mui/icons-material**: `^7.0.2`
- **@mui/x-date-pickers**: `^8.0.0`
- **TanStack React Query**: `^5.74.4`
- **Axios**: `^1.8.4`
- **React Toastify**: `^11.0.5`
- **Day.js**: `^1.11.13`
- **React Icons**: `^5.5.0`

### Project Structure

```plaintext
src
├── App.jsx
├── api
│   └── axiosInstance.js
├── assets
├── components
│   ├── ErrorBoundary.jsx
│   ├── MenuListItems.jsx
│   ├── Sidebar.jsx
│   ├── forms
│   │   ├── CycleForm.jsx
│   │   └── ShiftForm.jsx
│   └── tables
│       ├── CycleTable.jsx
│       └── ShiftTable.jsx
├── hooks
│   ├── useCycles.js
│   └── useShifts.js
├── index.css
├── lib
│   ├── reactQueryClient.js
│   └── toast.js
├── main.jsx
├── pages
│   ├── CyclesPage.jsx
│   ├── Home.jsx
│   └── ShiftsPage.jsx
├── schemas
│   ├── cycleSchema.js
│   └── shiftSchema.js
├── services
│   ├── CycleService.js
│   └── ShiftService.js
└── styles
    ├── buttonStyles.js
    └── theme.js
```
1. **Clone the Repository and Navigate to the Project Directory:**

   ```bash
   git clone https://github.com/zbaharyilmaz/shift-cycyle-management-app.git

   cd shift-cycyle-management-app
   ```

2. **Install Dependencies:**
   ```bash
   pnpm install
   ```
3. **Set up API**
- Create an .env file in your project root and add the following values.
   ```bash
    VITE_API_BASE_URL=https://your-mockapi-url.com/
4. **Run the Development Server:**

   ```bash
    pnpm dev
   ```

6. **Open the App:**

- Visit http://localhost:3000 in your browser to view the app.

### Contributing

Feel free to fork the repo and submit PRs for improvements!