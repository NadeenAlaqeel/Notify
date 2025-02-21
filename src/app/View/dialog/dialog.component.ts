import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-dialog',
  standalone: true, 
  imports: [MatDialogModule, MatButtonModule, CommonModule], 
  template: `
    <h2 mat-dialog-title>Confirm Delete</h2>
    <mat-dialog-content>
      Are you sure you want to delete this event?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button color="warn" (click)="onConfirm()">Delete</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
// Close dialog and return false
  onNoClick(): void {
    this.dialogRef.close(false); 
  }
// Close dialog and return true
  onConfirm(): void {
    this.dialogRef.close(true); 
  }
}