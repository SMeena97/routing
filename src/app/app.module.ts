import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
 
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ROUTING } from './app-routing.module'
 
const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
	ContentComponent,
	ContactComponent,
	AboutComponent,
	RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    rootRouting,
	ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }