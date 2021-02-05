import { Injectable } from '@angular/core';
import notes from './notes.data';

@Injectable({
  providedIn: 'root'
})
export class CreateNotesService {

  constructor() { }
  createNotes(data) {
    notes.push({
      id: notes.length + 1,
      time: new Date().getTime(),
      title: data.title,
      content: data.content
    })
    console.log(notes);
  }
}
