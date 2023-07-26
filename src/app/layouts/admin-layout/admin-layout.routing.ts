import { Routes } from '@angular/router';
import { FormElementComponent } from 'app/back-office/form-element/form-element.component';
import { ThemeSettingComponent } from 'app/back-office/theme-setting/theme-setting.component';

import { DashboardComponent } from '../../back-office/dashboard/dashboard.component';
import { TableListComponent } from '../../back-office/table-list/table-list.component';
import { UserDataComponent } from 'app/back-office/user-data/user-data.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'theme-setting',     component: ThemeSettingComponent },
    { path: 'form-layout',     component: FormElementComponent },
    { path: 'user-list',     component: UserDataComponent },
];
