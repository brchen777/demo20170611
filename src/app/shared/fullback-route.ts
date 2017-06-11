import { Route } from "@angular/router/router";

export const fullbackRoute: Route = {
  path: '**',
  redirectTo: '/page1',
  pathMatch: 'full'
};
