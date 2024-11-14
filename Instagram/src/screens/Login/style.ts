import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  boxForms: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 10,
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  logoImage: {
    marginTop: 50,
    width: 63,
    height: 63,
  },

  metaImage: {
    width: 60,
    height: 60,
  },

  linguagem: {
    color: "#FFFF",
    fontSize: 13,
  },

  botao: {
    borderWidth: 1,
    borderColor: "#5CA6E5",
    borderRadius: 30,
    width: "90%",
    height: 47,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#5CA6E5",
    fontSize: 15,
  },


  closeButton: {
    position: 'absolute',
    top: 45,       
    left: 15,      
    zIndex: 1      
  },
  sairImage: {
    width: 24,
    height: 24,
  },
  
});
