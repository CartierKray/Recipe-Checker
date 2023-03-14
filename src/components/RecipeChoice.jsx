import {
  Box,
  Center,
  Button,
  Text,
  Flex,
  TagLeftIcon,
  Image,
  Tag,
} from "@chakra-ui/react";
import { ArrowLeftIcon, WarningIcon, InfoIcon } from "@chakra-ui/icons";
import { DivideLine } from "./ui/DivideLine";

export const RecipeChoice = ({ choice, onClick }) => {
  choice = { recept: choice };

  return (
    <Box>
      <Center flexDir="column" minHeight={"100vh"} bg={"#1F8BF9"}>
        <Box bg={"white"} minHeight={"100vh"} maxWidth={"75vw"}>
          <Button
            onClick={() => onClick()}
            bg={"blue.200"}
            margin={"10px"}
            _hover={{ bg: "blue.500", color: "white" }}
          >
            <TagLeftIcon as={ArrowLeftIcon} variant="ghost"></TagLeftIcon>
          </Button>

          <Image
            objectFit={"cover"}
            src={choice.recept.image}
            w={"75vw"}
            h={300}
          />

          <Flex flexDir={{ base: "column", md: "row" }}>
            <Flex
              flexDir={"column"}
              h="100%"
              align={{ base: "center", md: "normal" }}
              p={4}
              pb={{ base: 0, md: 4 }}
              w={{ base: "100%", md: "50%" }}
            >
              <Text fontSize={"26px"} fontWeight={"bold"}>
                {choice.recept.label}
              </Text>
              <Text
                color={"grey"}
                paddingTop={"5px"}
                fontSize={"11"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                {choice.recept.mealType} - {choice.recept.dishType}
              </Text>
              <Text
                color={"grey"}
                paddingTop={"5px"}
                fontSize={"11"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                Servings: {choice.recept.yield}
              </Text>
              <Text
                color={"grey"}
                paddingTop={"5px"}
                fontSize={"11"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                Cooking Time: {choice.recept.totalTime} minutes
              </Text>
              <Tag padding={"0"} pt={"4px"} bg={"transparent"}>
                {choice.recept.healthLabels
                  .filter(
                    (health) => health === "Vegetarian" || health === "Vegan"
                  )
                  .map((veg) => (
                    <Tag
                      textTransform={"uppercase"}
                      key={self.crypto.randomUUID()}
                      backgroundColor={"green.200"}
                      color={"green.700"}
                      fontSize={"10"}
                      gap={2}
                      margin={"0px"}
                    >
                      {veg}
                    </Tag>
                  ))}
              </Tag>
              <DivideLine />

              <Text pb={"5px"} fontWeight={"bold"}>
                Ingredients
              </Text>
              <Box fontSize={"small"} width={"400"}>
                {choice.recept.ingredientLines.map((ingredients) => (
                  <Text key={self.crypto.randomUUID()}>{ingredients}</Text>
                ))}
              </Box>
              <DivideLine />
              <Text pb={"5px"} fontWeight={"bold"}>
                Nutriens
              </Text>

              <DivideLine />
            </Flex>

            <Flex
              w={{ base: "100%", md: "50%" }}
              h="100%"
              align={{ base: "center", md: "normal" }}
              flexDir="column"
              p={4}
              pt={{ base: 0, md: 4 }}
            >
              <Text paddingTop={"10px"} fontWeight={"bold"}>
                Health
              </Text>
              <Flex
                padding={"5px"}
                gap={2}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                {choice.recept.healthLabels.map((veg) => (
                  <Tag
                    textTransform={"uppercase"}
                    key={self.crypto.randomUUID()}
                    backgroundColor={"aqua"}
                    color={"blue.700"}
                    fontSize={"10"}
                    gap={2}
                  >
                    {veg}
                  </Tag>
                ))}
              </Flex>
              <DivideLine />
              <Text paddingTop={"5px"} fontWeight={"bold"}>
                Diet
              </Text>
              <Flex
                padding={"5px"}
                gap={2}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                {choice.recept.dietLabels.map((diet) => (
                  <Tag
                    key={self.crypto.randomUUID()}
                    padding={"5px"}
                    maxWidth={250}
                    textTransform={"uppercase"}
                    background={"blue.200"}
                    color={"blue.700"}
                    fontSize={"10"}
                    alignSelf={"flex-start"}
                  >
                    <TagLeftIcon as={InfoIcon}></TagLeftIcon>
                    {diet}
                  </Tag>
                ))}
              </Flex>
              <DivideLine />
              <Text fontWeight={"bold"}>Cautions</Text>
              <Flex
                padding={"5px"}
                gap={2}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                {choice.recept.cautions.map((caution) => (
                  <Tag
                    textAlign={"center"}
                    key={self.crypto.randomUUID()}
                    label={caution}
                    padding={"5px"}
                    maxWidth={250}
                    color={"pink.600"}
                    fontSize={"10"}
                    textTransform={"uppercase"}
                    backgroundColor={"pink.100"}
                    fontWeight={"medium"}
                  >
                    <TagLeftIcon as={WarningIcon}></TagLeftIcon>
                    {caution}
                  </Tag>
                ))}
                <DivideLine />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};
