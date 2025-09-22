// --- Enhanced Styles ---
const styles = StyleSheet.create({
  // General Styles
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  // Auth Styles
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 30,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  loginButton: {
    backgroundColor: "#6200ea",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#db4437",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#db4437",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  demoText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },

  // Post Styles
  postCard: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 20,
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#6200ea",
  },
  postUserInfo: {
    flex: 1,
  },
  postUser: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  postTime: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  postContent: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
    padding: 8,
    borderRadius: 20,
  },
  actionText: {
    marginLeft: 6,
    color: "#666",
    fontSize: 14,
    fontWeight: "600",
  },

  // Comments Styles
  commentsSection: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  comment: {
    marginBottom: 8,
    backgroundColor: "#f8f9fa",
    padding: 10,
    borderRadius: 12,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6200ea",
  },
  commentText: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
  addComment: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  commentInput: {
    flex: 1,
    maxHeight: 80,
    paddingRight: 10,
  },

  // Images Styles
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  gridImage: {
    width: (width - 40) / 2,
    height: 150,
    borderRadius: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalClose: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    padding: 8,
  },
  fullImage: {
    width: width - 40,
    height: "70%",
    borderRadius: 20,
  },

  // Profile Styles
  profileHeader: {
    alignItems: "center",
    padding: 25,
    backgroundColor: "#fff",
    margin: 15,
    border// --- Profile Screen ---
function ProfileScreen() {
  const { user, logout } = React.useContext(AuthContext);
  const { theme } = React.useContext(ThemeContext);
  const [userPosts, setUserPosts] = useState(
    initialPosts.filter(post => post.userId === user?.id)
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.profileHeader, { backgroundColor: theme.cardBackground }]}>
        <Image
          source={{ uri: user?.avatar || "https://i.pravatar.cc/150?img=5" }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: theme.textPrimary }]}>{user?.name || "Unknown User"}</Text>
        <Text style={[styles.email, { color: theme.textSecondary }]}>{user?.email}</Text>
        <Text style={[styles.bio, { color: theme.textSecondary }]}>
          Passionate developer ✨ | Loves React Native ❤️
        </Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={[styles.statNumber, { color: theme.textPrimary }]}>{userPosts.length}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Posts</Text>
          </View>
          // App.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Switch,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
  Share,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { AnimatePresence, MotiView } from "moti";

const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// --- Auth Context ---
const AuthContext = React.createContext();

// --- Theme Context ---
const ThemeContext = React.createContext();

// --- Mock Auth Provider ---
const mockUsers = [
  { id: 1, email: "user@example.com", password: "123456", name: "John Doe", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 2, email: "alice@example.com", password: "123456", name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
];

// --- Enhanced Post Data with interactions ---
const initialPosts = [
  { 
    id: "1", 
    userId: 2,
    user: "Alice Johnson", 
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Just finished my app design! ✨", 
    likes: 12, 
    comments: [
      { id: 1, user: "Bob", text: "Amazing work!" },
      { id: 2, user: "Clara", text: "Love the design!" }
    ],
    timestamp: "2h ago",
    liked: false
  },
  { 
    id: "2", 
    userId: 1,
    user: "John Doe", 
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Enjoying a coffee ☕ while coding.", 
    likes: 8, 
    comments: [
      { id: 1, user: "Alice", text: "Coffee is life!" }
    ],
    timestamp: "4h ago",
    liked: false
  },
  { 
    id: "3", 
    userId: 2,
    user: "Alice Johnson", 
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "React Native is awesome! 🔥", 
    likes: 25, 
    comments: [],
    timestamp: "6h ago",
    liked: true
  },
];

// --- Random Images Data ---
const generateRandomImages = () => {
  const images = [];
  for (let i = 1; i <= 20; i++) {
    images.push({
      id: i.toString(),
      url: `https://picsum.photos/400/300?random=${i}`,
      title: `Random Image ${i}`,
    });
  }
  return images;
};

// --- Theme Provider Component ---
function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const lightTheme = {
    background: "#f8f9fa",
    cardBackground: "#fff",
    textPrimary: "#333",
    textSecondary: "#666",
    border: "#f0f0f0",
    inputBackground: "#f9f9f9",
    inputBorder: "#ddd",
  };
  
  const darkTheme = {
    background: "#121212",
    cardBackground: "#1e1e1e",
    textPrimary: "#ffffff",
    textSecondary: "#b0b0b0",
    border: "#333",
    inputBackground: "#2a2a2a",
    inputBorder: "#444",
  };
  
  const theme = isDarkMode ? darkTheme : lightTheme;
  
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// --- Auth Provider Component ---
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const login = (email, password) => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  };

  const logout = () => {
    setUser(null);
  };

  const googleLogin = () => {
    // Simulate Google login
    setTimeout(() => {
      setUser({
        id: 3,
        email: "google.user@gmail.com",
        name: "Google User",
        avatar: "https://i.pravatar.cc/150?img=3"
      });
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, googleLogin, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// --- Login Screen ---
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, googleLogin } = React.useContext(AuthContext);
  const { theme } = React.useContext(ThemeContext);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    const result = login(email, password);
    if (!result.success) {
      Alert.alert("Login Failed", result.error);
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert(
      "Google Login", 
      "Logging in with Google...",
      [{ text: "OK", onPress: googleLogin }]
    );
  };

  return (
    <View style={[styles.loginContainer, { backgroundColor: theme.background }]}>
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 800 }}
      >
        <Ionicons name="planet" size={80} color="#6200ea" style={{ alignSelf: 'center', marginBottom: 30 }} />
        <Text style={[styles.loginTitle, { color: theme.textPrimary }]}>Welcome to SocialX</Text>
        
        <TextInput
          style={[styles.input, { 
            backgroundColor: theme.inputBackground, 
            borderColor: theme.inputBorder,
            color: theme.textPrimary 
          }]}
          placeholder="Email"
          placeholderTextColor={theme.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={[styles.input, { 
            backgroundColor: theme.inputBackground, 
            borderColor: theme.inputBorder,
            color: theme.textPrimary 
          }]}
          placeholder="Password"
          placeholderTextColor={theme.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <Ionicons name="logo-google" size={20} color="#fff" style={{ marginRight: 10 }} />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        
        <Text style={[styles.demoText, { color: theme.textSecondary }]}>
          Demo: user@example.com / 123456
        </Text>
      </MotiView>
    </View>
  );
}

// --- Post Component ---
function PostItem({ post, onLike, onComment, onShare, currentUser }) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const { theme } = React.useContext(ThemeContext);

  const handleAddComment = () => {
    if (newComment.trim()) {
      onComment(post.id, newComment.trim());
      setNewComment("");
    }
  };

  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 500 }}
      style={[styles.postCard, { backgroundColor: theme.cardBackground }]}
    >
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image source={{ uri: post.avatar }} style={styles.postAvatar} />
        <View style={styles.postUserInfo}>
          <Text style={[styles.postUser, { color: theme.textPrimary }]}>{post.user}</Text>
          <Text style={[styles.postTime, { color: theme.textSecondary }]}>{post.timestamp}</Text>
        </View>
      </View>

      {/* Post Content */}
      <Text style={[styles.postContent, { color: theme.textPrimary }]}>{post.content}</Text>

      {/* Post Actions */}
      <View style={[styles.postActions, { borderTopColor: theme.border }]}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => onLike(post.id)}
        >
          <Ionicons 
            name={post.liked ? "heart" : "heart-outline"} 
            size={24} 
            color={post.liked ? "#e91e63" : theme.textSecondary} 
          />
          <Text style={[styles.actionText, { color: theme.textSecondary }]}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => setShowComments(!showComments)}
        >
          <Ionicons name="chatbubble-outline" size={24} color={theme.textSecondary} />
          <Text style={[styles.actionText, { color: theme.textSecondary }]}>{post.comments.length}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => onShare(post)}
        >
          <Ionicons name="share-outline" size={24} color={theme.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* Comments Section */}
      {showComments && (
        <View style={[styles.commentsSection, { borderTopColor: theme.border }]}>
          {post.comments.map(comment => (
            <View key={comment.id} style={styles.comment}>
              <Text style={styles.commentUser}>{comment.user}</Text>
              <Text style={[styles.commentText, { color: theme.textPrimary }]}>{comment.text}</Text>
            </View>
          ))}
          
          <View style={[styles.addComment, { backgroundColor: theme.inputBackground }]}>
            <TextInput
              style={[styles.commentInput, { color: theme.textPrimary }]}
              placeholder="Add a comment..."
              placeholderTextColor={theme.textSecondary}
              value={newComment}
              onChangeText={setNewComment}
              multiline
            />
            <TouchableOpacity onPress={handleAddComment}>
              <Ionicons name="send" size={24} color="#6200ea" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </MotiView>
  );
}

// --- Feed Screen ---
function FeedScreen() {
  const [posts, setPosts] = useState(initialPosts);
  const { user } = React.useContext(AuthContext);
  const { theme } = React.useContext(ThemeContext);

  const handleLike = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const handleComment = (postId, commentText) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              comments: [...post.comments, { 
                id: Date.now(), 
                user: user.name, 
                text: commentText 
              }]
            }
          : post
      )
    );
  };

  const handleShare = async (post) => {
    try {
      await Share.share({
        message: `Check out this post by ${post.user}: "${post.content}" - Shared via SocialX`,
        title: 'Share Post'
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostItem 
            post={item} 
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
            currentUser={user}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }} // Space for raised tab bar
      />
    </View>
  );
}

// --- Images Screen ---
function ImagesScreen() {
  const [images] = useState(generateRandomImages());
  const [selectedImage, setSelectedImage] = useState(null);
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedImage(item)}>
            <MotiView
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "timing", duration: 500 }}
              style={styles.imageContainer}
            >
              <Image
                source={{ uri: item.url }}
                style={styles.gridImage}
                resizeMode="cover"
              />
            </MotiView>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} // Space for raised tab bar
      />

      {/* Image Modal */}
      <Modal
        visible={!!selectedImage}
        transparent
        onRequestClose={() => setSelectedImage(null)}
      >
        <View style={styles.modalBackground}>
          <TouchableOpacity 
            style={styles.modalClose}
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={{ uri: selectedImage.url }}
              style={styles.fullImage}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </View>
  );
}

// --- Profile Screen ---
function ProfileScreen() {
  const { user, logout } = React.useContext(AuthContext);
  const [userPosts, setUserPosts] = useState(
    initialPosts.filter(post => post.userId === user?.id)
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: user?.avatar || "https://i.pravatar.cc/150?img=5" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.name || "Unknown User"}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <Text style={styles.bio}>
          Passionate developer ✨ | Loves React Native ❤️
        </Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{userPosts.length}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statNumber, { color: theme.textPrimary }]}>1.2k</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statNumber, { color: theme.textPrimary }]}>890</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Following</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* User Posts */}
      <View style={styles.userPostsSection}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>My Posts</Text>
        {userPosts.map(post => (
          <View key={post.id} style={[styles.userPost, { backgroundColor: theme.cardBackground }]}>
            <Text style={[styles.userPostContent, { color: theme.textPrimary }]}>{post.content}</Text>
            <Text style={[styles.userPostStats, { color: theme.textSecondary }]}>
              {post.likes} likes • {post.comments.length} comments
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// --- Custom Drawer Content ---
function CustomDrawerContent({ navigation }) {
  const { user, logout } = React.useContext(AuthContext);
  const { theme, isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  const drawerItems = [
    { name: 'Home', icon: 'home-outline', route: 'TabNavigator', color: '#6200ea' },
    { name: 'Profile', icon: 'person-outline', route: 'Profile', color: '#2196F3' },
    { name: 'Settings', icon: 'settings-outline', route: 'Settings', color: '#FF9800' },
    { name: 'Help', icon: 'help-circle-outline', route: 'Help', color: '#4CAF50' },
  ];

  return (
    <View style={[styles.drawerContainer, { backgroundColor: theme.background }]}>
      {/* Drawer Header */}
      <MotiView
        from={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 800 }}
        style={[styles.drawerHeader, { backgroundColor: theme.cardBackground }]}
      >
        <Image 
          source={{ uri: user?.avatar || "https://i.pravatar.cc/150?img=5" }} 
          style={styles.drawerAvatar} 
        />
        <Text style={[styles.drawerUserName, { color: theme.textPrimary }]}>{user?.name}</Text>
        <Text style={[styles.drawerUserEmail, { color: theme.textSecondary }]}>{user?.email}</Text>
        
        {/* Quick Dark Mode Toggle */}
        <TouchableOpacity 
          onPress={toggleTheme}
          style={[styles.quickToggle, { backgroundColor: isDarkMode ? '#6200ea' : '#f0f0f0' }]}
        >
          <Ionicons 
            name={isDarkMode ? "sunny" : "moon"} 
            size={18} 
            color={isDarkMode ? "#fff" : "#333"} 
          />
        </TouchableOpacity>
      </MotiView>

      {/* Drawer Menu Items */}
      <ScrollView style={styles.drawerContent}>
        {drawerItems.map((item, index) => (
          <MotiView
            key={item.name}
            from={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "timing", duration: 500, delay: index * 100 + 300 }}
          >
            <TouchableOpacity
              style={[styles.drawerItem, { backgroundColor: theme.cardBackground }]}
              onPress={() => navigation.navigate(item.route)}
              activeOpacity={0.7}
            >
              <View style={[styles.drawerIconContainer, { backgroundColor: `${item.color}20` }]}>
                <Ionicons name={item.icon} size={22} color={item.color} />
              </View>
              <Text style={[styles.drawerItemText, { color: theme.textPrimary }]}>{item.name}</Text>
              <Ionicons name="chevron-forward" size={18} color={theme.textSecondary} />
            </TouchableOpacity>
          </MotiView>
        ))}
        
        {/* Logout Button */}
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 600, delay: 800 }}
        >
          <TouchableOpacity
            style={[styles.drawerLogout, { borderColor: theme.border }]}
            onPress={logout}
            activeOpacity={0.7}
          >
            <Ionicons name="log-out-outline" size={22} color="#e91e63" />
            <Text style={[styles.drawerLogoutText, { color: theme.textPrimary }]}>Logout</Text>
          </TouchableOpacity>
        </MotiView>
      </ScrollView>

      {/* Drawer Footer */}
      <View style={[styles.drawerFooter, { borderTopColor: theme.border }]}>
        <Text style={[styles.drawerFooterText, { color: theme.textSecondary }]}>
          SocialX v1.0.0
        </Text>
      </View>
    </View>
  );
}

// --- Enhanced Header Component ---
function CustomHeader({ navigation, title }) {
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <View style={[styles.customHeader, { backgroundColor: '#6200ea' }]}>
      <TouchableOpacity 
        onPress={() => navigation.openDrawer()}
        style={styles.headerMenuButton}
        activeOpacity={0.7}
      >
        <Ionicons name="menu" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={{ width: 40 }} />
    </View>
  );
}
function HelpSupportScreen({ onClose }) {
  const { theme } = React.useContext(ThemeContext);

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "Go to login screen and tap 'Forgot Password'. Enter your email to receive reset instructions."
    },
    {
      id: 2,
      question: "How do I delete a post?",
      answer: "Long press on your post and select 'Delete' from the menu options."
    },
    {
      id: 3,
      question: "Can I change my username?",
      answer: "Yes! Go to Profile → Edit Profile → Username to change your display name."
    },
    {
      id: 4,
      question: "How do I report inappropriate content?",
      answer: "Tap the three dots on any post and select 'Report'. Our team reviews all reports within 24 hours."
    }
  ];

  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
      <View style={[styles.modalHeader, { backgroundColor: theme.cardBackground, borderBottomColor: theme.border }]}>
        <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
          <Ionicons name="close" size={28} color={theme.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Help & Support</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.modalContent}>
        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
        >
          <View style={[styles.supportSection, { backgroundColor: theme.cardBackground }]}>
            <Ionicons name="headset-outline" size={40} color="#6200ea" style={{ alignSelf: 'center', marginBottom: 15 }} />
            <Text style={[styles.supportTitle, { color: theme.textPrimary }]}>We're here to help!</Text>
            <Text style={[styles.supportSubtitle, { color: theme.textSecondary }]}>
              Find answers to common questions or contact our support team
            </Text>
          </View>
        </MotiView>

        <Text style={[styles.sectionTitle, { color: theme.textPrimary, marginTop: 20 }]}>Frequently Asked Questions</Text>

        {faqData.map((item, index) => (
          <MotiView
            key={item.id}
            from={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "timing", duration: 500, delay: index * 100 }}
          >
            <TouchableOpacity
              style={[styles.faqItem, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
              onPress={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
            >
              <View style={styles.faqHeader}>
                <Text style={[styles.faqQuestion, { color: theme.textPrimary }]}>{item.question}</Text>
                <Ionicons 
                  name={expandedItem === item.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={theme.textSecondary} 
                />
              </View>
              {expandedItem === item.id && (
                <MotiView
                  from={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ type: "timing", duration: 300 }}
                >
                  <Text style={[styles.faqAnswer, { color: theme.textSecondary }]}>{item.answer}</Text>
                </MotiView>
              )}
            </TouchableOpacity>
          </MotiView>
        ))}

        <View style={[styles.contactSection, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.contactTitle, { color: theme.textPrimary }]}>Still need help?</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>Email Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#25D366' }]}>
            <Ionicons name="logo-whatsapp" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>WhatsApp Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// --- About SocialX Screen ---
function AboutScreen({ onClose }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
      <View style={[styles.modalHeader, { backgroundColor: theme.cardBackground, borderBottomColor: theme.border }]}>
        <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
          <Ionicons name="close" size={28} color={theme.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>About SocialX</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.modalContent}>
        <MotiView
          from={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "timing", duration: 800 }}
          style={styles.aboutHeader}
        >
          <MotiView
            from={{ rotate: "0deg" }}
            animate={{ rotate: "360deg" }}
            transition={{ type: "timing", duration: 2000, loop: true }}
          >
            <Ionicons name="planet" size={80} color="#6200ea" />
          </MotiView>
          <Text style={[styles.appName, { color: theme.textPrimary }]}>SocialX</Text>
          <Text style={[styles.version, { color: theme.textSecondary }]}>Version 1.0.0</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600, delay: 300 }}
        >
          <View style={[styles.aboutCard, { backgroundColor: theme.cardBackground }]}>
            <Text style={[styles.aboutTitle, { color: theme.textPrimary }]}>🚀 Our Mission</Text>
            <Text style={[styles.aboutText, { color: theme.textSecondary }]}>
              To create meaningful connections through innovative social experiences. 
              SocialX brings people together with cutting-edge features and beautiful design.
            </Text>
          </View>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600, delay: 500 }}
        >
          <View style={[styles.aboutCard, { backgroundColor: theme.cardBackground }]}>
            <Text style={[styles.aboutTitle, { color: theme.textPrimary }]}>✨ Features</Text>
            <View style={styles.featureList}>
              {[
                "🔐 Secure Authentication",
                "💬 Interactive Feed",
                "📸 Image Discovery",
                "👤 Rich Profiles",
                "🌙 Dark Mode",
                "⚙️ Customizable Settings"
              ].map((feature, index) => (
                <MotiView
                  key={index}
                  from={{ opacity: 0, translateX: -20 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ type: "timing", duration: 400, delay: 600 + (index * 100) }}
                >
                  <Text style={[styles.featureItem, { color: theme.textSecondary }]}>{feature}</Text>
                </MotiView>
              ))}
            </View>
          </View>
        </MotiView>

        <View style={[styles.aboutCard, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.aboutTitle, { color: theme.textPrimary }]}>🛠️ Built With</Text>
          <Text style={[styles.aboutText, { color: theme.textSecondary }]}>
            React Native • Expo • React Navigation • Moti Animations
          </Text>
        </View>

        <View style={[styles.aboutCard, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.aboutTitle, { color: theme.textPrimary }]}>👨‍💻 Developer</Text>
          <Text style={[styles.aboutText, { color: theme.textSecondary }]}>
            Created with ❤️ by passionate developers who believe in the power of connection.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

// --- Privacy Policy Screen ---
function PrivacyPolicyScreen({ onClose }) {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
      <View style={[styles.modalHeader, { backgroundColor: theme.cardBackground, borderBottomColor: theme.border }]}>
        <TouchableOpacity onPress={onClose} style={styles.modalCloseButton}>
          <Ionicons name="close" size={28} color={theme.textPrimary} />
        </TouchableOpacity>
        <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Privacy Policy</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.modalContent}>
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
        >
          <View style={[styles.privacyHeader, { backgroundColor: theme.cardBackground }]}>
            <Ionicons name="shield-checkmark" size={50} color="#4CAF50" style={{ alignSelf: 'center', marginBottom: 15 }} />
            <Text style={[styles.privacyTitle, { color: theme.textPrimary }]}>Your Privacy Matters</Text>
            <Text style={[styles.privacySubtitle, { color: theme.textSecondary }]}>
              Last updated: December 2024
            </Text>
          </View>
        </MotiView>

        {[
          {
            title: "🔒 Data Collection",
            content: "We collect only the information necessary to provide our services. This includes your profile information, posts, and usage analytics to improve your experience."
          },
          {
            title: "🛡️ Data Protection",
            content: "Your data is encrypted and stored securely. We use industry-standard security measures to protect your personal information from unauthorized access."
          },
          {
            title: "📊 How We Use Your Data",
            content: "We use your information to personalize your feed, recommend content, and improve our services. We never sell your personal data to third parties."
          },
          {
            title: "🍪 Cookies & Tracking",
            content: "We use essential cookies for app functionality and analytics cookies to understand user behavior. You can manage cookie preferences in settings."
          },
          {
            title: "👥 Data Sharing",
            content: "We only share data with trusted service providers who help us operate the app. All partners are bound by strict confidentiality agreements."
          },
          {
            title: "✋ Your Rights",
            content: "You have the right to access, update, or delete your data at any time. Contact our support team to exercise these rights."
          }
        ].map((section, index) => (
          <MotiView
            key={index}
            from={{ opacity: 0, translateX: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "timing", duration: 500, delay: index * 150 }}
          >
            <View style={[styles.privacySection, { backgroundColor: theme.cardBackground }]}>
              <Text style={[styles.privacySectionTitle, { color: theme.textPrimary }]}>{section.title}</Text>
              <Text style={[styles.privacySectionContent, { color: theme.textSecondary }]}>{section.content}</Text>
            </View>
          </MotiView>
        ))}

        <View style={[styles.contactSection, { backgroundColor: theme.cardBackground }]}>
          <Text style={[styles.contactTitle, { color: theme.textPrimary }]}>Questions about privacy?</Text>
          <TouchableOpacity style={[styles.contactButton, { backgroundColor: '#6200ea' }]}>
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.contactButtonText}>Contact Privacy Team</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [privatePosts, setPrivatePosts] = useState(false);
  const { theme, isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.settingsContainer}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>App Preferences</Text>
        
        <View style={[styles.settingItem, { backgroundColor: theme.cardBackground }]}>
          <View style={styles.settingLeft}>
            <Ionicons name="moon-outline" size={24} color={theme.textSecondary} />
            <Text style={[styles.settingText, { color: theme.textPrimary }]}>Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#e0e0e0', true: '#6200ea' }}
          />
        </View>

        <View style={[styles.settingItem, { backgroundColor: theme.cardBackground }]}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={24} color={theme.textSecondary} />
            <Text style={[styles.settingText, { color: theme.textPrimary }]}>Push Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#e0e0e0', true: '#6200ea' }}
          />
        </View>

        <View style={[styles.settingItem, { backgroundColor: theme.cardBackground }]}>
          <View style={styles.settingLeft}>
            <Ionicons name="lock-closed-outline" size={24} color={theme.textSecondary} />
            <Text style={[styles.settingText, { color: theme.textPrimary }]}>Private Posts</Text>
          </View>
          <Switch
            value={privatePosts}
            onValueChange={setPrivatePosts}
            trackColor={{ false: '#e0e0e0', true: '#6200ea' }}
          />
        </View>

        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>About</Text>
        
        <TouchableOpacity style={[styles.settingButton, { backgroundColor: theme.cardBackground }]}>
          <Ionicons name="help-circle-outline" size={24} color={theme.textSecondary} />
          <Text style={[styles.settingText, { color: theme.textPrimary }]}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingButton, { backgroundColor: theme.cardBackground }]}>
          <Ionicons name="information-circle-outline" size={24} color={theme.textSecondary} />
          <Text style={[styles.settingText, { color: theme.textPrimary }]}>About SocialX</Text>
          <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingButton, { backgroundColor: theme.cardBackground }]}>
          <Ionicons name="document-text-outline" size={24} color={theme.textSecondary} />
          <Text style={[styles.settingText, { color: theme.textPrimary }]}>Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// --- Loader Component ---
function Loader() {
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <View style={[styles.container, { justifyContent: "center", backgroundColor: theme.background }]}>
      <MotiView
        from={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "timing", duration: 1000, loop: true }}
        style={styles.loader}
      >
        <Ionicons name="planet" size={64} color="#6200ea" />
      </MotiView>
      <Text style={{ marginTop: 20, fontSize: 18, color: theme.textSecondary }}>Loading SocialX...</Text>
    </View>
  );
}

// --- Main App Navigator ---
function AppNavigator() {
  const { user } = React.useContext(AuthContext);
  const { theme, isDarkMode } = React.useContext(ThemeContext);

  // Tab Navigator Component
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === "Feed") iconName = focused ? "home" : "home-outline";
            else if (route.name === "Images") iconName = focused ? "image" : "image-outline";
            else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";
            else if (route.name === "Settings") iconName = focused ? "settings" : "settings-outline";
            
            return (
              <MotiView
                animate={{ scale: focused ? 1.1 : 1 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <Ionicons name={iconName} size={size} color={color} />
              </MotiView>
            );
          },
          tabBarActiveTintColor: "#6200ea",
          tabBarInactiveTintColor: theme.textSecondary,
          tabBarStyle: {
            backgroundColor: theme.cardBackground,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 85, // Increased height
            paddingBottom: 20, // More padding from bottom
            paddingTop: 10,
            elevation: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -5 },
            shadowOpacity: 0.15,
            shadowRadius: 15,
            borderTopColor: theme.border,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginTop: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Images" component={ImagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor="#6200ea" 
      />
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            backgroundColor: theme.background,
            width: width * 0.85, // 85% of screen width
          },
          drawerType: 'slide',
          overlayColor: 'rgba(0,0,0,0.5)',
          drawerActiveTintColor: '#6200ea',
          drawerInactiveTintColor: theme.textSecondary,
          header: ({ navigation, route }) => (
            <CustomHeader 
              navigation={navigation} 
              title={route.name === 'TabNavigator' ? 'SocialX' : route.name} 
            />
          ),
        }}
      >
        <Drawer.Screen 
          name="TabNavigator" 
          component={TabNavigator}
          options={{ 
            drawerLabel: 'Home',
            drawerIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ 
            drawerIcon: ({ color }) => <Ionicons name="settings-outline" size={22} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// --- Main App Component ---
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AuthContext.Consumer>
          {({ user, loading }) => {
            if (loading) return <Loader />;
            return user ? <AppNavigator /> : <LoginScreen />;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    </ThemeProvider>
  );
}

// --- Enhanced Styles ---
const styles = StyleSheet.create({
  // General Styles
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  // Auth Styles
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 30,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  loginButton: {
    backgroundColor: "#6200ea",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#db4437",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  demoText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },

  // Post Styles
  postCard: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 16,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postUserInfo: {
    flex: 1,
  },
  postUser: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  postTime: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  postContent: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    color: "#666",
    fontSize: 14,
  },

  // Comments Styles
  commentsSection: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  comment: {
    marginBottom: 8,
  },
  commentUser: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6200ea",
  },
  commentText: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
  addComment: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    padding: 8,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
  },
  commentInput: {
    flex: 1,
    maxHeight: 80,
    paddingRight: 10,
  },

  // Images Styles
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  gridImage: {
    width: (width - 40) / 2,
    height: 150,
    borderRadius: 12,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalClose: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
  fullImage: {
    width: width - 40,
    height: "70%",
  },

  // Profile Styles
  profileHeader: {
    alignItems: "center",
    padding: 25,
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "#6200ea",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  bio: {
    marginTop: 12,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  stat: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  logoutButton: {
    backgroundColor: "#e91e63",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    elevation: 3,
    shadowColor: "#e91e63",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // User Posts Styles
  userPostsSection: {
    margin: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    marginTop: 10,
  },
  userPost: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  userPostContent: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    lineHeight: 20,
  },
  userPostStats: {
    fontSize: 12,
    color: "#666",
  },

  // Settings Styles
  settingsContainer: {
    padding: 15,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  settingText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 15,
    flex: 1,
    fontWeight: "500",
  },
  settingButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    elevation: 5,
  },
  modalCloseButton: {
    padding: 8,
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },

  // Help & Support Styles
  supportSection: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  supportTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  supportSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  faqItem: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    elevation: 2,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    fontSize: 14,
    color: "#666",
    marginTop: 12,
    lineHeight: 20,
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#6200ea",
  },
  contactSection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    alignItems: "center",
    elevation: 3,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6200ea",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginVertical: 6,
    elevation: 3,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },

  // About Styles
  aboutHeader: {
    alignItems: "center",
    padding: 30,
    backgroundColor: "transparent",
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
  },
  version: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  aboutCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },
  featureList: {
    marginLeft: 10,
  },
  featureItem: {
    fontSize: 15,
    color: "#666",
    marginBottom: 8,
    lineHeight: 20,
  },

  // Privacy Policy Styles
  privacyHeader: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
    elevation: 3,
  },
  privacyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  privacySubtitle: {
    fontSize: 16,
    color: "#666",
  },
  privacySection: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#6200ea",
  },
  privacySectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  privacySectionContent: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },

  // Loader Styles
  loader: {
    alignItems: "center",
    justifyContent: "center",
  },
});