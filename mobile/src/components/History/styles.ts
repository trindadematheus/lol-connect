import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    borderLeftWidth: '0.25rem',
    borderTopWidth: '0.0625rem',
    borderTopColor: '#251f15',
    borderBottomWidth: '0.0625rem',
    borderBottomColor: '#251f15',
    padding: '0.9375rem',
    marginHorizontal: '1.25rem',
    marginVertical: '0.625rem',
    flexDirection: 'row'
  },
  champIcon: {
    width: '3.75rem',
    height: '3.75rem',
    borderRadius: '3.75rem',
    marginRight: '0.9375rem'
  },
  win: {
    color: '#49b4ff',
    fontSize: '0.875rem',
    fontFamily: 'Merriweather'
  },
  lose: {
    color: '#ff5757',
    fontSize: '0.875rem',
    fontFamily: 'Merriweather'
  },
  spells: {
    flexDirection: 'row',
    marginTop: '0.625rem',
    alignItems: 'center'
  },
  spell: {
    width: '1.25rem',
    height: '1.25rem'
  },
  kda: {
    color: '#D5B26E',
    fontSize: '0.875rem',
    fontFamily: 'Merriweather'
  },
  date: {
    color: '#c6c6c6',
    fontSize: '0.5rem',
    fontFamily: 'Merriweather'
  }
})
