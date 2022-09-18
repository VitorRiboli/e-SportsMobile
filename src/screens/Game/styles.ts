import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 25,
    justifyContent: 'space-between'
  },
  logo: {
    width: 75,
    height: 42,
  },
  rigth: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 300,
    height: 150,
    borderRadius: 8,
    marginTop: 32
  },
  containerList: {
    width: "100%"
  },
  contentList: {
    paddingLeft: 30,
    paddingRight: 90,
    alignItems: 'flex-start'
  },
  emptyList: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  emptyListContant: {
    flex: 1, 
    alignItems: 'center',  
    justifyContent: 'center'
  }


});