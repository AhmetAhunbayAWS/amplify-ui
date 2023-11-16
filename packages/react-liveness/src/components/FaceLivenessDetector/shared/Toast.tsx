import * as React from 'react';
import { Flex, View, ViewProps, useTheme } from '@aws-amplify/ui-react';

import { LivenessClassNames } from '../types/classNames';

interface ToastProps extends ViewProps {
  variation?: 'default' | 'primary' | 'error';
  size?: 'medium' | 'large';
  heading?: string;
  isInitial?: boolean;
}

const toastStyle = {
  borderRadius: 'unset',
  fontSize: 'xxl',
  padding: '0 var(--amplify-space-xs)',
};

const maxWidthStyle = { base: '100%' };

export const Toast: React.FC<ToastProps> = ({
  variation = 'default',
  size = 'medium',
  children,
  isInitial = false,
  ...rest
}) => {
  const { tokens } = useTheme();
  return (
    <View
      className={`${LivenessClassNames.Toast} ${LivenessClassNames.Toast}--${variation} ${LivenessClassNames.Toast}--${size}`}
      maxWidth={maxWidthStyle}
      {...((variation === 'primary' || variation === 'error') && toastStyle)}
      {...(isInitial && { backgroundColor: tokens.colors.background.primary })}
      {...rest}
    >
      <Flex className={LivenessClassNames.ToastContainer}>
        <Flex
          className={LivenessClassNames.ToastMessage}
          {...(isInitial ? { color: tokens.colors.font.primary } : {})}
        >
          {children}
        </Flex>
      </Flex>
    </View>
  );
};
