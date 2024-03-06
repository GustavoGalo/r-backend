import { Background, CharacterSheet } from "@domain/entities";

export class CharacterSheetBackground {
  public characterSheet?: CharacterSheet;
  public background?: Background;
  constructor(public characterSheetId: string, public backgroundId: string) {}
}
