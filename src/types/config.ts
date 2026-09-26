export interface SiteConfig {
  title: string;
  subtitle: string;
  lang: 'zh' | 'en' | 'ja';
}

export interface ProfileConfig {
  avatar: string;
  name: string;
  email: string;
  bio: string;
  links: SocialLink[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}
