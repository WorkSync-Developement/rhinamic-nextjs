import "next-auth";

declare module "next-auth" {
  /**
   * Extending the built-in User type
   */
  interface User {
    role?: string;
    id: string;
  }

  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  /** Extending the JWT type */
  interface JWT {
    /** User role */
    role?: string;
  }
}
