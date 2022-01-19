import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerChannelComponent } from './server-channel.component';

const routes: Routes = [
  {
    path: '',
    component: ServerChannelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerChannelRoutingModule {}
