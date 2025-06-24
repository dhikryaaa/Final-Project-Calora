
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model DailyTarget
 * 
 */
export type DailyTarget = $Result.DefaultSelection<Prisma.$DailyTargetPayload>
/**
 * Model DefaultTarget
 * 
 */
export type DefaultTarget = $Result.DefaultSelection<Prisma.$DefaultTargetPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyTarget`: Exposes CRUD operations for the **DailyTarget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyTargets
    * const dailyTargets = await prisma.dailyTarget.findMany()
    * ```
    */
  get dailyTarget(): Prisma.DailyTargetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.defaultTarget`: Exposes CRUD operations for the **DefaultTarget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DefaultTargets
    * const defaultTargets = await prisma.defaultTarget.findMany()
    * ```
    */
  get defaultTarget(): Prisma.DefaultTargetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Menu: 'Menu',
    Food: 'Food',
    DailyTarget: 'DailyTarget',
    DefaultTarget: 'DefaultTarget'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "menu" | "food" | "dailyTarget" | "defaultTarget"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      DailyTarget: {
        payload: Prisma.$DailyTargetPayload<ExtArgs>
        fields: Prisma.DailyTargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyTargetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyTargetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>
          }
          findFirst: {
            args: Prisma.DailyTargetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyTargetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>
          }
          findMany: {
            args: Prisma.DailyTargetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>[]
          }
          create: {
            args: Prisma.DailyTargetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>
          }
          createMany: {
            args: Prisma.DailyTargetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyTargetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>[]
          }
          delete: {
            args: Prisma.DailyTargetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>
          }
          update: {
            args: Prisma.DailyTargetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>
          }
          deleteMany: {
            args: Prisma.DailyTargetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyTargetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyTargetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>[]
          }
          upsert: {
            args: Prisma.DailyTargetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyTargetPayload>
          }
          aggregate: {
            args: Prisma.DailyTargetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyTarget>
          }
          groupBy: {
            args: Prisma.DailyTargetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyTargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyTargetCountArgs<ExtArgs>
            result: $Utils.Optional<DailyTargetCountAggregateOutputType> | number
          }
        }
      }
      DefaultTarget: {
        payload: Prisma.$DefaultTargetPayload<ExtArgs>
        fields: Prisma.DefaultTargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DefaultTargetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DefaultTargetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>
          }
          findFirst: {
            args: Prisma.DefaultTargetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DefaultTargetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>
          }
          findMany: {
            args: Prisma.DefaultTargetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>[]
          }
          create: {
            args: Prisma.DefaultTargetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>
          }
          createMany: {
            args: Prisma.DefaultTargetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DefaultTargetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>[]
          }
          delete: {
            args: Prisma.DefaultTargetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>
          }
          update: {
            args: Prisma.DefaultTargetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>
          }
          deleteMany: {
            args: Prisma.DefaultTargetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DefaultTargetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DefaultTargetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>[]
          }
          upsert: {
            args: Prisma.DefaultTargetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefaultTargetPayload>
          }
          aggregate: {
            args: Prisma.DefaultTargetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefaultTarget>
          }
          groupBy: {
            args: Prisma.DefaultTargetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DefaultTargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DefaultTargetCountArgs<ExtArgs>
            result: $Utils.Optional<DefaultTargetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    menu?: MenuOmit
    food?: FoodOmit
    dailyTarget?: DailyTargetOmit
    defaultTarget?: DefaultTargetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    DailyTarget: number
    menu: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DailyTarget?: boolean | UserCountOutputTypeCountDailyTargetArgs
    menu?: boolean | UserCountOutputTypeCountMenuArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyTargetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    foods: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | MenuCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }


  /**
   * Count Type DailyTargetCountOutputType
   */

  export type DailyTargetCountOutputType = {
    defaultTarget: number
  }

  export type DailyTargetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultTarget?: boolean | DailyTargetCountOutputTypeCountDefaultTargetArgs
  }

  // Custom InputTypes
  /**
   * DailyTargetCountOutputType without action
   */
  export type DailyTargetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTargetCountOutputType
     */
    select?: DailyTargetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DailyTargetCountOutputType without action
   */
  export type DailyTargetCountOutputTypeCountDefaultTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefaultTargetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    DailyTarget?: boolean | User$DailyTargetArgs<ExtArgs>
    menu?: boolean | User$menuArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DailyTarget?: boolean | User$DailyTargetArgs<ExtArgs>
    menu?: boolean | User$menuArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      DailyTarget: Prisma.$DailyTargetPayload<ExtArgs>[]
      menu: Prisma.$MenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DailyTarget<T extends User$DailyTargetArgs<ExtArgs> = {}>(args?: Subset<T, User$DailyTargetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu<T extends User$menuArgs<ExtArgs> = {}>(args?: Subset<T, User$menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.DailyTarget
   */
  export type User$DailyTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    where?: DailyTargetWhereInput
    orderBy?: DailyTargetOrderByWithRelationInput | DailyTargetOrderByWithRelationInput[]
    cursor?: DailyTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyTargetScalarFieldEnum | DailyTargetScalarFieldEnum[]
  }

  /**
   * User.menu
   */
  export type User$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    jenisMenu: string | null
    userId: number | null
    hari: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    jenisMenu: string | null
    userId: number | null
    hari: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    jenisMenu: number
    userId: number
    hari: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    jenisMenu?: true
    userId?: true
    hari?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    jenisMenu?: true
    userId?: true
    hari?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    jenisMenu?: true
    userId?: true
    hari?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    jenisMenu: string
    userId: number
    hari: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jenisMenu?: boolean
    userId?: boolean
    hari?: boolean
    foods?: boolean | Menu$foodsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jenisMenu?: boolean
    userId?: boolean
    hari?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jenisMenu?: boolean
    userId?: boolean
    hari?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    jenisMenu?: boolean
    userId?: boolean
    hari?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jenisMenu" | "userId" | "hari", ExtArgs["result"]["menu"]>
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | Menu$foodsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      foods: Prisma.$FoodPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jenisMenu: string
      userId: number
      hari: Date
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {MenuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends Menu$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Menu$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'Int'>
    readonly jenisMenu: FieldRef<"Menu", 'String'>
    readonly userId: FieldRef<"Menu", 'Int'>
    readonly hari: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu updateManyAndReturn
   */
  export type MenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.foods
   */
  export type Menu$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    foodId: number | null
    kalori: number | null
    menuId: number | null
    takaran: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    foodId: number | null
    kalori: number | null
    menuId: number | null
    takaran: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    foodId: number | null
    kalori: number | null
    menuId: number | null
    takaran: number | null
    namaMakanan: string | null
    takaranAwal: string | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    foodId: number | null
    kalori: number | null
    menuId: number | null
    takaran: number | null
    namaMakanan: string | null
    takaranAwal: string | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    foodId: number
    kalori: number
    menuId: number
    takaran: number
    namaMakanan: number
    takaranAwal: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    foodId?: true
    kalori?: true
    menuId?: true
    takaran?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    foodId?: true
    kalori?: true
    menuId?: true
    takaran?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    foodId?: true
    kalori?: true
    menuId?: true
    takaran?: true
    namaMakanan?: true
    takaranAwal?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    foodId?: true
    kalori?: true
    menuId?: true
    takaran?: true
    namaMakanan?: true
    takaranAwal?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    foodId?: true
    kalori?: true
    menuId?: true
    takaran?: true
    namaMakanan?: true
    takaranAwal?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    foodId: number
    kalori: number
    menuId: number
    takaran: number
    namaMakanan: string
    takaranAwal: string
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    kalori?: boolean
    menuId?: boolean
    takaran?: boolean
    namaMakanan?: boolean
    takaranAwal?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    kalori?: boolean
    menuId?: boolean
    takaran?: boolean
    namaMakanan?: boolean
    takaranAwal?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    kalori?: boolean
    menuId?: boolean
    takaran?: boolean
    namaMakanan?: boolean
    takaranAwal?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    foodId?: boolean
    kalori?: boolean
    menuId?: boolean
    takaran?: boolean
    namaMakanan?: boolean
    takaranAwal?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "foodId" | "kalori" | "menuId" | "takaran" | "namaMakanan" | "takaranAwal", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      foodId: number
      kalori: number
      menuId: number
      takaran: number
      namaMakanan: string
      takaranAwal: string
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly foodId: FieldRef<"Food", 'Int'>
    readonly kalori: FieldRef<"Food", 'Int'>
    readonly menuId: FieldRef<"Food", 'Int'>
    readonly takaran: FieldRef<"Food", 'Int'>
    readonly namaMakanan: FieldRef<"Food", 'String'>
    readonly takaranAwal: FieldRef<"Food", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model DailyTarget
   */

  export type AggregateDailyTarget = {
    _count: DailyTargetCountAggregateOutputType | null
    _avg: DailyTargetAvgAggregateOutputType | null
    _sum: DailyTargetSumAggregateOutputType | null
    _min: DailyTargetMinAggregateOutputType | null
    _max: DailyTargetMaxAggregateOutputType | null
  }

  export type DailyTargetAvgAggregateOutputType = {
    id: number | null
    target: number | null
    userId: number | null
  }

  export type DailyTargetSumAggregateOutputType = {
    id: number | null
    target: number | null
    userId: number | null
  }

  export type DailyTargetMinAggregateOutputType = {
    id: number | null
    target: number | null
    userId: number | null
    date: Date | null
  }

  export type DailyTargetMaxAggregateOutputType = {
    id: number | null
    target: number | null
    userId: number | null
    date: Date | null
  }

  export type DailyTargetCountAggregateOutputType = {
    id: number
    target: number
    userId: number
    date: number
    _all: number
  }


  export type DailyTargetAvgAggregateInputType = {
    id?: true
    target?: true
    userId?: true
  }

  export type DailyTargetSumAggregateInputType = {
    id?: true
    target?: true
    userId?: true
  }

  export type DailyTargetMinAggregateInputType = {
    id?: true
    target?: true
    userId?: true
    date?: true
  }

  export type DailyTargetMaxAggregateInputType = {
    id?: true
    target?: true
    userId?: true
    date?: true
  }

  export type DailyTargetCountAggregateInputType = {
    id?: true
    target?: true
    userId?: true
    date?: true
    _all?: true
  }

  export type DailyTargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTarget to aggregate.
     */
    where?: DailyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTargets to fetch.
     */
    orderBy?: DailyTargetOrderByWithRelationInput | DailyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyTargets
    **/
    _count?: true | DailyTargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyTargetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyTargetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyTargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyTargetMaxAggregateInputType
  }

  export type GetDailyTargetAggregateType<T extends DailyTargetAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyTarget[P]>
      : GetScalarType<T[P], AggregateDailyTarget[P]>
  }




  export type DailyTargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyTargetWhereInput
    orderBy?: DailyTargetOrderByWithAggregationInput | DailyTargetOrderByWithAggregationInput[]
    by: DailyTargetScalarFieldEnum[] | DailyTargetScalarFieldEnum
    having?: DailyTargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyTargetCountAggregateInputType | true
    _avg?: DailyTargetAvgAggregateInputType
    _sum?: DailyTargetSumAggregateInputType
    _min?: DailyTargetMinAggregateInputType
    _max?: DailyTargetMaxAggregateInputType
  }

  export type DailyTargetGroupByOutputType = {
    id: number
    target: number
    userId: number
    date: Date
    _count: DailyTargetCountAggregateOutputType | null
    _avg: DailyTargetAvgAggregateOutputType | null
    _sum: DailyTargetSumAggregateOutputType | null
    _min: DailyTargetMinAggregateOutputType | null
    _max: DailyTargetMaxAggregateOutputType | null
  }

  type GetDailyTargetGroupByPayload<T extends DailyTargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyTargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyTargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyTargetGroupByOutputType[P]>
            : GetScalarType<T[P], DailyTargetGroupByOutputType[P]>
        }
      >
    >


  export type DailyTargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    target?: boolean
    userId?: boolean
    date?: boolean
    defaultTarget?: boolean | DailyTarget$defaultTargetArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DailyTargetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyTarget"]>

  export type DailyTargetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    target?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyTarget"]>

  export type DailyTargetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    target?: boolean
    userId?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyTarget"]>

  export type DailyTargetSelectScalar = {
    id?: boolean
    target?: boolean
    userId?: boolean
    date?: boolean
  }

  export type DailyTargetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "target" | "userId" | "date", ExtArgs["result"]["dailyTarget"]>
  export type DailyTargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultTarget?: boolean | DailyTarget$defaultTargetArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DailyTargetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DailyTargetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyTargetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyTarget"
    objects: {
      defaultTarget: Prisma.$DefaultTargetPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      target: number
      userId: number
      date: Date
    }, ExtArgs["result"]["dailyTarget"]>
    composites: {}
  }

  type DailyTargetGetPayload<S extends boolean | null | undefined | DailyTargetDefaultArgs> = $Result.GetResult<Prisma.$DailyTargetPayload, S>

  type DailyTargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyTargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyTargetCountAggregateInputType | true
    }

  export interface DailyTargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyTarget'], meta: { name: 'DailyTarget' } }
    /**
     * Find zero or one DailyTarget that matches the filter.
     * @param {DailyTargetFindUniqueArgs} args - Arguments to find a DailyTarget
     * @example
     * // Get one DailyTarget
     * const dailyTarget = await prisma.dailyTarget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyTargetFindUniqueArgs>(args: SelectSubset<T, DailyTargetFindUniqueArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyTarget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyTargetFindUniqueOrThrowArgs} args - Arguments to find a DailyTarget
     * @example
     * // Get one DailyTarget
     * const dailyTarget = await prisma.dailyTarget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyTargetFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyTargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTarget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTargetFindFirstArgs} args - Arguments to find a DailyTarget
     * @example
     * // Get one DailyTarget
     * const dailyTarget = await prisma.dailyTarget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyTargetFindFirstArgs>(args?: SelectSubset<T, DailyTargetFindFirstArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyTarget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTargetFindFirstOrThrowArgs} args - Arguments to find a DailyTarget
     * @example
     * // Get one DailyTarget
     * const dailyTarget = await prisma.dailyTarget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyTargetFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyTargetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTargetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyTargets
     * const dailyTargets = await prisma.dailyTarget.findMany()
     * 
     * // Get first 10 DailyTargets
     * const dailyTargets = await prisma.dailyTarget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyTargetWithIdOnly = await prisma.dailyTarget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyTargetFindManyArgs>(args?: SelectSubset<T, DailyTargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyTarget.
     * @param {DailyTargetCreateArgs} args - Arguments to create a DailyTarget.
     * @example
     * // Create one DailyTarget
     * const DailyTarget = await prisma.dailyTarget.create({
     *   data: {
     *     // ... data to create a DailyTarget
     *   }
     * })
     * 
     */
    create<T extends DailyTargetCreateArgs>(args: SelectSubset<T, DailyTargetCreateArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyTargets.
     * @param {DailyTargetCreateManyArgs} args - Arguments to create many DailyTargets.
     * @example
     * // Create many DailyTargets
     * const dailyTarget = await prisma.dailyTarget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyTargetCreateManyArgs>(args?: SelectSubset<T, DailyTargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyTargets and returns the data saved in the database.
     * @param {DailyTargetCreateManyAndReturnArgs} args - Arguments to create many DailyTargets.
     * @example
     * // Create many DailyTargets
     * const dailyTarget = await prisma.dailyTarget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyTargets and only return the `id`
     * const dailyTargetWithIdOnly = await prisma.dailyTarget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyTargetCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyTargetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyTarget.
     * @param {DailyTargetDeleteArgs} args - Arguments to delete one DailyTarget.
     * @example
     * // Delete one DailyTarget
     * const DailyTarget = await prisma.dailyTarget.delete({
     *   where: {
     *     // ... filter to delete one DailyTarget
     *   }
     * })
     * 
     */
    delete<T extends DailyTargetDeleteArgs>(args: SelectSubset<T, DailyTargetDeleteArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyTarget.
     * @param {DailyTargetUpdateArgs} args - Arguments to update one DailyTarget.
     * @example
     * // Update one DailyTarget
     * const dailyTarget = await prisma.dailyTarget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyTargetUpdateArgs>(args: SelectSubset<T, DailyTargetUpdateArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyTargets.
     * @param {DailyTargetDeleteManyArgs} args - Arguments to filter DailyTargets to delete.
     * @example
     * // Delete a few DailyTargets
     * const { count } = await prisma.dailyTarget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyTargetDeleteManyArgs>(args?: SelectSubset<T, DailyTargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyTargets
     * const dailyTarget = await prisma.dailyTarget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyTargetUpdateManyArgs>(args: SelectSubset<T, DailyTargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyTargets and returns the data updated in the database.
     * @param {DailyTargetUpdateManyAndReturnArgs} args - Arguments to update many DailyTargets.
     * @example
     * // Update many DailyTargets
     * const dailyTarget = await prisma.dailyTarget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyTargets and only return the `id`
     * const dailyTargetWithIdOnly = await prisma.dailyTarget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DailyTargetUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyTargetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyTarget.
     * @param {DailyTargetUpsertArgs} args - Arguments to update or create a DailyTarget.
     * @example
     * // Update or create a DailyTarget
     * const dailyTarget = await prisma.dailyTarget.upsert({
     *   create: {
     *     // ... data to create a DailyTarget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyTarget we want to update
     *   }
     * })
     */
    upsert<T extends DailyTargetUpsertArgs>(args: SelectSubset<T, DailyTargetUpsertArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTargetCountArgs} args - Arguments to filter DailyTargets to count.
     * @example
     * // Count the number of DailyTargets
     * const count = await prisma.dailyTarget.count({
     *   where: {
     *     // ... the filter for the DailyTargets we want to count
     *   }
     * })
    **/
    count<T extends DailyTargetCountArgs>(
      args?: Subset<T, DailyTargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyTargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyTargetAggregateArgs>(args: Subset<T, DailyTargetAggregateArgs>): Prisma.PrismaPromise<GetDailyTargetAggregateType<T>>

    /**
     * Group by DailyTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyTargetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyTargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyTargetGroupByArgs['orderBy'] }
        : { orderBy?: DailyTargetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyTarget model
   */
  readonly fields: DailyTargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyTarget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyTargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    defaultTarget<T extends DailyTarget$defaultTargetArgs<ExtArgs> = {}>(args?: Subset<T, DailyTarget$defaultTargetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyTarget model
   */
  interface DailyTargetFieldRefs {
    readonly id: FieldRef<"DailyTarget", 'Int'>
    readonly target: FieldRef<"DailyTarget", 'Int'>
    readonly userId: FieldRef<"DailyTarget", 'Int'>
    readonly date: FieldRef<"DailyTarget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyTarget findUnique
   */
  export type DailyTargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * Filter, which DailyTarget to fetch.
     */
    where: DailyTargetWhereUniqueInput
  }

  /**
   * DailyTarget findUniqueOrThrow
   */
  export type DailyTargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * Filter, which DailyTarget to fetch.
     */
    where: DailyTargetWhereUniqueInput
  }

  /**
   * DailyTarget findFirst
   */
  export type DailyTargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * Filter, which DailyTarget to fetch.
     */
    where?: DailyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTargets to fetch.
     */
    orderBy?: DailyTargetOrderByWithRelationInput | DailyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTargets.
     */
    cursor?: DailyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTargets.
     */
    distinct?: DailyTargetScalarFieldEnum | DailyTargetScalarFieldEnum[]
  }

  /**
   * DailyTarget findFirstOrThrow
   */
  export type DailyTargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * Filter, which DailyTarget to fetch.
     */
    where?: DailyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTargets to fetch.
     */
    orderBy?: DailyTargetOrderByWithRelationInput | DailyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyTargets.
     */
    cursor?: DailyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyTargets.
     */
    distinct?: DailyTargetScalarFieldEnum | DailyTargetScalarFieldEnum[]
  }

  /**
   * DailyTarget findMany
   */
  export type DailyTargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * Filter, which DailyTargets to fetch.
     */
    where?: DailyTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyTargets to fetch.
     */
    orderBy?: DailyTargetOrderByWithRelationInput | DailyTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyTargets.
     */
    cursor?: DailyTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyTargets.
     */
    skip?: number
    distinct?: DailyTargetScalarFieldEnum | DailyTargetScalarFieldEnum[]
  }

  /**
   * DailyTarget create
   */
  export type DailyTargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyTarget.
     */
    data: XOR<DailyTargetCreateInput, DailyTargetUncheckedCreateInput>
  }

  /**
   * DailyTarget createMany
   */
  export type DailyTargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyTargets.
     */
    data: DailyTargetCreateManyInput | DailyTargetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyTarget createManyAndReturn
   */
  export type DailyTargetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * The data used to create many DailyTargets.
     */
    data: DailyTargetCreateManyInput | DailyTargetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyTarget update
   */
  export type DailyTargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyTarget.
     */
    data: XOR<DailyTargetUpdateInput, DailyTargetUncheckedUpdateInput>
    /**
     * Choose, which DailyTarget to update.
     */
    where: DailyTargetWhereUniqueInput
  }

  /**
   * DailyTarget updateMany
   */
  export type DailyTargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyTargets.
     */
    data: XOR<DailyTargetUpdateManyMutationInput, DailyTargetUncheckedUpdateManyInput>
    /**
     * Filter which DailyTargets to update
     */
    where?: DailyTargetWhereInput
    /**
     * Limit how many DailyTargets to update.
     */
    limit?: number
  }

  /**
   * DailyTarget updateManyAndReturn
   */
  export type DailyTargetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * The data used to update DailyTargets.
     */
    data: XOR<DailyTargetUpdateManyMutationInput, DailyTargetUncheckedUpdateManyInput>
    /**
     * Filter which DailyTargets to update
     */
    where?: DailyTargetWhereInput
    /**
     * Limit how many DailyTargets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyTarget upsert
   */
  export type DailyTargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyTarget to update in case it exists.
     */
    where: DailyTargetWhereUniqueInput
    /**
     * In case the DailyTarget found by the `where` argument doesn't exist, create a new DailyTarget with this data.
     */
    create: XOR<DailyTargetCreateInput, DailyTargetUncheckedCreateInput>
    /**
     * In case the DailyTarget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyTargetUpdateInput, DailyTargetUncheckedUpdateInput>
  }

  /**
   * DailyTarget delete
   */
  export type DailyTargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
    /**
     * Filter which DailyTarget to delete.
     */
    where: DailyTargetWhereUniqueInput
  }

  /**
   * DailyTarget deleteMany
   */
  export type DailyTargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyTargets to delete
     */
    where?: DailyTargetWhereInput
    /**
     * Limit how many DailyTargets to delete.
     */
    limit?: number
  }

  /**
   * DailyTarget.defaultTarget
   */
  export type DailyTarget$defaultTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    where?: DefaultTargetWhereInput
    orderBy?: DefaultTargetOrderByWithRelationInput | DefaultTargetOrderByWithRelationInput[]
    cursor?: DefaultTargetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DefaultTargetScalarFieldEnum | DefaultTargetScalarFieldEnum[]
  }

  /**
   * DailyTarget without action
   */
  export type DailyTargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyTarget
     */
    select?: DailyTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyTarget
     */
    omit?: DailyTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyTargetInclude<ExtArgs> | null
  }


  /**
   * Model DefaultTarget
   */

  export type AggregateDefaultTarget = {
    _count: DefaultTargetCountAggregateOutputType | null
    _avg: DefaultTargetAvgAggregateOutputType | null
    _sum: DefaultTargetSumAggregateOutputType | null
    _min: DefaultTargetMinAggregateOutputType | null
    _max: DefaultTargetMaxAggregateOutputType | null
  }

  export type DefaultTargetAvgAggregateOutputType = {
    id: number | null
    value: number | null
    dailyId: number | null
  }

  export type DefaultTargetSumAggregateOutputType = {
    id: number | null
    value: number | null
    dailyId: number | null
  }

  export type DefaultTargetMinAggregateOutputType = {
    id: number | null
    value: number | null
    dailyId: number | null
  }

  export type DefaultTargetMaxAggregateOutputType = {
    id: number | null
    value: number | null
    dailyId: number | null
  }

  export type DefaultTargetCountAggregateOutputType = {
    id: number
    value: number
    dailyId: number
    _all: number
  }


  export type DefaultTargetAvgAggregateInputType = {
    id?: true
    value?: true
    dailyId?: true
  }

  export type DefaultTargetSumAggregateInputType = {
    id?: true
    value?: true
    dailyId?: true
  }

  export type DefaultTargetMinAggregateInputType = {
    id?: true
    value?: true
    dailyId?: true
  }

  export type DefaultTargetMaxAggregateInputType = {
    id?: true
    value?: true
    dailyId?: true
  }

  export type DefaultTargetCountAggregateInputType = {
    id?: true
    value?: true
    dailyId?: true
    _all?: true
  }

  export type DefaultTargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultTarget to aggregate.
     */
    where?: DefaultTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultTargets to fetch.
     */
    orderBy?: DefaultTargetOrderByWithRelationInput | DefaultTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DefaultTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DefaultTargets
    **/
    _count?: true | DefaultTargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DefaultTargetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DefaultTargetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DefaultTargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DefaultTargetMaxAggregateInputType
  }

  export type GetDefaultTargetAggregateType<T extends DefaultTargetAggregateArgs> = {
        [P in keyof T & keyof AggregateDefaultTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefaultTarget[P]>
      : GetScalarType<T[P], AggregateDefaultTarget[P]>
  }




  export type DefaultTargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefaultTargetWhereInput
    orderBy?: DefaultTargetOrderByWithAggregationInput | DefaultTargetOrderByWithAggregationInput[]
    by: DefaultTargetScalarFieldEnum[] | DefaultTargetScalarFieldEnum
    having?: DefaultTargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DefaultTargetCountAggregateInputType | true
    _avg?: DefaultTargetAvgAggregateInputType
    _sum?: DefaultTargetSumAggregateInputType
    _min?: DefaultTargetMinAggregateInputType
    _max?: DefaultTargetMaxAggregateInputType
  }

  export type DefaultTargetGroupByOutputType = {
    id: number
    value: number
    dailyId: number
    _count: DefaultTargetCountAggregateOutputType | null
    _avg: DefaultTargetAvgAggregateOutputType | null
    _sum: DefaultTargetSumAggregateOutputType | null
    _min: DefaultTargetMinAggregateOutputType | null
    _max: DefaultTargetMaxAggregateOutputType | null
  }

  type GetDefaultTargetGroupByPayload<T extends DefaultTargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DefaultTargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DefaultTargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DefaultTargetGroupByOutputType[P]>
            : GetScalarType<T[P], DefaultTargetGroupByOutputType[P]>
        }
      >
    >


  export type DefaultTargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    dailyId?: boolean
    dailyTarget?: boolean | DailyTargetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["defaultTarget"]>

  export type DefaultTargetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    dailyId?: boolean
    dailyTarget?: boolean | DailyTargetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["defaultTarget"]>

  export type DefaultTargetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    dailyId?: boolean
    dailyTarget?: boolean | DailyTargetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["defaultTarget"]>

  export type DefaultTargetSelectScalar = {
    id?: boolean
    value?: boolean
    dailyId?: boolean
  }

  export type DefaultTargetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "dailyId", ExtArgs["result"]["defaultTarget"]>
  export type DefaultTargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyTarget?: boolean | DailyTargetDefaultArgs<ExtArgs>
  }
  export type DefaultTargetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyTarget?: boolean | DailyTargetDefaultArgs<ExtArgs>
  }
  export type DefaultTargetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyTarget?: boolean | DailyTargetDefaultArgs<ExtArgs>
  }

  export type $DefaultTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DefaultTarget"
    objects: {
      dailyTarget: Prisma.$DailyTargetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: number
      dailyId: number
    }, ExtArgs["result"]["defaultTarget"]>
    composites: {}
  }

  type DefaultTargetGetPayload<S extends boolean | null | undefined | DefaultTargetDefaultArgs> = $Result.GetResult<Prisma.$DefaultTargetPayload, S>

  type DefaultTargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DefaultTargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DefaultTargetCountAggregateInputType | true
    }

  export interface DefaultTargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DefaultTarget'], meta: { name: 'DefaultTarget' } }
    /**
     * Find zero or one DefaultTarget that matches the filter.
     * @param {DefaultTargetFindUniqueArgs} args - Arguments to find a DefaultTarget
     * @example
     * // Get one DefaultTarget
     * const defaultTarget = await prisma.defaultTarget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DefaultTargetFindUniqueArgs>(args: SelectSubset<T, DefaultTargetFindUniqueArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DefaultTarget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DefaultTargetFindUniqueOrThrowArgs} args - Arguments to find a DefaultTarget
     * @example
     * // Get one DefaultTarget
     * const defaultTarget = await prisma.defaultTarget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DefaultTargetFindUniqueOrThrowArgs>(args: SelectSubset<T, DefaultTargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultTarget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultTargetFindFirstArgs} args - Arguments to find a DefaultTarget
     * @example
     * // Get one DefaultTarget
     * const defaultTarget = await prisma.defaultTarget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DefaultTargetFindFirstArgs>(args?: SelectSubset<T, DefaultTargetFindFirstArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DefaultTarget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultTargetFindFirstOrThrowArgs} args - Arguments to find a DefaultTarget
     * @example
     * // Get one DefaultTarget
     * const defaultTarget = await prisma.defaultTarget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DefaultTargetFindFirstOrThrowArgs>(args?: SelectSubset<T, DefaultTargetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DefaultTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultTargetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DefaultTargets
     * const defaultTargets = await prisma.defaultTarget.findMany()
     * 
     * // Get first 10 DefaultTargets
     * const defaultTargets = await prisma.defaultTarget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const defaultTargetWithIdOnly = await prisma.defaultTarget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DefaultTargetFindManyArgs>(args?: SelectSubset<T, DefaultTargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DefaultTarget.
     * @param {DefaultTargetCreateArgs} args - Arguments to create a DefaultTarget.
     * @example
     * // Create one DefaultTarget
     * const DefaultTarget = await prisma.defaultTarget.create({
     *   data: {
     *     // ... data to create a DefaultTarget
     *   }
     * })
     * 
     */
    create<T extends DefaultTargetCreateArgs>(args: SelectSubset<T, DefaultTargetCreateArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DefaultTargets.
     * @param {DefaultTargetCreateManyArgs} args - Arguments to create many DefaultTargets.
     * @example
     * // Create many DefaultTargets
     * const defaultTarget = await prisma.defaultTarget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DefaultTargetCreateManyArgs>(args?: SelectSubset<T, DefaultTargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DefaultTargets and returns the data saved in the database.
     * @param {DefaultTargetCreateManyAndReturnArgs} args - Arguments to create many DefaultTargets.
     * @example
     * // Create many DefaultTargets
     * const defaultTarget = await prisma.defaultTarget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DefaultTargets and only return the `id`
     * const defaultTargetWithIdOnly = await prisma.defaultTarget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DefaultTargetCreateManyAndReturnArgs>(args?: SelectSubset<T, DefaultTargetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DefaultTarget.
     * @param {DefaultTargetDeleteArgs} args - Arguments to delete one DefaultTarget.
     * @example
     * // Delete one DefaultTarget
     * const DefaultTarget = await prisma.defaultTarget.delete({
     *   where: {
     *     // ... filter to delete one DefaultTarget
     *   }
     * })
     * 
     */
    delete<T extends DefaultTargetDeleteArgs>(args: SelectSubset<T, DefaultTargetDeleteArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DefaultTarget.
     * @param {DefaultTargetUpdateArgs} args - Arguments to update one DefaultTarget.
     * @example
     * // Update one DefaultTarget
     * const defaultTarget = await prisma.defaultTarget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DefaultTargetUpdateArgs>(args: SelectSubset<T, DefaultTargetUpdateArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DefaultTargets.
     * @param {DefaultTargetDeleteManyArgs} args - Arguments to filter DefaultTargets to delete.
     * @example
     * // Delete a few DefaultTargets
     * const { count } = await prisma.defaultTarget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DefaultTargetDeleteManyArgs>(args?: SelectSubset<T, DefaultTargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultTargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DefaultTargets
     * const defaultTarget = await prisma.defaultTarget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DefaultTargetUpdateManyArgs>(args: SelectSubset<T, DefaultTargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DefaultTargets and returns the data updated in the database.
     * @param {DefaultTargetUpdateManyAndReturnArgs} args - Arguments to update many DefaultTargets.
     * @example
     * // Update many DefaultTargets
     * const defaultTarget = await prisma.defaultTarget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DefaultTargets and only return the `id`
     * const defaultTargetWithIdOnly = await prisma.defaultTarget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DefaultTargetUpdateManyAndReturnArgs>(args: SelectSubset<T, DefaultTargetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DefaultTarget.
     * @param {DefaultTargetUpsertArgs} args - Arguments to update or create a DefaultTarget.
     * @example
     * // Update or create a DefaultTarget
     * const defaultTarget = await prisma.defaultTarget.upsert({
     *   create: {
     *     // ... data to create a DefaultTarget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DefaultTarget we want to update
     *   }
     * })
     */
    upsert<T extends DefaultTargetUpsertArgs>(args: SelectSubset<T, DefaultTargetUpsertArgs<ExtArgs>>): Prisma__DefaultTargetClient<$Result.GetResult<Prisma.$DefaultTargetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DefaultTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultTargetCountArgs} args - Arguments to filter DefaultTargets to count.
     * @example
     * // Count the number of DefaultTargets
     * const count = await prisma.defaultTarget.count({
     *   where: {
     *     // ... the filter for the DefaultTargets we want to count
     *   }
     * })
    **/
    count<T extends DefaultTargetCountArgs>(
      args?: Subset<T, DefaultTargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DefaultTargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DefaultTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultTargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DefaultTargetAggregateArgs>(args: Subset<T, DefaultTargetAggregateArgs>): Prisma.PrismaPromise<GetDefaultTargetAggregateType<T>>

    /**
     * Group by DefaultTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefaultTargetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DefaultTargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DefaultTargetGroupByArgs['orderBy'] }
        : { orderBy?: DefaultTargetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DefaultTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefaultTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DefaultTarget model
   */
  readonly fields: DefaultTargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DefaultTarget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DefaultTargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyTarget<T extends DailyTargetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DailyTargetDefaultArgs<ExtArgs>>): Prisma__DailyTargetClient<$Result.GetResult<Prisma.$DailyTargetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DefaultTarget model
   */
  interface DefaultTargetFieldRefs {
    readonly id: FieldRef<"DefaultTarget", 'Int'>
    readonly value: FieldRef<"DefaultTarget", 'Int'>
    readonly dailyId: FieldRef<"DefaultTarget", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DefaultTarget findUnique
   */
  export type DefaultTargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * Filter, which DefaultTarget to fetch.
     */
    where: DefaultTargetWhereUniqueInput
  }

  /**
   * DefaultTarget findUniqueOrThrow
   */
  export type DefaultTargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * Filter, which DefaultTarget to fetch.
     */
    where: DefaultTargetWhereUniqueInput
  }

  /**
   * DefaultTarget findFirst
   */
  export type DefaultTargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * Filter, which DefaultTarget to fetch.
     */
    where?: DefaultTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultTargets to fetch.
     */
    orderBy?: DefaultTargetOrderByWithRelationInput | DefaultTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultTargets.
     */
    cursor?: DefaultTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultTargets.
     */
    distinct?: DefaultTargetScalarFieldEnum | DefaultTargetScalarFieldEnum[]
  }

  /**
   * DefaultTarget findFirstOrThrow
   */
  export type DefaultTargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * Filter, which DefaultTarget to fetch.
     */
    where?: DefaultTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultTargets to fetch.
     */
    orderBy?: DefaultTargetOrderByWithRelationInput | DefaultTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DefaultTargets.
     */
    cursor?: DefaultTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DefaultTargets.
     */
    distinct?: DefaultTargetScalarFieldEnum | DefaultTargetScalarFieldEnum[]
  }

  /**
   * DefaultTarget findMany
   */
  export type DefaultTargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * Filter, which DefaultTargets to fetch.
     */
    where?: DefaultTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DefaultTargets to fetch.
     */
    orderBy?: DefaultTargetOrderByWithRelationInput | DefaultTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DefaultTargets.
     */
    cursor?: DefaultTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DefaultTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DefaultTargets.
     */
    skip?: number
    distinct?: DefaultTargetScalarFieldEnum | DefaultTargetScalarFieldEnum[]
  }

  /**
   * DefaultTarget create
   */
  export type DefaultTargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * The data needed to create a DefaultTarget.
     */
    data: XOR<DefaultTargetCreateInput, DefaultTargetUncheckedCreateInput>
  }

  /**
   * DefaultTarget createMany
   */
  export type DefaultTargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DefaultTargets.
     */
    data: DefaultTargetCreateManyInput | DefaultTargetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DefaultTarget createManyAndReturn
   */
  export type DefaultTargetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * The data used to create many DefaultTargets.
     */
    data: DefaultTargetCreateManyInput | DefaultTargetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DefaultTarget update
   */
  export type DefaultTargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * The data needed to update a DefaultTarget.
     */
    data: XOR<DefaultTargetUpdateInput, DefaultTargetUncheckedUpdateInput>
    /**
     * Choose, which DefaultTarget to update.
     */
    where: DefaultTargetWhereUniqueInput
  }

  /**
   * DefaultTarget updateMany
   */
  export type DefaultTargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DefaultTargets.
     */
    data: XOR<DefaultTargetUpdateManyMutationInput, DefaultTargetUncheckedUpdateManyInput>
    /**
     * Filter which DefaultTargets to update
     */
    where?: DefaultTargetWhereInput
    /**
     * Limit how many DefaultTargets to update.
     */
    limit?: number
  }

  /**
   * DefaultTarget updateManyAndReturn
   */
  export type DefaultTargetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * The data used to update DefaultTargets.
     */
    data: XOR<DefaultTargetUpdateManyMutationInput, DefaultTargetUncheckedUpdateManyInput>
    /**
     * Filter which DefaultTargets to update
     */
    where?: DefaultTargetWhereInput
    /**
     * Limit how many DefaultTargets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DefaultTarget upsert
   */
  export type DefaultTargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * The filter to search for the DefaultTarget to update in case it exists.
     */
    where: DefaultTargetWhereUniqueInput
    /**
     * In case the DefaultTarget found by the `where` argument doesn't exist, create a new DefaultTarget with this data.
     */
    create: XOR<DefaultTargetCreateInput, DefaultTargetUncheckedCreateInput>
    /**
     * In case the DefaultTarget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DefaultTargetUpdateInput, DefaultTargetUncheckedUpdateInput>
  }

  /**
   * DefaultTarget delete
   */
  export type DefaultTargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
    /**
     * Filter which DefaultTarget to delete.
     */
    where: DefaultTargetWhereUniqueInput
  }

  /**
   * DefaultTarget deleteMany
   */
  export type DefaultTargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DefaultTargets to delete
     */
    where?: DefaultTargetWhereInput
    /**
     * Limit how many DefaultTargets to delete.
     */
    limit?: number
  }

  /**
   * DefaultTarget without action
   */
  export type DefaultTargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DefaultTarget
     */
    select?: DefaultTargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DefaultTarget
     */
    omit?: DefaultTargetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefaultTargetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    jenisMenu: 'jenisMenu',
    userId: 'userId',
    hari: 'hari'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    foodId: 'foodId',
    kalori: 'kalori',
    menuId: 'menuId',
    takaran: 'takaran',
    namaMakanan: 'namaMakanan',
    takaranAwal: 'takaranAwal'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const DailyTargetScalarFieldEnum: {
    id: 'id',
    target: 'target',
    userId: 'userId',
    date: 'date'
  };

  export type DailyTargetScalarFieldEnum = (typeof DailyTargetScalarFieldEnum)[keyof typeof DailyTargetScalarFieldEnum]


  export const DefaultTargetScalarFieldEnum: {
    id: 'id',
    value: 'value',
    dailyId: 'dailyId'
  };

  export type DefaultTargetScalarFieldEnum = (typeof DefaultTargetScalarFieldEnum)[keyof typeof DefaultTargetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    DailyTarget?: DailyTargetListRelationFilter
    menu?: MenuListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    DailyTarget?: DailyTargetOrderByRelationAggregateInput
    menu?: MenuOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    DailyTarget?: DailyTargetListRelationFilter
    menu?: MenuListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: IntFilter<"Menu"> | number
    jenisMenu?: StringFilter<"Menu"> | string
    userId?: IntFilter<"Menu"> | number
    hari?: DateTimeFilter<"Menu"> | Date | string
    foods?: FoodListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    jenisMenu?: SortOrder
    userId?: SortOrder
    hari?: SortOrder
    foods?: FoodOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    jenisMenu?: StringFilter<"Menu"> | string
    userId?: IntFilter<"Menu"> | number
    hari?: DateTimeFilter<"Menu"> | Date | string
    foods?: FoodListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    jenisMenu?: SortOrder
    userId?: SortOrder
    hari?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Menu"> | number
    jenisMenu?: StringWithAggregatesFilter<"Menu"> | string
    userId?: IntWithAggregatesFilter<"Menu"> | number
    hari?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    foodId?: IntFilter<"Food"> | number
    kalori?: IntFilter<"Food"> | number
    menuId?: IntFilter<"Food"> | number
    takaran?: IntFilter<"Food"> | number
    namaMakanan?: StringFilter<"Food"> | string
    takaranAwal?: StringFilter<"Food"> | string
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    foodId?: SortOrder
    kalori?: SortOrder
    menuId?: SortOrder
    takaran?: SortOrder
    namaMakanan?: SortOrder
    takaranAwal?: SortOrder
    menu?: MenuOrderByWithRelationInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    foodId?: IntFilter<"Food"> | number
    kalori?: IntFilter<"Food"> | number
    menuId?: IntFilter<"Food"> | number
    takaran?: IntFilter<"Food"> | number
    namaMakanan?: StringFilter<"Food"> | string
    takaranAwal?: StringFilter<"Food"> | string
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    foodId?: SortOrder
    kalori?: SortOrder
    menuId?: SortOrder
    takaran?: SortOrder
    namaMakanan?: SortOrder
    takaranAwal?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    foodId?: IntWithAggregatesFilter<"Food"> | number
    kalori?: IntWithAggregatesFilter<"Food"> | number
    menuId?: IntWithAggregatesFilter<"Food"> | number
    takaran?: IntWithAggregatesFilter<"Food"> | number
    namaMakanan?: StringWithAggregatesFilter<"Food"> | string
    takaranAwal?: StringWithAggregatesFilter<"Food"> | string
  }

  export type DailyTargetWhereInput = {
    AND?: DailyTargetWhereInput | DailyTargetWhereInput[]
    OR?: DailyTargetWhereInput[]
    NOT?: DailyTargetWhereInput | DailyTargetWhereInput[]
    id?: IntFilter<"DailyTarget"> | number
    target?: IntFilter<"DailyTarget"> | number
    userId?: IntFilter<"DailyTarget"> | number
    date?: DateTimeFilter<"DailyTarget"> | Date | string
    defaultTarget?: DefaultTargetListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyTargetOrderByWithRelationInput = {
    id?: SortOrder
    target?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    defaultTarget?: DefaultTargetOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type DailyTargetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_date?: DailyTargetUserIdDateCompoundUniqueInput
    AND?: DailyTargetWhereInput | DailyTargetWhereInput[]
    OR?: DailyTargetWhereInput[]
    NOT?: DailyTargetWhereInput | DailyTargetWhereInput[]
    target?: IntFilter<"DailyTarget"> | number
    userId?: IntFilter<"DailyTarget"> | number
    date?: DateTimeFilter<"DailyTarget"> | Date | string
    defaultTarget?: DefaultTargetListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyTargetOrderByWithAggregationInput = {
    id?: SortOrder
    target?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    _count?: DailyTargetCountOrderByAggregateInput
    _avg?: DailyTargetAvgOrderByAggregateInput
    _max?: DailyTargetMaxOrderByAggregateInput
    _min?: DailyTargetMinOrderByAggregateInput
    _sum?: DailyTargetSumOrderByAggregateInput
  }

  export type DailyTargetScalarWhereWithAggregatesInput = {
    AND?: DailyTargetScalarWhereWithAggregatesInput | DailyTargetScalarWhereWithAggregatesInput[]
    OR?: DailyTargetScalarWhereWithAggregatesInput[]
    NOT?: DailyTargetScalarWhereWithAggregatesInput | DailyTargetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyTarget"> | number
    target?: IntWithAggregatesFilter<"DailyTarget"> | number
    userId?: IntWithAggregatesFilter<"DailyTarget"> | number
    date?: DateTimeWithAggregatesFilter<"DailyTarget"> | Date | string
  }

  export type DefaultTargetWhereInput = {
    AND?: DefaultTargetWhereInput | DefaultTargetWhereInput[]
    OR?: DefaultTargetWhereInput[]
    NOT?: DefaultTargetWhereInput | DefaultTargetWhereInput[]
    id?: IntFilter<"DefaultTarget"> | number
    value?: IntFilter<"DefaultTarget"> | number
    dailyId?: IntFilter<"DefaultTarget"> | number
    dailyTarget?: XOR<DailyTargetScalarRelationFilter, DailyTargetWhereInput>
  }

  export type DefaultTargetOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    dailyId?: SortOrder
    dailyTarget?: DailyTargetOrderByWithRelationInput
  }

  export type DefaultTargetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DefaultTargetWhereInput | DefaultTargetWhereInput[]
    OR?: DefaultTargetWhereInput[]
    NOT?: DefaultTargetWhereInput | DefaultTargetWhereInput[]
    value?: IntFilter<"DefaultTarget"> | number
    dailyId?: IntFilter<"DefaultTarget"> | number
    dailyTarget?: XOR<DailyTargetScalarRelationFilter, DailyTargetWhereInput>
  }, "id">

  export type DefaultTargetOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    dailyId?: SortOrder
    _count?: DefaultTargetCountOrderByAggregateInput
    _avg?: DefaultTargetAvgOrderByAggregateInput
    _max?: DefaultTargetMaxOrderByAggregateInput
    _min?: DefaultTargetMinOrderByAggregateInput
    _sum?: DefaultTargetSumOrderByAggregateInput
  }

  export type DefaultTargetScalarWhereWithAggregatesInput = {
    AND?: DefaultTargetScalarWhereWithAggregatesInput | DefaultTargetScalarWhereWithAggregatesInput[]
    OR?: DefaultTargetScalarWhereWithAggregatesInput[]
    NOT?: DefaultTargetScalarWhereWithAggregatesInput | DefaultTargetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DefaultTarget"> | number
    value?: IntWithAggregatesFilter<"DefaultTarget"> | number
    dailyId?: IntWithAggregatesFilter<"DefaultTarget"> | number
  }

  export type UserCreateInput = {
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DailyTarget?: DailyTargetCreateNestedManyWithoutUserInput
    menu?: MenuCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DailyTarget?: DailyTargetUncheckedCreateNestedManyWithoutUserInput
    menu?: MenuUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DailyTarget?: DailyTargetUpdateManyWithoutUserNestedInput
    menu?: MenuUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DailyTarget?: DailyTargetUncheckedUpdateManyWithoutUserNestedInput
    menu?: MenuUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateInput = {
    jenisMenu: string
    hari: Date | string
    foods?: FoodCreateNestedManyWithoutMenuInput
    user: UserCreateNestedOneWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    jenisMenu: string
    userId: number
    hari: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    jenisMenu?: StringFieldUpdateOperationsInput | string
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutMenuNestedInput
    user?: UserUpdateOneRequiredWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jenisMenu?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: number
    jenisMenu: string
    userId: number
    hari: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    jenisMenu?: StringFieldUpdateOperationsInput | string
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jenisMenu?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateInput = {
    foodId: number
    kalori: number
    takaran: number
    namaMakanan: string
    takaranAwal: string
    menu: MenuCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    foodId: number
    kalori: number
    menuId: number
    takaran: number
    namaMakanan: string
    takaranAwal: string
  }

  export type FoodUpdateInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    kalori?: IntFieldUpdateOperationsInput | number
    takaran?: IntFieldUpdateOperationsInput | number
    namaMakanan?: StringFieldUpdateOperationsInput | string
    takaranAwal?: StringFieldUpdateOperationsInput | string
    menu?: MenuUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    kalori?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    takaran?: IntFieldUpdateOperationsInput | number
    namaMakanan?: StringFieldUpdateOperationsInput | string
    takaranAwal?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCreateManyInput = {
    id?: number
    foodId: number
    kalori: number
    menuId: number
    takaran: number
    namaMakanan: string
    takaranAwal: string
  }

  export type FoodUpdateManyMutationInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    kalori?: IntFieldUpdateOperationsInput | number
    takaran?: IntFieldUpdateOperationsInput | number
    namaMakanan?: StringFieldUpdateOperationsInput | string
    takaranAwal?: StringFieldUpdateOperationsInput | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    kalori?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    takaran?: IntFieldUpdateOperationsInput | number
    namaMakanan?: StringFieldUpdateOperationsInput | string
    takaranAwal?: StringFieldUpdateOperationsInput | string
  }

  export type DailyTargetCreateInput = {
    target: number
    date: Date | string
    defaultTarget?: DefaultTargetCreateNestedManyWithoutDailyTargetInput
    user: UserCreateNestedOneWithoutDailyTargetInput
  }

  export type DailyTargetUncheckedCreateInput = {
    id?: number
    target: number
    userId: number
    date: Date | string
    defaultTarget?: DefaultTargetUncheckedCreateNestedManyWithoutDailyTargetInput
  }

  export type DailyTargetUpdateInput = {
    target?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultTarget?: DefaultTargetUpdateManyWithoutDailyTargetNestedInput
    user?: UserUpdateOneRequiredWithoutDailyTargetNestedInput
  }

  export type DailyTargetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultTarget?: DefaultTargetUncheckedUpdateManyWithoutDailyTargetNestedInput
  }

  export type DailyTargetCreateManyInput = {
    id?: number
    target: number
    userId: number
    date: Date | string
  }

  export type DailyTargetUpdateManyMutationInput = {
    target?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTargetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefaultTargetCreateInput = {
    value: number
    dailyTarget: DailyTargetCreateNestedOneWithoutDefaultTargetInput
  }

  export type DefaultTargetUncheckedCreateInput = {
    id?: number
    value: number
    dailyId: number
  }

  export type DefaultTargetUpdateInput = {
    value?: IntFieldUpdateOperationsInput | number
    dailyTarget?: DailyTargetUpdateOneRequiredWithoutDefaultTargetNestedInput
  }

  export type DefaultTargetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    dailyId?: IntFieldUpdateOperationsInput | number
  }

  export type DefaultTargetCreateManyInput = {
    id?: number
    value: number
    dailyId: number
  }

  export type DefaultTargetUpdateManyMutationInput = {
    value?: IntFieldUpdateOperationsInput | number
  }

  export type DefaultTargetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
    dailyId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DailyTargetListRelationFilter = {
    every?: DailyTargetWhereInput
    some?: DailyTargetWhereInput
    none?: DailyTargetWhereInput
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type DailyTargetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    jenisMenu?: SortOrder
    userId?: SortOrder
    hari?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    jenisMenu?: SortOrder
    userId?: SortOrder
    hari?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    jenisMenu?: SortOrder
    userId?: SortOrder
    hari?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MenuScalarRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    kalori?: SortOrder
    menuId?: SortOrder
    takaran?: SortOrder
    namaMakanan?: SortOrder
    takaranAwal?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    kalori?: SortOrder
    menuId?: SortOrder
    takaran?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    kalori?: SortOrder
    menuId?: SortOrder
    takaran?: SortOrder
    namaMakanan?: SortOrder
    takaranAwal?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    kalori?: SortOrder
    menuId?: SortOrder
    takaran?: SortOrder
    namaMakanan?: SortOrder
    takaranAwal?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    kalori?: SortOrder
    menuId?: SortOrder
    takaran?: SortOrder
  }

  export type DefaultTargetListRelationFilter = {
    every?: DefaultTargetWhereInput
    some?: DefaultTargetWhereInput
    none?: DefaultTargetWhereInput
  }

  export type DefaultTargetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyTargetUserIdDateCompoundUniqueInput = {
    userId: number
    date: Date | string
  }

  export type DailyTargetCountOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type DailyTargetAvgOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    userId?: SortOrder
  }

  export type DailyTargetMaxOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type DailyTargetMinOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    userId?: SortOrder
    date?: SortOrder
  }

  export type DailyTargetSumOrderByAggregateInput = {
    id?: SortOrder
    target?: SortOrder
    userId?: SortOrder
  }

  export type DailyTargetScalarRelationFilter = {
    is?: DailyTargetWhereInput
    isNot?: DailyTargetWhereInput
  }

  export type DefaultTargetCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    dailyId?: SortOrder
  }

  export type DefaultTargetAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    dailyId?: SortOrder
  }

  export type DefaultTargetMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    dailyId?: SortOrder
  }

  export type DefaultTargetMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    dailyId?: SortOrder
  }

  export type DefaultTargetSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    dailyId?: SortOrder
  }

  export type DailyTargetCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyTargetCreateWithoutUserInput, DailyTargetUncheckedCreateWithoutUserInput> | DailyTargetCreateWithoutUserInput[] | DailyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyTargetCreateOrConnectWithoutUserInput | DailyTargetCreateOrConnectWithoutUserInput[]
    createMany?: DailyTargetCreateManyUserInputEnvelope
    connect?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
  }

  export type MenuCreateNestedManyWithoutUserInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type DailyTargetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyTargetCreateWithoutUserInput, DailyTargetUncheckedCreateWithoutUserInput> | DailyTargetCreateWithoutUserInput[] | DailyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyTargetCreateOrConnectWithoutUserInput | DailyTargetCreateOrConnectWithoutUserInput[]
    createMany?: DailyTargetCreateManyUserInputEnvelope
    connect?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DailyTargetUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyTargetCreateWithoutUserInput, DailyTargetUncheckedCreateWithoutUserInput> | DailyTargetCreateWithoutUserInput[] | DailyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyTargetCreateOrConnectWithoutUserInput | DailyTargetCreateOrConnectWithoutUserInput[]
    upsert?: DailyTargetUpsertWithWhereUniqueWithoutUserInput | DailyTargetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyTargetCreateManyUserInputEnvelope
    set?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    disconnect?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    delete?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    connect?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    update?: DailyTargetUpdateWithWhereUniqueWithoutUserInput | DailyTargetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyTargetUpdateManyWithWhereWithoutUserInput | DailyTargetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyTargetScalarWhereInput | DailyTargetScalarWhereInput[]
  }

  export type MenuUpdateManyWithoutUserNestedInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutUserInput | MenuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutUserInput | MenuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutUserInput | MenuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailyTargetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyTargetCreateWithoutUserInput, DailyTargetUncheckedCreateWithoutUserInput> | DailyTargetCreateWithoutUserInput[] | DailyTargetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyTargetCreateOrConnectWithoutUserInput | DailyTargetCreateOrConnectWithoutUserInput[]
    upsert?: DailyTargetUpsertWithWhereUniqueWithoutUserInput | DailyTargetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyTargetCreateManyUserInputEnvelope
    set?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    disconnect?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    delete?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    connect?: DailyTargetWhereUniqueInput | DailyTargetWhereUniqueInput[]
    update?: DailyTargetUpdateWithWhereUniqueWithoutUserInput | DailyTargetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyTargetUpdateManyWithWhereWithoutUserInput | DailyTargetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyTargetScalarWhereInput | DailyTargetScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput> | MenuCreateWithoutUserInput[] | MenuUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutUserInput | MenuCreateOrConnectWithoutUserInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutUserInput | MenuUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MenuCreateManyUserInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutUserInput | MenuUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutUserInput | MenuUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type FoodCreateNestedManyWithoutMenuInput = {
    create?: XOR<FoodCreateWithoutMenuInput, FoodUncheckedCreateWithoutMenuInput> | FoodCreateWithoutMenuInput[] | FoodUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMenuInput | FoodCreateOrConnectWithoutMenuInput[]
    createMany?: FoodCreateManyMenuInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMenuInput = {
    create?: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenuInput
    connect?: UserWhereUniqueInput
  }

  export type FoodUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<FoodCreateWithoutMenuInput, FoodUncheckedCreateWithoutMenuInput> | FoodCreateWithoutMenuInput[] | FoodUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMenuInput | FoodCreateOrConnectWithoutMenuInput[]
    createMany?: FoodCreateManyMenuInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutMenuNestedInput = {
    create?: XOR<FoodCreateWithoutMenuInput, FoodUncheckedCreateWithoutMenuInput> | FoodCreateWithoutMenuInput[] | FoodUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMenuInput | FoodCreateOrConnectWithoutMenuInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutMenuInput | FoodUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: FoodCreateManyMenuInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutMenuInput | FoodUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutMenuInput | FoodUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
    connectOrCreate?: UserCreateOrConnectWithoutMenuInput
    upsert?: UserUpsertWithoutMenuInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMenuInput, UserUpdateWithoutMenuInput>, UserUncheckedUpdateWithoutMenuInput>
  }

  export type FoodUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<FoodCreateWithoutMenuInput, FoodUncheckedCreateWithoutMenuInput> | FoodCreateWithoutMenuInput[] | FoodUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMenuInput | FoodCreateOrConnectWithoutMenuInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutMenuInput | FoodUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: FoodCreateManyMenuInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutMenuInput | FoodUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutMenuInput | FoodUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutFoodsInput = {
    create?: XOR<MenuCreateWithoutFoodsInput, MenuUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutFoodsInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<MenuCreateWithoutFoodsInput, MenuUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutFoodsInput
    upsert?: MenuUpsertWithoutFoodsInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutFoodsInput, MenuUpdateWithoutFoodsInput>, MenuUncheckedUpdateWithoutFoodsInput>
  }

  export type DefaultTargetCreateNestedManyWithoutDailyTargetInput = {
    create?: XOR<DefaultTargetCreateWithoutDailyTargetInput, DefaultTargetUncheckedCreateWithoutDailyTargetInput> | DefaultTargetCreateWithoutDailyTargetInput[] | DefaultTargetUncheckedCreateWithoutDailyTargetInput[]
    connectOrCreate?: DefaultTargetCreateOrConnectWithoutDailyTargetInput | DefaultTargetCreateOrConnectWithoutDailyTargetInput[]
    createMany?: DefaultTargetCreateManyDailyTargetInputEnvelope
    connect?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDailyTargetInput = {
    create?: XOR<UserCreateWithoutDailyTargetInput, UserUncheckedCreateWithoutDailyTargetInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyTargetInput
    connect?: UserWhereUniqueInput
  }

  export type DefaultTargetUncheckedCreateNestedManyWithoutDailyTargetInput = {
    create?: XOR<DefaultTargetCreateWithoutDailyTargetInput, DefaultTargetUncheckedCreateWithoutDailyTargetInput> | DefaultTargetCreateWithoutDailyTargetInput[] | DefaultTargetUncheckedCreateWithoutDailyTargetInput[]
    connectOrCreate?: DefaultTargetCreateOrConnectWithoutDailyTargetInput | DefaultTargetCreateOrConnectWithoutDailyTargetInput[]
    createMany?: DefaultTargetCreateManyDailyTargetInputEnvelope
    connect?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
  }

  export type DefaultTargetUpdateManyWithoutDailyTargetNestedInput = {
    create?: XOR<DefaultTargetCreateWithoutDailyTargetInput, DefaultTargetUncheckedCreateWithoutDailyTargetInput> | DefaultTargetCreateWithoutDailyTargetInput[] | DefaultTargetUncheckedCreateWithoutDailyTargetInput[]
    connectOrCreate?: DefaultTargetCreateOrConnectWithoutDailyTargetInput | DefaultTargetCreateOrConnectWithoutDailyTargetInput[]
    upsert?: DefaultTargetUpsertWithWhereUniqueWithoutDailyTargetInput | DefaultTargetUpsertWithWhereUniqueWithoutDailyTargetInput[]
    createMany?: DefaultTargetCreateManyDailyTargetInputEnvelope
    set?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    disconnect?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    delete?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    connect?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    update?: DefaultTargetUpdateWithWhereUniqueWithoutDailyTargetInput | DefaultTargetUpdateWithWhereUniqueWithoutDailyTargetInput[]
    updateMany?: DefaultTargetUpdateManyWithWhereWithoutDailyTargetInput | DefaultTargetUpdateManyWithWhereWithoutDailyTargetInput[]
    deleteMany?: DefaultTargetScalarWhereInput | DefaultTargetScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutDailyTargetNestedInput = {
    create?: XOR<UserCreateWithoutDailyTargetInput, UserUncheckedCreateWithoutDailyTargetInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyTargetInput
    upsert?: UserUpsertWithoutDailyTargetInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyTargetInput, UserUpdateWithoutDailyTargetInput>, UserUncheckedUpdateWithoutDailyTargetInput>
  }

  export type DefaultTargetUncheckedUpdateManyWithoutDailyTargetNestedInput = {
    create?: XOR<DefaultTargetCreateWithoutDailyTargetInput, DefaultTargetUncheckedCreateWithoutDailyTargetInput> | DefaultTargetCreateWithoutDailyTargetInput[] | DefaultTargetUncheckedCreateWithoutDailyTargetInput[]
    connectOrCreate?: DefaultTargetCreateOrConnectWithoutDailyTargetInput | DefaultTargetCreateOrConnectWithoutDailyTargetInput[]
    upsert?: DefaultTargetUpsertWithWhereUniqueWithoutDailyTargetInput | DefaultTargetUpsertWithWhereUniqueWithoutDailyTargetInput[]
    createMany?: DefaultTargetCreateManyDailyTargetInputEnvelope
    set?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    disconnect?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    delete?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    connect?: DefaultTargetWhereUniqueInput | DefaultTargetWhereUniqueInput[]
    update?: DefaultTargetUpdateWithWhereUniqueWithoutDailyTargetInput | DefaultTargetUpdateWithWhereUniqueWithoutDailyTargetInput[]
    updateMany?: DefaultTargetUpdateManyWithWhereWithoutDailyTargetInput | DefaultTargetUpdateManyWithWhereWithoutDailyTargetInput[]
    deleteMany?: DefaultTargetScalarWhereInput | DefaultTargetScalarWhereInput[]
  }

  export type DailyTargetCreateNestedOneWithoutDefaultTargetInput = {
    create?: XOR<DailyTargetCreateWithoutDefaultTargetInput, DailyTargetUncheckedCreateWithoutDefaultTargetInput>
    connectOrCreate?: DailyTargetCreateOrConnectWithoutDefaultTargetInput
    connect?: DailyTargetWhereUniqueInput
  }

  export type DailyTargetUpdateOneRequiredWithoutDefaultTargetNestedInput = {
    create?: XOR<DailyTargetCreateWithoutDefaultTargetInput, DailyTargetUncheckedCreateWithoutDefaultTargetInput>
    connectOrCreate?: DailyTargetCreateOrConnectWithoutDefaultTargetInput
    upsert?: DailyTargetUpsertWithoutDefaultTargetInput
    connect?: DailyTargetWhereUniqueInput
    update?: XOR<XOR<DailyTargetUpdateToOneWithWhereWithoutDefaultTargetInput, DailyTargetUpdateWithoutDefaultTargetInput>, DailyTargetUncheckedUpdateWithoutDefaultTargetInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DailyTargetCreateWithoutUserInput = {
    target: number
    date: Date | string
    defaultTarget?: DefaultTargetCreateNestedManyWithoutDailyTargetInput
  }

  export type DailyTargetUncheckedCreateWithoutUserInput = {
    id?: number
    target: number
    date: Date | string
    defaultTarget?: DefaultTargetUncheckedCreateNestedManyWithoutDailyTargetInput
  }

  export type DailyTargetCreateOrConnectWithoutUserInput = {
    where: DailyTargetWhereUniqueInput
    create: XOR<DailyTargetCreateWithoutUserInput, DailyTargetUncheckedCreateWithoutUserInput>
  }

  export type DailyTargetCreateManyUserInputEnvelope = {
    data: DailyTargetCreateManyUserInput | DailyTargetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MenuCreateWithoutUserInput = {
    jenisMenu: string
    hari: Date | string
    foods?: FoodCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutUserInput = {
    id?: number
    jenisMenu: string
    hari: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutUserInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput>
  }

  export type MenuCreateManyUserInputEnvelope = {
    data: MenuCreateManyUserInput | MenuCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyTargetUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyTargetWhereUniqueInput
    update: XOR<DailyTargetUpdateWithoutUserInput, DailyTargetUncheckedUpdateWithoutUserInput>
    create: XOR<DailyTargetCreateWithoutUserInput, DailyTargetUncheckedCreateWithoutUserInput>
  }

  export type DailyTargetUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyTargetWhereUniqueInput
    data: XOR<DailyTargetUpdateWithoutUserInput, DailyTargetUncheckedUpdateWithoutUserInput>
  }

  export type DailyTargetUpdateManyWithWhereWithoutUserInput = {
    where: DailyTargetScalarWhereInput
    data: XOR<DailyTargetUpdateManyMutationInput, DailyTargetUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyTargetScalarWhereInput = {
    AND?: DailyTargetScalarWhereInput | DailyTargetScalarWhereInput[]
    OR?: DailyTargetScalarWhereInput[]
    NOT?: DailyTargetScalarWhereInput | DailyTargetScalarWhereInput[]
    id?: IntFilter<"DailyTarget"> | number
    target?: IntFilter<"DailyTarget"> | number
    userId?: IntFilter<"DailyTarget"> | number
    date?: DateTimeFilter<"DailyTarget"> | Date | string
  }

  export type MenuUpsertWithWhereUniqueWithoutUserInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutUserInput, MenuUncheckedUpdateWithoutUserInput>
    create: XOR<MenuCreateWithoutUserInput, MenuUncheckedCreateWithoutUserInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutUserInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutUserInput, MenuUncheckedUpdateWithoutUserInput>
  }

  export type MenuUpdateManyWithWhereWithoutUserInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutUserInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: IntFilter<"Menu"> | number
    jenisMenu?: StringFilter<"Menu"> | string
    userId?: IntFilter<"Menu"> | number
    hari?: DateTimeFilter<"Menu"> | Date | string
  }

  export type FoodCreateWithoutMenuInput = {
    foodId: number
    kalori: number
    takaran: number
    namaMakanan: string
    takaranAwal: string
  }

  export type FoodUncheckedCreateWithoutMenuInput = {
    id?: number
    foodId: number
    kalori: number
    takaran: number
    namaMakanan: string
    takaranAwal: string
  }

  export type FoodCreateOrConnectWithoutMenuInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutMenuInput, FoodUncheckedCreateWithoutMenuInput>
  }

  export type FoodCreateManyMenuInputEnvelope = {
    data: FoodCreateManyMenuInput | FoodCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMenuInput = {
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DailyTarget?: DailyTargetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMenuInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DailyTarget?: DailyTargetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMenuInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
  }

  export type FoodUpsertWithWhereUniqueWithoutMenuInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutMenuInput, FoodUncheckedUpdateWithoutMenuInput>
    create: XOR<FoodCreateWithoutMenuInput, FoodUncheckedCreateWithoutMenuInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutMenuInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutMenuInput, FoodUncheckedUpdateWithoutMenuInput>
  }

  export type FoodUpdateManyWithWhereWithoutMenuInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutMenuInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: IntFilter<"Food"> | number
    foodId?: IntFilter<"Food"> | number
    kalori?: IntFilter<"Food"> | number
    menuId?: IntFilter<"Food"> | number
    takaran?: IntFilter<"Food"> | number
    namaMakanan?: StringFilter<"Food"> | string
    takaranAwal?: StringFilter<"Food"> | string
  }

  export type UserUpsertWithoutMenuInput = {
    update: XOR<UserUpdateWithoutMenuInput, UserUncheckedUpdateWithoutMenuInput>
    create: XOR<UserCreateWithoutMenuInput, UserUncheckedCreateWithoutMenuInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMenuInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMenuInput, UserUncheckedUpdateWithoutMenuInput>
  }

  export type UserUpdateWithoutMenuInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DailyTarget?: DailyTargetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DailyTarget?: DailyTargetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MenuCreateWithoutFoodsInput = {
    jenisMenu: string
    hari: Date | string
    user: UserCreateNestedOneWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutFoodsInput = {
    id?: number
    jenisMenu: string
    userId: number
    hari: Date | string
  }

  export type MenuCreateOrConnectWithoutFoodsInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutFoodsInput, MenuUncheckedCreateWithoutFoodsInput>
  }

  export type MenuUpsertWithoutFoodsInput = {
    update: XOR<MenuUpdateWithoutFoodsInput, MenuUncheckedUpdateWithoutFoodsInput>
    create: XOR<MenuCreateWithoutFoodsInput, MenuUncheckedCreateWithoutFoodsInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutFoodsInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutFoodsInput, MenuUncheckedUpdateWithoutFoodsInput>
  }

  export type MenuUpdateWithoutFoodsInput = {
    jenisMenu?: StringFieldUpdateOperationsInput | string
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    jenisMenu?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DefaultTargetCreateWithoutDailyTargetInput = {
    value: number
  }

  export type DefaultTargetUncheckedCreateWithoutDailyTargetInput = {
    id?: number
    value: number
  }

  export type DefaultTargetCreateOrConnectWithoutDailyTargetInput = {
    where: DefaultTargetWhereUniqueInput
    create: XOR<DefaultTargetCreateWithoutDailyTargetInput, DefaultTargetUncheckedCreateWithoutDailyTargetInput>
  }

  export type DefaultTargetCreateManyDailyTargetInputEnvelope = {
    data: DefaultTargetCreateManyDailyTargetInput | DefaultTargetCreateManyDailyTargetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDailyTargetInput = {
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menu?: MenuCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyTargetInput = {
    id?: number
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menu?: MenuUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyTargetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyTargetInput, UserUncheckedCreateWithoutDailyTargetInput>
  }

  export type DefaultTargetUpsertWithWhereUniqueWithoutDailyTargetInput = {
    where: DefaultTargetWhereUniqueInput
    update: XOR<DefaultTargetUpdateWithoutDailyTargetInput, DefaultTargetUncheckedUpdateWithoutDailyTargetInput>
    create: XOR<DefaultTargetCreateWithoutDailyTargetInput, DefaultTargetUncheckedCreateWithoutDailyTargetInput>
  }

  export type DefaultTargetUpdateWithWhereUniqueWithoutDailyTargetInput = {
    where: DefaultTargetWhereUniqueInput
    data: XOR<DefaultTargetUpdateWithoutDailyTargetInput, DefaultTargetUncheckedUpdateWithoutDailyTargetInput>
  }

  export type DefaultTargetUpdateManyWithWhereWithoutDailyTargetInput = {
    where: DefaultTargetScalarWhereInput
    data: XOR<DefaultTargetUpdateManyMutationInput, DefaultTargetUncheckedUpdateManyWithoutDailyTargetInput>
  }

  export type DefaultTargetScalarWhereInput = {
    AND?: DefaultTargetScalarWhereInput | DefaultTargetScalarWhereInput[]
    OR?: DefaultTargetScalarWhereInput[]
    NOT?: DefaultTargetScalarWhereInput | DefaultTargetScalarWhereInput[]
    id?: IntFilter<"DefaultTarget"> | number
    value?: IntFilter<"DefaultTarget"> | number
    dailyId?: IntFilter<"DefaultTarget"> | number
  }

  export type UserUpsertWithoutDailyTargetInput = {
    update: XOR<UserUpdateWithoutDailyTargetInput, UserUncheckedUpdateWithoutDailyTargetInput>
    create: XOR<UserCreateWithoutDailyTargetInput, UserUncheckedCreateWithoutDailyTargetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyTargetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyTargetInput, UserUncheckedUpdateWithoutDailyTargetInput>
  }

  export type UserUpdateWithoutDailyTargetInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyTargetInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DailyTargetCreateWithoutDefaultTargetInput = {
    target: number
    date: Date | string
    user: UserCreateNestedOneWithoutDailyTargetInput
  }

  export type DailyTargetUncheckedCreateWithoutDefaultTargetInput = {
    id?: number
    target: number
    userId: number
    date: Date | string
  }

  export type DailyTargetCreateOrConnectWithoutDefaultTargetInput = {
    where: DailyTargetWhereUniqueInput
    create: XOR<DailyTargetCreateWithoutDefaultTargetInput, DailyTargetUncheckedCreateWithoutDefaultTargetInput>
  }

  export type DailyTargetUpsertWithoutDefaultTargetInput = {
    update: XOR<DailyTargetUpdateWithoutDefaultTargetInput, DailyTargetUncheckedUpdateWithoutDefaultTargetInput>
    create: XOR<DailyTargetCreateWithoutDefaultTargetInput, DailyTargetUncheckedCreateWithoutDefaultTargetInput>
    where?: DailyTargetWhereInput
  }

  export type DailyTargetUpdateToOneWithWhereWithoutDefaultTargetInput = {
    where?: DailyTargetWhereInput
    data: XOR<DailyTargetUpdateWithoutDefaultTargetInput, DailyTargetUncheckedUpdateWithoutDefaultTargetInput>
  }

  export type DailyTargetUpdateWithoutDefaultTargetInput = {
    target?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyTargetNestedInput
  }

  export type DailyTargetUncheckedUpdateWithoutDefaultTargetInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyTargetCreateManyUserInput = {
    id?: number
    target: number
    date: Date | string
  }

  export type MenuCreateManyUserInput = {
    id?: number
    jenisMenu: string
    hari: Date | string
  }

  export type DailyTargetUpdateWithoutUserInput = {
    target?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultTarget?: DefaultTargetUpdateManyWithoutDailyTargetNestedInput
  }

  export type DailyTargetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultTarget?: DefaultTargetUncheckedUpdateManyWithoutDailyTargetNestedInput
  }

  export type DailyTargetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUpdateWithoutUserInput = {
    jenisMenu?: StringFieldUpdateOperationsInput | string
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jenisMenu?: StringFieldUpdateOperationsInput | string
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jenisMenu?: StringFieldUpdateOperationsInput | string
    hari?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateManyMenuInput = {
    id?: number
    foodId: number
    kalori: number
    takaran: number
    namaMakanan: string
    takaranAwal: string
  }

  export type FoodUpdateWithoutMenuInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    kalori?: IntFieldUpdateOperationsInput | number
    takaran?: IntFieldUpdateOperationsInput | number
    namaMakanan?: StringFieldUpdateOperationsInput | string
    takaranAwal?: StringFieldUpdateOperationsInput | string
  }

  export type FoodUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    kalori?: IntFieldUpdateOperationsInput | number
    takaran?: IntFieldUpdateOperationsInput | number
    namaMakanan?: StringFieldUpdateOperationsInput | string
    takaranAwal?: StringFieldUpdateOperationsInput | string
  }

  export type FoodUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    kalori?: IntFieldUpdateOperationsInput | number
    takaran?: IntFieldUpdateOperationsInput | number
    namaMakanan?: StringFieldUpdateOperationsInput | string
    takaranAwal?: StringFieldUpdateOperationsInput | string
  }

  export type DefaultTargetCreateManyDailyTargetInput = {
    id?: number
    value: number
  }

  export type DefaultTargetUpdateWithoutDailyTargetInput = {
    value?: IntFieldUpdateOperationsInput | number
  }

  export type DefaultTargetUncheckedUpdateWithoutDailyTargetInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }

  export type DefaultTargetUncheckedUpdateManyWithoutDailyTargetInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}