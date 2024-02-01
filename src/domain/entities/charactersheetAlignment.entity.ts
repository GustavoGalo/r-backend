import { Alignment } from "./alignment.entuty";
import { CharacterSheet } from "./charactersheet.entity";

export class CharacterSheetAlignment {
  public characterSheet?: CharacterSheet;
  public alignment?: Alignment;
  constructor(public characterSheetId: string, public alignmentId: string) {}
}
