import { SearchIcon } from "@chakra-ui/icons";
import { Center, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => {
  return (
    <Center>
      <InputGroup>
        <InputLeftElement
          top={4}
          color={"gray.300"}
          pointerEvents="none"
          children={<SearchIcon />}
        />
        <Input
          onChange={onChange}
          bg={"white"}
          w={{ base: 290, md: 400, lg: 600 }}
          my={4}
          placeholder="Search for recipe"
        />
      </InputGroup>
    </Center>
  );
};
