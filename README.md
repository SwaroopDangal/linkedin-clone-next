# LinkedIn Clone - Next.js

A full-featured LinkedIn clone built with Next.js, TypeScript, and modern web technologies. This project replicates core LinkedIn functionalities including user authentication, profile management, post creation, and social networking features.

![LinkedIn Clone](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Live Demo

**[View Live Demo](https://linkedin-clone-next-five.vercel.app)**

## ✨ Features

### Core Functionality
- 🔐 **User Authentication** - Secure sign-in and registration
- 👤 **User Profiles** - Create and manage professional profiles with username and bio
- 📝 **Post Creation** - Share updates and thoughts with your network
- 🖼️ **Image Upload** - Attach images to posts using Cloudinary integration
- ❤️ **Like System** - Engage with posts through likes
- 💬 **Messaging** - Communicate with other users
- 🔄 **Repost Functionality** - Share content with your network
- 📊 **Post Analytics** - Track post impressions and engagement metrics

### UI/UX Features
- 📱 **Responsive Design** - Seamless experience across desktop and mobile devices
- 🎨 **Modern UI** - Clean and professional interface using Shadcn UI components
- 🌓 **Dark Mode Support** - Easy on the eyes with theme switching
- ⚡ **Fast Navigation** - Smooth routing between pages
- 📰 **News Feed** - Stay updated with LinkedIn news and trending topics

### Pages & Navigation
- 🏠 **Home Feed** - View and interact with posts from your network
- 🌐 **My Network** - Manage your professional connections
- 💼 **Jobs** - Browse job opportunities
- 💬 **Messaging** - Direct messaging interface
- 🔔 **Notifications** - Stay updated with activity

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Re-usable component library
- **[React Hook Form](https://react-hook-form.com/)** - Form validation and handling

### Backend & Database
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database for data storage
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling

### Services & APIs
- **[Cloudinary](https://cloudinary.com/)** - Image upload and management
- **[Clerk](https://clerk.com/)** / **NextAuth.js** - Authentication (based on implementation)

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[Vercel](https://vercel.com/)** - Deployment platform

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** / **yarn** / **pnpm** / **bun**
- **MongoDB** account (local or cloud instance)
- **Cloudinary** account for image uploads

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/SwaroopDangal/linkedin-clone-next.git
cd linkedin-clone-next
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Authentication (if using Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
linkedin-clone-next/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── home/              # Home feed page
│   ├── networks/          # Networks page
│   ├── job/               # Jobs page
│   ├── message/           # Messaging page
│   ├── notification/      # Notifications page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── ...               # Custom components
├── lib/                  # Utility functions and configurations
│   ├── db.ts            # Database connection
│   └── utils.ts         # Helper functions
├── models/               # MongoDB models
│   ├── User.ts
│   ├── Post.ts
│   └── ...
├── public/               # Static assets
│   └── linkedin_icon.png
├── .gitignore
├── components.json       # Shadcn UI configuration
├── next.config.ts        # Next.js configuration
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🎯 Key Features Implementation

### Post Creation
Users can create posts with text content and optional images. Images are uploaded to Cloudinary for optimized storage and delivery.

### User Profiles
Each user has a profile displaying:
- Profile picture
- Username
- Bio/headline
- Post impression statistics
- Total posts count

### Social Interactions
- **Likes**: Users can like posts to show appreciation
- **Comments**: Engage in discussions through comments
- **Reposts**: Share interesting content with your network
- **Messages**: Send direct messages to connections

### News Section
Stay informed with curated LinkedIn news articles showing:
- Trending topics
- Read counts
- Time stamps

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js application is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

For detailed instructions, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Deploy on Other Platforms

This application can also be deployed on:
- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Shadcn UI Documentation](https://ui.shadcn.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Swaroop Dangal**

- GitHub: [@SwaroopDangal](https://github.com/SwaroopDangal)
- LinkedIn: [Connect on LinkedIn](https://www.linkedin.com/in/swaroopDangal)

## 🙏 Acknowledgments

- Inspired by [LinkedIn](https://www.linkedin.com/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide Icons](https://lucide.dev/)
- Hosted on [Vercel](https://vercel.com/)

