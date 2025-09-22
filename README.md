# SocialX - React Native Social Media App

A modern, feature-rich social media application built with React Native and Expo. SocialX provides users with an intuitive platform for sharing posts, discovering images, and connecting with others through an elegant, customizable interface.

## Features

### 🔐 Authentication
- Secure email/password login
- Google OAuth integration
- Demo account access
- Persistent user sessions

### 📱 Social Features
- Interactive feed with posts, likes, and comments
- Real-time engagement (likes, comments, shares)
- User profiles with statistics
- Post sharing functionality

### 🖼️ Media
- Image discovery gallery
- Grid-based image browsing
- Full-screen image viewer with modal
- Responsive image loading

### 🎨 User Experience
- Dark/Light theme toggle
- Smooth animations with Moti
- Modern UI with glassmorphism effects
- Responsive design for all screen sizes
- Drawer navigation with custom content
- Bottom tab navigation with raised design

### ⚙️ Settings & Customization
- Push notification preferences
- Privacy settings
- Theme customization
- Profile management

### 📋 Additional Features
- Help & Support with FAQ
- Privacy Policy
- About section
- Contact support options

## Screenshots

> Add screenshots of your app here

## Tech Stack

- **Framework:** React Native with Expo
- **Navigation:** React Navigation v6 (Stack, Tab, Drawer)
- **Animations:** Moti (Reanimated 2)
- **Icons:** Expo Vector Icons (Ionicons)
- **State Management:** React Context API
- **Authentication:** Custom auth with mock providers
- **Styling:** StyleSheet with dynamic theming

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Neth766/socialx-app.git
   cd socialx-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   expo start
   ```

4. **Run on device/emulator**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Scan QR code with Expo Go app on your phone

## How It Works

### Architecture Overview
SocialX is built using React Native with Expo, following a component-based architecture with Context API for state management. The app uses a single-file structure (App.js) containing all components and logic for simplicity.

### Authentication Flow
1. **Login Screen**: Users authenticate with email/password or Google OAuth
2. **Mock Authentication**: The app uses a mock user database for demonstration
3. **Session Management**: User state is maintained through React Context
4. **Auto-login**: Session persistence simulated with loading states

### Navigation Structure
- **Drawer Navigator**: Main navigation with custom drawer content
- **Tab Navigator**: Bottom tabs for primary sections (Feed, Images, Profile, Settings)  
- **Stack Navigation**: Modal screens for detailed views

### Data Flow
1. **Initial Data**: Mock posts and user data loaded on app start
2. **Real-time Updates**: Local state updates simulate real-time interactions
3. **Theme Management**: Global theme context provides dark/light mode switching
4. **User Interactions**: Likes, comments, and shares update local state immediately

### Key Components
- **PostItem**: Individual post component with interactions
- **CustomDrawer**: Animated drawer with user info and quick settings
- **ThemeProvider**: Global theme management with context
- **AuthProvider**: User authentication and session management

### Animation System
- **Moti Library**: Smooth entrance animations for components
- **Interactive Feedback**: Button press animations and loading states
- **Theme Transitions**: Smooth color transitions when switching themes
- **Modal Animations**: Slide and fade animations for overlays

### Image Handling
- **Grid Display**: 2-column grid layout for image discovery
- **Modal Viewer**: Full-screen image viewing with gesture support
- **Placeholder Images**: Uses Picsum and Pravatar for demo content
- **Lazy Loading**: Images load on-demand for performance

## Configuration

### Expo Configuration (app.json)
The app uses Expo's managed workflow with custom configuration for:
- App icons and splash screen
- Orientation settings
- Platform-specific configurations
- Build settings

### Environment Setup
No additional environment variables are required for the demo version. For production deployment, you may want to configure:
- Firebase for authentication
- Cloud storage for images
- Push notification services

## Usage

### Demo Accounts
For testing purposes, use these demo credentials:
- **Email:** `user@example.com`
- **Password:** `123456`

Alternative demo account:
- **Email:** `alice@example.com`
- **Password:** `123456`

### Navigation
- **Drawer Navigation:** Pull from left edge or tap menu icon
- **Bottom Tabs:** Access main sections (Feed, Images, Profile, Settings)
- **Theme Toggle:** Available in settings or quick toggle in drawer

## Development

### Adding New Features
1. Create new components in appropriate sections
2. Update navigation if needed
3. Add proper theming support
4. Include animations for better UX
5. Test on both platforms

### Styling Guidelines
- Use the theme context for consistent colors
- Follow the existing elevation/shadow patterns
- Maintain responsive design principles
- Test dark/light themes

### State Management
The app uses React Context for:
- Authentication state
- Theme management
- User preferences

## Building for Production

### Android
```bash
expo build:android
```

### iOS
```bash
expo build:ios
```

### Standalone Apps
```bash
# For both platforms
expo build:android -t apk
expo build:ios -t archive
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow React Native best practices
- Maintain consistent code formatting
- Add proper error handling
- Include comments for complex logic
- Test on both Android and iOS

## Known Issues

- Mock authentication for demo purposes
- Limited offline functionality
- Images are loaded from external sources

## Future Enhancements

- [ ] Real backend integration
- [ ] Push notifications
- [ ] Offline support
- [ ] Image upload functionality
- [ ] Video support
- [ ] Real-time messaging
- [ ] Advanced user search
- [ ] Story features
- [ ] Post scheduling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

- Create an issue in this repository
- Contact: nethk1006@gmail.com
- Documentation: Attached in repository

## Support

I want to express my heartfelt gratitude to my family and friends who provided unwavering support and encouragement throughout the development of SocialX. Their belief in my vision and constant motivation made this project possible. Special thanks to the React Native and Expo communities for creating such powerful tools that enable developers like me to bring ideas to life.

---

**Made with ❤️ by Nethaniel**