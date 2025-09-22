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
            <View key={comment.id} style={[styles.comment, { backgroundColor: theme.inputBackground }]}>
              <Text style={styles.commentUser}>{comment.user}</Text>
              <Text style={[styles.commentText, { color: theme.textPrimary }]}>{comment.text}</Text>
            </View>
          ))}
          
          <View style={[styles.addComment, { backgroundColor: theme.inputBackground, borderColor: theme.inputBorder }]}>
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
        contentContainerStyle={{ paddingBottom: 100 }}
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
        contentContainerStyle={{ paddingBottom: 100 }}
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
        {userPosts.length > 0 ? (
          userPosts.map(post => (
            <View key={post.id} style={[styles.userPost, { backgroundColor: theme.cardBackground }]}>
              <Text style={[styles.userPostContent, { color: theme.textPrimary }]}>{post.content}</Text>
              <Text style={[styles.userPostStats, { color: theme.textSecondary }]}>
                {post.likes} likes • {post.comments.length} comments
              </Text>
            </View>
          ))
        ) : (
          <Text style={[styles.noPostsText, { color: theme.textSecondary }]}>You haven't posted anything yet.</Text>
        )}
      </View>
    </ScrollView>
  );
}

// --- Settings Screen ---
function SettingsScreen() {
  const { theme, isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  const { logout } = React.useContext(AuthContext);

  return (
    <View style={[styles.settingsContainer, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.settingsList}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>General</Text>
        
        <View style={[styles.settingItem, { backgroundColor: theme.cardBackground }]}>
          <View style={styles.settingTextContainer}>
            <Ionicons name="moon-outline" size={24} color={theme.textPrimary} style={styles.settingIcon} />
            <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>Dark Mode</Text>
          </View>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          />
        </View>

        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Account</Text>
        <TouchableOpacity style={[styles.settingItem, { backgroundColor: theme.cardBackground }]} onPress={() => Alert.alert("Not implemented", "This feature is not yet available.")}>
          <View style={styles.settingTextContainer}>
            <Ionicons name="person-circle-outline" size={24} color={theme.textPrimary} style={styles.settingIcon} />
            <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>Edit Profile</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingItem, { backgroundColor: theme.cardBackground }]} onPress={() => Alert.alert("Not implemented", "This feature is not yet available.")}>
          <View style={styles.settingTextContainer}>
            <Ionicons name="lock-closed-outline" size={24} color={theme.textPrimary} style={styles.settingIcon} />
            <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>Change Password</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingItem, { backgroundColor: theme.cardBackground }]} onPress={() => Alert.alert("Not implemented", "This feature is not yet available.")}>
          <View style={styles.settingTextContainer}>
            <Ionicons name="notifications-outline" size={24} color={theme.textPrimary} style={styles.settingIcon} />
            <Text style={[styles.settingLabel, { color: theme.textPrimary }]}>Notifications</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// --- Help & Support Screen ---
function HelpScreen() {
  const { theme } = React.useContext(ThemeContext);
  const [expandedItem, setExpandedItem] = useState(null);

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

  const handleToggle = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.helpSection}>
        <MotiView
          from={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "timing", duration: 600 }}
          style={[styles.supportCard, { backgroundColor: theme.cardBackground }]}
        >
          <Ionicons name="headset-outline" size={40} color="#6200ea" style={{ alignSelf: 'center', marginBottom: 15 }} />
          <Text style={[styles.supportTitle, { color: theme.textPrimary }]}>We're here to help!</Text>
          <Text style={[styles.supportText, { color: theme.textSecondary }]}>
            Can't find what you're looking for? Reach out to our support team.
          </Text>
          <TouchableOpacity style={styles.contactButton} onPress={() => Alert.alert("Contact Support", "We'll get back to you soon!")}>
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </MotiView>

        <Text style={[styles.sectionTitle, { color: theme.textPrimary, marginTop: 20 }]}>FAQs</Text>
        {faqData.map((faq, index) => (
          <MotiView
            key={faq.id}
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: "timing", duration: 300, delay: index * 50 }}
            style={[styles.faqItem, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}
          >
            <TouchableOpacity onPress={() => handleToggle(faq.id)} activeOpacity={0.8}>
              <View style={styles.faqQuestionHeader}>
                <Text style={[styles.faqQuestion, { color: theme.textPrimary }]}>{faq.question}</Text>
                <Ionicons 
                  name={expandedItem === faq.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={theme.textSecondary} 
                />
              </View>
            </TouchableOpacity>
            <AnimatePresence>
              {expandedItem === faq.id && (
                <MotiView
                  from={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "timing", duration: 200 }}
                  style={{ overflow: 'hidden' }}
                >
                  <Text style={[styles.faqAnswer, { color: theme.textSecondary }]}>{faq.answer}</Text>
                </MotiView>
              )}
            </AnimatePresence>
          </MotiView>
        ))}
      </View>
    </ScrollView>
  );
}

// --- Tab Navigator ---
function MainTabNavigator() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Images") {
            iconName = focused ? "image" : "image-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6200ea",
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarStyle: { 
          backgroundColor: theme.cardBackground, 
          borderTopColor: theme.border,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 20,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Images" component={ImagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// --- Main App Component ---
function App() {
  const { user, loading } = React.useContext(AuthContext);
  const { theme } = React.useContext(ThemeContext);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.background }]}>
        <MotiView
          from={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 1000 }}
        >
          <Ionicons name="planet" size={100} color="#6200ea" />
          <Text style={[styles.loadingText, { color: theme.textPrimary }]}>Loading...</Text>
        </MotiView>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={theme.background === '#121212' ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />
      {user ? (
        <Drawer.Navigator
          initialRouteName="TabNavigator"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Drawer.Screen name="TabNavigator" component={MainTabNavigator} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
        </Drawer.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
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

// --- Wrapper for App and Providers ---
export default function AppWrapper() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  );
}

// --- Enhanced Styles ---
const styles = StyleSheet.create({
  // General Styles
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // Auth Styles
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
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
    fontSize: 14,
  },

  // Post Styles
  postCard: {
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
  },
  postTime: {
    fontSize: 12,
    marginTop: 2,
  },
  postContent: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: "row",
    borderTopWidth: 1,
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
    fontSize: 14,
    fontWeight: "600",
  },

  // Comments Styles
  commentsSection: {
    marginTop: 16,
    borderTopWidth: 1,
    paddingTop: 12,
  },
  comment: {
    marginBottom: 8,
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
    marginTop: 2,
  },
  addComment: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
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
    margin: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#6200ea",
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    marginTop: 5,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    marginTop: 2,
  },
  userPostsSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  userPost: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  userPostContent: {
    fontSize: 15,
    marginBottom: 8,
  },
  userPostStats: {
    fontSize: 12,
  },
  noPostsText: {
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },

  // Settings & Help Styles
  settingsContainer: {
    flex: 1,
    padding: 15,
  },
  settingsList: {
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  settingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingIcon: {
    marginRight: 15,
  },
  helpSection: {
    padding: 15,
  },
  supportCard: {
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#6200ea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  supportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  supportText: {
    textAlign: 'center',
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginTop: 10,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  faqItem: {
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  faqQuestionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    fontSize: 14,
    marginTop: 10,
  },

  // Drawer Styles
  drawerContainer: {
    flex: 1,
  },
  drawerHeader: {
    padding: 20,
    alignItems: "center",
    marginBottom: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  drawerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#6200ea",
    marginBottom: 10,
  },
  drawerUserName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  drawerUserEmail: {
    fontSize: 14,
  },
  quickToggle: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 35,
    height: 35,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  drawerIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  drawerLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  drawerLogoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  drawerFooterText: {
    fontSize: 12,
  },
});