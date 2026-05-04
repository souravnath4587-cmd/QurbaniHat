# 🐄 QurbaniHat

QurbaniHat is a modern online livestock marketplace built for Eid-ul-Adha, where users can بسهولة browse, select, and book healthy and verified animals from the comfort of their home.

---

## 🚀 Features

- 🐄 Browse cows, goats, and sheep
- 🔍 Filter & sort animals (price, type, name)
- 📄 Detailed animal pages
- 🛒 Booking system with modal form
- 🔐 Authentication system (login required for booking)
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS

---

## 🧑‍💻 Tech Stack

- **Frontend:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Authentication:** NextAuth / Firebase (optional)
- **Notifications:** React Hot Toast

---

## 📂 Project Structure

```
app/
 ├── (main)/
 │   ├── page.jsx
 │   ├── layout.jsx
 │
 ├── animals/
 │   ├── page.jsx
 │   ├── [id]/page.jsx
 │
 ├── about/page.jsx
 ├── contact/page.jsx

components/
 ├── Navbar.jsx
 ├── Footer.jsx
 ├── AnimalCard.jsx
 ├── BookingModal.jsx
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/qurbanihat.git

# Go to project folder
cd qurbanihat

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

---

## 📸 Pages Overview

- **Home Page** → Hero, Featured Animals, Qurbani Guide
- **Animals Page** → Filter + Grid Gallery
- **Animal Details Page** → Full details + Order Now
- **About Page** → Farm info, team, trust
- **Contact Page** → Contact form + info

---

## 🛒 Booking Flow

1. User clicks **Order Now**
2. Login required check
3. Booking modal opens
4. User fills form (name, email, phone, address)
5. Submit → success toast

---

## 💡 Future Improvements

- 💳 Online payment (bKash / Nagad)
- ⭐ Reviews & ratings system
- ❤️ Wishlist feature
- 📦 Order tracking
- 📊 Admin dashboard

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📞 Contact

📍 Feni, Chattogram, Bangladesh
📧 [support@qurbanihat.com](mailto:support@qurbanihat.com)
📞 +880 1234-567890

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
