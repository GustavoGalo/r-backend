import { Entity } from "@domain/common";

export class CharacterSheet extends Entity {
  public characterName: string;
  public personalityTraits?: string;
  public ideals?: string;
  public bonds?: string;
  public flaws?: string;
  public armorClass: number;
  public initiative: number;
  public speed: number;
  public hitPointMaximum: number;
  public currentHitPoints: number;
  public temporaryHitPoints: number;
  public passiveWisdom: number;
  public inspiration: boolean;
  public proficiencyBonus: number;
  public experiencePoints: number;
  public userId: string;

  constructor() {
    super();
  }
}
