import { SchedulePage } from './../schedule/schedule';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private firstIteration: boolean = true;
  private lastCurse: string = "";
  public cursosGroup: PrototipoCurso[];
  public cursos: Curso[] = [];
  public letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  constructor(public navCtrl: NavController) {
    this.cursosGroup = [
      new PrototipoCurso("Desarrollo de Aplicaciones Multiplataforma", "DAM", 2, "laptop", false),
      new PrototipoCurso("Administración y Finanzas", "ADG", 2, "cash", false),
      new PrototipoCurso("Bachillerato", "Bachillerato", 2, "game-controller-b", true),
      new PrototipoCurso("Enseñanza Secundaria Obligatoria", "ESO", 4, "ice-cream", true),
      new PrototipoCurso("Educación Primaria", "Primaria", 6, "egg", true)
    ]
    this.cursosGroup.forEach(element => {
      for (let i = 0; i < element.$yearSpan; i++) {
        let groupSize = this.getGroupSize();
        if (element.$hasMultipleClasrooms) {
          for (let j = 0; j < groupSize; j++) {
            this.cursos.push(new Curso(element.$name, element.$shorthand, (i + 1), this.letters[j], element.$iconName));
          }
        } else {
          this.cursos.push(new Curso(element.$name, element.$shorthand, (i + 1), null, element.$iconName));
        }
      }
    });
  }

  public load(value: Curso): void {
    this.navCtrl.push(SchedulePage);
  }

  public get $lastCurse(): string {
    return this.lastCurse;
  }

  public set $lastCurse(value: string) {
    console.log("Me cambian a " + value);
    this.lastCurse = value;
  }

  public compareCurse(value: string): boolean {
    if (value != this.lastCurse) {
      this.lastCurse = value;
      return true;
    } else {
      return false;
    }
  }

  public checkForDivider(value: string) {
    if (this.firstIteration == true) {
      this.firstIteration = false;
      return false;
    }
    if (this.lastCurse != value) {
      return true;
    } else {
      return false;
    }
  }

  getGroupSize() {
    const MAX_GROUP_SIZE: number = 4;
    return Math.random() * MAX_GROUP_SIZE;
  }
}

class PrototipoCurso {
  constructor(
    private name: string,
    private shorthand: string,
    private yearSpan: number,
    private iconName: string,
    private hasMultipleClasrooms: boolean) {
  }

  public get $name(): string {
    return this.name;
  }

  public get $shorthand(): string {
    return this.shorthand;
  }

  public get $yearSpan(): number {
    return this.yearSpan;
  }

  public get $iconName(): string {
    return this.iconName;
  }

  public get $hasMultipleClasrooms(): boolean {
    return this.hasMultipleClasrooms;
  }
}
class Curso {
  constructor(
    public name: string,
    public shorthand: string,
    public year: number,
    public leter: string,
    public iconName: string) {
  }

  public get $name(): string {
    return this.name;
  }

  public get $shorthand(): string {
    return this.shorthand;
  }

  public get $leter(): string {
    return this.leter;
  }

  public get $year(): number {
    return this.year;
  }

  public get $iconName(): string {
    return this.iconName;
  }
}
