const log = (message: unknown) => {
  if (process.env.NODE_ENV === 'test') return;

  console.log(message);
};

export default log;
