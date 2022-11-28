import * as React from "react";
import { Paragraph, Dialog, Portal } from "react-native-paper";

export const AlertComponent = ({ message }) => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Title>Alert</Dialog.Title>
      <Dialog.Content>
        <Paragraph>{message}</Paragraph>
      </Dialog.Content>
    </Dialog>
  );
};
