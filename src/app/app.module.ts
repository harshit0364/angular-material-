import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent,DialogOverviewExampleDialog } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatCardModule } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ 
    AppComponent,DialogOverviewExampleDialog,
  ],
  entryComponents:[DialogOverviewExampleDialog],
  imports: [MatInputModule,
    AngularFontAwesomeModule,
    MatButtonModule, MatCheckboxModule, 
    MatMenuModule,FormsModule,
    MatIconModule,ReactiveFormsModule, MatFormFieldModule,
    MatCardModule, MatDialogModule ,
    BrowserModule, MatInputModule,MatInputModule  ,
    HttpClientModule,MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCheckboxModule,MatFormFieldModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
