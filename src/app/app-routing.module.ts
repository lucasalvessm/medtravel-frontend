import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineInsertComponent } from './medicine-insert/medicine-insert.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './commons/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'medicine',
    canActivate: [AuthGuard],
    children: [
      { path: 'insert', component: MedicineInsertComponent },
      { path: 'list', component: MedicineListComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MedicineListComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
