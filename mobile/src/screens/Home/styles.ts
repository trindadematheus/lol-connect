import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000D13',
    paddingHorizontal: '1.25rem'
  },
  separator: {
    width: '80%',
    alignSelf: 'center',
    height: '0.0625rem',
    backgroundColor: '#1D1810',
  },
  profileArea: {
    marginTop: '3.125rem',
    marginBottom: '2.5rem',
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileIcon: {
    width: '5rem',
    height: '5rem',
    borderRadius: '2.5rem',
    borderWidth: '0.125rem',
    borderColor: '#D5B26E'
  },
  profileInfoWrapper: {
    marginLeft: '0.9375rem',
  },
  nickName: {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    fontFamily: 'Merriweather'
  },
  levelWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  level: {
    color: '#FFFFFF',
    fontSize: '0.75rem',
    fontFamily: 'Merriweather'
  },
  progressBar: {
    marginTop: '0.3125rem',
    marginLeft: '0.3125rem',
    alignSelf: 'flex-start'
  },
  statsSection: {
    marginTop: '2.5rem',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statsItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  statsImage: {
    height: '5rem',
    width: '5rem',
    marginBottom: '0.625rem'
  },
  statsTitle: {
    color: '#D5B26E',
    fontSize: '0.75rem',
    fontFamily: 'Merriweather'
  },
  statsDesc: {
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Merriweather'
  },
});