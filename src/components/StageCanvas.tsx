/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UrbanDataPoint, BodyImpulseType } from '../types';
import { SAMPLE_DATA } from '../data';
import { 
  HelpCircle, 
  MapPin, 
  ArrowRight, 
  AlertTriangle, 
  Layers, 
  Eye, 
  Slash, 
  Square, 
  Circle,
  TrendingUp,
  Fingerprint
} from 'lucide-react';

interface StageCanvasProps {
  currentDistance: number;
  activePoint: UrbanDataPoint | null;
  selectedPointId: string | null;
  onPointClick: (point: UrbanDataPoint) => void;
  isPlaying: boolean;
  trailHistory: number[];
}

export const StageCanvas: React.FC<StageCanvasProps> = ({
  currentDistance,
  activePoint,
  selectedPointId,
  onPointClick,
  isPlaying,
  trailHistory,
}) => {
  // SVG size configuration
  const width = 1000;
  const height = 400;
  const paddingX = 100;
  const axisY = 220;

  // Convert distance in meters to X coordinate
  const getX = (meters: number) => {
    return paddingX + (meters / 15) * (width - 2 * paddingX);
  };

  const nodeAX = getX(0);
  const nodeBX = getX(15);
  const nodeCX = (nodeAX + nodeBX) / 2; // Midpoint
  const nodeCY = 330; // Branch node below the main axis

  // Current performer X position
  const performerX = getX(currentDistance);

  // Active impulse type
  const activeImpulse: BodyImpulseType = activePoint?.impulse || 'CONSTANT';

  // Get SVG icon based on object taxonomy
  const getTaxonomyIcon = (taxonomy: string) => {
    switch (taxonomy) {
      case 'MARKER_OBJECT':
        return <Square className="w-4 h-4" />;
      case 'SOLID_MASS_OBJECT':
        return <Layers className="w-4 h-4" />;
      case 'TEXTURE_OBJECT':
        return <Slash className="w-4 h-4" />;
      case 'GROUND_TEXTURE_OBJECT':
        return <Circle className="w-4 h-4" />;
      case 'REGULATORY_OBJECT':
        return <AlertTriangle className="w-4 h-4" />;
      case 'SEMANTIC_OBJECT':
        return <Eye className="w-4 h-4" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  // Skeletal configuration based on current impulse
  const posture = useMemo(() => {
    const defaultPosture = {
      headX: 0,
      headY: -55,
      torsoAngle: 0,
      shoulderWidth: 14,
      elbowWidth: 20,
      leftFootY: 0,
      rightFootY: 0,
      hipWidth: 10,
      gazeX: null as number | null,
      gazeY: null as number | null,
      jitterX: 0,
      jitterY: 0,
    };

    switch (activeImpulse) {
      case 'INJECTION':
        return {
          ...defaultPosture,
          shoulderWidth: 12,
          elbowWidth: 16,
        };

      case 'ACCELERATION':
        return {
          ...defaultPosture,
          torsoAngle: 15, // Lean forward
          headX: 8,
          headY: -53,
          shoulderWidth: 14,
          elbowWidth: 24,
        };

      case 'COMPRESSION':
        return {
          ...defaultPosture,
          shoulderWidth: 4, // Narrowed shoulders
          elbowWidth: 6, // Elbows pressed in
          torsoAngle: -2, // Rigid, tucked posture
        };

      case 'ASYMMETRIC':
        return {
          ...defaultPosture,
          torsoAngle: -8, // Sideways tilt
          leftFootY: -5,  // One foot lifted/slip
          rightFootY: 0,
          shoulderWidth: 14,
        };

      case 'FREEZE':
        return {
          ...defaultPosture,
          torsoAngle: 0,
          shoulderWidth: 15,
          elbowWidth: 22,
          // Locked joints notation
        };

      case 'GLITCH': {
        // rapid tremble offset generator
        const jX = (Math.random() - 0.5) * 3;
        const jY = (Math.random() - 0.5) * 3;
        return {
          ...defaultPosture,
          jitterX: jX,
          jitterY: jY,
          shoulderWidth: 12 + (Math.random() - 0.5) * 2,
          elbowWidth: 18 + (Math.random() - 0.5) * 2,
        };
      }

      case 'FIXATION': {
        // Gaze line coordinates leading to semantic sign (advertisement at 12.45m, Y = 100)
        const adX = getX(12.45);
        const adY = 100;
        return {
          ...defaultPosture,
          headX: 10, // Tilts toward ad
          headY: -52,
          gazeX: adX,
          gazeY: adY,
          torsoAngle: 5,
        };
      }

      case 'CONSTANT':
      default:
        return defaultPosture;
    }
  }, [activeImpulse, currentDistance]);

  return (
    <div className="w-full h-full relative bg-brand-card overflow-hidden select-none">
      {/* Dynamic Background Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#141414 1.2px, transparent 1.2px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* SVG Canvas Content */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${width} ${height}`} 
        preserveAspectRatio="xMidYMid meet"
        className="relative z-10"
      >
        {/* Stage Grid Reference Lines */}
        <line x1={paddingX} y1={50} x2={paddingX} y2={350} stroke="#EBEBE6" strokeDasharray="3,3" />
        <line x1={width - paddingX} y1={50} x2={width - paddingX} y2={350} stroke="#EBEBE6" strokeDasharray="3,3" />
        
        {/* Node C vertical branch layout */}
        {selectedPointId && (
          <path
            d={`M ${nodeAX} ${axisY} L ${nodeCX} ${nodeCY} L ${nodeBX} ${axisY}`}
            fill="none"
            stroke="#EBEBE6"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        )}

        {/* --- ROPE / LINEAR OBJECT --- */}
        {/* The rope starts slack (bezier curved down) and becomes taut (straight line) */}
        {isPlaying ? (
          <line
            x1={nodeAX}
            y1={axisY - 10}
            x2={nodeBX}
            y2={axisY - 10}
            stroke="#141414"
            strokeWidth="2"
            className="transition-all duration-300"
          />
        ) : (
          <path
            d={`M ${nodeAX} ${axisY - 10} Q ${(nodeAX + nodeBX) / 2} ${axisY + 15} ${nodeBX} ${axisY - 10}`}
            fill="none"
            stroke="#141414"
            strokeWidth="1.5"
            strokeDasharray="4,2"
          />
        )}

        {/* MAIN LINEAR AXIS 15M */}
        <line
          x1={nodeAX}
          y1={axisY}
          x2={nodeBX}
          y2={axisY}
          stroke="#141414"
          strokeWidth="1.5"
        />

        {/* Ruler ticks and meters bottom reference */}
        {SAMPLE_DATA.map((pt) => {
          const x = getX(pt.distance);
          const isSelected = selectedPointId === pt.id;
          const isActive = activePoint?.id === pt.id;

          return (
            <g key={pt.id} className="cursor-pointer" onClick={() => onPointClick(pt)}>
              {/* Vertical technical projection line */}
              <line
                x1={x}
                y1={axisY - 40}
                x2={x}
                y2={axisY + 30}
                stroke={isSelected ? '#141414' : isActive ? '#525252' : '#EBEBE6'}
                strokeWidth={isSelected ? '1.5' : '1'}
                strokeDasharray={isSelected ? 'none' : '2,2'}
              />

              {/* Small marker tick */}
              <circle
                cx={x}
                cy={axisY}
                r={isSelected ? 4 : isActive ? 3 : 2}
                fill={isSelected ? '#141414' : isActive ? '#141414' : '#FAF9F6'}
                stroke="#141414"
                strokeWidth="1.5"
                className="transition-all duration-200"
              />
            </g>
          );
        })}

        {/* --- STAGE OBJECTS DRAWINGS --- */}
        {SAMPLE_DATA.map((pt) => {
          const x = getX(pt.distance);
          const isSelected = selectedPointId === pt.id;
          const isActive = activePoint?.id === pt.id;
          const strokeColor = isSelected ? '#141414' : isActive ? '#2563eb' : '#a3a39c';
          const fillMode = isSelected ? '#141414' : 'none';

          // Render appropriate geometry according to Object Taxonomy
          switch (pt.taxonomy) {
            case 'SOLID_MASS_OBJECT':
              if (pt.featureValue.includes('utility-pole')) {
                // Tall pole structure
                return (
                  <g key={`obj-${pt.id}`} className="cursor-pointer" onClick={() => onPointClick(pt)}>
                    {/* Double pole lines */}
                    <line x1={x - 3} y1={90} x2={x - 3} y2={axisY} stroke={strokeColor} strokeWidth="1" />
                    <line x1={x + 3} y1={90} x2={x + 3} y2={axisY} stroke={strokeColor} strokeWidth="1" />
                    {/* Cross bar */}
                    <line x1={x - 12} y1={105} x2={x + 12} y2={105} stroke={strokeColor} strokeWidth="1.5" />
                    <line x1={x - 8} y1={115} x2={x + 8} y2={115} stroke={strokeColor} strokeWidth="1" />
                    {/* Transformer Box */}
                    <rect x={x - 6} y={125} width={12} height={18} fill="white" stroke={strokeColor} strokeWidth="1.2" />
                    {/* Pulse overlay if active */}
                    {isActive && (
                      <circle cx={x} cy={135} r={16} stroke="black" strokeWidth="0.5" fill="none" strokeDasharray="2,2" className="animate-ping" />
                    )}
                  </g>
                );
              } else {
                // Low traffic cone obstacles
                const scaleY = isActive ? 1.3 : 1.0;
                return (
                  <g key={`obj-${pt.id}`} className="cursor-pointer" onClick={() => onPointClick(pt)}>
                    <path
                      d={`M ${x - 8} ${axisY} L ${x - 3} ${axisY - 20 * scaleY} L ${x + 3} ${axisY - 20 * scaleY} L ${x + 8} ${axisY} Z`}
                      fill={fillMode}
                      stroke={strokeColor}
                      strokeWidth="1.5"
                    />
                    <line x1={x - 5} y1={axisY - 10} x2={x + 5} y2={axisY - 10} stroke={strokeColor} strokeWidth="1" />
                    {isActive && (
                      <rect x={x - 12} y={axisY - 25} width={24} height={30} stroke="black" strokeWidth="0.5" fill="none" strokeDasharray="3,1" className="animate-pulse" />
                    )}
                  </g>
                );
              }

            case 'TEXTURE_OBJECT':
              // Flat driveway strip
              return (
                <g key={`obj-${pt.id}`} className="cursor-pointer" onClick={() => onPointClick(pt)}>
                  <rect
                    x={x - 15}
                    y={axisY + 5}
                    width={30}
                    height={10}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  {/* Diagonal slash indicators */}
                  <line x1={x - 10} y1={axisY + 15} x2={x - 5} y2={axisY + 5} stroke={strokeColor} strokeWidth="1" />
                  <line x1={x} y1={axisY + 15} x2={x + 5} y2={axisY + 5} stroke={strokeColor} strokeWidth="1" />
                  <line x1={x + 10} y1={axisY + 15} x2={x + 15} y2={axisY + 5} stroke={strokeColor} strokeWidth="1" />
                </g>
              );

            case 'GROUND_TEXTURE_OBJECT':
              // Manhole round plate
              return (
                <g key={`obj-${pt.id}`} className="cursor-pointer" onClick={() => onPointClick(pt)}>
                  <ellipse
                    cx={x}
                    cy={axisY + 8}
                    rx={12}
                    ry={5}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                  />
                  {/* Grid lines inside manhole */}
                  <line x1={x - 8} y1={axisY + 8} x2={x + 8} y2={axisY + 8} stroke={strokeColor} strokeWidth="1" />
                  <line x1={x} y1={axisY + 4} x2={x} y2={axisY + 12} stroke={strokeColor} strokeWidth="1" />
                </g>
              );

            case 'REGULATORY_OBJECT':
              // Prohibition signpost
              return (
                <g key={`obj-${pt.id}`} className="cursor-pointer" onClick={() => onPointClick(pt)}>
                  {/* Sign pole */}
                  <line x1={x} y1={120} x2={x} y2={axisY} stroke={strokeColor} strokeWidth="1.2" />
                  {/* Diamond Sign container */}
                  <rect
                    x={x - 10}
                    y={100}
                    width={20}
                    height={20}
                    transform={`rotate(45 ${x} 110)`}
                    fill="white"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                  />
                  {/* Slash inside sign */}
                  <line x1={x - 6} y1={116} x2={x + 6} y2={104} stroke="black" strokeWidth="1.5" />
                  {/* Warning pulse if active */}
                  {isActive && (
                    <circle
                      cx={x}
                      cy={110}
                      r={18}
                      fill="none"
                      stroke="black"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      className="animate-spin"
                    />
                  )}
                </g>
              );

            case 'SEMANTIC_OBJECT':
              // Advertisement board
              return (
                <g key={`obj-${pt.id}`} className="cursor-pointer" onClick={() => onPointClick(pt)}>
                  {/* Billboard frame */}
                  <line x1={x - 15} y1={70} x2={x - 15} y2={axisY} stroke={strokeColor} strokeWidth="0.8" />
                  <line x1={x + 15} y1={70} x2={x + 15} y2={axisY} stroke={strokeColor} strokeWidth="0.8" />
                  <rect
                    x={x - 22}
                    y={70}
                    width={44}
                    height={26}
                    fill="white"
                    stroke={strokeColor}
                    strokeWidth="1.5"
                  />
                  {/* Advertisement code text */}
                  <text
                    x={x}
                    y={82}
                    fontFamily="monospace"
                    fontSize="7"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill={strokeColor}
                  >
                    [AD_NOISE]
                  </text>
                  <text
                    x={x}
                    y={92}
                    fontFamily="monospace"
                    fontSize="6"
                    textAnchor="middle"
                    fill={strokeColor}
                  >
                    BUY_BUY_BUY
                  </text>
                </g>
              );

            case 'MARKER_OBJECT':
            default:
              return null;
          }
        })}

        {/* --- NODE LABELS (A, B, C) --- */}
        {/* Node A */}
        <g transform={`translate(${nodeAX}, ${axisY})`}>
          <rect x="-18" y="15" width="36" height="15" fill="#141414" />
          <text x="0" y="26" fill="#FAF9F6" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">
            NODE A
          </text>
          <text x="0" y="-12" fill="#141414" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">
            0.00m
          </text>
        </g>

        {/* Node B */}
        <g transform={`translate(${nodeBX}, ${axisY})`}>
          <rect x="-18" y="15" width="36" height="15" fill="#141414" />
          <text x="0" y="26" fill="#FAF9F6" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">
            NODE B
          </text>
          <text x="0" y="-12" fill="#141414" fontFamily="monospace" fontSize="9" fontWeight="bold" textAnchor="middle">
            15.00m
          </text>
        </g>

        {/* Optional branch Node C */}
        <g transform={`translate(${nodeCX}, ${nodeCY})`}>
          <rect x="-18" y="10" width="36" height="15" fill="none" stroke="#141414" strokeWidth="1" />
          <text x="0" y="21" fill="#141414" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">
            NODE C
          </text>
          <text x="0" y="-2" fill="#737373" fontFamily="monospace" fontSize="8" textAnchor="middle">
            [ITERATE]
          </text>
          <circle cx="0" cy="0" r="3" fill="none" stroke="#141414" strokeWidth="1" />
        </g>

        {/* --- SENSORY GAZE LINE (Fixation) --- */}
        {activeImpulse === 'FIXATION' && posture.gazeX && posture.gazeY && (
          <line
            x1={performerX + posture.headX + posture.jitterX}
            y1={axisY - 10 + posture.headY + posture.jitterY}
            x2={posture.gazeX}
            y2={posture.gazeY}
            stroke="#141414"
            strokeWidth="1"
            strokeDasharray="2,2"
            className="animate-pulse"
          />
        )}

        {/* --- MOTION TRAILS (For Acceleration Mode) --- */}
        {activeImpulse === 'ACCELERATION' && trailHistory.map((prevDist, index) => {
          const trailX = getX(prevDist);
          const opacity = (index + 1) / (trailHistory.length + 1) * 0.25;
          return (
            <g key={`trail-${index}`} transform={`translate(${trailX}, ${axisY - 10})`} opacity={opacity}>
              {/* Minimal Ghost Skeleton */}
              <circle cx={4} cy={posture.headY} r="4" fill="none" stroke="black" strokeWidth="0.8" />
              <line x1="0" y1={posture.headY + 4} x2="0" y2="0" stroke="black" strokeWidth="0.8" />
              <line x1="-6" y1={posture.headY + 12} x2="6" y2={posture.headY + 12} stroke="black" strokeWidth="0.8" />
              <line x1="0" y1="0" x2="-5" y2="10" stroke="black" strokeWidth="0.8" />
              <line x1="0" y1="0" x2="5" y2="10" stroke="black" strokeWidth="0.8" />
            </g>
          );
        })}

        {/* --- PERFORMER / BODY CURSOR FIGURE (SKELETAL DESIGN) --- */}
        <g transform={`translate(${performerX + posture.jitterX}, ${axisY - 10 + posture.jitterY})`}>
          
          {/* Subtle posturing indicators (technical angle labels) */}
          {activeImpulse !== 'CONSTANT' && (
            <g transform="translate(25, -55)">
              <rect x="-5" y="-10" width="85" height="14" fill="white" stroke="black" strokeWidth="0.5" />
              <text x="0" y="0" fontFamily="monospace" fontSize="7" fill="black">
                {`IMPULSE: [${activeImpulse}]`}
              </text>
            </g>
          )}

          {/* Locked-axis grid notation indicator if FREEZE */}
          {activeImpulse === 'FREEZE' && (
            <g>
              <circle cx="0" cy={posture.headY + 15} r="25" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="3,1" />
              <circle cx="0" cy={posture.headY + 15} r="35" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="1,2" />
              <line x1="-40" y1={posture.headY + 15} x2="40" y2={posture.headY + 15} stroke="black" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1={posture.headY - 25} x2="0" y2={posture.headY + 55} stroke="black" strokeWidth="0.5" strokeDasharray="2,2" />
            </g>
          )}

          {/* HEAD */}
          <circle 
            cx={posture.headX} 
            cy={posture.headY} 
            r="8" 
            fill={activeImpulse === 'FREEZE' ? 'black' : 'white'} 
            stroke="black" 
            strokeWidth="1.8" 
          />
          {/* Gaze eye dot for fixation */}
          {activeImpulse === 'FIXATION' && (
            <circle cx={posture.headX + 4} cy={posture.headY - 2} r="1.5" fill="black" />
          )}

          {/* SPINE / TORSO */}
          {/* We pivot torso based on lean angle */}
          <line 
            x1={posture.headX} 
            y1={posture.headY + 8} 
            x2="0" 
            y2="-15" 
            stroke="black" 
            strokeWidth="2" 
          />

          {/* SHOULDERS */}
          <line 
            x1={posture.headX - posture.shoulderWidth} 
            y1={posture.headY + 12} 
            x2={posture.headX + posture.shoulderWidth} 
            y2={posture.headY + 12} 
            stroke="black" 
            strokeWidth="1.5" 
          />

          {/* ARMS */}
          {/* Left Arm (Reach to rope) */}
          <line 
            x1={posture.headX - posture.shoulderWidth} 
            y1={posture.headY + 12} 
            x2={posture.headX - posture.elbowWidth} 
            y2={posture.headY + 28} 
            stroke="black" 
            strokeWidth="1.2" 
          />
          <line 
            x1={posture.headX - posture.elbowWidth} 
            y1={posture.headY + 28} 
            x2="-5" 
            y2="0" // Contacting the main axis line
            stroke="black" 
            strokeWidth="1.2" 
          />

          {/* Right Arm */}
          <line 
            x1={posture.headX + posture.shoulderWidth} 
            y1={posture.headY + 12} 
            x2={posture.headX + posture.elbowWidth} 
            y2={posture.headY + 28} 
            stroke="black" 
            strokeWidth="1.2" 
          />
          <line 
            x1={posture.headX + posture.elbowWidth} 
            y1={posture.headY + 28} 
            x2="5" 
            y2="0" 
            stroke="black" 
            strokeWidth="1.2" 
          />

          {/* Joint markers for high-tech score look */}
          <circle cx={posture.headX - posture.shoulderWidth} cy={posture.headY + 12} r="2" fill="#141414" />
          <circle cx={posture.headX + posture.shoulderWidth} cy={posture.headY + 12} r="2" fill="#141414" />
          <circle cx={posture.headX - posture.elbowWidth} cy={posture.headY + 28} r="1.5" fill="#141414" />
          <circle cx={posture.headX + posture.elbowWidth} cy={posture.headY + 28} r="1.5" fill="#141414" />

          {/* HIPS */}
          <line x1="-5" y1="-15" x2="5" y2="-15" stroke="#141414" strokeWidth="1.8" />

          {/* LEGS */}
          {/* Left Leg */}
          <line 
            x1="-5" 
            y1="-15" 
            x2="-8" 
            y2="-3" 
            stroke="#141414" 
            strokeWidth="1.5" 
          />
          <line 
            x1="-8" 
            y1="-3" 
            x2="-10" 
            y2={posture.leftFootY} 
            stroke="#141414" 
            strokeWidth="1.5" 
          />
          {/* Left Foot contact line */}
          <line x1="-14" y1={posture.leftFootY} x2="-8" y2={posture.leftFootY} stroke="#141414" strokeWidth="2" />

          {/* Right Leg */}
          <line 
            x1="5" 
            y1="-15" 
            x2="7" 
            y2="-3" 
            stroke="#141414" 
            strokeWidth="1.5" 
          />
          <line 
            x1="7" 
            y1="-3" 
            x2="9" 
            y2={posture.rightFootY} 
            stroke="#141414" 
            strokeWidth="1.5" 
          />
          {/* Right Foot contact line */}
          <line x1="6" y1={posture.rightFootY} x2="12" y2={posture.rightFootY} stroke="#141414" strokeWidth="2" />

          {/* Active floating indicator node */}
          <circle cx="0" cy={posture.headY - 14} r="3" fill="#141414" className="animate-bounce" />
        </g>

        {/* --- FLOATING IMPULSE LABEL --- */}
        <g transform={`translate(${performerX}, ${axisY - 10 + posture.headY - 24})`}>
          <rect x="-50" y="-12" width="100" height="15" fill="#141414" />
          <text x="0" y="-1" fill="#FAF9F6" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">
            {`[${activeImpulse}]`}
          </text>
        </g>

        {/* --- TIMELINE/RULER BELOW AXIS --- */}
        <g transform={`translate(0, ${axisY + 45})`}>
          {/* Main ruler line */}
          <line x1={nodeAX} y1="0" x2={nodeBX} y2="0" stroke="#141414" strokeWidth="1" />
          
          {/* Distance Ticks */}
          {SAMPLE_DATA.map((pt) => {
            const x = getX(pt.distance);
            const isSelected = selectedPointId === pt.id;
            const isActive = activePoint?.id === pt.id;

            return (
              <g key={`tick-${pt.id}`} transform={`translate(${x}, 0)`}>
                {/* Major/Minor ticks */}
                <line x1="0" y1="0" x2="0" y2="8" stroke="#141414" strokeWidth="1" />
                {/* Monospace Distance Label */}
                <text 
                  x="0" 
                  y="20" 
                  fontFamily="monospace" 
                  fontSize="8" 
                  textAnchor="middle" 
                  fill={isSelected ? '#141414' : isActive ? '#141414' : '#737373'}
                  fontWeight={isSelected ? 'bold' : 'normal'}
                >
                  {`${pt.distance}m`}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Interactive Helper Overlay in Bottom Right Corner */}
      <div className="absolute bottom-2 right-2 flex items-center gap-1 font-mono text-[9px] text-brand-dark/40 bg-brand-card/90 px-1.5 py-0.5 border border-brand-dark/15 z-20">
        <Fingerprint className="w-2.5 h-2.5" />
        <span>STAGE SCORE ENGINES ACTIVE</span>
      </div>
    </div>
  );
};
