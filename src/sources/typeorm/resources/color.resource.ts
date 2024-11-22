import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Colors } from '../models/color.entity.js';

export const CreateColorResource: ResourceFunction<typeof Colors> = () => ({
  resource: Colors,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
  },
});
