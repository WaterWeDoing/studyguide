import {HStack, GridItem} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <GridItem area="nav">
        <HStack marginX={10} justifyContent="space-between">
          <Link className={"NavBarStyles"} to="/Welcome">
            Home
          </Link>
          <Link className={"NavBarStyles"} to="/Strings">
            Strings
          </Link>
          <Link className={"NavBarStyles"} to="/Integers">
            Integers
          </Link>
          <Link className={"NavBarStyles"} to="/Loops">
            Loops
          </Link>
          <Link className={"NavBarStyles"} to="/Sql">
            SQL
          </Link>
          <ColorModeSwitch className="ColorModeSwitchStyle" />
        </HStack>
      </GridItem>
    </>
  );
};

export default NavBar;
