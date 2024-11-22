import dotenv from 'dotenv';

dotenv.config();

import { DataSource, DataSourceOptions } from 'typeorm';
import { Classes } from './models/class.entity.js';
import { Colors } from './models/color.entity.js';
import { Devices } from './models/device.entity.js';
import { Flashcards } from './models/flashcard.entity.js';
import { Folders } from './models/folder.entity.js';
import { Images } from './models/image.entity.js';
import { Notifications } from './models/notification.entity.js';
import { Reports } from './models/report.entity.js';
import { Streaks } from './models/streak.entity.js';
import { StudySets } from './models/study-set.entity.js';
import { StudyTimes } from './models/study-time.entity.js';
import { Subjects } from './models/subject.entity.js';
import { Subscriptions } from './models/subscription.entity.js';
import { Users } from './models/user.entity.js';

export const params: DataSourceOptions = {
  type: 'postgres' as const,
  url: process.env.POSTGRES_DATABASE_URL,
  synchronize: process.env.DATABASE_SYNC === 'true',
  logging: process.env.DATABASE_LOGGING === 'true',
  entities: [
    Classes,
    Colors,
    Devices,
    Folders,
    Images,
    Flashcards,
    Notifications,
    Reports,
    Streaks,
    StudySets,
    StudyTimes,
    Subjects,
    Subscriptions,
    Users,
  ],
  subscribers: [],
  extra:
    process.env.NODE_ENV === 'production'
      ? {
          ssl: true,
        }
      : undefined,
};

const dataSource = new DataSource(params);

export default dataSource;
