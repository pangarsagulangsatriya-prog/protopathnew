/**
 * Canonical Data Contract for PROTO PATH
 * DATA TO BODY / ARCHITECTURAL STAGE NOTATION
 */

export type ValidationStatus =
  | 'valid'
  | 'warning'
  | 'invalid'
  | 'unresolved';

export type SourceKind =
  | 'mapillary-feature'
  | 'score-bounds'
  | 'manual-source';

export type SituationCategory =
  | 'SYSTEM'
  | 'SPATIAL_MATRIX'
  | 'MASS'
  | 'ELEVATION'
  | 'AUTHORITY'
  | 'SEMANTIC'
  | 'PARADOX';

export type BodyImpulseToken =
  | 'INJECTION'
  | 'ACCELERATION'
  | 'COMPRESSION'
  | 'ASYMMETRIC'
  | 'FREEZE'
  | 'GLITCH'
  | 'FIXATION'
  | 'CONSTANT';

export type AnatomicalLocus =
  | 'head'
  | 'eyes'
  | 'cervical-spine'
  | 'shoulder'
  | 'clavicle'
  | 'sternum'
  | 'scapula'
  | 'chest'
  | 'elbow'
  | 'wrist'
  | 'fingers'
  | 'palm'
  | 'spine'
  | 'lumbar'
  | 'pelvis'
  | 'hip'
  | 'knee'
  | 'ankle'
  | 'sole'
  | 'foot'
  | 'centre-of-gravity'
  | 'motor-nerve';

export interface GeoPoint {
  lon: number;
  lat: number;
}

export interface SourceFeature {
  id: string;
  sourceKind: SourceKind;
  sourceDatasetId: string;
  sourceFile: string;
  featureType: string;
  rawValue: string;
  coordinate: GeoPoint | null;
  distanceMeters: number | null;
  rawRecord: Record<string, unknown>;
  immutableHash?: string;
  validationStatus: ValidationStatus;
}

export interface DataProvocation {
  id: string;
  code: string;
  sourceFeatureIds: string[];
  sourceLabel: string;
  featureType: string;
  rawValue: string;
  coordinate: GeoPoint | null;
  distanceMeters: number | null;
  verbatimText: string;
  validationStatus: ValidationStatus;
}

export interface Situation {
  id: string;
  code: string;
  checkpointId: string;
  category: SituationCategory;
  title: string;
  spatialCondition: string;
  dataProvocationIds: string[];
  objectTokens: string[];
  activeVectors: string[];
  validationStatus: ValidationStatus;
}

export interface BodyImpulse {
  id: string;
  code: string;
  impulse: BodyImpulseToken;
  title: string;
  bodyAction: string;
  respondsToSituationIds: string[];
  anatomicalLoci: AnatomicalLocus[];
  spatialOutputIds: string[];
  kineticQualities: string[];
  validationStatus: ValidationStatus;
}

export interface SpatialOutput {
  id: string;
  label: string;
  description: string;
  residue: string[];
}

export interface DiagramAsset {
  id: string;
  pairId: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  hotspotManifestSrc?: string | null;
  status:
    | 'canonical'
    | 'compatible-pending-review'
    | 'legacy-draft'
    | 'content-mismatch-review-required'
    | 'missing';
}

export interface SequenceFrame {
  id: string;
  order: number;
  title: string;
  description: string;
  activeEntityIds: string[];
  durationMs: number;
}

export interface LineageEdge {
  id: string;
  fromId: string;
  toId: string;
  relation:
    | 'provokes'
    | 'translated_as'
    | 'responded_by'
    | 'produces'
    | 'leaves_residue'
    | 'visualized_by'
    | 'continues_into';
}

export interface NotationPair {
  id: string;
  scoreId: string;
  phaseId: string;
  checkpointId: string;
  title: string;
  sourceFeatureIds: string[];
  dataProvocationIds: string[];
  situationIds: string[];
  bodyImpulseIds: string[];
  spatialOutputIds: string[];
  diagramAssetId: string | null;
  sequenceFrameIds: string[];
  previousPairId: string | null;
  nextPairId: string | null;
  status: 'draft' | 'reviewed' | 'published';
}

export interface ScoreNode {
  id: string;
  label: string;
  role: string;
  axisDistanceMeters: number;
}

export interface ScoreBounds {
  lonMin: number;
  lonMax: number;
  latMin: number;
  latMax: number;
}

export interface Score {
  id: string;
  code: string;
  title: string;
  character: string;
  bounds: ScoreBounds;
  nodes: ScoreNode[];
}

export interface DatasetMeta {
  id: string;
  name: string;
  sourceFile: string;
  recordCount: number;
  valueTypeCount: number;
}

export interface ProtoPathDatabase {
  datasets: DatasetMeta[];
  scores: Score[];
  sourceFeatures: SourceFeature[];
  dataProvocations: DataProvocation[];
  situations: Situation[];
  bodyImpulses: BodyImpulse[];
  spatialOutputs: SpatialOutput[];
  diagramAssets: DiagramAsset[];
  sequenceFrames: SequenceFrame[];
  notationPairs: NotationPair[];
  lineageEdges: LineageEdge[];
}
