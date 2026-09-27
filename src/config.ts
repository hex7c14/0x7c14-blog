import type { ProfileConfig, SiteConfig } from './types/config';

export const siteConfig: SiteConfig = {
  title: "0x7c14' blog",
  subtitle: 'A Windows 11 Settings-style blog',
  lang: 'zh',
};

export const profileConfig: ProfileConfig = {
  avatar: '/avatar.jpg',
  name: '0x7c14',
  email: 'hex7c14@outlook.com',
  bio: 'ACG & Tech（手机端还是打开电脑模式浏览吧）',
  links: [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/hex7c14',
    },
    {
      name: 'Email',
      icon: 'mail',
      url: 'mailto:hex7c14@outlook.com',
    },
  ],
};
