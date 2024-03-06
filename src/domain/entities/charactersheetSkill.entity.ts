import { CharacterSheet } from "./charactersheet.entity";
import { Skill } from "@domain/entities";

export class CharacterSheetSkill {
  public characterSheet?: CharacterSheet;
  public skill?: Skill;
  constructor(public characterSheetSkillId: string, public skillId: string) {}
}
