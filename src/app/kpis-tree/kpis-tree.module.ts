import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { KpisTreeRoutingModule } from './kpis-tree-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// start importing services
import { GetTreeviewNodesService } from '../shared/get-treeview-nodes.service';
// end importing services

// start importing components
import { MuiTreeviewComponent } from './mui-treeview/mui-treeview.component';
import { CreateKpiComponent } from './create-kpi/create-kpi.component';
// end importing components

// start importing material
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
// end importing material

@NgModule({
  declarations: [MuiTreeviewComponent, CreateKpiComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    KpisTreeRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MuiTreeviewComponent,
    CreateKpiComponent
  ],
  providers: [GetTreeviewNodesService]
})
export class KpisTreeModule {}
