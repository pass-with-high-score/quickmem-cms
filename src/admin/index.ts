// Adapters
import { Database as MikroormDatabase, Resource as MikroormResource } from '@adminjs/mikroorm';
import { Database as MongooseDatabase, Resource as MongooseResource } from '@adminjs/mongoose';
import { Database as ObjectionDatabase, Resource as ObjectionResource } from '@adminjs/objection';
import { Database as PrismaDatabase, Resource as PrismaResource } from '@adminjs/prisma';
import { Database as SequelizeDatabase, Resource as SequelizeResource } from '@adminjs/sequelize';
import { dark, light, noSidebar } from '@adminjs/themes';
import { Database as TypeormDatabase, Resource as TypeormResource } from '@adminjs/typeorm';

import AdminJS, { AdminJSOptions, ResourceOptions } from 'adminjs';
import argon2 from 'argon2';
import { AdminModel } from '../sources/mongoose/models/index.js';
import { CreateOrganizationResource, CreatePersonResource } from '../sources/typeorm/resources/index.js';
import './components.bundler.js';
import { componentLoader } from './components.bundler.js';
import { AuthUsers } from './constants/authUsers.js';
import { locale } from './locale/index.js';
import pages from './pages/index.js';
import { customTheme } from '../themes/index.js';

AdminJS.registerAdapter({ Database: MikroormDatabase, Resource: MikroormResource });
AdminJS.registerAdapter({ Database: MongooseDatabase, Resource: MongooseResource });
AdminJS.registerAdapter({ Database: ObjectionDatabase, Resource: ObjectionResource });
AdminJS.registerAdapter({ Database: PrismaDatabase, Resource: PrismaResource });
AdminJS.registerAdapter({ Database: SequelizeDatabase, Resource: SequelizeResource });
AdminJS.registerAdapter({ Database: TypeormDatabase, Resource: TypeormResource });

export const menu: Record<string, ResourceOptions['navigation']> = {
  typeorm: { name: 'Quickmem', icon: 'Folder' },
};

export const generateAdminJSConfig: () => AdminJSOptions = () => ({
  version: { admin: true, app: '2.0.0' },
  rootPath: '/admin',
  locale,
  assets: {
    styles: ['/custom.css'],
    scripts: process.env.NODE_ENV === 'production' ? ['/gtm.js'] : [],
  },
  branding: {
    companyName: 'Quickmem',
    favicon: '/favicon.ico',
    theme: {
      colors: { primary100: '#4D70EB' },
    },
  },
  defaultTheme: 'light',
  availableThemes: [light, dark, noSidebar, customTheme],
  componentLoader,
  pages,
  env: {
    STORYBOOK_URL: process.env.STORYBOOK_URL,
    GITHUB_URL: process.env.GITHUB_URL,
    SLACK_URL: process.env.SLACK_URL,
    DOCUMENTATION_URL: process.env.DOCUMENTATION_URL,
  },
  resources: [
    // typeorm
    CreateOrganizationResource(),
    CreatePersonResource(),
  ],
});

export const createAuthUsers = async () =>
  Promise.all(
    AuthUsers.map(async ({ email, password }) => {
      const admin = await AdminModel.findOne({ email });
      if (!admin) {
        await AdminModel.create({ email, password: await argon2.hash(password) });
      }
    }),
  );
