import { Card, EmptyState } from 'patternfly-react';
import * as React from 'react';

export interface IVdbProps {
  name: string;
  description: string;
  icon: string;
}

export class VdbCard extends React.PureComponent<IVdbProps> {
  public render() {
    return (
      <Card matchHeight={true}>
        <Card.Body>
          <EmptyState>
            <div className="blank-slate-pf-icon">
              <img src={this.props.icon} alt={this.props.name} width={46} />
            </div>
            <EmptyState.Title>
              <span data-testid="vdb-card-title">{this.props.name}</span>
            </EmptyState.Title>
            <EmptyState.Info>{this.props.description}</EmptyState.Info>
          </EmptyState>
        </Card.Body>
      </Card>
    );
  }
}
