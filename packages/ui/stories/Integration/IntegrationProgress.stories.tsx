import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { IntegrationProgress } from '../../src';

const stories = storiesOf('Integration/IntegrationProgress', module);

stories

  .add('without log link', () => (
    <IntegrationProgress
      value={text('value', 'Building')}
      currentStep={text('currentStep', '2')}
      totalSteps={text('totalSteps', '4')}
      i18nLogUrlText={text('i18nLogUrlText', 'View Log')}
    />
  ))
  .add('with log link', () => (
    <IntegrationProgress
      value={text('value', 'Deploying')}
      currentStep={text('currentStep', '3')}
      totalSteps={text('totalSteps', '4')}
      logUrl={text('logUrl', 'http://localhost:9001')}
      i18nLogUrlText={text('i18nLogUrlText', 'View Log')}
    />
  ));
