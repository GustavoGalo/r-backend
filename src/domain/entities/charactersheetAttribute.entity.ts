import { Attribute, CharacterSheet } from "@domain/entities";

export class CharacterSheetAttribute {
  public characterSheet?: CharacterSheet;
  public attribute?: Attribute;
  constructor(public characterSheetId: string, public attributeId: string) {}
}
