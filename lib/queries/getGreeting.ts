export const getGreeting = async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return "Hello User";
};
