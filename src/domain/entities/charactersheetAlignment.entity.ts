import { Alignment, CharacterSheet } from "@domain/entities";

export class CharacterSheetAlignment {
  public characterSheet?: CharacterSheet;
  public alignment?: Alignment;
  constructor(public characterSheetId: string, public alignmentId: string) {}
}
