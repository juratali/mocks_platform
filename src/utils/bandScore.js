const overallBand = (listening, reading, writing, speaking) => {
  let calc = (listening + reading + writing + speaking) / 4;
  let residual = calc - Math.trunc(calc);
  if (residual === 0) {
    return String(calc);
  } else if (residual >= 0.25 && residual < 0.75) {
    return String(`${Math.floor(calc)}.5`);
  } else if (residual <= 0.25) {
    return String(Math.floor(calc));
  } else if (residual >= 0.75) {
    return String(Math.ceil(calc));
  }
};

export { overallBand };
