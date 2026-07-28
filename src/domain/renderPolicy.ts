import { NotationPair, NotationRenderPolicy, BodyVisualAsset, FullBoardAsset, ProtoPathDatabase } from './types';

// Registry of known Full Board assets
export const FULL_BOARD_REGISTRY: Record<string, FullBoardAsset> = {
  'st-c1-3-1__rt-c1-3-1': {
    id: 'board-freeze-st-c1-3-1',
    src: '/assets/diagrams/st-c1-3-1__rt-c1-3-1.png',
    pairOrUnitId: 'pair-c1-3-1',
    claimedCodes: ['ST.C1.3.1', 'RT.C1.3.1'],
    width: 2560,
    height: 1440,
    alt: 'PROTO PATH ARCHITECTURAL STAGE NOTATION - FREEZE RESPONSE',
    reviewStatus: 'compatible-pending-review',
    mismatchNotes: []
  },
  'st-c1-3-2__rt-c1-3-2': {
    id: 'board-glitch-st-c1-3-2',
    src: '/assets/diagrams/st-c1-3-2__rt-c1-3-2.png',
    pairOrUnitId: 'pair-c1-3-2',
    claimedCodes: ['ST.C1.3.2', 'RT.C1.3.2'],
    width: 2560,
    height: 1440,
    alt: 'PROTO PATH ARCHITECTURAL STAGE NOTATION - GLITCH RESPONSE',
    reviewStatus: 'content-mismatch-review-required',
    mismatchNotes: ['Indicates WRIST + SHOULDER TREMOR LOOP which may not align strictly with current canonical locus mappings for this unit']
  }
};

// Currently no reviewed/cut body assets are available
export const BODY_ASSET_REGISTRY: Record<string, BodyVisualAsset> = {};

export function getRenderPolicy(pair: NotationPair, db: ProtoPathDatabase): NotationRenderPolicy {
  // Check if a full board asset exists for this pair
  const fullBoardAsset = Object.values(FULL_BOARD_REGISTRY).find(
    asset => asset.pairOrUnitId === pair.id
  );

  const bodyImpulses = pair.bodyImpulseIds.map(id => db.bodyImpulses.find(bi => bi.id === id)).filter(Boolean);
  
  // Determine if complex anatomical overlay is needed based on body impulse tokens
  const isComplex = bodyImpulses.some(bi => 
    bi && ['FREEZE', 'GLITCH', 'COMPRESSION', 'ASYMMETRIC', 'FIXATION'].includes(bi.impulse)
  );

  let preferredMode: 'simple-svg' | 'hybrid' | 'full-image' = isComplex ? 'hybrid' : 'simple-svg';
  const supportedModes: ('simple-svg' | 'hybrid' | 'full-image')[] = ['simple-svg'];

  if (isComplex) {
    supportedModes.push('hybrid');
  }
  
  if (fullBoardAsset) {
    supportedModes.push('full-image');
  }

  return {
    preferredMode,
    supportedModes,
    bodyAssetRequired: isComplex,
    fullBoardAssetId: fullBoardAsset ? fullBoardAsset.id : null,
    fallbackMode: 'simple-svg',
    visualComplexity: isComplex ? 'complex' : 'simple',
    reviewStatus: fullBoardAsset ? fullBoardAsset.reviewStatus : 'missing'
  };
}
