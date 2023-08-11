import React, { ReactNode } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    title?: string,
    iconRight ?: ReactNode
}

const Header = (props:Props) => {
    const {title, iconRight} = props
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
        <TouchableOpacity>
          <View style={{marginTop:5}}>
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
        <View style={{marginTop:5}}>
            {iconRight}
        </View>
      </View>

      {/* <View>
        <FlatList
          data={cryptocurrencies}
          renderItem={(item) => (
            <ListItem
              name={item.item.name}
              image={item.item.image}
              current_price={item.item.current_price}
              symbol={item.item.symbol}
              price_change={item.item.price_change_percentage_24h}
            />
          )}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal:10
  },
});

export default Header;
