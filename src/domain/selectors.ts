import {
  ProtoPathDatabase,
  NotationPair,
  SourceFeature,
  DataProvocation,
  Situation,
  BodyImpulse,
  SpatialOutput,
  DiagramAsset,
} from './types';

export function getPairById(
  db: ProtoPathDatabase,
  pairId: string
): NotationPair | undefined {
  return db.notationPairs.find((p) => p.id === pairId);
}

export function getSourceFeaturesForPair(
  db: ProtoPathDatabase,
  pairId: string
): SourceFeature[] {
  const pair = getPairById(db, pairId);
  if (!pair) return [];
  return db.sourceFeatures.filter((sf) => pair.sourceFeatureIds.includes(sf.id));
}

export function getDataProvocationsForPair(
  db: ProtoPathDatabase,
  pairId: string
): DataProvocation[] {
  const pair = getPairById(db, pairId);
  if (!pair) return [];
  return db.dataProvocations.filter((dp) =>
    pair.dataProvocationIds.includes(dp.id)
  );
}

export function getSituationsForPair(
  db: ProtoPathDatabase,
  pairId: string
): Situation[] {
  const pair = getPairById(db, pairId);
  if (!pair) return [];
  return db.situations.filter((st) => pair.situationIds.includes(st.id));
}

export function getBodyImpulsesForPair(
  db: ProtoPathDatabase,
  pairId: string
): BodyImpulse[] {
  const pair = getPairById(db, pairId);
  if (!pair) return [];
  return db.bodyImpulses.filter((bi) => pair.bodyImpulseIds.includes(bi.id));
}

export function getSpatialOutputsForPair(
  db: ProtoPathDatabase,
  pairId: string
): SpatialOutput[] {
  const pair = getPairById(db, pairId);
  if (!pair) return [];
  return db.spatialOutputs.filter((so) => pair.spatialOutputIds.includes(so.id));
}

export function getDiagramForPair(
  db: ProtoPathDatabase,
  pairId: string
): DiagramAsset | undefined {
  const pair = getPairById(db, pairId);
  if (!pair || !pair.diagramAssetId) return undefined;
  return db.diagramAssets.find((da) => da.id === pair.diagramAssetId);
}

export function getPreviousPair(
  db: ProtoPathDatabase,
  pairId: string
): NotationPair | undefined {
  const pair = getPairById(db, pairId);
  if (!pair || !pair.previousPairId) return undefined;
  return getPairById(db, pair.previousPairId);
}

export function getNextPair(
  db: ProtoPathDatabase,
  pairId: string
): NotationPair | undefined {
  const pair = getPairById(db, pairId);
  if (!pair || !pair.nextPairId) return undefined;
  return getPairById(db, pair.nextPairId);
}

export function getPairsSharingSourceFeature(
  db: ProtoPathDatabase,
  sourceFeatureId: string
): NotationPair[] {
  return db.notationPairs.filter((p) =>
    p.sourceFeatureIds.includes(sourceFeatureId)
  );
}

export function getLineagePath(
  db: ProtoPathDatabase,
  entityId: string
): string[] {
  const visited = new Set<string>();
  const queue = [entityId];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.has(current)) continue;
    visited.add(current);

    // Outgoing edges
    const outgoing = db.lineageEdges.filter((e) => e.fromId === current);
    outgoing.forEach((e) => queue.push(e.toId));

    // Incoming edges
    const incoming = db.lineageEdges.filter((e) => e.toId === current);
    incoming.forEach((e) => queue.push(e.fromId));
  }

  return Array.from(visited);
}
