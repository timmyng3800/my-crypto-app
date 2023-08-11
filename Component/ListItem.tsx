import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
type Props = {
  name?: string;
  image?: string;
  symbol?: string;
  current_price?: number;
  price_change: Float;
};

const ListItem = (props: Props) => {
  const { name, image, symbol, current_price, price_change } = props;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 15,
          marginHorizontal: 5,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 40, width: 40 }}
            source={{ uri: `${image}` }}
          />
          <View style={{ marginLeft: 10, marginTop: 3 }}>
            <Text style={{ fontWeight: "500", marginBottom: 2 }}>{name}</Text>
            <Text>{symbol}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ fontWeight: "500", marginBottom: 3 }}>
            ${current_price}
          </Text>
          {price_change > 0 ? (
            <Text style={{ color: "green" }}>{price_change}%</Text>
          ) : (
            <Text style={{ color: "red" }}>{price_change}%</Text>
          )}
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    opacity: 0.2,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ListItem;
