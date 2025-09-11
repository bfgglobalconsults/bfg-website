// Utility functions for role-based access control

export const ADMIN_ROLES = ['admin', 'super_admin', 'superadmin', 'administrator'];

export const isAdmin = (userRole) => {
  return ADMIN_ROLES.includes(userRole?.toLowerCase());
};

export const getUserRole = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || 'user';
  } catch (error) {
    console.error('Error getting user role:', error);
    return 'user';
  }
};

export const checkPermission = (requiredRoles = ADMIN_ROLES) => {
  const userRole = getUserRole();
  return requiredRoles.includes(userRole?.toLowerCase());
};

export const logUserInfo = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const accessToken = localStorage.getItem('accessToken');
    
    console.log('=== USER DEBUG INFO ===');
    console.log('User object:', user);
    console.log('User role:', user.role);
    console.log('Access token exists:', !!accessToken);
    console.log('Is admin:', isAdmin(user.role));
    console.log('========================');
    
    return {
      user,
      role: user.role,
      isAdmin: isAdmin(user.role),
      hasToken: !!accessToken
    };
  } catch (error) {
    console.error('Error logging user info:', error);
    return {
      user: null,
      role: 'user',
      isAdmin: false,
      hasToken: false
    };
  }
};

