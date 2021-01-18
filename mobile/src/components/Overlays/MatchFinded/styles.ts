import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: 'rgba(0, 13, 19, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#000D13',
    width: '15.625rem',
    borderBottomWidth: '0.0625rem',
    borderBottomColor: '#c8a354',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '1.625rem',
    fontFamily: 'Merriweather'
  },
  acceptButton: {
    backgroundColor: '#13171a',
    borderColor: '#0baaa0',
    borderWidth: '0.125rem',
    paddingVertical: '0.9375rem',
    width: '12.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2.5rem',
  },
  acceptText: {
    color: '#a3c7c7',
    fontSize: '0.875rem',
    fontFamily: 'Merriweather'
  },
  test: {
    marginTop: '1.25rem',
    height: '2.8125rem',
  },
  declineButton: {
    backgroundColor: '#15181c',
    borderBottomWidth: '0rem',
    borderColor: '#c8a354',
    borderWidth: '0.125rem',
    paddingVertical: '0.5rem',
    width: '9.375rem',
    marginTop: '1.25rem',
    height: '2.8125rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  declineText: {
    color: '#cabb8f',
    fontSize: '0.875rem',
    fontFamily: 'Merriweather'
  },
  progressBar: {
    width: '15.625rem',
    marginBottom: '1.25rem',
    borderWidth: '0rem',
    borderTopWidth: '0.0625rem',
    borderTopColor: '#c8a354',
    borderBottomWidth: '0.0625rem',
    borderBottomColor: '#c8a354',
    borderRadius: '0rem',
    height: '0.9375rem'
  },
});