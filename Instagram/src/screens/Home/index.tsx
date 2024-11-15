import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Insta from "../../assets/insta.png";
import { styles } from "./style";
import { Data } from "../../Mock/Data";
import foto from "../../Mock/images/foto.png";
import foto1 from "../../Mock/images/foto5.png";
import foto2 from "../../Mock/images/foto6.png";
import post from "../../Mock/images/post1.jpg";
import post2 from "../../Mock/images/post2.jpg";
import post3 from "../../Mock/images/post3.jpg";
import Curtir from "../../assets/Heart (1).png";
import Coment from "../../assets/Comment.png";
import Share from "../../assets/Share (1).png";
import Chat from "../../assets/message.png";
import Points from "../../assets/points.png";
import Bookmark from "../../assets/Bookmark (1).png";
import MeuPerfil from "../../Mock/images/MeuPerfil.jpg";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Insta} style={styles.insta} />
        <View style={styles.headerOption}>
          <TouchableOpacity>
            <Image
              style={styles.headerOptionHeart}
              source={Curtir}
              alt="Botão de notificações"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Text style={{ color: "#fff" }}>M</Text>*/}
            <Image
              style={styles.headerOptionComment}
              source={Chat}
              alt="Botão de notificações"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ width: "100%" }}>
        <View style={styles.stories}>
          <FlatList
            horizontal={true}
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.storiesCard,
                  item.photoUrl === MeuPerfil && { borderWidth: 0 }, // Lembrete: Isso é pra remover a borda da primeira foto
                ]}
              >
                <Image
                  style={[
                    styles.storiesCardImage,
                    item.photoUrl === MeuPerfil && { borderWidth: 0 }, // Lembrete: Isso é pra remover a borda da primeira foto
                  ]}
                  source={item.photoUrl}
                />
                <Text style={styles.storiesCardName}>{item.nome}</Text>
              </View>
            )}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto1} />
              <Text style={styles.contentHeaderLeftImageText}>Claudinhoss</Text>
            </View>

            <TouchableOpacity>
              <Image source={Points} alt="Ver mais" />
            </TouchableOpacity>
          </View>

          <View style={styles.contentPost}>
            <Image style={styles.postImage} source={post3} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.footerBottons}>
              <View style={styles.footerLeft}>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Curtir}
                    alt="Botão de curtida"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Coment}
                    alt="Botão de comentario"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Share}
                    alt="Botão para compartilhar"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Image source={Bookmark} alt="Salvar Post" />
              </TouchableOpacity>
            </View>
            <View style={styles.footerComents}>
              <Text style={styles.footerComentsTextCurtidos}>
                Curtido por <Text style={{ fontWeight: "bold" }}>Eduardo</Text>{" "}
                e <Text style={{ fontWeight: "bold" }}>outras pessoas</Text>
              </Text>
              <Text style={styles.footerComentsTextDesc}>
                <Text style={{ fontWeight: "bold" }}>Claudinhos</Text> Nem gosto
                de uma comida japonesa
              </Text>
              <Text style={styles.footerComentsTextTempo}>
                há 18 minutos .{" "}
                <Text style={{ fontWeight: "bold" }}>Ver tradução</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto} />
              <Text style={styles.contentHeaderLeftImageText}>Marcia</Text>
            </View>

            <TouchableOpacity>
              <Image source={Points} alt="Ver mais" />
            </TouchableOpacity>
          </View>

          <View style={styles.contentPost}>
            <Image style={styles.postImage} source={post} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.footerBottons}>
              <View style={styles.footerLeft}>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Curtir}
                    alt="Botão de curtida"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Coment}
                    alt="Botão de comentario"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Share}
                    alt="Botão para compartilhar"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Image source={Bookmark} alt="Salvar Post" />
              </TouchableOpacity>
            </View>
            <View style={styles.footerComents}>
              <Text style={styles.footerComentsTextCurtidos}>
                Curtido por <Text style={{ fontWeight: "bold" }}>Duda</Text> e{" "}
                <Text style={{ fontWeight: "bold" }}>outras pessoas</Text>
              </Text>
              <Text style={styles.footerComentsTextDesc}>
                <Text style={{ fontWeight: "bold" }}>Marcia</Text> Ja to com
                saudades de ontem :(
              </Text>
              <Text style={styles.footerComentsTextTempo}>
                há 2 horas .{" "}
                <Text style={{ fontWeight: "bold" }}>Ver tradução</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderLeftImage} source={foto2} />
              <Text style={styles.contentHeaderLeftImageText}>Ricardo</Text>
            </View>

            <TouchableOpacity>
              <Image source={Points} alt="Ver mais" />
            </TouchableOpacity>
          </View>

          <View style={styles.contentPost}>
            <Image style={styles.postImage} source={post2} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.footerBottons}>
              <View style={styles.footerLeft}>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Curtir}
                    alt="Botão de curtida"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Coment}
                    alt="Botão de comentario"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.footerLeftBotton}
                    source={Share}
                    alt="Botão para compartilhar"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Image source={Bookmark} alt="Salvar Post" />
              </TouchableOpacity>
            </View>
            <View style={styles.footerComents}>
              <Text style={styles.footerComentsTextCurtidos}>
                Curtido por <Text style={{ fontWeight: "bold" }}>Paola</Text> e{" "}
                <Text style={{ fontWeight: "bold" }}>outras pessoas</Text>
              </Text>
              <Text style={styles.footerComentsTextDesc}>
                <Text style={{ fontWeight: "bold" }}>Ricardo</Text> Eu e ela
              </Text>
              <Text style={styles.footerComentsTextTempo}>
                há 4 horas .{" "}
                <Text style={{ fontWeight: "bold" }}>Ver tradução</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.finalMessage}>
          <Text style={styles.finalMessageText}>
            Carregando mais postagens...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
