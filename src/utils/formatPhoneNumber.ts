export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return "+" + match[1] + " (" + match[2] + ") " + match[3] + "-" + match[4];
  }
  return phoneNumber;
}