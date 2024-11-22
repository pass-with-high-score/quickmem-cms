import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Classes } from '../models/class.entity.js';

export const CreateClassResource: ResourceFunction<typeof Classes> = () => ({
  resource: Classes,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
  },
});
