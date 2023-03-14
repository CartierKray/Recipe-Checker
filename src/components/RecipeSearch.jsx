import { InfoIcon, WarningIcon } from "@chakra-ui/icons";
import { Box, Image, Text, Tag, Flex, TagLeftIcon } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ onClick }) => {
  const recipes = data.hits;

  const [search, setSearch] = useState("");

  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const recepten = recipe
    .filter((recept) => {
      return search.toLowerCase() === ""
        ? recept
        : recept.label.toLowerCase().includes(search);
    })
    .map((recept) => (
      <Box
        _hover={{ bg: "yellow.50" }}
        key={recept.id}
        maxW={250}
        bg={"white"}
        borderRadius={"20px"}
        objectFit={"cover"}
        alignItems={"center"}
        onClick={() => onClick(recept)}
      >
        <Image
          objectFit={"cover"}
          src={recept.image}
          width={250}
          height={150}
          borderTopRadius={"20px"}
        />
        <Text
          color={"grey"}
          paddingTop={"10px"}
          fontSize={"11"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          {recept.mealType} - {recept.dishType}
        </Text>
        <Text
          fontSize={"18px"}
          fontWeight={"bold"}
          padding={"5px"}
          maxWidth={250}
        >
          {recept.label}
        </Text>
        {recept.healthLabels
          .filter((health) => health === "Vegetarian" || health === "Vegan")
          .map((veg) => (
            <Tag
              textTransform={"uppercase"}
              key={self.crypto.randomUUID()}
              backgroundColor={"green.200"}
              color={"green.700"}
              fontSize={"10"}
              gap={2}
              margin={"4px"}
            >
              {veg}
            </Tag>
          ))}
        <br />
        <Text fontWeight={"bold"} paddingTop={"5px"}>
          Diet
        </Text>
        <Flex
          padding={"10px"}
          gap={2}
          flexWrap={"wrap"}
          width={250}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {recept.dietLabels.map((diet) => (
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
        <Text fontWeight={"bold"}>Cautions</Text>
        <Flex
          padding={"10px"}
          gap={2}
          flexWrap={"wrap"}
          width={250}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {recept.cautions.map((caution) => (
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
        </Flex>
      </Box>
    ));

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <TextInput onChange={handleChange} />
      <Box
        bg={"#1F8BF9"}
        gap={"2rem"}
        display={"flex"}
        marginTop={"2rem"}
        textAlign={"center"}
        flexWrap={"wrap"}
        mb={"20px"}
        justifyContent={"center"}
      >
        {recepten}
      </Box>
    </>
  );
};
