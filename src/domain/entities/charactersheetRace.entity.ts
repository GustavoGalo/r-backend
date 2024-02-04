import { Race } from "@prisma/client";
import { CharacterSheet } from "@domain/entities";

export class CharactersheetRace {
  public race?: Race;
  public characterSheet?: CharacterSheet;
  constructor(public raceId: string, public charactersheetId: string) {}
}
