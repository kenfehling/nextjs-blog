import React from "react";
import Link from 'next/link';
import { Box, Flex, Text, Button, useColorModeValue } from "@chakra-ui/react";

const Logo = () => (
    <div></div>
);

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = ({color}) => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill={`var(--chakra-colors-${color.replace('.', '-')})`}
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = ({color}) => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={`var(--chakra-colors-${color.replace('.', '-')})`}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const bg = useColorModeValue('primary.500', 'black')
  const color = useColorModeValue('black', 'primary.500')

  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg={bg}
      color={color}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} 
           style={{cursor: 'pointer'}}
           className='hamburger'
           onClick={toggleMenu}>
        {show ? <CloseIcon color={color} /> : <MenuIcon color={color} />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="left"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}

        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">How It works </MenuItem>
          <MenuItem to="/faetures">Features </MenuItem>
          <MenuItem to="/pricing" isLast>Pricing</MenuItem>
        </Flex>
      </Box>
    </Flex>
    <style jsx>{`

      `}</style>
    </>
  );
};

export default Header;
