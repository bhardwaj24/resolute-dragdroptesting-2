import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  msg;
  dropArea;
  constructor() { }

  ngOnInit() {
    this.dropArea = document.getElementById('drop-area');

    this.dropArea.addEventListener('dragenter', this.handlerFunction1, false)
    this.dropArea.addEventListener('dragleave', this.handlerFunction2, false)
    this.dropArea.addEventListener('dragover', this.handlerFunction3, false)
    this.dropArea.addEventListener('drop', (event) => {
      event.preventDefault();
      event.stopPropagation();
  })
}

  handlerFunction1() {
    console.log("Entered");
  }

  handlerFunction2() {
    console.log("Left");
  }

  handlerFunction3() {
    console.log("Dragged Over");
  }



  // preventDefault(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   alert("Dropped");
  // }
}
