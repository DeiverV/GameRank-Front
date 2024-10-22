// import {createTransform} from 'redux-persist';
// import {decrypt, encrypt} from '../utils/cryptoService';

// const CryptoTransform = createTransform(
//   (inboundState, key) => {
//     const encryptedState: string = encrypt(JSON.stringify(inboundState));
//     return encryptedState;
//   },
//   (outboundState, key) => {
//     const decryptedState: string = decrypt(outboundState);
//     return JSON.parse(decryptedState);
//   },
//   {whitelist: ['evaluation']},
// );

// export default CryptoTransform;