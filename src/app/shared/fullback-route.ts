import { Route } from "@angular/router/router";

export const fullbackRoute: Route = {
  path: '**',
  redirectTo: '/dashboard',
  pathMatch: 'full'
};
