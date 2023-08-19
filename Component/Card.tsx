import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type Props = {
  children?: React.ReactNode;
  title?: string;
  onPress?: () => void;
};

const Card = (props: Props) => {
  const { children, title,onPress } = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 12,
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <Text style={{ marginRight: 3, fontWeight: "700" }}>View all</Text>
            <Image
              style={{ width: 15, height: 15, marginTop: 2 }}
              source={require("../assets/right-arrow.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 10, marginBottom: 10 }}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDEBD0",
    marginHorizontal: 30,
    marginTop:20,
    borderRadius: 10,
  },
});

export default Card;
