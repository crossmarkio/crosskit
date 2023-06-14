const Truncate = (fullString: string, string_length: number) => {
  if (fullString.length <= string_length) {
    return fullString;
  }

  const separator = "...";

  const separator_length = separator.length;
  const charsToShow = string_length - separator_length;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);

  return (
    fullString.substr(0, frontChars) +
    separator +
    fullString.substr(fullString.length - backChars)
  );
};

const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const StringTypeCheck = {
  isValidUUID: (input: string) => {
    // TODO: fix eslint error
    // eslint-disable-next-line prefer-regex-literals,no-control-regex
    const uuidv4RegExp = new RegExp(
      "^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$",
      "i"
    );
    return uuidv4RegExp.test(input);
  },

  isValidURL: (input: string) => {
    // TODO: fix eslint error
    // eslint-disable-next-line prefer-regex-literals,no-control-regex
    const urlRegExp = new RegExp(
      "^https://[a-zA-Z0-9][a-zA-Z0-9-.]+[a-zA-Z0-9].[a-zA-Z]{1,}[?/]{0,3}[^\r\n\t]+"
    );
    return urlRegExp.test(input);
  },

  isValidAmount: (input: string) => {
    // TODO: fix eslint error
    // eslint-disable-next-line prefer-regex-literals,no-control-regex
    const amountRegExp = new RegExp(/^(?![0.]+$)\d+(\.\d{1,15})?$/gm);
    return amountRegExp.test(input);
  },

  isValidHash: (input: string) => {
    // TODO: fix eslint error
    // eslint-disable-next-line prefer-regex-literals,no-control-regex
    const hashRegExp = new RegExp("^[A-F0-9]{64}$", "i");
    return hashRegExp.test(input);
  },
};

const StringIdentifier = (str: string): number => {
  let crc = 0xffffffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i);
    for (let bit = 0; bit < 8; bit++) {
      if ((crc & 1) !== 0) crc = (crc >>> 1) ^ 0xedb88320;
      else crc >>>= 1;
    }
  }
  return ~crc;
};

const ellipseAddress = (address: string, amount?: number) =>
  address.slice(0, amount || 6) +
  "..." +
  address.slice(address.length - (amount || 6), address.length);

const ellipseNft = (id: string) =>
  id.slice(0, 16) + "..." + id.slice(id.length - 16, id.length);

/* Export ==================================================================== */
export {
  Truncate,
  Capitalize,
  StringTypeCheck,
  StringIdentifier,
  ellipseAddress,
  ellipseNft,
};
