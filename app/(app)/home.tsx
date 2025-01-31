import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@/context/authContext";

const Home = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="signout" onPress={handleLogout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
