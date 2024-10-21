import { DeleteModal } from "@/src/components";
import { useBlockUserMutation } from "@/src/store/services";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import { useParams } from "next/navigation";
import { FaBan } from "react-icons/fa";

export const BlockUserModal = () => {
  const params = useParams<{ username: string }>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [blockUser] = useBlockUserMutation();

  const onBlockUser = async () => {
    await blockUser(params.username);
    onOpenChange();
  };

  return (
    <>
      <Button
        size="sm"
        color="danger"
        className="w-full md:w-fit"
        startContent={<FaBan />}
        onPress={onOpen}
      >
        Block User
      </Button>
      <DeleteModal
        onOpenChange={onOpenChange}
        description="You sure you want to block this user?"
        isOpen={isOpen}
        title="Block User"
        action={onBlockUser}
        buttonLabel="Block"
      />
    </>
  );
};
