export const sendContactForm = async (data) => {
  let res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application//json",
    },
  });

  const response = await res.json();

  return response;
};
