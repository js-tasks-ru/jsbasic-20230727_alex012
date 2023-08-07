function checkSpam(str) {
  let spamWorldOne = '1xBet'.toLowerCase();
  let spamWorldTwo = 'XXX'.toLowerCase();

  if (str.toLowerCase().includes(spamWorldOne) || str.toLowerCase().includes(spamWorldTwo)) {
    return true;
  } else {
    return false;
  }
}
