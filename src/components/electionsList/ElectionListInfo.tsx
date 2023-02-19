import { SmallCloseIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { formatDate } from './ElectionListRow';

interface props {
  el: any;
  isOpen: any;
  onClose: () => void;
}

const ElectionListInfoModal = ({ el, isOpen, onClose }: props) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalBody>
        <Text>Title: {el.title.default}</Text>
        <Text>Description: {el.description.default}</Text>
        <Text>Census</Text>
        {/* <List>
          {el.census.map((el: any) => (
            <ListItem>el</ListItem>
          ))}
        </List> */}
        <Text>Weighted vote?</Text>
        <Text>Election type:</Text>
        <List ml={4}>
          <ListItem>
            <ListIcon
              as={SmallCloseIcon}
              color={el.electionType.autoStart ? 'green.500' : 'red.500'}
            />
            Autostart
          </ListItem>
          <ListItem>
            <ListIcon
              as={SmallCloseIcon}
              color={el.electionType.interruptible ? 'green.500' : 'red.500'}
            />
            Interruptible
          </ListItem>
          <ListItem>
            <ListIcon
              as={SmallCloseIcon}
              color={
                el.electionType.secretUntilTheEnd ? 'green.500' : 'red.500'
              }
            />
            Secret until the end
          </ListItem>
        </List>
        <Text>Max votes over writes: {el.maxVoteOverwrites | 0}</Text>
        <Text>Creation date: {formatDate(el.creationTime)}</Text>
        <Text>Start date: {formatDate(el.startDate)}</Text>
        <Text>End date: {formatDate(el.endDate)}</Text>
        <Text>
          Questions{' '}
          {!el.electionType.secretUntilTheEnd && <span>and votes</span>}
        </Text>
        <Accordion allowToggle>
          {el.questions.map((ques: any, index: number) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Question {index + 1}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>Title: {ques.title.default}</Text>
                <Text>Description: {ques.description.default}</Text>
                {ques.choices.map((ch: any, i: number) => (
                  <Text key={i}>
                    Option {i + 1}: {ch.title.default}{' '}
                    {!el.electionType.secretUntilTheEnd && (
                      <span>- Votes: {el.results[0][i]}</span>
                    )}
                  </Text>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ElectionListInfoModal;
