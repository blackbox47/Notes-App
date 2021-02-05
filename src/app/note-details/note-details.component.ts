import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import notes from '../notes.data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  noteId;
  note;
  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.noteId = this.route.snapshot.paramMap.get("id");
    this.note = notes[this.noteId - 1];
  }

  delete(id) {
    console.log(notes);
    notes.splice(id - 1, 1);
    this.toastr.success('', 'Notes deleted Successfully!');
    this.router.navigate(['/']);
  }
}
