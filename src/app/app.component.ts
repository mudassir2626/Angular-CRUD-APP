import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StdAddEditComponent } from './std-add-edit/std-add-edit.component';
import { StudentServiceService } from './Service/student-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 
  'firstname',
  'lastname',
  'email', 
  'age', 
  'dateofbirth',
  'cnic', 
  'gender',
  'Actions'
    ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dailog: MatDialog,
    private _GetStudentData: StudentServiceService
  ) { }
  ngOnInit(): void {
    this.GetStudentData();
  }

  AddEditStudentForm() {
    const dialogref = this._dailog.open(StdAddEditComponent);
    dialogref.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.GetStudentData();
        }
      }
    })

  }
  GetStudentData() {
    this._GetStudentData.GetStudentData().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: console.log,
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  DeleteStudent(id: number) {
    this._GetStudentData.DeleteStudent(id).subscribe({
      next: (res) => {
        alert('Student Deleted Successfully');
        this.GetStudentData();
      },
      error: console.log,
    })
  }
  EditStudentForm(data:any) {
  const dialogref = this._dailog.open(StdAddEditComponent,{
    data,
  });
  dialogref.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.GetStudentData();
      }
    }
  })
}
}

