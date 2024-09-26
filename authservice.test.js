const UserService = require('./userservice');
const AuthService = require('./authservice');

describe('AuthService Integration Test', () => {
  let userService;
  let authService;

  beforeEach(() => {
    userService = new UserService();
    authService = new AuthService(userService);
  });

    test('should login successfully with correct credentials', () => {
        const result = authService.login('', '');
        expect(result).toBe('Login successful');
    });

    test('should login successfully with correct credentials for user2', () => {
        const result = authService.login('', '');
        expect(result).toBe('Login successful');
    });

    test('should fail login with incorrect password', () => {
        const result = authService.login('', '');
        expect(result).toBe('Invalid credentials');
    });

    test('should fail login with incorrect password', () => {
        const result = authService.login('', '');
        expect(result).toBe('Invalid credentials');
    });

    test('should return "User not found" for non-existing user', () => {
        const result = authService.login('', '');
        expect(result).toBe('User not found');
    });

});
