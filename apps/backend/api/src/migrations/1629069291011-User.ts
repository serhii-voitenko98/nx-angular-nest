import {MigrationInterface, QueryRunner} from "typeorm";

/**
 * add init user
 * username: admin
 * email: admin@example.com
 * password: root
 */
export class User1629069291011 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO users (username, email, password)
        VALUES ('admin', 'admin@example.com', '$2a$10$Fg8w6KW3DGgf1LoLdYkBvuiAiI.PJCcPL4DVLuYxPr6Yle.ecOJ7q')
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        DELETE FROM users WHERE username = 'admin'
      `)
    }

}
