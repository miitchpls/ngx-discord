import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../shared/components/sidebar/sidebar.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';

@NgModule({
  declarations: [ModulesComponent],
  imports: [CommonModule, ModulesRoutingModule, SidebarModule],
})
export class ModulesModule {}
