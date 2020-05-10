import React from 'react';

import { useTranslation } from 'react-i18next';

function CreateCode() {
  const { t } = useTranslation();
  
  return (
    <h1>{t('Add your code')}</h1>
  );
}

export default CreateCode;
