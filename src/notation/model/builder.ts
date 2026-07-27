import { ProtoPathDatabase, NotationPair } from '../../domain/types';
import {
  StageNotationModel,
  StageObject,
  ForceVectorModel,
  PressureFieldModel,
  ObjectCategory,
  ForceStrength,
} from './types';
import {
  getPairById,
  getSourceFeaturesForPair,
  getSituationsForPair,
  getBodyImpulsesForPair,
  getSpatialOutputsForPair,
  getDiagramForPair,
} from '../../domain/selectors';

export function buildStageNotationModel(
  db: ProtoPathDatabase,
  pairId: string
): StageNotationModel {
  const pair = getPairById(db, pairId);
  if (!pair) throw new Error(`Pair ${pairId} not found`);

  const score = db.scores.find((s) => s.id === pair.scoreId);
  const sourceFeature = getSourceFeaturesForPair(db, pair.id)[0];
  const situation = getSituationsForPair(db, pair.id)[0];
  const bodyImpulse = getBodyImpulsesForPair(db, pair.id)[0];
  const spatialOutput = getSpatialOutputsForPair(db, pair.id)[0];
  const diagramAsset = getDiagramForPair(db, pair.id);

  // 1. Map Stage Axis & Checkpoint
  const axisLength = score?.nodes.reduce((max, node) => Math.max(max, node.axisDistanceMeters), 15) || 15;
  const checkpointDistance = sourceFeature?.distanceMeters ?? null;
  
  // 2. Determine Axis State
  let axisState: 'active' | 'blocked' | 'locked' | 'residual' = 'active';
  if (bodyImpulse?.impulse === 'FREEZE' || bodyImpulse?.impulse === 'GLITCH') {
    axisState = spatialOutput?.residue.length ? 'residual' : 'locked';
  }

  // 3. Map Objects from Tokens
  const objects: StageObject[] = [];
  
  // Always include a linear object representing the stage bar/path if it's the primary axis
  objects.push({
    id: 'primary-axis-bar',
    category: 'LINEAR_OBJECT',
    label: 'LINEAR OBJECT',
    token: 'primary-axis',
    distanceMeters: 0,
  });

  if (situation) {
    situation.objectTokens.forEach((token, index) => {
      let category: ObjectCategory = 'UNDECLARED_OBJECT';
      if (token.includes('REGULATORY')) category = 'REGULATORY_OBJECT';
      else if (token.includes('MASS')) category = 'SOLID_MASS_OBJECT';
      else if (token.includes('MARKER')) category = 'MARKER_OBJECT';
      else if (token.includes('TEXTURE')) category = 'TEXTURE_OBJECT';
      
      objects.push({
        id: `obj-${index}`,
        category,
        label: token,
        token: token,
        distanceMeters: checkpointDistance || undefined,
      });
    });
  }

  // 4. Map Forces & Pressures
  const forces: ForceVectorModel[] = [];
  const pressureFields: PressureFieldModel[] = [];

  // Default Forward Drive
  forces.push({
    id: 'forward-drive',
    source: 'performer',
    target: 'node-b',
    direction: 'forward',
    relation: 'drive',
    strengthCategory: 'active',
    blocked: bodyImpulse?.impulse === 'FREEZE' || bodyImpulse?.impulse === 'GLITCH',
  });

  if (situation) {
    if (situation.activeVectors.includes('REGULATORY_PROHIBITION')) {
      forces.push({
        id: 'prohibition-vector',
        source: 'regulatory-object',
        target: 'performer',
        direction: 'perpendicular-right',
        relation: 'prohibition',
        strengthCategory: 'dominant',
        blocked: false,
      });

      pressureFields.push({
        id: 'prohibition-pressure',
        direction: 'perpendicular-right',
        target: 'performer-right-side',
        spatialExtent: 'checkpoint-zone',
      });
    }

    if (situation.category === 'PARADOX') {
      forces.find(f => f.id === 'forward-drive')!.strengthCategory = 'counteracting';
    }
  }

  return {
    id: pair.id,
    axis: {
      lengthMeters: axisLength,
      orientation: 'horizontal',
      nodes: score?.nodes.map(n => ({
        id: n.id,
        label: n.label,
        distanceMeters: n.axisDistanceMeters,
      })) || [],
      state: axisState,
    },
    checkpoint: {
      distanceMeters: checkpointDistance,
      label: pair.checkpointId,
    },
    performer: {
      axisDistanceMeters: checkpointDistance ?? 0,
      orientation: 'toward-node-b',
      bodyImpulse: bodyImpulse?.impulse || 'CONSTANT',
      anatomicalLoci: bodyImpulse?.anatomicalLoci || [],
      weightDistribution: {
        loadDirection: 'forward',
      },
    },
    objects,
    forces,
    pressureFields,
    spatialOutput: {
      label: spatialOutput?.label || 'UNRESOLVED',
      description: spatialOutput?.description || 'No spatial output defined.',
    },
    residuals: spatialOutput?.residue.map(res => ({ description: res })) || [],
    sourceState: {
      rawValue: sourceFeature?.rawValue || 'UNDECLARED',
      featureType: sourceFeature?.featureType || 'UNDECLARED',
      resolutionStatus: sourceFeature?.validationStatus || 'unresolved',
    },
    reviewStatus: diagramAsset?.status || 'missing',
  };
}
