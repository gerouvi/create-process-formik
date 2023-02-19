import { InfoIcon } from '@chakra-ui/icons';
import {
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa';
import { useSigner } from 'wagmi';
import { getClient } from '../../lib/api/sdkApi';
import ElectionListInfoModal from './ElectionListInfo';

interface props {
  el: any;
}

const ElectionListRow = ({ el }: props) => {
  const { data: signer } = useSigner();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ElectionListInfoModal el={el} isOpen={isOpen} onClose={onClose} />
      <Flex
        py={3}
        px={5}
        alignItems="center"
        borderRadius={12}
        width={{ base: '90%', lg: '650px' }}
        boxShadow="0px 0px 8px 2px rgba(69,69,69,0.3)"
      >
        <Text width="100%" mr={4} isTruncated title={el.title.default}>
          {el.title.default}
        </Text>

        <HStack ml="auto" spacing={4}>
          <IconButton
            variant="outline"
            size="sm"
            colorScheme="green"
            aria-label="Search database"
            icon={<FaPlay />}
            onClick={async () => {
              const client = getClient(signer);
              await client.continueElection(el.id);
              const election = await client.fetchElection(el.id);
              console.log(election);
            }}
          />
          <IconButton
            variant="outline"
            size="sm"
            colorScheme="yellow"
            aria-label="Search database"
            icon={<FaPause />}
            // isDisabled={pauseDisabled}
            onClick={async () => {
              const client = getClient(signer);
              await client.pauseElection('0x' + el.id);
              const election = await client.fetchElection(el.id);
              console.log(election);
            }}
          />

          <IconButton
            variant="outline"
            size="sm"
            colorScheme="red"
            aria-label="Search database"
            icon={<FaStop />}
            onClick={async () => {
              const client = getClient(signer);
              await client.endElection(el.id);
              const election = await client.fetchElection(el.id);
              console.log(election);
            }}
          />
          <InfoIcon boxSize={6} cursor="pointer" onClick={onOpen} />
        </HStack>
      </Flex>
    </>
  );
};

export const formatDate = (date: any) =>
  date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();

export default ElectionListRow;
