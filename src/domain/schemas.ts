import { z } from 'zod';

export const ValidationStatusSchema = z.enum([
  'valid',
  'warning',
  'invalid',
  'unresolved',
]);

export const SourceKindSchema = z.enum([
  'mapillary-feature',
  'score-bounds',
  'manual-source',
]);

export const SituationCategorySchema = z.enum([
  'SYSTEM',
  'SPATIAL_MATRIX',
  'MASS',
  'ELEVATION',
  'AUTHORITY',
  'SEMANTIC',
  'PARADOX',
]);

export const BodyImpulseTokenSchema = z.enum([
  'INJECTION',
  'ACCELERATION',
  'COMPRESSION',
  'ASYMMETRIC',
  'FREEZE',
  'GLITCH',
  'FIXATION',
  'CONSTANT',
]);

export const AnatomicalLocusSchema = z.enum([
  'head',
  'eyes',
  'cervical-spine',
  'shoulder',
  'clavicle',
  'sternum',
  'scapula',
  'chest',
  'elbow',
  'wrist',
  'fingers',
  'palm',
  'spine',
  'lumbar',
  'pelvis',
  'hip',
  'knee',
  'ankle',
  'sole',
  'foot',
  'centre-of-gravity',
  'motor-nerve',
]);

export const GeoPointSchema = z.object({
  lon: z.number(),
  lat: z.number(),
});

export const SourceFeatureSchema = z.object({
  id: z.string(),
  sourceKind: SourceKindSchema,
  sourceDatasetId: z.string(),
  sourceFile: z.string(),
  featureType: z.string(),
  rawValue: z.string(),
  coordinate: GeoPointSchema.nullable(),
  distanceMeters: z.number().nullable(),
  rawRecord: z.record(z.string(), z.unknown()),
  immutableHash: z.string().optional(),
  validationStatus: ValidationStatusSchema,
});

export const DataProvocationSchema = z.object({
  id: z.string(),
  code: z.string(),
  sourceFeatureIds: z.array(z.string()),
  sourceLabel: z.string(),
  featureType: z.string(),
  rawValue: z.string(),
  coordinate: GeoPointSchema.nullable(),
  distanceMeters: z.number().nullable(),
  verbatimText: z.string(),
  validationStatus: ValidationStatusSchema,
});

export const SituationSchema = z.object({
  id: z.string(),
  code: z.string(),
  checkpointId: z.string(),
  category: SituationCategorySchema,
  title: z.string(),
  spatialCondition: z.string(),
  dataProvocationIds: z.array(z.string()),
  objectTokens: z.array(z.string()),
  activeVectors: z.array(z.string()),
  validationStatus: ValidationStatusSchema,
});

export const BodyImpulseSchema = z.object({
  id: z.string(),
  code: z.string(),
  impulse: BodyImpulseTokenSchema,
  title: z.string(),
  bodyAction: z.string(),
  respondsToSituationIds: z.array(z.string()),
  anatomicalLoci: z.array(AnatomicalLocusSchema),
  spatialOutputIds: z.array(z.string()),
  kineticQualities: z.array(z.string()),
  validationStatus: ValidationStatusSchema,
});

export const SpatialOutputSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string(),
  residue: z.array(z.string()),
});

export const DiagramAssetSchema = z.object({
  id: z.string(),
  pairId: z.string(),
  src: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  alt: z.string(),
  hotspotManifestSrc: z.string().nullable().optional(),
  status: z.enum(['available', 'missing', 'draft']),
});

export const SequenceFrameSchema = z.object({
  id: z.string(),
  order: z.number(),
  title: z.string(),
  description: z.string(),
  activeEntityIds: z.array(z.string()),
  durationMs: z.number(),
});

export const LineageEdgeSchema = z.object({
  id: z.string(),
  fromId: z.string(),
  toId: z.string(),
  relation: z.enum([
    'provokes',
    'translated_as',
    'responded_by',
    'produces',
    'leaves_residue',
    'visualized_by',
    'continues_into',
  ]),
});

export const NotationPairSchema = z.object({
  id: z.string(),
  scoreId: z.string(),
  phaseId: z.string(),
  checkpointId: z.string(),
  title: z.string(),
  sourceFeatureIds: z.array(z.string()),
  dataProvocationIds: z.array(z.string()),
  situationIds: z.array(z.string()),
  bodyImpulseIds: z.array(z.string()),
  spatialOutputIds: z.array(z.string()),
  diagramAssetId: z.string().nullable(),
  sequenceFrameIds: z.array(z.string()),
  previousPairId: z.string().nullable(),
  nextPairId: z.string().nullable(),
  status: z.enum(['draft', 'reviewed', 'published']),
});

export const ScoreNodeSchema = z.object({
  id: z.string(),
  label: z.string(),
  role: z.string(),
  axisDistanceMeters: z.number(),
});

export const ScoreBoundsSchema = z.object({
  lonMin: z.number(),
  lonMax: z.number(),
  latMin: z.number(),
  latMax: z.number(),
});

export const ScoreSchema = z.object({
  id: z.string(),
  code: z.string(),
  title: z.string(),
  character: z.string(),
  bounds: ScoreBoundsSchema,
  nodes: z.array(ScoreNodeSchema),
});

export const DatasetMetaSchema = z.object({
  id: z.string(),
  name: z.string(),
  sourceFile: z.string(),
  recordCount: z.number(),
  valueTypeCount: z.number(),
});

export const ProtoPathDatabaseSchema = z.object({
  datasets: z.array(DatasetMetaSchema),
  scores: z.array(ScoreSchema),
  sourceFeatures: z.array(SourceFeatureSchema),
  dataProvocations: z.array(DataProvocationSchema),
  situations: z.array(SituationSchema),
  bodyImpulses: z.array(BodyImpulseSchema),
  spatialOutputs: z.array(SpatialOutputSchema),
  diagramAssets: z.array(DiagramAssetSchema),
  sequenceFrames: z.array(SequenceFrameSchema),
  notationPairs: z.array(NotationPairSchema),
  lineageEdges: z.array(LineageEdgeSchema),
});
