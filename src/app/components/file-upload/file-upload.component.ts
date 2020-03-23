import { Component, OnInit, Input } from '@angular/core';
import { getImgUrlByFile, getBase64FromImageURL } from '../../commons/fileUtils';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.less']
})
export class FileUploadComponent implements OnInit {

  @Input()
  public onCallback: Function;

  @Input()
  public uploadTitle: string;

  images: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  handleFileInput = ({ target: { files } }) => {
    Object
    .values(files)
    .forEach((value: File) =>
      getImgUrlByFile(value, (e: any) => {
        this.images.push(e.target.result)
        this.doCallback();
      }));
  }

  resetSelection = () => {
    this.images = [];
    this.doCallback();
  }
    

  cleanValue = (el: any) => el.value = null

  removeImageFromList = (event: Event, image: string) => {
    event.preventDefault();
    this.images = this.images.filter(img => img !== image);
    this.doCallback();
  }


  private doCallback() {
    //this.onCallback(this.images.map(image => image));
    this.onCallback(this.images.map(image => getBase64FromImageURL(image)));
  }
}
