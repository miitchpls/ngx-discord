import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChannelComponent } from './main-channel.component';

const routes: Routes = [
  {
    path: '',
    component: MainChannelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainChannelRoutingModule {}
