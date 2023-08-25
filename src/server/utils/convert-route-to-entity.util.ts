const mapping: Record<string, string> = {
  credits: 'credit',
  offers: 'offer',
  organizations: 'organization',
  screenshots: 'screenshot',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
