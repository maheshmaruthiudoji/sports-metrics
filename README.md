# Sports Data Analytics Platform

A modern, responsive full-stack web application that allows users to analyze and visualize sports data interactively. Upload player and team statistics, create beautiful visualizations, and gain actionable insights from your sports datasets.

## Features

- **User Authentication**: Secure signup/login system with JWT tokens
- **Dataset Management**: Upload CSV/JSON files with drag-and-drop interface
- **Interactive Visualizations**: Create bar, line, and pie charts from your data
- **Advanced Filtering**: Multi-condition filtering with various operators
- **Data Analytics**: View detailed statistics including min, max, average, and median values
- **Responsive Dashboard**: Modern dark-themed interface optimized for all devices
- **Real-time Stats**: View dataset metrics and analytics instantly
- **Profile Management**: Manage user account and settings

## Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Recharts** - Interactive data visualization
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless backend functions
- **MongoDB** - NoSQL database
- **JWT** - Secure authentication
- **Bcryptjs** - Password hashing
- **PapaParse** - CSV parsing

### Tools & Services
- **Vercel** - Deployment platform
- **Git** - Version control

## Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher) - [Download](https://nodejs.org/)
- npm or yarn package manager
- MongoDB Atlas account - [Create Free Account](https://www.mongodb.com/cloud/atlas)
- VS Code or any code editor - [Download](https://code.visualstudio.com/)

## Installation

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/yourusername/sports-analytics.git
cd sports-analytics
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (shared tier is free)
4. Create a database user with username `admin` and a strong password
5. Whitelist your IP address in Network Access
6. Copy your connection string:
   \`\`\`
   mongodb+srv://admin:<password>@cluster.mongodb.net/sports-analytics?retryWrites=true&w=majority
   \`\`\`

### 4. Configure Environment Variables

Create a `.env.local` file in the project root:

\`\`\`env
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster.mongodb.net/sports-analytics?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_random_string_here_12345
NEXT_PUBLIC_API_URL=http://localhost:3000
\`\`\`

Replace:
- `YOUR_PASSWORD` with your MongoDB password
- `your_super_secret_random_string_here_12345` with any random secure string

### 5. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
sports-analytics/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── api/                    # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── user/               # User profile endpoints
│   │   ├── datasets/           # Dataset endpoints
│   │   └── analytics/          # Analytics endpoints
│   ├── login/page.tsx          # Login page
│   ├── signup/page.tsx         # Sign up page
│   ├── dashboard/page.tsx      # Dashboard page
│   ├── datasets/page.tsx       # Datasets list page
│   ├── datasets/[id]/page.tsx  # Dataset detail page
│   └── settings/page.tsx       # User settings page
├── components/
│   ├── auth-context.tsx        # Authentication context provider
│   ├── protected-layout.tsx    # Protected routes wrapper
│   ├── sidebar-nav.tsx         # Navigation sidebar
│   ├── dashboard-header.tsx    # Dashboard header
│   ├── stats-cards.tsx         # Statistics cards
│   ├── file-upload.tsx         # File upload component
│   ├── dataset-list.tsx        # Dataset list component
│   ├── data-visualizer.tsx     # Chart visualization
│   ├── data-filter.tsx         # Data filtering component
│   ├── data-statistics.tsx     # Statistics display
│   ├── preview-banner.tsx      # Preview mode indicator
│   └── ui/                     # Shadcn UI components
├── lib/
│   ├── mongodb.ts              # MongoDB connection
│   ├── db-models.ts            # Database schemas
│   ├── utils-auth.ts           # Authentication utilities
│   ├── mock-data.ts            # Mock data for preview
│   ├── preview-utils.ts        # Preview mode utilities
│   └── utils.ts                # General utilities
├── public/
│   └── sample-data/            # Sample dataset files
├── .env.local                  # Environment variables (create this)
├── .gitignore                  # Git ignore rules
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
\`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### User Profile
- `GET /api/user/profile` - Get user profile (requires auth)

### Datasets
- `POST /api/datasets/upload` - Upload new dataset (requires auth)
- `GET /api/datasets/list` - Get user's datasets (requires auth)

### Analytics
- `GET /api/analytics/stats` - Get dashboard statistics (requires auth)

## Usage Guide

### 1. Create an Account
1. Navigate to the Sign Up page
2. Enter your email and password
3. Click "Sign Up"
4. You'll be redirected to the dashboard

### 2. Upload a Dataset
1. Go to "Datasets" in the sidebar
2. Click "Upload Dataset"
3. Drag and drop a CSV/JSON file or click to browse
4. Add a name and description (optional)
5. Click "Upload Dataset"

### 3. Create Visualizations
1. Click on a dataset from your list
2. Select a chart type (Bar, Line, or Pie)
3. Choose X-axis and Y-axis columns
4. The chart will update automatically

### 4. Filter Data
1. On the dataset detail page, scroll to "Advanced Filters"
2. Click "Add Filter"
3. Select a column, operator, and value
4. View filtered results in real-time

### 5. View Statistics
1. On the dataset detail page, scroll to "Column Statistics"
2. Select a column to view detailed statistics
3. See min, max, average, median, and distribution charts

## Sample Datasets

Three sample datasets are included in `public/sample-data/`:

1. **nba-players.csv** - NBA player statistics
2. **nfl-teams.json** - NFL team information
3. **cricket-stats.csv** - Cricket player statistics

Download these to test the upload and visualization features.

## Authentication

The platform uses JWT (JSON Web Tokens) for secure authentication:

1. User signs up → Password hashed with bcryptjs
2. User logs in → JWT token generated
3. Token stored in browser localStorage
4. Token sent with each API request
5. Server verifies token on protected routes

## Database Models

### User Schema
\`\`\`typescript
{
  email: string
  password: string (hashed)
  name: string
  createdAt: Date
  datasets: ObjectId[]
}
\`\`\`

### Dataset Schema
\`\`\`typescript
{
  name: string
  description: string
  userId: ObjectId
  filename: string
  fileSize: number
  rowCount: number
  columns: string[]
  data: any[]
  uploadedAt: Date
}
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
6. Click "Deploy"

### Deploy to Other Platforms

The application can be deployed to any Node.js hosting platform like Heroku, Render, or Railway.

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT signing | `super_secret_key_12345` |
| `NEXT_PUBLIC_API_URL` | Frontend API endpoint | `http://localhost:3000` |

## Troubleshooting

### Issue: MongoDB Connection Error
**Solution**: 
- Verify connection string in `.env.local`
- Check MongoDB Atlas IP whitelist
- Ensure database user credentials are correct

### Issue: File Upload Not Working
**Solution**:
- Ensure file is CSV or JSON format
- Check file size (should be under 10MB)
- Verify API route is running

### Issue: Charts Not Displaying
**Solution**:
- Select both X and Y axes
- Ensure columns contain numeric data
- Try refreshing the page

### Issue: Port 3000 Already in Use
**Solution**:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`
Then visit `http://localhost:3001`

## Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: support@sportsanalytics.com

## Roadmap

- [ ] Real-time data updates
- [ ] Export visualizations as images
- [ ] Collaborative dashboards
- [ ] Advanced machine learning predictions
- [ ] Mobile app
- [ ] Multi-user sharing and permissions
- [ ] Data integration with external APIs
- [ ] Custom chart types

## Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Recharts](https://recharts.org/) - Visualization library
- [MongoDB](https://www.mongodb.com/) - Database
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
<img width="1280" height="720" alt="WhatsApp Image 2026-07-04 at 5 43 34 PM" src="https://github.com/user-attachments/assets/bc5b674d-f590-4f38-b759-b6866776097c" />
<img width="1280" height="720" alt="WhatsApp Image 2026-07-04 at 5 43 31 PM" src="https://github.com/user-attachments/assets/974aee59-cb3c-412f-8779-9f9d428c25a1" />
<img width="1280" height="720" alt="WhatsApp Image 2026-07-04 at 5 43 32 PM" src="https://github.com/user-attachments/assets/20c78d45-620e-4436-aeab-c39d8451c7eb" />
<img width="1280" height="720" alt="WhatsApp Image 2026-07-04 at 5 43 34 PM" src="https://github.com/user-attachments/assets/c62235ae-5b16-423f-abe3-da5a0285062f" />
<img width="1280" height="720" alt="WhatsApp Image 2026-07-04 at 5 43 31 PM" src="https://github.com/user-attachments/assets/bc54f309-e6ef-4ab9-8b01-39a0231dc8c3" />
<img width="1280" height="720" alt="WhatsApp Image 2026-07-04 at 5 43 33 PM" src="https://github.com/user-attachments/assets/dc2d7aec-a2d8-47bb-8eb5-e1aca549c052" />
<img width="1280" height="720" alt="WhatsApp Image 2026-07-04 at 5 43 35 PM" src="https://github.com/user-attachments/assets/317b3ade-4bb3-422f-a019-207ee9b49f96" />





---

**Happy analyzing!** If you find this project helpful, please give it a ⭐ on GitHub.
