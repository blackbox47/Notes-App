import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import notes from '../notes.data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService) { }

  @Input('card-data') note;
  @Input('button-name') buttonName;
  @Input('button-type') buttonType;
  @Input('isDetail') isDetail;

  ngOnInit(): void {
  }

  navigateOtherPage(data) {
    this.router.navigate(["/notes/" + data.id]);
  }

  delete(data) {
    let index = notes.indexOf(data);
    notes.splice(index, 1);
    this.toastr.success('', 'Notes deleted Successfully!');
    this.router.navigate(['/']);
  }


}
