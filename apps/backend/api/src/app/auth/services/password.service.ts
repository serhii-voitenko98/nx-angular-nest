import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class PasswordService {
  /**
   * Salt rounds
   * @see https://github.com/kelektiv/node.bcrypt.js#readme
   */
  private saltRounds = 10;

  /**
   * Returns hash
   * @param password Plain password
   */
  getHash(password: string): Promise<string> {
    return hash(password, this.saltRounds);
  }

  /**
   * Compare plain password with encrypted password
   * @param password Plain password
   * @param encryptedPassword Encrypted password (hash)
   */
  compareHash(password: string, encryptedPassword): Promise<boolean> {
    return compare(password, encryptedPassword);
  }
}
