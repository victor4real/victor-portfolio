# Victor Onyenam - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer.

## 🚀 Live Demo

Visit the live site: [Your Vercel URL will appear here after deployment]

## ✨ Features

- **Responsive Design** - Works beautifully on all devices
- **Modern UI** - Built with React and Tailwind CSS
- **Smooth Animations** - Engaging user experience
- **Project Showcase** - Featuring the Emotion Spotter App
- **Contact Integration** - Easy ways to get in touch
- **Downloadable CV** - One-click resume download

## 🛠️ Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Shadcn/ui Components
- Lucide React Icons
- React Router DOM

### Backend (Available for future features)
- FastAPI
- MongoDB
- Python

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/victor4real/victor-portfolio.git
cd victor-portfolio
```

2. Install dependencies:
```bash
cd frontend
yarn install
```

3. Start the development server:
```bash
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment

### Deploy to Vercel

1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. Click "Deploy"

### Manual Configuration (if needed)
- **Framework:** Create React App
- **Root Directory:** `frontend`
- **Build Command:** `yarn build`
- **Output Directory:** `build`

## 📂 Project Structure

```
victor-portfolio/
├── frontend/               # React application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navigation.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── RecentWork.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main App component
│   │   └── index.css      # Global styles
│   └── package.json
├── backend/               # FastAPI backend (optional)
├── vercel.json           # Vercel configuration
└── README.md
```

## 🎨 Customization

### Update Personal Information
- Edit contact details in `src/components/Contact.jsx`
- Update social links in `src/components/Hero.jsx` and `src/components/Footer.jsx`
- Modify project information in `src/components/RecentWork.jsx`

### Styling
- Tailwind configuration: `frontend/tailwind.config.js`
- Global styles: `frontend/src/index.css`
- Component-specific styles: Use Tailwind classes

## 📧 Contact

- **Email:** onyenamvictor4real@gmail.com
- **Twitter/X:** [@___codehq](https://twitter.com/___codehq)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Victor Onyenam
