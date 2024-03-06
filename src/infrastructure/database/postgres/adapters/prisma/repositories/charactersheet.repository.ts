import { CharacterSheet } from "@domain/entities/charactersheet.entity";
import { CharacterSheetRepository } from "@domain/repositories";
import { PrismaDatabaseClientAdapter } from "@infrastructure/database/postgres/adapters/prisma";
import { CharacterSheetMapper } from "../mappers";

export class CharacterSheetRepositoryImp implements CharacterSheetRepository {
  constructor(private readonly database: PrismaDatabaseClientAdapter) {}

  public async create(characterSheet: CharacterSheet): Promise<CharacterSheet> {
    const newCharacterSheet = await this.database.client.charactersheet.create({
      data: CharacterSheetMapper.toPersistence(characterSheet),
    });

    return CharacterSheetMapper.fromCreateToDomain(newCharacterSheet);
  }

  public async delete(id: string): Promise<void> {
    await this.database.client.charactersheet.delete({ where: { id } });
  }

  public async getAll(): Promise<CharacterSheet[]> {
    const characters = (
      await this.database.client.charactersheet.findMany()
    ).map((character) => CharacterSheetMapper.fromFindManyToDomain(character));

    return characters;
  }

  public async getById(id: string): Promise<CharacterSheet | null> {
    const character = await this.database.client.charactersheet.findUnique({ where: { id } })

    return character !== null ? CharacterSheetMapper.fromFindUniqueToDomain(character) : null
  }

  public async update(id: string, characterSheet: CharacterSheet): Promise<CharacterSheet> {
    const character = await this.database.client.charactersheet.update({
      data: CharacterSheetMapper.toPersistence(characterSheet),
      where: { id }
    })

    return character
  }
}

