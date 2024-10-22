import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/modal";
import { useUpdateUserForm } from "../../hooks";
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from "@/src/store/services";
import { useParams } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import { InputFile } from "@/src/components/input-file/InputFile";
import { useEffect } from "react";

export const UpdateUserModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { formFields, formValues } = useUpdateUserForm();
  const params = useParams<{ username: string }>();

  const { data, refetch } = useGetUserDetailsQuery(params.username);
  const [updateUser, result] = useUpdateUserMutation();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateUser({
      image: formValues.image ?? undefined,
      userId: data?.id ?? "",
      username: formValues.username,
    });
  };

  useEffect(() => {
    if (result.isSuccess) {
      onOpenChange();
      refetch();
    }
  }, [result]);

  return (
    <>
      <Button
        size="sm"
        color="primary"
        className="w-full md:w-fit"
        startContent={<FaEdit />}
        onPress={onOpen}
      >
        Update User
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent className="text-gameRanks_primary">
          <ModalHeader className="flex flex-col gap-1">Update User</ModalHeader>
          <ModalBody>
            <form className="grid gap-3" onSubmit={onSubmit}>
              <Input size="sm" {...formFields.username} />
              <InputFile {...formFields.image} />
              <Button
                className="bg-gameRanks_secondary text-gameRanks_neutral_1"
                type="submit"
              >
                Update
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
