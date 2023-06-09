import { Component, Inject, OnInit, inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NewUserComponent } from '../new-user/new-user.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  {

  // constructor() {}
  // constructor(public dialogRef: MatDialogRef<NewUserComponent>) { }

  // onSave() {
  //   // TODO: Implement save logic
  //   this.dialogRef.close();
  // }

  constructor(private dialog: MatDialog) {}
  openUserFormModal() {
    let dialogRef = this.dialog.open(NewUserComponent, {
      width: '600px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // handle any actions that need to be taken after the modal is closed
    });
  }
  
}
