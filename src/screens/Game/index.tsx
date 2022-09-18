import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react';
import { Background } from '../../components/Background';
import logoImg from '../../assets/img/logo-nlw-esports.png';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';


export function Game() {

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack()
  }

  async function getDiscord(ads: string) {
    fetch(`http://192.168.100.139:3333/ads/${ads}/discord`)
      .then(res => res.json())
      .then(data => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://192.168.100.139:3333/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.rigth} />
        </View>

        <Image
          source={{ uri: game.banner }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle='Conete-se e comece a jogar!'
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={duos[0]}
              onConnect={() => getDiscord(item.id)}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContant]}
          showsHorizontalScrollIndicator={false}

          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>
              Não há anúncios para este Game!
            </Text>
            //Verificar se está funcionando
            //Deseja cadastrar um novo anúncios? 
            //Redirecionar para tela de cadastro de anúncio
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}