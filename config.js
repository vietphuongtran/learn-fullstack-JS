const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
  //console.info('helloWorld');
  console.info(message);
  console.info('hello');
};

export default {
  port: env.PORT || 8080
};