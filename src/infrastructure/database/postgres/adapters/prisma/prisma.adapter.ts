import { PrismaClient } from "@prisma/client";

export class PrismaDatabaseClientAdapter {
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async connect(): Promise<void> {
    await this.client.$connect();
  }

  async disconnect(): Promise<void> {
    await this.client.$disconnect();
  }
}
