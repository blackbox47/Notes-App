import { Component } from '@angular/core';
import { CreateNotesService } from '../services/create-notes.service';
import notes from '../notes.data';

@Component({
  selector: 'create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.css']
})
export class CreateNotesComponent {

  allNotes = notes;

  constructor(private createNotesService: CreateNotesService) { }

  createNotes(data) {
    this.createNotesService.createNotes(data);
    this.display = "none";
  }

  display = "none";

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}
