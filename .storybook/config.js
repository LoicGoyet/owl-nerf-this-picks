import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withInfo, setDefaults } from '@storybook/addon-info'

import BaseStyle from '../src/components/BaseStyle'


// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// Info Addon
addDecorator((story, context) => withInfo('common info')(story)(context))
setDefaults({
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  styles: {
    infoBody: {
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      fontSize: 'inherit',
      border: 0,
      boxShadow: 'none',
      marginTop: 0,
      marginBottom: 0,
    },
  }, // Overrides styles of addon. The object should follow this shape: https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19. This prop can also accept a function which has the default stylesheet passed as an argument.
});

// Options addon
setOptions({
  name: 'Nerf This',
  url: 'https://github.com/LoicGoyet/owl-nerf-this-picks',
  sortStoriesByKind: true,
  selectedAddonPanel: undefined, // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
});

// Base Style
addDecorator(story => <BaseStyle>{story()}</BaseStyle>)


configure(loadStories, module);
