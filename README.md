# ⚛️ Redux Learning Journey: Vanilla JS Core

> **Part 1** of the Redux Mastery Series.

This repository demonstrates the core concepts of **Redux State Management** using pure JavaScript (Vanilla JS) within a Node.js environment. It covers synchronous actions (Store Simulation) and asynchronous operations (API Fetching) using Middleware.

## 🛠️ Tech Stack & Versioning Note

To ensure deep understanding of the internal working mechanism of Redux (before diving into Redux Toolkit), this project intentionally uses **Legacy Versions**:

- **Redux:** `^4.1.2` (To use the original `createStore` pattern).
- **Redux-Thunk:** `^2.4.2` (Stable compatibility with CommonJS).
- **Node.js:** Runtime Environment.

> **Why?** Modern Redux (v5+) enforces Redux Toolkit and ES Modules, which abstracts away the core logic we aim to learn here. Using these specific versions guarantees stability in a standard Node.js environment.

---

## 📂 Project Structure

- **`src/index.js`**:
  - Implements a **Cake & Ice Cream Shop** simulation.
  - Demonstrates: `combineReducers`, `Action Creators`, `Middleware (Logger)`.
  
- **`src/fetchUsers.js`**:
  - Implements **Async User Fetching** logic.
  - Demonstrates: `redux-thunk`, `axios`, `Async Actions (Request/Success/Failure)`.

---

## 🚀 How to Run

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Shop Simulation (Sync Logic):**
   See the logger tracking cakes and ice creams purchase.
   ```bash
   npm start
   ```

3. **Run the Users Fetching (Async Logic):**
   See how Thunk handles API requests and state updates.
   ```bash
   npm run fetch
   ```

---

## 🧠 Key Concepts Covered

### 1. The Store Pattern
- **Actions:** Plain objects describing *what* happened (`BUY_CAKE`).
- **Reducers:** Pure functions describing *how* state changes based on actions.
- **Store:** The single source of truth holding the state.

### 2. Middleware & Async Operations
- **Redux Logger:** Logs every state change for debugging.
- **Redux Thunk:** Allows action creators to return a *function* instead of an object, enabling asynchronous operations (like API calls) before dispatching the final action.

---

## 📝 License
This project is for educational purposes.
