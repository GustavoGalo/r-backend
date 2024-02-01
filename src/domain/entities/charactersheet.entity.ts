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
  public temporaryHitPoints?: number | null;
  public passiveWisdom: number;
  public inspiration: boolean;
  public proficiencyBonus: number;
  public experiencePoints: number;
  public userId: string;

  constructor(characterName: string, userId: string) {
    super();
    this.characterName = characterName;
    this.armorClass = 10;
    this.initiative = 0;
    this.speed = 0;
    this.hitPointMaximum = 0;
    this.currentHitPoints = 0;
    this.passiveWisdom = 10;
    this.inspiration = false;
    this.proficiencyBonus = 2;
    this.experiencePoints = 0;
    this.userId = userId;
  }
}
