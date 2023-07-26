import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../back-office/dashboard/dashboard.component';
import { TableListComponent } from '../../back-office/table-list/table-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule } from "@angular/material/datepicker";
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { ThemeSettingComponent } from 'app/back-office/theme-setting/theme-setting.component';
import { FormElementComponent } from 'app/back-office/form-element/form-element.component';
import { NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserDataComponent } from 'app/back-office/user-data/user-data.component';
import { DirectivesModule } from 'app/shared/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule,
    NgSelectModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
    MatNativeDateModule,
    DirectivesModule
  ],
  declarations: [
    DashboardComponent,
    TableListComponent,
    FormElementComponent,
    ThemeSettingComponent,
    UserDataComponent
  ],
  providers: [MatDatepickerModule,DatePipe],
})

export class AdminLayoutModule {}
