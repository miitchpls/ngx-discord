import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'channels/@me',
    pathMatch: 'full',
  },
  {
    path: 'channels',
    children: [
      {
        path: '@me',
        loadChildren: () =>
          import('./views/main-channel/main-channel.module').then(
            (m) => m.MainChannelModule
          ),
      },
      {
        path: ':channel',
        loadChildren: () =>
          import('./views/server-channel/server-channel.module').then(
            (m) => m.ServerChannelModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
