import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WriteHeader from "../components/WriteHeader";
import WriteEditor from "../components/WriteEditor";
import LogContext from "../contexts/LogContext";

function WriteScreen({ route }) {
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? "");
  const [body, setBody] = useState(log?.title ?? "");

  const navigation = useNavigation();
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());
  const { onCreate, onModify, onRemove } = useContext(LogContext);

  const onAskRemove = () => {
    Alert.alert(
      "삭제",
      "정말로 삭제하시겠습니까?",
      [
        { text: "취소", style: "cancel" },
        {
          text: "삭제",
          onPress: () => {
            onRemove(log?.id);
            navigation.pop();
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title,
        body,
      });
    } else {
      onCreate({ title, body, date: date.toISOString() });
    }

    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />
        <WriteEditor
          title={title}
          body={body}
          onChangeBody={setBody}
          onChangeTitle={setTitle}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: "white" },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
