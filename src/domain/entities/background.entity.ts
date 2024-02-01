import { Entity } from "@domain/common";
import { CharacterSheetBackground } from "./charactersheetBackground.entity";

export class Background extends Entity {
  public characterSheetBackground?: CharacterSheetBackground[];
  constructor(public name: string) {
    super();
  }
}
