import React, { ReactNode } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title?: string;
  iconRight?: ReactNode;
};

const Header = (props: Props) => {
  const { title, iconRight } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ marginTop: 5 }}>
            <Ionicons name="chevron-back" size={28} color="black" />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "600",
          }}
        >
          {title}
        </Text>
        <View style={{ marginTop: 5 }}>{iconRight}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
  },
});

export default Header;
