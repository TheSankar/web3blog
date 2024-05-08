import React from "react";
import { Flex, Spacer, Box, Button } from "@chakra-ui/react";
import { signInWithNearWallet, signOutNearWallet } from "../near-api";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ accountId }) => {
  let navigate = useNavigate();
  return (
    <Flex bg="black.00" alignItems="center">
      <Box p="4" color="gray.50">
        <Link to="/">AAA BLOG</Link>
      </Box>
      <Spacer />
      <Box p="4">
        <Button onClick={() => navigate("/add")}>Add Article</Button>
      </Box>
      <Box p="4">
        {accountId ? (
          <Button style={{ float: "right" }} variant="link" onClick={signOutNearWallet}>
            Sign out {accountId}
          </Button>
        ) : (
          <Button style={{ float: "right" }}  colorScheme='teal' onClick={signInWithNearWallet}>
            Connect/signin
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Nav;
