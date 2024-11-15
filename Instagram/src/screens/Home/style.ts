import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },

  header: {
    marginTop: 40,
    paddingHorizontal: 10,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  insta: {
    width: 140,
    height: 60,
  },

  headerOption: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  stories: {
    height: 114,
    width: "100%",
    paddingLeft: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  storiesCard: {
    marginRight: 14,
  },

  storiesCardImage: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: "#F7B55A",
    borderRadius: 50,
  },

  storiesCardName: {
    color: "#FFF",
    alignSelf: "center",
    fontSize: 11
  },

  content: {
    width: "100%",
    marginBottom: 10,
  },

  contentHeader: {
    height: 52,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  contentHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  contentHeaderLeftImage: {
    width: 30,
    height: 30,
  },

  contentHeaderLeftImageText: {
    color: "#fff",
  },

  contentPost: {},

  postImage: {
    width: 400,
    height: 400,
  },

contentFooter: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },

  footerLeft: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  footerBottons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footerComents: {
    marginTop: 15,
    gap: 10,
    paddingLeft: 5,
  },

  footerComentsTextCurtidos:{
    color: "#fff"
  },

  footerComentsTextDesc:{
    color: "#fff"
  },

  footerComentsTextTempo:{
    color: "#fff",
    fontSize: 10,
  },

  finalMessage: {},

  finalMessageText: {
    color: "gray",
    fontSize: 10,
    paddingLeft: 10,
    paddingTop: 20
  },

  footerLeftBotton:{
    width: 25,
    height: 25
  },

  headerOptionHeart:{
    width: 30,
    height: 30
  },

  headerOptionComment:{
    width: 25,
    height: 25
  }
});
