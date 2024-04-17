import * as React from 'react';
import { classNames } from '@aws-amplify/ui';
import * as Dropdown from '@radix-ui/react-dropdown-menu';

import { sanitizeNamespaceImport } from '@aws-amplify/ui';

import { ButtonGroup } from '../ButtonGroup';
import { ComponentClassName } from '@aws-amplify/ui';
import { IconMenu, useIcons } from '../Icon';
import { MenuButton } from './MenuButton';
import {
  BaseMenuProps,
  MenuProps,
  ForwardRefPrimitive,
  Primitive,
} from '../types';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef';

// Radix packages don't support ESM in Node, in some scenarios(e.g. SSR)
// We have to use namespace import and sanitize it to ensure the interoperablity between ESM and CJS
const { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } =
  sanitizeNamespaceImport(Dropdown);

export const MENU_TRIGGER_TEST_ID = 'amplify-menu-trigger-test-id';
export const MENU_ITEMS_GROUP_TEST_ID = 'amplify-menu-items-group-test-id';

const MenuPrimitive: Primitive<MenuProps, 'div'> = (
  {
    menuAlign = 'start',
    children,
    className,
    isOpen,
    size,
    trigger,
    triggerClassName,
    ariaLabel,
    onOpenChange,
    ...rest
  },
  ref
) => {
  const icons = useIcons('menu');

  const shouldBeDisabled =
    // This defaults to false if isDisabled and disabled are undefined
    // @ts-ignore: Property 'props' does not exist on type 'string'.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    trigger?.props?.isDisabled || trigger?.props?.disabled ? true : false;

  return (
    <DropdownMenu onOpenChange={onOpenChange} open={isOpen}>
      <DropdownMenuTrigger disabled={shouldBeDisabled} asChild>
        {trigger ?? (
          <MenuButton
            ariaLabel={ariaLabel}
            size={size}
            testId={MENU_TRIGGER_TEST_ID}
            className={classNames(
              ComponentClassName.MenuTrigger,
              triggerClassName
            )}
          >
            {icons?.menu ?? <IconMenu />}
          </MenuButton>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={menuAlign}
        className={ComponentClassName.MenuWrapper}
      >
        <ButtonGroup
          className={classNames(ComponentClassName.MenuContent, className)}
          ref={ref}
          size={size}
          testId={MENU_ITEMS_GROUP_TEST_ID}
          {...rest}
        >
          {children}
        </ButtonGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/menu)
 */
export const Menu: ForwardRefPrimitive<BaseMenuProps, 'div'> =
  primitiveWithForwardRef(MenuPrimitive);

Menu.displayName = 'Menu';
