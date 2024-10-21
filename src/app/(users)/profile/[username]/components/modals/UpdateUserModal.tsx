import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/modal";
import { useAddScoreForm } from "../../hooks";
import {
  useCreateScoreMutation,
  useGetUserDetailsQuery,
} from "@/src/store/services";
import { useParams } from "next/navigation";
import { FaEdit } from "react-icons/fa";

export const UpdateUserModal = () => {
  //TODO
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { formFields, formValues } = useAddScoreForm();
  const params = useParams<{ username: string }>();

  const { data, refetch } = useGetUserDetailsQuery(params.username);
  const [createScore] = useCreateScoreMutation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createScore({
      game: formValues.game,
      score: formValues.score,
      userId: data?.id ?? "",
    });
    onOpenChange();
    await refetch();
  };

  return (
    <>
      <Button
        size="sm"
        color="primary"
        className="w-fit"
        startContent={<FaEdit />}
        onPress={onOpen}
      >
        Update User
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="text-gameRanks_primary">
          <ModalHeader className="flex flex-col gap-1">Add Score</ModalHeader>
          <ModalBody>
            <form className="grid gap-3" onSubmit={onSubmit}>
              <Input size="sm" {...formFields.score} />
              <Input size="sm" {...formFields.game} />
              <Button
                className="bg-gameRanks_secondary text-gameRanks_neutral_1"
                type="submit"
              >
                Add
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
