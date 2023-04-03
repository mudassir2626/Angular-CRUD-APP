import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentServiceService } from '../Service/student-service.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-std-add-edit',
  templateUrl: './std-add-edit.component.html',
  styleUrls: ['./std-add-edit.component.css']
})
export class StdAddEditComponent implements OnInit{
  
   stdform:FormGroup;

   constructor(private _formgroup :FormBuilder,
    private _stdService:StudentServiceService , 
    private _dialogref:MatDialogRef<StdAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){
    this.stdform= this._formgroup.group({
      firstname:'',
      lastname:'',
      email:'',
      age:'',
      dateofbirth:'',
      cnic:'',
      gender:''
    })
   }

   ngOnInit(): void {
     this.stdform.patchValue(this.data);
   }

   OnAddFormSubmitt(){
    if(this.stdform.valid){
      if(this.data){
        this._stdService.UpdateStudentForm(this.data.id,this.stdform.value).subscribe({
          next:(val:any)=>{
            console.log(this.stdform.value)
            alert("Student Data Updated");
            
            this._dialogref.close(true);
            
          },
          error:(err:any)=>{
            console.log(err);
          }
        });
      }
      else{
        this._stdService.AddStudent(this.stdform.value).subscribe({
          next:(val:any)=>{
            console.log(this.stdform.value)
            alert("Student Data Added Successfully");
            
            this._dialogref.close(true);
            
          },
          error:(err:any)=>{
            console.log(err);
          }
        });
      }
      }
      }
}
