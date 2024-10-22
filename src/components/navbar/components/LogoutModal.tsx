"use client";
import { APP_ROUTES } from "@/src/config";
import { logoutInState } from "@/src/store/slices";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void | (() => Promise<void>);
}

export const LogoutModal = ({ isOpen, onOpenChange }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onLogout = () => {
    dispatch(logoutInState());
    router.push(APP_ROUTES.AUTH.LOGIN.path);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="text-gameRanks_primary">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Logout</ModalHeader>
            <ModalBody>Are you sure you want to log out?</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="danger" onPress={onLogout}>
                Logout
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
