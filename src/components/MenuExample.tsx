import {Button, Menu, MenuItem, MenuTrigger, Popover, Separator} from 'react-aria-components';
import type {MenuItemProps} from 'react-aria-components';
import RailIcon from '@spectrum-icons/workflow/Rail';

export function MenuExample() {
  return (
    <div className="bg-gradient-to-r to-blue-500 from-violet-500 p-8 h-[250px] rounded-lg">
      <MenuTrigger>
        <Button
          aria-label="Menu"
          className="inline-flex items-center justify-center rounded-md bg-black bg-opacity-20 bg-clip-padding border border-white/20 px-3 py-2 text-white hover:bg-opacity-30 pressed:bg-opacity-40 transition-colors cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          <RailIcon size="S" />
        </Button>
        <Popover className="p-1 w-56 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 entering:animate-in entering:fade-in entering:zoom-in-95 exiting:animate-out exiting:fade-out exiting:zoom-out-95 fill-mode-forwards origin-top-left">
          <Menu className="outline-none">
            <ActionItem id="new">New…</ActionItem>
            <ActionItem id="open">Open…</ActionItem>
            <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
            <ActionItem id="save">Save</ActionItem>
            <ActionItem id="save-as">Save as…</ActionItem>
            <Separator className="bg-gray-300 h-[1px] mx-3 my-1" />
            <ActionItem id="print">Print…</ActionItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </div>
  );
}

function ActionItem(props: MenuItemProps) {
  return (
    <MenuItem
      {...props}
      className="group flex w-full items-center rounded-md px-3 py-2 box-border outline-none cursor-default text-gray-900 focus:bg-violet-500 focus:text-white"
    />
  );
}