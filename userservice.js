class UserService {
    constructor() {
      this.users = [
        { id: 1, username: '', password: '' },
        { id: 2, username: '', password: '' }
      ];
    }
  
    getUserByUsername(username) {
      return this.users.find(user => user.username === username);
    }
  }
  
// Export the UserService class
module.exports = UserService;