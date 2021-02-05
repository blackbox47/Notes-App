import { Component, OnInit } from '@angular/core';
import notes from '../notes.data';

@Component({
  selector: 'show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {
  allNotes = notes;
  constructor() { }

  ngOnInit(): void {
  }

}
