export const formatDate = (timestamp: number) => {
  const toDate = new Date(timestamp);

  return `${toDate.toLocaleDateString('tr-TR')} ${toDate.toLocaleTimeString('tr-TR')}`;
};
