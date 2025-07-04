# Gaming Moments

A full-stack social media application for gamers to share their epic gaming moments! Built with the MERN stack (MongoDB, Express.js, React, Node.js), Gaming Moments allows users to create, like, comment on, and search for gaming-related posts.

## 🎮 Features

- **User Authentication**: Secure login/signup with JWT tokens and Google OAuth
- **Post Management**: Create, edit, and delete gaming moment posts
- **Social Interactions**: Like and comment on posts from other users
- **Search Functionality**: Search posts by title, tags, or content
- **Tagging System**: Tag posts with relevant gaming keywords
- **Real-time Updates**: Live updates for likes and comments
- **Responsive Design**: Optimized for desktop and mobile devices
- **Pagination**: Efficient loading of posts with pagination
- **User Profiles**: View posts from specific users
- **Image Uploads**: Share screenshots and images with posts

## 🛠️ Tech Stack

### Frontend
- **React 16.12.0** - User interface library
- **Redux 4.0.5** - State management
- **React Router 5.2.0** - Client-side routing
- **Material-UI 4.12.4** - UI component library
- **Axios 0.21.1** - HTTP client for API requests

### Backend
- **Node.js** - Server runtime environment
- **Express.js 4.17.1** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 5.10.15** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs 2.4.3** - Password hashing
- **Multer 1.4.2** - File upload middleware
- **Cors 2.8.5** - Cross-origin resource sharing
- **Dotenv 8.2.0** - Environment variable management

### Development Tools
- **Nodemon** - Development server auto-restart
- **Concurrently** - Run multiple commands concurrently

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LoganHosoda/gaming-moments.git
   cd gaming-moments
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/gaming-moments
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gaming-moments

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Cloudinary (for image uploads)
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

### Database Setup

#### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The application will automatically create the required collections

#### Option 2: MongoDB Atlas
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the `MONGODB_URI` in your `.env` file

### Running the Application

#### Development Mode (Both servers)
```bash
# From the root directory
npm run dev
```

#### Separate servers
```bash
# Terminal 1 - Server
cd server
npm run start

# Terminal 2 - Client
cd client
npm start
```

The application will be available at:
- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`

## 📁 Project Structure

```
gaming-moments/
├── client/                   # React frontend
│   ├── public/
│   │   └── index.html       # Main HTML file
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Auth/        # Authentication components
│   │   │   ├── Form/        # Post creation form
│   │   │   ├── Posts/       # Post display components
│   │   │   ├── Navbar/      # Navigation component
│   │   │   └── ...
│   │   ├── actions/         # Redux actions
│   │   ├── reducers/        # Redux reducers
│   │   ├── constants/       # Action type constants
│   │   ├── api/            # API service functions
│   │   └── images/         # Static images
│   └── package.json         # Client dependencies
├── server/                  # Express.js backend
│   ├── controllers/         # Route controllers
│   │   ├── posts.js        # Post CRUD operations
│   │   └── user.js         # User authentication
│   ├── models/             # Database models
│   │   ├── postMessage.js  # Post model
│   │   └── user.js         # User model
│   ├── routes/             # API routes
│   │   ├── posts.js        # Post routes
│   │   └── users.js        # User routes
│   ├── middleware/         # Custom middleware
│   │   └── auth.js         # Authentication middleware
│   ├── index.js            # Server entry point
│   └── package.json        # Server dependencies
└── README.md               # This file
```

## 🎯 Key Features Explained

### Authentication System
- **JWT-based**: Secure token-based authentication
- **Google OAuth**: Sign in with Google account
- **Protected Routes**: Middleware for route protection
- **Auto-login**: Persistent login state

### Post Management
- **Create**: Add new gaming moments with images
- **Edit**: Update your existing posts
- **Delete**: Remove posts you've created
- **Like**: Like/unlike posts from other users
- **Comment**: Add comments to posts

### Search & Discovery
- **Search Bar**: Search posts by title, content, or tags
- **Tags**: Filter posts by gaming categories
- **Pagination**: Load more posts as you scroll
- **User Posts**: View posts from specific users

## 🔌 API Endpoints

### Authentication
- `POST /users/signin` - User login
- `POST /users/signup` - User registration

### Posts
- `GET /posts` - Get all posts (with pagination)
- `GET /posts/search` - Search posts
- `POST /posts` - Create new post (authenticated)
- `PATCH /posts/:id` - Update post (authenticated)
- `DELETE /posts/:id` - Delete post (authenticated)
- `PATCH /posts/:id/likePost` - Like/unlike post (authenticated)

### Comments
- `POST /posts/:id/commentPost` - Add comment to post (authenticated)

## 📱 Usage

### Creating Posts
1. Sign in to your account
2. Click "Create Post" or use the form
3. Add title, content, tags, and image
4. Click "Submit" to publish

### Interacting with Posts
- **Like**: Click the thumbs up icon
- **Comment**: Add comments at the bottom of posts
- **Edit**: Click edit icon on your own posts
- **Delete**: Click delete icon on your own posts

### Searching
- Use the search bar to find specific posts
- Search by title, content, or tags
- Use the "Search" button or press Enter

## 🧪 Development

### Available Scripts

#### Client
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
```

#### Server
```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices
- Use Material-UI components consistently
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation as needed

## 🚀 Deployment

### Frontend (Netlify)
1. Build the client: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set up redirects for React Router

### Backend (Heroku)
1. Create a Heroku app
2. Set environment variables in Heroku
3. Deploy the server directory
4. Ensure MongoDB Atlas is configured

### Environment Variables for Production
Make sure to set all environment variables in your hosting platform.

## 📝 License

This project is licensed under the UNLICENSED License - see the package.json file for details.

## 👨‍💻 Author

**Logan Hosoda** - [sulsalogan@gmail.com](mailto:sulsalogan@gmail.com)

## 🙏 Acknowledgments

- React and Redux communities
- Material-UI for the component library
- MongoDB for the database solution
- Express.js for the server framework

---

🎮 **Happy Gaming!** Share your most epic gaming moments!