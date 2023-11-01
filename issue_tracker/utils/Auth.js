let isAuthenticated = false;

if (window.localStorage.getItem('userData')) {
  isAuthenticated = true;
}

export default isAuthenticated;
