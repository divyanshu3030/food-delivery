# 🍔 Food Ordering App

A responsive food ordering web application built using **React.js**, **Redux Toolkit**, and **Tailwind CSS**. Users can browse food items by category, add items to cart, update quantities, remove items, and view the complete order summary.

## 🚀 Features

* 🍽️ Food items displayed in cards
* 🔍 Food category filtering
* 🥗 Veg / Non-Veg food identification
* 🛒 Add items to cart
* ➕ Increase item quantity
* ➖ Decrease item quantity
* 🗑️ Remove items from cart
* 💰 Automatic subtotal calculation
* 🚚 Delivery fee calculation
* 🧾 Tax calculation
* 💵 Automatic total calculation
* 📱 Responsive UI
* 🔔 Toast notifications
* ⚡ Redux Toolkit for cart state management

## 🛠️ Technologies Used

* React.js
* JavaScript
* Redux Toolkit
* React Redux
* Tailwind CSS
* React Icons
* React Toastify
* Vite

## 📂 Main Structure

```text
src/
├── assets/
├── components/
│   ├── Card.jsx
│   ├── Card2.jsx
│   └── Nav.jsx
├── context/
│   └── UserContext.jsx
├── redux/
│   ├── cartSlice.js
│   └── store.js
├── Category.js
├── food.js
└── pages/
    └── Home.jsx
```

## 🛒 Cart Management

Redux Toolkit is used to manage cart data.

Available actions:

* `AddItem`
* `RemoveItem`
* `IncrementQty`
* `DecrementQty`

## 📦 Installation

```bash
npm install
```

## ▶️ Run the Project

```bash
npm run dev
```

The application will run on the local development server provided by Vite.

## 💡 Project Highlights

* Category-based food filtering
* Centralized cart state using Redux
* Dynamic price and quantity calculations
* Clean and responsive Tailwind CSS design
* Component-based React architecture
