import { DeleteModal } from "@/src/components";
import {
  useBlockUserMutation,
  useGetUserDetailsQuery,
} from "@/src/store/services";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/modal";

import { useParams } from "next/navigation";
import { FaBan } from "react-icons/fa";

export const BlockUserModal = () => {
  const params = useParams<{ username: string }>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, refetch } = useGetUserDetailsQuery(params.username);

  const [blockUser] = useBlockUserMutation();

  const onBlockUser = async () => {
    await blockUser(params.username);
    await refetch();
  };

  const blockLabel = data?.isBlocked ? "UNBLOCK" : "BLOCK";

  return (
    <>
      <Button
        size="sm"
        color={data?.isBlocked ? "success" : "danger"}
        className="w-full md:w-fit"
        startContent={<FaBan />}
        onPress={onOpen}
      >
        {blockLabel}
      </Button>
      <DeleteModal
        onOpenChange={onOpenChange}
        description={`You sure you want to ${blockLabel} this user?`}
        isOpen={isOpen}
        title={`${blockLabel} User`}
        action={onBlockUser}
        buttonLabel={blockLabel}
      />
    </>
  );
};
