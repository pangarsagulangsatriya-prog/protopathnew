import { ProtoPathDatabase, NotationPair, SourceFeature } from '../domain/types';
import { INITIAL_DATABASE } from '../domain/sampleData';
import { ProtoPathDatabaseSchema } from '../domain/schemas';

export interface INotationRepository {
  getDatabase(): Promise<ProtoPathDatabase>;
  loadDatabase(): ProtoPathDatabase;
  saveDatabase(db: ProtoPathDatabase): Promise<boolean>;
  validateImport(jsonContent: string): {
    success: boolean;
    data?: ProtoPathDatabase;
    errors?: string[];
  };
}

export class LocalJsonRepository implements INotationRepository {
  private storageKey = 'proto_path_db_v1';

  loadDatabase(): ProtoPathDatabase {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          const result = ProtoPathDatabaseSchema.safeParse(parsed);
          if (result.success) {
            return result.data as ProtoPathDatabase;
          }
        }
      }
    } catch {
      // Fallback on error
    }
    return INITIAL_DATABASE;
  }

  async getDatabase(): Promise<ProtoPathDatabase> {
    return this.loadDatabase();
  }

  async saveDatabase(db: ProtoPathDatabase): Promise<boolean> {
    try {
      const validated = ProtoPathDatabaseSchema.parse(db);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(this.storageKey, JSON.stringify(validated));
      }
      return true;
    } catch (e) {
      console.error('Failed to save database:', e);
      return false;
    }
  }

  validateImport(jsonContent: string): {
    success: boolean;
    data?: ProtoPathDatabase;
    errors?: string[];
  } {
    try {
      const parsed = JSON.parse(jsonContent);
      const result = ProtoPathDatabaseSchema.safeParse(parsed);
      if (result.success) {
        return { success: true, data: result.data as ProtoPathDatabase };
      } else {
        const errors = result.error.issues.map(
          (issue) => `${issue.path.join('.')}: ${issue.message}`
        );
        return { success: false, errors };
      }
    } catch (e) {
      return {
        success: false,
        errors: [(e as Error).message || 'Invalid JSON syntax'],
      };
    }
  }
}

export const repository = new LocalJsonRepository();
