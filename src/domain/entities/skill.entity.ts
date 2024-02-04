import { Entity } from "@domain/common";
import { Attribute, CharacterSheetSkill } from "@domain/entities";

export class Skill extends Entity {
  public attribute?: Attribute;
  public characterSheetSkill?: CharacterSheetSkill;
  constructor(public attributeId: string) {
    super();
  }
}
