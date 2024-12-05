import {LevelDbControllerMetrics} from "./metrics.js";

/** Shortcut for Uint8Array based DatabaseController */
export type Db = DatabaseController<Uint8Array, Uint8Array>;

export type DatabaseOptions = {
  name: string;
};

export interface FilterOptions<K> {
  gt?: K;
  gte?: K;
  lt?: K;
  lte?: K;
  reverse?: boolean;
  limit?: number;
  /** For metrics */
  bucketId?: string;
}

export interface ControllerFilterOptions<K> {
  gt?: K;
  gte?: K;
  lt?: K;
  lte?: K;
  reverse?: boolean;
  limit?: number;
  /** For metrics */
  bucketId: string;
}

export type DbReqOpts = {
  /** For metrics */
  bucketId: string;
};

export interface KeyValue<K, V> {
  key: K;
  value: V;
}

export interface DatabaseController<K, V> {
  // service start / stop

  close(): Promise<void>;

  /** To inject metrics after CLI initialization */
  setMetrics(metrics: LevelDbControllerMetrics): void;

  // Core API

  get(key: K, opts: DbReqOpts): Promise<V | null>;
  put(key: K, value: V, opts: DbReqOpts): Promise<void>;
  delete(key: K, opts: DbReqOpts): Promise<void>;

  // Batch operations

  batchPut(items: KeyValue<K, V>[], opts: DbReqOpts): Promise<void>;
  batchDelete(keys: K[], opts: DbReqOpts): Promise<void>;

  // Iterate over entries

  keysStream(opts: ControllerFilterOptions<K>): AsyncIterable<K>;
  keys(opts: ControllerFilterOptions<K>): Promise<K[]>;

  valuesStream(opts: ControllerFilterOptions<K>): AsyncIterable<V>;
  values(opts: ControllerFilterOptions<K>): Promise<V[]>;

  entriesStream(opts: ControllerFilterOptions<K>): AsyncIterable<KeyValue<K, V>>;
  entries(opts: ControllerFilterOptions<K>): Promise<KeyValue<K, V>[]>;
}
