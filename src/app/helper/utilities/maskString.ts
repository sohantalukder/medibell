const maskString = (phone: string) => {
  const length = phone.length;
  if (length <= 4) {
    return phone;
  }
  const visibleStart = Math.ceil(length / 2) - 2;
  return (
    phone.slice(0, visibleStart) +
    '*'.repeat(length - visibleStart - 2) +
    phone.slice(-2)
  );
};

export default maskString;
