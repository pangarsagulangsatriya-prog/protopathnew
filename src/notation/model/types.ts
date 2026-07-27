export interface StageNode {
  id: string;
  label: string;
  distanceMeters: number;
}

export type ObjectCategory =
  | 'LINEAR_OBJECT'
  | 'SOLID_MASS_OBJECT'
  | 'TEXTURE_OBJECT'
  | 'GROUND_TEXTURE_OBJECT'
  | 'REGULATORY_OBJECT'
  | 'SEMANTIC_OBJECT'
  | 'MARKER_OBJECT'
  | 'MICRO_OBJECT'
  | 'UNDECLARED_OBJECT';

export interface StageObject {
  id: string;
  category: ObjectCategory;
  label: string;
  token: string;
  distanceMeters?: number;
}

export type ForceStrength = 'latent' | 'active' | 'dominant' | 'counteracting' | 'residual';

export interface ForceVectorModel {
  id: string;
  source: string; // e.g. "performer" or "object-X"
  target: string;
  direction: string; // descriptive direction or angle
  relation: string;
  strengthCategory: ForceStrength;
  blocked: boolean;
}

export interface PressureFieldModel {
  id: string;
  direction: string;
  target: string;
  spatialExtent: string; // qualitative description of span
}

export interface WeightDistribution {
  loadDirection: string;
  centerOfGravityLocus?: string;
}

export interface SpatialOutputModel {
  label: string;
  description: string;
}

export interface ResidualModel {
  description: string;
}

export interface StageNotationModel {
  id: string;
  axis: {
    lengthMeters: number;
    orientation: 'horizontal' | 'vertical';
    nodes: StageNode[];
    state: 'active' | 'blocked' | 'locked' | 'residual';
  };
  checkpoint: {
    distanceMeters: number | null;
    label: string;
  };
  performer: {
    axisDistanceMeters: number;
    orientation: 'toward-node-a' | 'toward-node-b';
    bodyImpulse: string;
    anatomicalLoci: string[];
    weightDistribution?: WeightDistribution;
  };
  objects: StageObject[];
  forces: ForceVectorModel[];
  pressureFields: PressureFieldModel[];
  spatialOutput: SpatialOutputModel;
  residuals: ResidualModel[];
  sourceState: {
    rawValue: string;
    featureType: string;
    resolutionStatus: string;
  };
  reviewStatus: string;
}
