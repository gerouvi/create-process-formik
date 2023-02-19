import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Field, useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';

interface valueProps {
  maxVoteOverwrites: {
    active: boolean;
    times: number;
  };
}

const CreateProcessOptions = () => {
  const {
    values: { maxVoteOverwrites },
  } = useFormikContext<valueProps>();

  const { t } = useTranslation();

  return (
    <Box p={4} bg="gray.100" borderRadius={8}>
      <Box as="fieldset" p={4} pt={2} borderRadius={8} bg="white">
        <Flex mb={4}>
          <Text as="legend">Election options</Text>
        </Flex>
        <Flex direction="column" gap={2}>
          <FormControl
            display="flex"
            justifyContent="start"
            alignItems="center"
          >
            <FormLabel htmlFor="weighted" pt={2}>
              {t('form:weightedVote')}
            </FormLabel>
            <Field
              as={Checkbox}
              id="weighted"
              name="weightedVote.active"
              mr={10}
            />
            <progress max="100" value="30">
              70%
            </progress>
            {/* <Progress colorScheme="green" size="sm" value={20} /> */}
          </FormControl>
          <Flex justifyContent="space-between" alignItems="center">
            <FormControl
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <FormLabel htmlFor="maxVoteOverwrites" pt={2}>
                Max vote overwrites
              </FormLabel>
              <Field
                as={Checkbox}
                id="maxVoteOverwrites"
                name="maxVoteOverwrites.active"
              />
            </FormControl>
            {maxVoteOverwrites.active && (
              <FormControl
                display="flex"
                justifyContent="start"
                alignItems="center"
              >
                <FormLabel htmlFor="maxVoteOverwrites" pt={2}>
                  Number of overwrites
                </FormLabel>
                <Field
                  as={Input}
                  width="5em"
                  id="maxVoteOverwrites"
                  name="maxVoteOverwrites.times"
                />
              </FormControl>
            )}
          </Flex>
          <Flex>
            <FormControl
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <FormLabel htmlFor="encrypted" pt={2}>
                Encrypted
              </FormLabel>
              <Field as={Checkbox} id="encrypted" name="encrypted" />
            </FormControl>

            <FormControl
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <FormLabel htmlFor="autostart" pt={2}>
                Autostart
              </FormLabel>
              <Field as={Checkbox} id="autostart" name="autostart" />
            </FormControl>

            <FormControl
              display="flex"
              justifyContent="start"
              alignItems="center"
            >
              <FormLabel htmlFor="interruptible" pt={2}>
                Interruptible
              </FormLabel>
              <Field as={Checkbox} id="interruptible" name="interruptible" />
            </FormControl>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default CreateProcessOptions;
