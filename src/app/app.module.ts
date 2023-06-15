import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideSectionComponent } from './layout/side-section/side-section.component';
import { RecentSectionComponent } from './layout/recent-section/recent-section.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { RegisterModalComponent } from './layout/register-modal/register-modal.component';
// Material Styles
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginModalComponent } from './layout/login-modal/login-modal.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { WritePostComponent } from './pages/write-post/write-post.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideSectionComponent,
    RecentSectionComponent,
    HomeComponent,
    SinglePostComponent,
    RegisterModalComponent,
    LoginModalComponent,
    AboutUsComponent,
    WritePostComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
