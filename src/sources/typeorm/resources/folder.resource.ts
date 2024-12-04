import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Folders } from '../models/folder.entity.js';

export const CreateFolderResource: ResourceFunction<typeof Folders> = () => ({
  resource: Folders,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
    edit: {
      isAccessible: false,
    },
  },
});
