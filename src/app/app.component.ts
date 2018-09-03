import { Component } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { Http, Response, Headers,RequestOptions,RequestMethod } from '@angular/http';
import { HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: Http) { }
  title = 'dragdrop';


  public files: UploadFile[] = [];

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log("Hello World");
          console.log(droppedFile.relativePath, file);


          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, droppedFile.relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          var headerOptions = new Headers({ 'Content-Type': 'application/json' });
          var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
          this.http.post('C:\\Users\\Admin\\Desktop\\insurance', formData, requestOptions)
          .subscribe(data => {
            console.log('posted');
          })


        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  onFs(fs){
    fs.root.getDirectory('Documents', {create:true}, function(directoryEntry){
      //directoryEntry.isFile === false
      //directoryEntry.isDirectory === true
      //directoryEntry.name === 'Documents'
      //directoryEntry.fullPath === '/Documents'

      }, onerror);

    }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}
