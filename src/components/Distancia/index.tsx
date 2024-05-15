import React from 'react';
import { Container } from './style';

interface PropsDistancia{
  distance: string;
  km: string;
  travelTime: string;
  days: string;
}

export const Distancia: React.FC<PropsDistancia> = ({distance, km, travelTime, days}) => {
  return (
    <Container>
        <div className='distance'>
          <span>{distance}</span>
          <p>{km}</p>
        </div>
        <div className="distance">
          <span>{travelTime}</span>
          <p>{days}</p>
        </div>
    </Container>
  )
};
