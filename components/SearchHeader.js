import React, { useContext } from "react";
import {
  StyleSheet,
  useWindowDimensions,
  View,
  Pressable,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchContext from "../contexts/SearchContext";

function SearchHeader() {
  const { width } = useWindowDimensions();
  //변화하는 window의 크기를 알아서 재서 알려줌 그거가지고 스타일 변경하면 됨
  const { keyword, onChangeText } = useContext(SearchContext);

  return (
    <View style={[styles.block, { width: width - 32, height: 24 }]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        autoFocus
        value={keyword}
        onChangeText={onChangeText}
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
        onPress={() => onChangeText("")}
      >
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: { flex: 1 },
  button: { marginLeft: 8 },
});

export default SearchHeader;
