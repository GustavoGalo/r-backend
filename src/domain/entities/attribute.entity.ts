import { Entity } from "@domain/common";
import { Skill } from "./skill.entity";
import { CharacterSheetAttribute } from "./charactersheetAttribute.entity";

export class Attribute extends Entity {
  public skill?: Skill;
  public charactersheetAttribute?: CharacterSheetAttribute;
  constructor(public name: string) {
    super();
  }
}
