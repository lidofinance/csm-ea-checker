import { FC } from 'react';

import { SwitchItem } from './switch-item';
import { SwitchWrapper, Handle } from './styles';
import { SwitchProps } from './types';

export const Switch: FC<SwitchProps> = ({ active, routes }) => {
  return (
    <SwitchWrapper $count={routes.length}>
      <Handle $active={active} />
      {routes.map((route) => (
        <SwitchItem key={route.name} href={route.path}>
          {route.name}
        </SwitchItem>
      ))}
    </SwitchWrapper>
  );
};
