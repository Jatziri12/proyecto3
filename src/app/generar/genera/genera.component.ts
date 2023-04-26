import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Doc } from '../class.module';

@Component({
  selector: 'app-genera',
  templateUrl: './genera.component.html'
})
export class GeneraComponent {

  idDocumento: string = "";

  constructor(
    public listRef: MatDialogRef<GeneraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doc,
    private ActivedRoute:ActivatedRoute
    ) {}
  
  ngOnInit() { 
    this.ActivedRoute.params.subscribe(
      params=>{
        if(Object.keys(params).length > 0){
          /*console.log("UsrId: "+response.toString());*/
          this.idDocumento = params['idDocumento'];
        }
      }
    );
  }

  cancelar() {
    this.listRef.close();
  }

}

