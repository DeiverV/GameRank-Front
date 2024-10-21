import { DeleteModal } from "@/src/components";
import { useDeleteUserMutation } from "@/src/store/services";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import { useParams } from "next/navigation";
import { BsTrash3 } from "react-icons/bs";

export const DeleteUserModal = () => {
  const params = useParams<{ username: string }>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [deleteUser] = useDeleteUserMutation();

  const onDeleteUser = async () => {
    await deleteUser(params.username);
    onOpenChange();
  };

  return (
    <>
      <Button
        size="sm"
        color="danger"
        className="w-fit"
        startContent={<BsTrash3 />}
        onPress={onOpen}
      >
        Delete User
      </Button>
      <DeleteModal
        onOpenChange={onOpenChange}
        description="You sure you want to delete this user?"
        isOpen={isOpen}
        title="Delete User"
        action={onDeleteUser}
      />
    </>
  );
};
