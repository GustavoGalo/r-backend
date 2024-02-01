import { Attribute } from "./attribute.entity";
import { CharacterSheet } from "./charactersheet.entity";

export class CharacterSheetAttribute {
  public characterSheet?: CharacterSheet;
  public attribute?: Attribute;
  constructor(public characterSheetId: string, public attributeId: string) {}
}
