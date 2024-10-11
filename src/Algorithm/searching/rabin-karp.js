export default class RabinKarp {
    search(string, pattern) {
        // lengths
        const pLen = pattern.length;
        const sLen = string.length;

        // traverse pointer
        let i, j;

        // prime number for hasing
        const d = 256, mod = 101;

        // store hashing
        let pHash = 0;
        let sHash = 0;
        let hCode = 1;

        // store index of matched pattern
        const patterns = [];

        // find hCode
        for (let i = 0; i < pLen - 1; i++) {
            hCode = (hCode * d) % mod;
        }

        // find initiale hash for string and pattern
        for (let i = 0; i < pLen; i++) {
            pHash = (d * pHash + pattern.charCodeAt(i)) % mod;
            sHash = (d * sHash + string.charCodeAt(i)) % mod;
        }

        // find pattern 
        for (i = 0; i <= sLen - pLen; i++) {
            // if hashes match
            if (pHash === sHash) {
                for (j = 0; j < pLen; j++) {
                    if (string[i + j] !== pattern[j]) {
                        break;
                    }
                }

                if (j === pLen) {
                    patterns.push(i);
                }
            }

            // remove leading char and add trailing char in sHash
            if (i < sLen - pLen) {
                sHash = (d * (sHash - string.charCodeAt(i) * hCode) + (string.charCodeAt(i + pLen))) % mod;

                if (sHash < 0) {
                    sHash = (sHash + mod);
                }
            }
        }

        // if not found
        return patterns;
    }
}