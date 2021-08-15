/**
 * interface IUsers
 *
 * @description
 *
 * provides an User entity interface
 */
export interface IUsers {
  /**
   * User's ID
   */
  id: number;

  /**
   * User's creation date
   */
  created: string;

  /**
   * User's update date
   */
  updated: string;

  /**
   * User's e-mail
   */
  email: string;

  /**
   * User's phone number (optional)
   */
  phone?: string;

  /**
   * User's password
   */
  password: string;

  /**
   * User's name
   *
   * @description
   *
   * Used as default username
   */
  username: string;

  /**
   * User's nickname
   *
   * @description
   *
   * If present used as public username
   */
  nickname: string;
}
