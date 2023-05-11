import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";
import {Children, ReactNode} from "react";

interface Props {
  marginX?: number;
  marginY?: number;
  marginL?: number;
  marginR?: number;
  className?: ReactNode;
}

const ColorModeSwitch = ({marginX, marginY, marginL, marginR, className}: Props) => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="purple" className={className} marginX={marginX} marginY={marginY} margin-left={marginL} margin-right={marginR} isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text className={className} whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
