import dotenv from 'dotenv';

dotenv.config({
  path: `${process.cwd()}/.env`,
});

switch (process.env.SERVER) {
  default:
  case 'EXPRESS':
    await import('./servers/express/index.js');
    break;
  case 'NESTJS':
    await import('./servers/nestjs/index.js');
    break;
}
