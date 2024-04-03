import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';
import { DefaultImagePipe } from './default-image.pipe';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/missionlist', pathMatch: 'full' },
  { path: 'missionlist', component: MissionlistComponent },
  { path: 'missiondetails/:flight_number', component: MissiondetailsComponent },
  { path: 'missions', component: MissionfilterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent,
    MissionfilterComponent,
    DefaultImagePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
