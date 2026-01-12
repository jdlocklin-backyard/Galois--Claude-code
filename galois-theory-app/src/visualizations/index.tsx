import { PolynomialRootsVisualization } from './PolynomialRoots';
import { FieldExtensionVisualization } from './FieldExtension';
import { SymmetryGroupVisualization } from './SymmetryGroup';
import { GaloisCorrespondenceVisualization } from './GaloisCorrespondence';
import { SolvabilityVisualization } from './Solvability';

type VisualType =
  | 'polynomial-roots'
  | 'field-extension'
  | 'symmetry-group'
  | 'galois-correspondence'
  | 'solvability';

interface VisualizationProps {
  type: VisualType;
}

export function Visualization({ type }: VisualizationProps) {
  switch (type) {
    case 'polynomial-roots':
      return <PolynomialRootsVisualization />;
    case 'field-extension':
      return <FieldExtensionVisualization />;
    case 'symmetry-group':
      return <SymmetryGroupVisualization />;
    case 'galois-correspondence':
      return <GaloisCorrespondenceVisualization />;
    case 'solvability':
      return <SolvabilityVisualization />;
    default:
      return null;
  }
}
