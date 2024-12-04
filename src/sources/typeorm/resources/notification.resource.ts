import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Notifications } from '../models/notification.entity.js';

export const CreateNotificationResource: ResourceFunction<typeof Notifications> = () => ({
  resource: Notifications,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
    editProperties: ['title', 'message'],
  },
});
