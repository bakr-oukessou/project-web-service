import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UsersService } from '../services/users.service';

export interface DialogData {
  firstname: string;
  username: string;
}
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  constructor(
    public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private usersService:UsersService
  ) {}
  f_name:string="";
  l_name:String="";
  title:String="";
  status:String="";
  avatar_url:String="";
  
  OnsubmitData(): void {
    this.usersService.CreatUsers({ "f_name":this.f_name,
    "l_name":this.l_name,"title":this.title,"status":this.status,"avatar_url":this.avatar_url}).subscribe({
      next:(data:any)=>{}
    }

    )
    this.dialogRef.close();
  }
}
