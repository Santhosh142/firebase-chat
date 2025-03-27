import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const ios = Platform.OS === "ios";
export function CustomKeyboardView({ children, inchat }) {
  let kavConfig = {};
  let scrollViewConfig = {};

  if (inchat) {
    kavConfig = { keyboardVerticalOffset: 90 };
    scrollViewConfig = { contentContainerStyle: { flex: 1 } };
  }
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      {...kavConfig}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...scrollViewConfig}
        contentContainerStyle={{ flex: 1 }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
