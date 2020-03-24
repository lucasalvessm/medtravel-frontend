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

  image: string;

  constructor() { }

  ngOnInit() {
  }

  handleFileInput = ({ target: { files } }) => {
    Object
    .values(files)
    .forEach((value: File) =>
      getImgUrlByFile(value, (e: any) => {
        this.image = e.target.result;
        this.doCallback();
      }));
  }

  resetSelection = () => {
    this.image = undefined;
    this.doCallback();
  }
    

  cleanValue = (el: any) => el.value = null

  removeImageFromList = (event: Event) => {
    event.preventDefault();
    this.image = undefined;
    this.doCallback();
  }


  private doCallback() {
    this.onCallback(getBase64FromImageURL(this.image));
  }
}
