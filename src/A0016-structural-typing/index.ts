type User = { username: string; password: string };
type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'bd', password: '123456' };
const sentUser = { username: 'bd', password: '123456', permission: 'admin' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);

if (loggedIn) {
  console.log('Welcome, bd!');
} else {
  console.log('Username or password incorrect.');
}
