// Adapters
import { Database as MongooseDatabase, Resource as MongooseResource } from '@adminjs/mongoose';
import { dark, light, noSidebar } from '@adminjs/themes';
import { Database as TypeormDatabase, Resource as TypeormResource } from '@adminjs/typeorm';

import AdminJS, { AdminJSOptions, ResourceOptions } from 'adminjs';
import argon2 from 'argon2';
import { AdminModel } from '../sources/mongoose/models/index.js';
import './components.bundler.js';
import { AuthUsers } from './constants/authUsers.js';
import { customTheme } from '../themes/index.js';
import { CreateUserResource } from '../sources/typeorm/resources/user.resource.js';
import { CreateClassResource } from '../sources/typeorm/resources/class.resource.js';
import { CreateColorResource } from '../sources/typeorm/resources/color.resource.js';
import { CreateFlashcardResource } from '../sources/typeorm/resources/flashcard.resource.js';
import { CreateFolderResource } from '../sources/typeorm/resources/folder.resource.js';
import { CreateImageResource } from '../sources/typeorm/resources/image.resource.js';
import { CreateNotificationResource } from '../sources/typeorm/resources/notification.resource.js';
import { CreateReportResource } from '../sources/typeorm/resources/report.resource.js';
import { CreateStreakResource } from '../sources/typeorm/resources/streak.resource.js';
import { CreateStudySetResource } from '../sources/typeorm/resources/study-set.resource.js';
import { CreateStudyTimeResource } from '../sources/typeorm/resources/study-time.resource.js';
import { CreateSubjectResource } from '../sources/typeorm/resources/subject.resource.js';
import { CreateSubscriptionResource } from '../sources/typeorm/resources/subscription.resource.js';
import { CreateDeviceResource } from '../sources/typeorm/resources/device.resource.js';

AdminJS.registerAdapter({ Database: MongooseDatabase, Resource: MongooseResource });
AdminJS.registerAdapter({ Database: TypeormDatabase, Resource: TypeormResource });

export const menu: Record<string, ResourceOptions['navigation']> = {
  typeorm: { name: 'Quickmem', icon: 'Folder' },
};

export const generateAdminJSConfig: () => AdminJSOptions = () => ({
  version: { admin: true, app: '2.0.0' },
  rootPath: '/admin',
  branding: {
    companyName: 'Quickmem',
    favicon: '/favicon.ico',
    theme: {
      colors: { primary100: '#2BB3CD' },
    },
  },
  defaultTheme: 'dark',
  availableThemes: [light, dark, noSidebar, customTheme],
  resources: [
    // typeorm
    CreateUserResource(),
    CreateClassResource(),
    CreateColorResource(),
    CreateDeviceResource(),
    CreateFlashcardResource(),
    CreateFolderResource(),
    CreateImageResource(),
    CreateNotificationResource(),
    CreateReportResource(),
    CreateStreakResource(),
    CreateStudySetResource(),
    CreateStudyTimeResource(),
    CreateSubjectResource(),
    CreateSubscriptionResource(),
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
