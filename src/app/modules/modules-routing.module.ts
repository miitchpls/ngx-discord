import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '@me',
        loadChildren: () =>
          import('./main-channel/main-channel.module').then(
            (m) => m.MainChannelModule
          ),
      },
      {
        path: ':channel',
        loadChildren: () =>
          import('./server-channel/server-channel.module').then(
            (m) => m.ServerChannelModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
