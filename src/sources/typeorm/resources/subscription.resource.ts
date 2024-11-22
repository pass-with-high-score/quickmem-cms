import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Subscriptions } from '../models/subscription.entity.js';

export const CreateSubscriptionResource: ResourceFunction<typeof Subscriptions> = () => ({
  resource: Subscriptions,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
  },
});
