import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import House from "../assets/house.png";
import Lupa from "../assets/search (1).png"
import Union from "../assets/union.png"
import Perfil from "../Mock/images/FotoPerfil.png"
import Plus from "../assets/plus.png"
import { Image } from "react-native";
import { styles } from "./style";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) =>
            <Image style = {styles.navigatorIcons} source={House}></Image>,
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Image style = {styles.navigatorIcons} source={Lupa}></Image>,
        }}
        name="Procurar"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Image style = {styles.navigatorIcons} source={Plus}></Image>,
        }}
        name="Home3"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Image style = {styles.navigatorIcons} source={Union}></Image>,
        }}
        name="Vídeos"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => <Image style = {styles.navigatorIconsProfile} source={Perfil}></Image>,
        }}
        name="Home5"
        component={Home}
      />
    </Tab.Navigator>
  );
}
