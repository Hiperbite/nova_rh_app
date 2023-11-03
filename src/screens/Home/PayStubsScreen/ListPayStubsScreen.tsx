import React, { useMemo } from 'react'
import { Button, List, Modal, PaperProvider, Portal } from 'react-native-paper'
import { Platform, ScrollView, StyleSheet } from 'react-native'
import { Text, View } from '../../../../components/Themed'
import { StatusBar } from 'expo-status-bar'
import EditScreenInfo from '../../../../components/EditScreenInfo'

export const ListPayStubsScreen = ({ navigation }: any) => {

  const [visible, setVisible] = React.useState(true);
  return (
    <View>
      <ScrollView>
        {[...Array(15).keys()].map((k) =>
          <List.Item
          style={{margin:10, borderWidth:5}}
            key={k}
            title={(k + 1) + ". First Item"}
            description="Description text for the list item or callback which returns a React element to display the description."
            left={props => <List.Icon {...props} icon="folder" />}
            onPress={() =>
              navigation.push('Modal', {
                component: {
                  name: 'Settings',
                  options: {
                    topBar: {
                      title: {
                        text: 'Settings'
                      }
                    }
                  }
                }
              })}
          />
        )}
      </ScrollView>
      <ModalScreen />
      {/*      <PayStubModal visible={visible} setVisible={setVisible} />*/}
    </View>
  )
}


const PayStubModal = ({ visible, setVisible }: any) => {

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

  return (<>
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>Example Modal.  Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>

    <Button style={{ marginTop: 30 }} onPress={showModal}>
      Show
    </Button>
  </>
  );
};
function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
