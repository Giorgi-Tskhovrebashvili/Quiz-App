export const saveToLocalStorage = (quizId: string, value: any) => {
  localStorage.setItem(quizId, JSON.stringify(value));
};

export const getFromLocalStorage = (quizId: string) => {
  const data = localStorage.getItem(quizId);
  return data ? JSON.parse(data) : null;
};

export const removeFromLocalStorage = (quizId: string) => {
  localStorage.removeItem(quizId);
};
