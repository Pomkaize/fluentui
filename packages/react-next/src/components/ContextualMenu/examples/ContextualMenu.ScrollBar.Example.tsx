import * as React from 'react';
import { DirectionalHint } from '@fluentui/react-next/lib/ContextualMenu';
import { DefaultButton } from '@fluentui/react-next/lib/compat/Button';
import { useConst } from '@uifabric/react-hooks';

export const ContextualMenuWithScrollBarExample: React.FunctionComponent = () => {
  const menuProps = useConst(() => ({
    shouldFocusOnMount: true,
    directionalHint: DirectionalHint.bottomRightEdge,
    directionalHintFixed: true,
    items: [
      { key: 'newItem', text: 'New' },
      { key: 'item 2', text: 'Item with a very long label text' },
      { key: 'edit', text: 'Edit' },
      { key: 'properties', text: 'Properties' },
      { key: 'disabled', text: 'Disabled item', disabled: true },
    ],
    calloutProps: {
      calloutMaxHeight: 65,
    },
  }));

  return <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} />;
};
