import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutes: Routes = [
{ path: 'content', component: ContentComponent },
{ path: 'about', component: AboutComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'contact', component: ContactComponent }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);