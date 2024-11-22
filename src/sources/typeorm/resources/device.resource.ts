import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Devices } from '../models/device.entity.js';

export const CreateDeviceResource: ResourceFunction<typeof Devices> = () => ({
  resource: Devices,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
  },
});
