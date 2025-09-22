# Contributing to SocialX

Thank you for your interest in contributing to SocialX! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Git

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/socialx-app.git
   cd socialx-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   expo start
   ```

## Development Guidelines

### Code Style
- Use meaningful variable and function names
- Follow React Native and JavaScript best practices
- Maintain consistent indentation (2 spaces)
- Add comments for complex logic
- Use React hooks appropriately

### Component Guidelines
- Keep components focused and reusable
- Use proper prop validation
- Implement error boundaries where appropriate
- Follow the existing animation patterns using Moti
- Ensure theme compatibility (light/dark mode)

### Testing
- Test on both iOS and Android platforms
- Verify theme switching functionality
- Test navigation flows
- Check performance on lower-end devices

## Types of Contributions

### Bug Fixes
- Check existing issues before creating new ones
- Provide detailed reproduction steps
- Include device/platform information
- Test the fix thoroughly before submitting

### New Features
- Discuss major features in issues first
- Follow the existing UI/UX patterns
- Ensure accessibility compliance
- Add appropriate animations and transitions

### Documentation
- Improve existing documentation
- Add code comments and examples
- Update README if necessary
- Create tutorials or guides

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the code style guidelines
   - Add appropriate comments
   - Test thoroughly

3. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of changes"
   ```
   
   Use conventional commit messages:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for improvements
   - `Docs:` for documentation changes

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Provide a clear title and description
   - Reference related issues
   - Include screenshots for UI changes
   - List any breaking changes

## Pull Request Guidelines

### Title Format
Use clear, descriptive titles:
- ✅ "Add dark theme toggle animation"
- ✅ "Fix comment posting bug on Android"
- ❌ "Updates"
- ❌ "Bug fix"

### Description Template
```markdown
## What does this PR do?
Brief description of changes

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on iOS
- [ ] Tested on Android
- [ ] Theme switching works
- [ ] Navigation flows correctly

## Screenshots (if applicable)
Add screenshots for UI changes

## Related Issues
Closes #issue-number
```

## Coding Standards

### JavaScript/React Native
- Use ES6+ features appropriately
- Prefer functional components with hooks
- Use destructuring for props and state
- Implement proper error handling

### Styling
- Use StyleSheet.create for styles
- Support both light and dark themes
- Follow the existing design patterns
- Ensure responsive design

### Navigation
- Follow React Navigation best practices
- Maintain consistent navigation patterns
- Test deep linking functionality
- Handle back button behavior properly

## Issue Guidelines

### Bug Reports
Include the following information:
- Device and OS version
- App version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots or videos if applicable

### Feature Requests
- Describe the problem you're solving
- Explain the proposed solution
- Consider alternatives
- Think about implementation complexity

## Communication

### Be Respectful
- Use inclusive language
- Be patient with new contributors
- Provide constructive feedback
- Help others learn and grow

### Getting Help
- Check existing documentation first
- Search closed issues for solutions
- Ask questions in discussions
- Be specific about problems

## Recognition

Contributors will be recognized in:
- README acknowledgments section
- Release notes for significant contributions
- Social media shout-outs for major features

## Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive criticism
- Respect different viewpoints and experiences

### Unacceptable Behavior
- Harassment or discrimination
- Personal attacks or insults  
- Publishing private information
- Other unprofessional conduct

### Enforcement
Violations may result in temporary or permanent bans from the project.

## Development Tips

### Performance
- Use FlatList for large datasets
- Optimize images and animations
- Test on lower-end devices
- Monitor memory usage

### Accessibility
- Add appropriate accessibility labels
- Ensure proper color contrast
- Test with screen readers
- Support keyboard navigation

### Internationalization
- Use string constants for user-facing text
- Consider right-to-left language support
- Test with different locale settings
- Prepare for future i18n implementation

## Release Process

1. **Version Bumping**
   - Follow semantic versioning (semver)
   - Update version in package.json and app.json
   - Create release notes

2. **Testing**
   - Run full test suite
   - Test on multiple devices
   - Verify build process works

3. **Documentation**
   - Update README if needed
   - Update API documentation
   - Create migration guides for breaking changes

Thank you for contributing to SocialX! Your efforts help make this project better for everyone.