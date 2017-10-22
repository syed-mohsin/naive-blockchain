export const calculateHash = (index, previousHash, timestamp, data) => {
  return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};

const getGenesisBlock = () => {
  const index = 0;
  const previousHash = '0';
  const timestamp = new Date().getTime() / 1000;
  const blockData = 'Genesis Block';
  const nextHash = calculateHash(index, previousBlock.hash, timestamp, blockData);

  return new Block(0, "0", 1465154705, "my genesis block!!", "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7");
};

export const generateNextBlock = (blockData) => {
  const previousBlock = getLatestBlock();
  const nextIndex = previousBlock.index + 1;
  const nextTimestamp = new Date().getTime() / 1000;
  const nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData);
  return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash);
};

const replaceChain = (newBlocks) => {
  if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
    console.log('Received blockchain is valid. Replacing current blockchain with received blockchain');
    return newBlocks;
    // broadcast(responseLatestMsg());
  } else {
    console.log('Received blockchain invalid');
  }
};
