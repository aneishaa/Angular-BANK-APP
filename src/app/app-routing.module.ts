import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
const routes: Routes = [
  {
    path:"", component:LoginComponent
  
  },
  {
    path:"register",component:RegisterComponent
  
  },
  {
  path:"dashboard",component:DashboardComponent

},
{
  path:"transaction",component:TransactionComponent

},
{
  path:"deleteconfirm",component:DeleteConfirmationComponent

}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
