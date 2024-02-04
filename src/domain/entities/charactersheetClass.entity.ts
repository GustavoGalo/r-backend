import { Class } from "@prisma/client";
import { CharacterSheet } from "@domain/entities";

export class CharacterSheetClass {
  constructor(
    public level: number,
    public characterSheet: CharacterSheet,
    public characterSheetId: string,
    public _class: Class,
    public classId: string
  ) {}
}
