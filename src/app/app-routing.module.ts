import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathsParams } from 'src/shared/enums/paths-params.enum';
import { Paths } from 'src/shared/enums/paths.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${Paths.channels}/${Paths.me}`,
    pathMatch: 'full',
  },
  {
    path: Paths.channels,
    children: [
      {
        path: Paths.me,
        loadChildren: () =>
          import('./views/main-channel/main-channel.module').then(
            (m) => m.MainChannelModule
          ),
      },
      {
        path: `:${PathsParams.channel}`,
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
