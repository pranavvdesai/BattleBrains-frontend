import { handleResponse } from '../utils';

export default ($axios) => {
    return {
        connectEmail(email, callback, errorHandler) {
            handleResponse($axios.post(
                `/auth/email/connect`,
                { email }
            ), callback, errorHandler);
        },
        connectWallet(walletAddress, callback, errorHandler) {
            handleResponse($axios.post(
                `/auth/wallet/connect`,
                { walletAddress }
            ), callback, errorHandler);
        },
        verifyMagicToken(magicToken, callback, errorHandler) {
            handleResponse($axios.post(
                `/auth/email/verify`,
                { magicToken }
            ), callback, errorHandler);
        },
        verifySignature(signature, callback, errorHandler) {
            handleResponse($axios.post(
                `/auth/wallet/verify`,
                { signature }
            ), callback, errorHandler);
        }
    }
}