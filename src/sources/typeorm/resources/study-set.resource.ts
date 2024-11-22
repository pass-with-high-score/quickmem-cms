import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { StudySets } from '../models/study-set.entity.js';

export const CreateStudySetResource: ResourceFunction<typeof StudySets> = () => ({
  resource: StudySets,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
  },
});
