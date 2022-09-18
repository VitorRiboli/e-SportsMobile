import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    backgroundColor: THEME.COLORS.SHAPE,
    width: 300,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  },
  label: {
    marginTop: 13,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD
  },
  discordButton: {
    width: 230,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 33,
    marginTop: 20,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: 'center'
  },
});