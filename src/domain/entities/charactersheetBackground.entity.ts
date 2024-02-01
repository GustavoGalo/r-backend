import { Background } from "./background.entity";
import { CharacterSheet } from "./charactersheet.entity";

export class CharacterSheetBackground {
  public characterSheet?: CharacterSheet;
  public background?: Background;
  constructor(public characterSheetId: string, public backgroundId: string) {}
}
