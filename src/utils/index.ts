export const getInitials = (name: string) => {
  if (name.length < 1) return;

  const names = name.split(" ");

  if (names.length > 1) {
    return `${names[0][0]}${names[1][0]}`;
  }

  return `${names[0][0]}`;
};
