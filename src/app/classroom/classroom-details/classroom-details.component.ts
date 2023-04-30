import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css']
})
export class ClassroomDetailsComponent implements OnInit {

  id: string | null = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.firstChild == null) return;
    this.id = this.route.snapshot.firstChild.params['id'];

  }
}
