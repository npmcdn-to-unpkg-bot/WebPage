import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UploadService {
    private url = "rest/api.php";
    private _http;
    private xhr;
    private progress = 0;
    
    constructor(http : Http) {
	console.log("Album service created");
	this._http = http;
	this.progress$ = Observable.create(observer => {
            this.progressObserver = observer
	}).share();
    }

    logError(err) {
	console.error('There was an error: ' + err);
    }

    private makeFileRequest (url: string, params: string[], files: File[]): Observable {
	return Observable.create(observer => {
            let formData: FormData = new FormData(),
            xhr: XMLHttpRequest = new XMLHttpRequest();
	    formData.append("type", "upload");
            for (let i = 0; i < files.length; i++) {
		formData.append("images[]", files[i], files[i].name);
            }
	    
            xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
			observer.next(JSON.parse(xhr.response));
			observer.complete();
                    } else {
			observer.error(xhr.response);
                    }
		}
            };

            xhr.upload.onprogress = (event) => {
		this.progress = Math.round(event.loaded / event.total * 100);

		this.progressObserver.next(this.progress);
            };

            xhr.open('POST', url, true);
            xhr.send(formData);
	});
    }
    /*sendPhotos(files) {
      console.log("building args");
      var ourHeader = new Headers();
      ourHeader.append("Content-Type", "application/x-www-form-urlencoded");

      var args = new FormData();
      var a = "type=upload";
      var len = files.length;
      for(var i = 0; i < len; i = i + 1) {
      args.append("images[]",files[i]);
      console.log(args.get("images[]"));
      }

      this._http.post(this.url, args, { header : ourHeader}).
      map((res: Response) => console.log(res))
      .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Random Quote Complete')
      );
      }

      sendPhotosXXX(files: File[]) {
      return new Promise((resolve, reject) => {
      this.xhr = new XMLHttpRequest();
      this.xhr.addEventListener("progress",this.increaseProgress);
      let formData: FormData = new FormData();

      formData.append("type", "upload");
      for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      formData.append("images[]", files[i]);
      }

      this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState === 4) {
      if (this.xhr.status === 200) {
      resolve(JSON.parse(this.xhr.response));
      } else {
      reject(this.xhr.response);
      }
      }
      };

      this.xhr.open('POST', this.url, true);
      this.xhr.send(formData);
      });
      }*/
}
