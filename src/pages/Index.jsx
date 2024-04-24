import { Box, Flex, Input, Button, Text, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Handmade Necklace",
    price: "$35",
    image: "https://images.unsplash.com/photo-1702937707077-814bb5e2d112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMG5lY2tsYWNlfGVufDB8fHx8MTcxMzk5MTU5NHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Ceramic Vase",
    price: "$48",
    image: "https://images.unsplash.com/photo-1588874133473-d6d9c9dd4f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwdmFzZXxlbnwwfHx8fDE3MTM5OTE1OTR8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Wooden Clock",
    price: "$62",
    image: "https://images.unsplash.com/photo-1527434284315-fadc3143d9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjbG9ja3xlbnwwfHx8fDE3MTM5OTE1OTV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Knitted Scarf",
    price: "$29",
    image: "https://images.unsplash.com/photo-1581282241923-50649ab8bb91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwc2NhcmZ8ZW58MHx8fHwxNzEzOTkxNTk1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" mb={5}>
        <Input placeholder="Search for items" size="lg" />
        <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg" ml={2}>
          Search
        </Button>
        <Button colorScheme="teal" size="lg" ml={2}>
          <Icon as={FaShoppingCart} />
        </Button>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => (
          <GridItem key={product.id} w="100%" boxShadow="md" p={4} rounded="lg">
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" m="auto" />
            <Text mt={2} fontSize="xl" fontWeight="bold">
              {product.name}
            </Text>
            <Text my={1}>{product.price}</Text>
            <Button colorScheme="pink" size="sm">
              Add to Cart
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
