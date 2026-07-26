/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ObjectTaxonomy =
  | 'LINEAR_OBJECT'
  | 'SOLID_MASS_OBJECT'
  | 'TEXTURE_OBJECT'
  | 'GROUND_TEXTURE_OBJECT'
  | 'REGULATORY_OBJECT'
  | 'SEMANTIC_OBJECT'
  | 'MARKER_OBJECT';

export type SituationCategory =
  | 'SPATIAL_MATRIX'
  | 'MASS'
  | 'ELEVATION'
  | 'AUTHORITY'
  | 'SEMANTIC';

export type BodyImpulseType =
  | 'INJECTION'
  | 'ACCELERATION'
  | 'COMPRESSION'
  | 'ASYMMETRIC'
  | 'FREEZE'
  | 'GLITCH'
  | 'FIXATION'
  | 'CONSTANT';

export interface UrbanDataPoint {
  id: string; // e.g. DP.C1.1.1
  distance: number; // in meters (0 to 15)
  featureValue: string; // e.g. object--traffic-cone
  source: string; // e.g. Mapillary
  taxonomy: ObjectTaxonomy;
  situation: SituationCategory;
  situationDesc: string;
  impulse: BodyImpulseType;
  bodyAction: string;
  spatialOutput: string;
  bodyLocus: string;
  movementInstruction: string;
}

export interface IterationLoop {
  id: string;
  name: string;
  description: string;
  impulses: BodyImpulseType[];
  variableCount: number;
  lockingRule: string;
  outputResidue: string;
}
