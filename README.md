
# 📝 Paste App

A simple text-pasting web app made with **React** and **Redux**. You can create, edit, view, and manage pastes just like a personal mini Notepad or Pastebin.

## 🚀 Features

* ✅ Create a new paste with a title and content
* ✏️ Edit existing pastes
* 👁️ View full paste on a separate page
* 🔍 Search through your saved pastes
* 🗑️ Delete pastes
* 📋 (Planned) Copy/share buttons for future use

## 🛠️ Tech Stack

* **Frontend**: React
* **State Management**: Redux Toolkit
* **Routing**: React Router
* **Toasts**: react-hot-toast
* **Styling**: Basic CSS (custom)

## 📂 Project Structure

```
/src
  ├── components/
  │   ├── Home.jsx         # Main paste creator + editor
  │   ├── Paste.jsx        # All pastes listed with options
  │   ├── ViewPaste.jsx    # Single paste view page
  │   └── Navbar.jsx       # Navigation bar
  ├── redux/
  │   └── pasteSlice.js    # Redux logic for pastes
  ├── store.js             # Redux store setup
  ├── App.jsx              # Routing and layout
  ├── main.jsx             # Root render file
```

## 🔄 How It Works

* All pastes are saved in Redux state (not yet persisted to DB).
* Each paste gets a unique `_id` using timestamp-based strings.
* Routing is handled using `createBrowserRouter` and shows different components:

  * `/` → Home (create/edit)
  * `/pastes` → List of all pastes
  * `/pastes/:id` → View individual paste

## 💻 Getting Started

1. Clone the repo
2. Install dependencies

   ```bash
   npm install
   ```
3. Start the app

   ```bash
   npm run dev
   ```
4. Open in browser:
   [http://localhost:5173](http://localhost:5173)

## 🎯 To Improve Later

* Add backend (maybe Node + MongoDB or PHP + MySQL)
* Save pastes permanently
* User login system
* Copy and share button functionality
* Syntax highlighting

---

Let me know if you'd like me to generate this as a downloadable `.md` file.
