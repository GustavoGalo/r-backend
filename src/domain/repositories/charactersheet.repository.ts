import { CharacterSheet } from "@domain/entities/charactersheet.entity";

export interface CharacterSheetRepository {
  create(characterSheet: CharacterSheet): Promise<CharacterSheet>;
  update(id: string, characterSheet: CharacterSheet): Promise<CharacterSheet>;
  getById(id: string): Promise<CharacterSheet | null>;
  getAll(): Promise<CharacterSheet[]>;
  delete(id: string): Promise<void>;
}
