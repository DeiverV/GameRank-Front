import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

interface Props {
  title: string;
  description: string;
  action: () => void;
  isOpen: boolean;
  onOpenChange: () => void | (() => Promise<void>);
  buttonLabel?: string;
}

export const DeleteModal = ({
  action,
  description,
  isOpen,
  onOpenChange,
  title,
  buttonLabel = "Delete",
}: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="text-gameRanks_primary">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <p>{description}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="danger" onPress={action}>
                {buttonLabel}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
