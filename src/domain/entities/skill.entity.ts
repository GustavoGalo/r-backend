import { Entity } from "@domain/common";
import { Attribute } from "./attribute.entity";
import { CharacterSheetSkill } from "./charactersheetSkill.entity";

export class Skill extends Entity {
  public attribute?: Attribute;
  public characterSheetSkill?: CharacterSheetSkill;
  constructor(public attributeId: string) {
    super();
  }
}
