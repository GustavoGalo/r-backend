import { CharacterSheet } from "@domain/entities/charactersheet.entity";
import { Charactersheet as CharacterSheetSchema, Prisma } from "@prisma/client";

export class CharacterSheetMapper {
  static toPersistence(entity: CharacterSheet): CharacterSheetSchema {
    if (!(entity instanceof CharacterSheet)) return entity
    return {
      active: entity.active,
      armorClass: entity.armorClass,
      bonds: entity.bonds ? entity.bonds : null,
      characterName: entity.characterName,
      createdAt: entity.createdAt,
      currentHitPoints: entity.currentHitPoints,
      experiencePoints: entity.experiencePoints,
      flaws: entity.flaws ? entity.flaws : null,
      hitPointMaximum: entity.hitPointMaximum,
      id: entity.id,
      ideals: entity.ideals ? entity.ideals : null,
      initiative: entity.initiative,
      inspiration: entity.inspiration,
      passiveWisdom: entity.passiveWisdom,
      personalityTraits: entity.personalityTraits ? entity.personalityTraits : null,
      proficiencyBonus: entity.proficiencyBonus,
      speed: entity.speed,
      temporaryHitPoints: entity.temporaryHitPoints ? entity.temporaryHitPoints : null,
      updatedAt: entity.updatedAt,
      userId: entity.userId
    }
  }

  static fromCreateToDomain(schema: Prisma.CharactersheetGetPayload<Prisma.CharactersheetCreateArgs>): CharacterSheet {
    const entity = new CharacterSheet(schema.characterName, schema.userId)
    entity.id = schema.id
    entity.createdAt = schema.createdAt
    entity.updatedAt = schema.updatedAt
    return entity
  }

  static fromFindManyToDomain(schema: Prisma.CharactersheetGetPayload<Prisma.CharactersheetFindManyArgs>) {
    const entity = new CharacterSheet(schema.characterName, schema.userId)
    entity.id = schema.id
    entity.createdAt = schema.createdAt
    entity.updatedAt = schema.updatedAt
    return entity
  }

  static fromFindUniqueToDomain(schema: Prisma.CharactersheetGetPayload<Prisma.CharactersheetFindUniqueArgs>) {
    const entity = new CharacterSheet(schema.characterName, schema.userId)
    entity.id = schema.id
    entity.createdAt = schema.createdAt
    entity.updatedAt = schema.updatedAt
    return entity
  }
}
