import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useEditableControls, ButtonGroup, IconButton, Editable, Tooltip, EditablePreview, useColorModeValue, Input, EditableInput } from "@chakra-ui/react";

export function CustomEditable() {
    /* Here's a custom control */
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps
        } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton
                    icon={<CloseIcon boxSize={3} />}
                    {...getCancelButtonProps()}
                />
            </ButtonGroup>
        ) : null;
    }

    return (
        <Editable
            defaultValue="Rasengan ⚡️"
            isPreviewFocusable={true}
            selectAllOnFocus={false}
        >
            <Tooltip label="Click to edit">
                <EditablePreview
                    py={2}
                    px={4}
                    _hover={{
                        background: useColorModeValue("gray.100", "gray.700")
                    }}
                />
            </Tooltip>
            <Input py={2} px={4} as={EditableInput} />
            <EditableControls />
        </Editable>
    );
}