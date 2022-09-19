function newError(): never {
  throw new Error('error');
}

newError();
