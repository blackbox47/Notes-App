import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import notes from '../notes.data';

@Component({
  selector: 'note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  noteId;
  note;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get("id");
    for (let index = 0; index < notes.length; index++) {
      if (notes[index].id === parseInt(this.noteId)) {
        this.note = notes[index];
        break;
      }
    }
  }
}
