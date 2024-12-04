import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Flashcards } from '../models/flashcard.entity.js';

export const CreateFlashcardResource: ResourceFunction<typeof Flashcards> = () => ({
  resource: Flashcards,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
    edit: {
      isAccessible: false,
    },
  },
});
