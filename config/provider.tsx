import { PropsWithChildren, createContext, useMemo } from 'react';

import { getConfig, ConfigType } from './get-config';
import { useUserConfigContext, UserConfigContextType } from './user-config';

type ConfigProviderType = {
  config: ConfigType;
  userConfig: UserConfigContextType;
};

export const ConfigContext = createContext<ConfigProviderType | null>(null);

export const ConfigProvider = ({ children }: PropsWithChildren) => {
  const userConfigContextValue = useUserConfigContext();

  const contextValue = useMemo(
    () => ({
      config: getConfig(),
      userConfig: userConfigContextValue,
    }),
    [userConfigContextValue],
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};
