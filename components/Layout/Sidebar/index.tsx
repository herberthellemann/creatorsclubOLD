import { SidebarContainer, TopWrapper, MenuList } from "./Sidebar.styles";
import MenuItem from "../MenuItem";
import Button from "../../Control/Button";
import Logo from "../../Logo";
import { MENU_ITEMS } from "../../../constants/menu-items";

const settings = MENU_ITEMS.find((item) => item.name.includes("Settings"));

function Sidebar() {
  return (
    <SidebarContainer>
      <TopWrapper>
        <Logo />
        <Button title="New Task" fullWidth={true} />
        <MenuList>
          {MENU_ITEMS.filter((item) => item.name !== "Settings").map(
            (item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                icon={item.icon}
                url={item.url}
              />
            )
          )}
        </MenuList>
      </TopWrapper>
      {/* Here we will add the user */}
      <MenuItem
        name={settings!.name}
        icon={settings!.icon}
        url={settings!.url}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
