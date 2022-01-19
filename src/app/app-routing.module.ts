import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'channels/@me',
    pathMatch: 'full',
  },
  {
    path: 'channels/:channel',
    loadChildren: () =>
      import('./channels/channels.module').then((m) => m.ChannelsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
