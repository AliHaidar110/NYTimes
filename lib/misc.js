export async function asyncTimeout(ms, cb) {
  return new Promise(resolve =>
    setTimeout(() => {
      if (typeof cb === 'function') return resolve(cb());
      return resolve();
    }, ms),
  );
}

