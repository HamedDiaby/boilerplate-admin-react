import { NavigationPathsEnum } from "./NavigationPathsEnum";

const baseUrl = "/app";

export const SidebarRoutesPath = {
  dashboard: `${baseUrl}${NavigationPathsEnum.dashboard}`,
  collabs: `${baseUrl}${NavigationPathsEnum.collabs}`,
  chats: `${baseUrl}${NavigationPathsEnum.chats}`,
  instructions: `${baseUrl}${NavigationPathsEnum.instructions}`,
  bdd: `${baseUrl}${NavigationPathsEnum.bdd}`,
  news: `${baseUrl}${NavigationPathsEnum.news}`,
  settings: `${baseUrl}${NavigationPathsEnum.settings}`,
  logout: NavigationPathsEnum.login,
} as const;
