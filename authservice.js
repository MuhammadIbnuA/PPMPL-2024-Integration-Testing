class AuthService {
    constructor(userService) {
      this.userService = userService;
    }
  
    login(username, password) {
      const user = this.userService.getUserByUsername(username);
      if (!user) {
        return 'User not found';
      }
      if (user.password === password) {
        return 'Login successful';
      }
      return 'Invalid credentials';
    }
  }
  
// Export the UserService class
module.exports = AuthService;