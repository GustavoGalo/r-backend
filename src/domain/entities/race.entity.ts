import { Entity } from "@domain/common";
import { CharactersheetRace } from "@domain/entities";

export class Race extends Entity {
  public characterSheetRace?: CharactersheetRace[];
  constructor(public name: string) {
    super();
  }
}
