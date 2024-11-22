import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { StudyTimes } from '../models/study-time.entity.js';

export const CreateStudyTimeResource: ResourceFunction<typeof StudyTimes> = () => ({
  resource: StudyTimes,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
  },
});
