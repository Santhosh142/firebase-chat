import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { ChatList } from "@/components/ChatList";
import { Loading } from "@/components/Loading";
import { getDocs, query, where } from "firebase/firestore";
import { userRef } from "@/firebaseConfig";

const Home = () => {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user?.uid) {
      getUsers();
    }
  }, []);

  const getUsers = async () => {
    const q = query(userRef, where("userId", "!=", user?.uid));
    let data: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });
    setUsers(data);
  };

  const handleLogout = async () => {
    await logout();
  };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {users?.length > 0 ? (
        <ChatList users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size="large" />
          {/* <Loading size={hp(15)} /> */}
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
