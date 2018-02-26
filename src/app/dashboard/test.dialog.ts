import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Asset} from './asset.interface';

@Component({
  selector : 'qs-test-dialog',
  templateUrl : './test.dialog.html',
})

export class TestDialog implements OnInit{

  constructor(private dialog : MatDialogRef<TestDialog>){

  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialog.close();
  }

}
