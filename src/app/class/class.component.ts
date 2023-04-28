import { Component, Inject, OnInit, inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NewUserComponent } from '../new-user/new-user.component';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
 constructor(private dialog: MatDialog) {}
  openDialog() {
    let dialogRef = this.dialog.open(NewUserComponent, {
      position:{ top: '50px', left: '50px' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
      // handle any actions that need to be taken after the modal is closed
    });
  }
}
 
