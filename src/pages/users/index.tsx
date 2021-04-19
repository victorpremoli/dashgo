import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx='auto' px={['4', '4', '6']}>
        <SideBar />

        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']} >
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal' >Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button as='a' size='sm' fontSize='small' colorScheme='pink' leftIcon={<Icon fontSize='20' as={RiAddLine} />} >
                Criar novo
            </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} w='8' color='gray.300' >
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']} >
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'> Victor Premoli</Text>
                    <Text fontSize='small' color='gray.300'> victorpremoli@outlook.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>15 de Abril, 2021</Td>}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>

      </Flex>
    </Box>
  );
}