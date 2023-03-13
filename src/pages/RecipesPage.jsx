import { Box, Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { RecipeSearch } from "../components/RecipeSearch";

export const RecipesPage = () => {
  const [userChoice, setUserChoice] = useState("");
  const greeting = "Winc Recipe Checker";

  return (
    <Box className="App">
      <Center flexDir="column" minHeight={"100vh"} bg={"#1F8BF9"}>
        {userChoice ? (
          <RecipeChoice choice={userChoice} onClick={setUserChoice} />
        ) : (
          <>
            <Heading color={"white"} marginTop={"50px"} textAlign={"center"}>
              {greeting}
            </Heading>
            <RecipeSearch onClick={setUserChoice} />
          </>
        )}
      </Center>
    </Box>
  );
};
