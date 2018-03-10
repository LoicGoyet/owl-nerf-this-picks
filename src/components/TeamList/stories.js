import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import TeamList from './index';

const teams = [
  {
    id: 4523,
    primaryColor: '0c2340',
    secondaryColor: '0072ce',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/NO44N7DDJAPF1508792362936.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/YX6JZ6FR89LU1507822882865.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/YX6JZ6FR89LU1507822882865.svg',
  },
  {
    id: 4524,
    primaryColor: 'ff9e1b',
    secondaryColor: '000000',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/3JZTLCPH37QD1508792362853.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/LAKZ6R7QEG6S1507822883033.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/LAKZ6R7QEG6S1507822883033.svg',
  },
  {
    id: 4525,
    primaryColor: '000000',
    secondaryColor: '97d700',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/HLRHYU5MT9MD1508792362935.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/UPM8U5QV3DDU1507858876250.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/UPM8U5QV3DDU1507858876250.svg',
  },
  {
    id: 4402,
    primaryColor: '174b97',
    secondaryColor: 'f2df00',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/43UINMGMA83X1513383982827.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/W4FGQ24HKCB51513383982827.svg',
  },
  {
    id: 4403,
    primaryColor: '171c38',
    secondaryColor: '0f57ea',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/9r/9RYLM8FICLJ01508818792450.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/3PBR8VEYM8SH1517250447953.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/3PBR8VEYM8SH1517250447953.svg',
  },
  {
    id: 4404,
    homeLocation: 'San Francisco, CA',
    primaryColor: 'fc4c02',
    secondaryColor: '75787b',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/YO24NN5KAOFL1508792362791.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/0SY7LHKHV86R1507822883113.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/0SY7LHKHV86R1507822883113.svg',
  },
  {
    id: 4405,
    primaryColor: '4a7729',
    secondaryColor: '000000',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/0D8BNUWVZP6B1508792362890.PNG',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/L3U59GQVS1ZK1507822882879.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/L3U59GQVS1ZK1507822882879.svg',
  },
  {
    id: 4406,
    primaryColor: '3c1053',
    secondaryColor: '000000',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/3AEMOZZL76PF1508792362892.PNG',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/CHTRRZCBEYGN1507822882862.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/CHTRRZCBEYGN1507822882862.svg',
  },
  {
    id: 4407,
    primaryColor: 'feda00',
    secondaryColor: 'af272f',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/4GO273NATVWM1508792362854.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/M1KNTZW8SGHZ1507822883041.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/M1KNTZW8SGHZ1507822883041.svg',
  },
  {
    id: 4408,
    primaryColor: 'd22630',
    secondaryColor: '000000',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/B0R64QSNCDLX1508792362793.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/ZIVUVIWXNIFL1507822883114.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/ZIVUVIWXNIFL1507822883114.svg',
  },
  {
    id: 4409,
    primaryColor: 'aa8a00',
    secondaryColor: '000000',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/LHRSIW3NWH211508792362796.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/E9MU0AK0JIXT1507858876249.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/E9MU0AK0JIXT1507858876249.svg',
  },
  {
    id: 4410,
    primaryColor: 'ff8200',
    secondaryColor: '59cbe8',
    logo:
      'https://bnetcmsus-a.akamaihd.net/cms/page_media/NW461AQIYQMK1508792363133.png',
    icon:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/HCS229B4DP021507822883016.svg',
    secondaryPhoto:
      'https://bnetcmsus-a.akamaihd.net/cms/template_resource/HCS229B4DP021507822883016.svg',
  },
];

storiesOf('TeamList').add('default', () => (
  <TeamList
    teams={teams}
    activeTeams={[4404, 4523, 4409]}
    onItemClick={action(`click on`)}
  />
));
