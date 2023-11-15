import React, { useState } from 'react';
import { Steps, Divider, Stack, IconButton } from 'rsuite';
import PageContent from '@/components/PageContent';

import PageNextIcon from '@rsuite/icons/PageNext';
import PagePreviousIcon from '@rsuite/icons/PagePrevious';

import CatalogTypeForm from './CatalogTypeForm';
import ConfigurationForm from './ConfigurationForm';
import ProjectInfoForm from './ProjectInfoForm';
import Completed from './Completed';

const forms = [CatalogTypeForm, ConfigurationForm, ProjectInfoForm, Completed];

const CreateCatalogForm = () => {
  const [step, setStep] = useState(0);
  const Form = forms[step];

  return (
    <PageContent>
      <Steps current={step}>
        <Steps.Item title="Catalog Type" />
        <Steps.Item title="Catalog Conf" />
        <Steps.Item title="Validation" />
        <Steps.Item title="Completed" />
      </Steps>

      <Divider />
      <div className="create-catalog-form">
        <Form />

        <Divider />

        <Stack justifyContent="space-between">
          {step !== 0 && (
            <IconButton icon={<PagePreviousIcon />} onClick={() => setStep(Math.max(step - 1, 0))}>
              Back
            </IconButton>
          )}

          {step !== forms.length - 1 && (
            <IconButton
              icon={<PageNextIcon />}
              placement="right"
              appearance="primary"
              onClick={() => setStep(Math.min(step + 1, 4))}
            >
              Continue
            </IconButton>
          )}
        </Stack>
      </div>
    </PageContent>
  );
};

export default CreateCatalogForm;
