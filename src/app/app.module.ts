import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { CreateNotesService } from './services/create-notes.service';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardViewComponent } from './card-view/card-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateNotesComponent,
    ShowNotesComponent,
    TimeAgoPipe,
    SummaryPipe,
    NoteDetailsComponent,
    HomeComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: 'notes/:id', component: NoteDetailsComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    CreateNotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
