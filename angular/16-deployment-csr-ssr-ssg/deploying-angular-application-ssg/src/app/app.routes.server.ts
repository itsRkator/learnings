import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'users/:userId/tasks',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const ids = ['u1', 'u2', 'u3'];
      return ids.map((id) => ({ userId: id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
